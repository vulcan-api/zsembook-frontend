import React, { useCallback, useEffect, useState } from "react";
import Button from "../../Components/Button";
import LoadingSpinner from "../../Components/LoadingSpinner";
import Modal from "../../Layout/ModalComponents/Modal";
import classes from "./Faq.module.css";
import * as Icon from "react-bootstrap-icons";
import User from "../../Lib/User";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import { NotificationManager } from "react-notifications";

export interface QuestionType {
  answer: string;
  askerId: number;
  hierarchy: number;
  id: number;
  isAnswered: boolean;
  question: string;
}

const Faq = () => {
  const [questions, setQuestions] = useState<Array<QuestionType>>();
  const [isLoading, setIsLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [question, setQuestion] = useState<QuestionType>();

  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const getQuestionsRes = useCallback(
    async (forceFetch?: boolean): Promise<Response> => {
      let link = "";
      if (forceFetch || isActive) {
        if (User.isUser()) link = "my-questions";
        if (User.isFaq()) link = "unanswered";
      }

      return fetch(`${process.env.REACT_APP_REQUEST_URL}/faq/${link}`, {
        method: "GET",
        credentials: "include",
      });
    },
    [isActive]
  );

  const areQestionsOk = useCallback(async () => {
    let isOk = false;
    await getQuestionsRes(true)
      .then((res) => res.json())
      .then((json) => json.length !== 0 && json.length !== undefined)
      .then((isArray) => (isOk = isArray));
    return isOk;
  }, [getQuestionsRes]);

  const solveMenu = useCallback(async () => {
    if ((User.isFaq() || User.isUser()) && (await areQestionsOk()))
      setShowMenu(true);
    else setShowMenu(false);
  }, [areQestionsOk]);

  const getQuestions = useCallback(async () => {
    setIsLoading(true);
    getQuestionsRes()
      .then((res) => res.json())
      .then((json) => setQuestions(json))
      .finally(() => setIsLoading(false));
  }, [getQuestionsRes]);

  const editQuestion = (id: number) => {
    setModalContent("editquestion");
    if (questions === undefined) return;
    const question = questions?.filter((obj) => obj.id === id)[0];
    setQuestion(question);
    setShowModal(true);
  };

  const deleteQuestion = (id: number) => {
    fetch(`${process.env.REACT_APP_REQUEST_URL}/faq/`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ questionId: id }),
    })
      .then((res) => {
        if (res.ok)
          NotificationManager.success(
            "Udało się usunąć pytanie.",
            "Sukces!",
            3000
          );
        else throw new Error("Response error");
      })
      .finally(() => getQuestions())
      .catch(() =>
        NotificationManager.error("Coś poszło nie tak.", "Błąd!", 3000)
      );
  };

  const closeModal = () => {
    setShowModal(false);
    getQuestions();
  };

  function changeListType(active?: boolean) {
    setIsActive(active !== undefined ? active : !isActive);
  }

  useEffect(() => {
    solveMenu();
    getQuestions();
  }, [getQuestions, solveMenu]);

  return (
    <>
      {showModal && (
        <Modal
          onBgClick={closeModal}
          onClose={closeModal}
          question={question}
          modalContent={modalContent}
        />
      )}
      <div className={classes.buttonCont}>
        <h1 className={classes.heading}>FAQ</h1>
        {User.isLogged ? (
          <Button
            buttonText="Zadaj pytanie"
            onClick={() => {
              setShowModal(true);
              setModalContent("addquestion");
            }}
          />
        ) : (
          <Button
            buttonText="Zaloguj się aby uzyskać dostęp"
            onClick={() => {
              navigate("/auth/login");
            }}
          />
        )}
      </div>
      {showMenu && (
        <div className={classes.menu}>
          <div className={classes.managementIcons}>
            <div
              className={isActive ? "" : classes.active}
              onClick={() => changeListType(false)}
            >
              <Icon.CheckCircleFill />
              <span>Pytania z odpowiedzią</span>
            </div>
            <div
              className={isActive ? classes.active : ""}
              onClick={() => changeListType(true)}
            >
              <Icon.QuestionCircleFill />
              <span>Pytania bez odpowiedzi</span>
            </div>
          </div>
        </div>
      )}
      <ul className={classes.questionsList}>
        {isLoading ||
          (questions?.length !== 0 ? (
            questions?.map((quest, key) => {
              return (
                <li key={key} className={classes.questionElem}>
                  <div className={classes.questionCont}>
                    <div>
                      <p className={classes.question}>Pytanie: {quest.question}</p>
                      <p className={classes.answer}>Odpowiedź: {quest.answer}</p>
                    </div>
                    {User.isFaq() && (
                      <div className={classes.faqIcons}>
                        <span
                          className={classes.iconCont}
                          onClick={() => editQuestion(quest.id)}
                        >
                          <Icon.PencilFill className={classes.icon} />
                        </span>
                        <span
                          className={classes.iconCont}
                          onClick={() => deleteQuestion(quest.id)}
                        >
                          <Icon.TrashFill className={classes.icon} />
                        </span>
                      </div>
                    )}
                  </div>
                </li>
              );
            })
          ) : (
            <p>Brak pytań !</p>
          ))}
      </ul>
      {isLoading && <LoadingSpinner />}
    </>
  );
};

export default Faq;
