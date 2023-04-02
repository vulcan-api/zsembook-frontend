import React, { useEffect } from "react";
import classes from "./AddPostModal.module.css";
import Button from "../../Components/Button";
import { useRef } from "react";
//@ts-ignore
import {NotificationManager} from "react-notifications";
import Textarea from "../../Components/Textarea";
import Input from "../../Components/Input";
import { QuestionType } from "../../Sites/Faq/Faq"

const EditQuestion = (props: {onClose: Function, showSpinner: Function, questionData: QuestionType}) => {
    const questionRef = useRef<HTMLTextAreaElement>();
    const answerRef = useRef<HTMLTextAreaElement>();

    async function changeQuestion(event: any) {
        event.preventDefault();
        await fetch(`${process.env.REACT_APP_REQUEST_URL}/faq/answer`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            question: questionRef.current?.value,
            answer: answerRef.current?.value,
            questionId: props.questionData.id,
          }),
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
          .finally(() => props.onClose())
          .catch(() =>
            NotificationManager.error("Coś poszło nie tak.", "Błąd!", 3000)
          );
    }

    const maxLengthHandler = () => {
        questionRef.current?.value?.length! >= 300 ? NotificationManager.warning("Wpisano maksymalną ilość znaków.", "Uwaga!", 3000) : (
            <></>);
    }

    useEffect(() => {
      props.showSpinner(false);
    }, [props]);
    return (
      <>
        <p>Odpowiedz na pytanie</p>
        <form className={classes.addForm} onSubmit={changeQuestion}>
          <Input
            onChange={maxLengthHandler}
            id="question_value"
            placeholder="Tytuł pytania"
            maxLength={300}
            defaultValue={props.questionData.question}
            ref={questionRef}
          />
          <Textarea
            onChange={maxLengthHandler}
            id="question_value"
            placeholder="Treść pytania"
            maxLength={300}
            defaultValue={props.questionData.answer}
            ref={answerRef}
          />
          <Button type="submit" buttonText="Zatwierdź odpowiedź" />
        </form>
      </>
    );
};

export default EditQuestion;
