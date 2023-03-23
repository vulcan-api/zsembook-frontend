import React, { useEffect } from "react";
import classes from "./AddPostModal.module.css";
import Button from "../../Components/Button";
import { useRef } from "react";
//@ts-ignore
import {NotificationManager} from "react-notifications";
import Textarea from "../../Components/Textarea";

const AddQuestion = (props: {onClose: Function, showSpinner: Function}) => {
    const questionRef = useRef<HTMLTextAreaElement>();

    async function addPost(event: any) {
        event.preventDefault();

        const throwObject = {};
        await fetch(`http://${process.env.REACT_APP_REQUEST_URL}/faq/ask`, {
            method: "POST", headers: { "Content-Type": "application/json", },
            credentials: "include",
            body: JSON.stringify({question: questionRef.current?.value}),
        })
            .then(res => res.json())
            .then(() => {
              NotificationManager.success("Postaramy się odpowiedzieć na to pytanie najszybciej jak to możliwe.", "Sukces!", 3000);
            })
            .finally(() => props.onClose())
            .catch((err) => {
              NotificationManager.error("Coś poszło nie tak. Spróbować ponownie później.", "Błąd!", 3000);
              console.error(err);
              return throwObject;
            });
    }

    const maxLengthHandler = () => {
        questionRef.current?.value?.length! >= 300 ? NotificationManager.warning("Wpisano maksymalną ilość znaków.", "Uwaga!", 3000) : (
            <></>);
    }

    useEffect(
        () => props.showSpinner(false)
    , [props]);
    return (
      <>
        <p>Dodaj pytanie</p>
        <form className={classes.addForm} onSubmit={addPost}>
          <Textarea
            onChange={maxLengthHandler}
            id="question_value"
            placeholder="Treść pytania"
            maxLength={300}
            ref={questionRef}
          />
          <Button type="submit" buttonText="Zadaj pytanie" />
        </form>
      </>
    );
};

export default AddQuestion;
