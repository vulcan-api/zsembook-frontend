import React, { useCallback, useEffect, useState } from "react";
import Button from "../../Components/Button";
import LoadingSpinner from "../../Components/LoadingSpinner";
import Modal from "../../Layout/ModalComponents/Modal";
import classes from "./Faq.module.css";
import * as Icon from "react-bootstrap-icons";
import User from "../../Lib/User";
import { useNavigate } from "react-router-dom";

interface QuestionType {
    answer: string,
    askerId: number,
    hierarchy: number,
    id: number,
    isAnswered: boolean,
    question: string
}

const Faq = () => {
    const [questions, setQuestions] = useState<Array<QuestionType>>();
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("report");
    const [isActive, setIsActive] = useState(false)
    const navigate = useNavigate();

    const getQuestions = useCallback(async () => {
        setIsLoading(true);
        fetch(`https://${process.env.REACT_APP_REQUEST_URL}/faq/${isActive ? "unanswered" : ""}`, {method: 'GET'})
        .then(res => res.json())
        .then(json => setQuestions(json))
        .finally(() => {setIsLoading(false)})
    }, [setQuestions, setIsLoading, isActive])

    const closeModal = () => {
        setShowModal(false);
    };

    function changeListType(active?: boolean) {
        setIsActive(active ? active : !isActive);
    }

    useEffect(() => {getQuestions()}, [getQuestions]);

    return (<>
        {showModal && (
            <Modal
            onBgClick={closeModal}
            onClose={closeModal}
            modalContent={modalContent}
            />
        )}
        <h1 className={classes.heading}>FAQ</h1>
        <div className={classes.menu}>
            <div className={classes.managementIcons}>
                <div className={isActive ? "" : classes.active}
                    onClick={() => changeListType()}>
                    <Icon.CheckCircleFill />
                    <span>Z odpowiedzią</span>
                </div>
                <div className={isActive ? classes.active : ""}
                    onClick={() => changeListType()}>
                    <Icon.QuestionCircleFill />
                    <span>Bez odpowiedzi</span>
                </div>
            </div>
        </div>
        <ol className={classes.questionsList}>
        {isLoading || questions?.map((quest, key) => {return(
            <li key={key} className={classes.questionElem}>
                <div className={classes.questionCont}>
                    <p className={classes.question}>{quest.question}</p>
                    <p className={classes.answer}>{quest.answer}</p>
                </div>
            </li>
        )}) 
        }
        </ol>
        {isLoading && <LoadingSpinner />}

        <div>
            <p className={classes.buttonDesc}>Nie ma tutaj nurtującego Cię pytania?</p>
            <div className={classes.buttonCont}>
            {User.isLogged ? (
                <Button buttonText="Zadaj pytanie" onClick={
                    () => {
                    setShowModal(true);
                    setModalContent("addquestion");
                    }
                } />
                ) : (
                <Button
                    buttonText="Zaloguj się aby uzyskać dostęp"
                    onClick={() => {
                    navigate("/auth/login")
                    }}
                />
                )}
            </div>
        </div>
    </>)
}

export default Faq;