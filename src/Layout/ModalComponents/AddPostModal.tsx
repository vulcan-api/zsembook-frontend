import React, { useEffect, useState } from "react";
import classes from "./AddPostModal.module.css";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
//@ts-ignore
import {NotificationManager} from "react-notifications";
import Textarea from "../../Components/Textarea";
import LoadingSpinner from "../../Components/LoadingSpinner";

const AddPostModal = (props: {onClose: Function, showSpinner: Function}) => {
    const navigate = useNavigate();
    const postText: any = useRef('');
    const isAnonymous: any = useRef(false);
    const [isLoading, setIsLoading] = useState(false);

    async function addPost(event: any) {
        event.preventDefault();
        setIsLoading(true);

        const post = {
            title: "do not ask",
            text: postText.current.value,
            isAnonymous: isAnonymous.current.checked,
            publishAt: new Date(),
        };

        const throwObject = {};
        await fetch(`${process.env.REACT_APP_REQUEST_URL}/spotted/post`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(post),
        })
            .then(() => {
                NotificationManager.success("Udało się dodać post.", "Sukces!", 3000);
                navigate("/spotted");
            })
            .finally(() => {props.onClose(); setIsLoading(false);})
            .catch((err) => {
                console.error(err);
                return throwObject;
            });

    }

    const maxLengthHandler = () => {
        postText.current.value.length >= 300 ? NotificationManager.warning("Wpisano maksymalną ilość znaków.", "Uwaga!", 3000) : (
            <></>);
    }

    useEffect(
        () => props.showSpinner(false)
    , [props]);
    return (
      <>
        {isLoading && (
          <>
            <h1>Dodawanie posta...</h1>
            <LoadingSpinner height="100%" />
          </>
        )}
        <p>Dodaj post</p>
        <form className={classes.addForm} onSubmit={addPost}>
          <Textarea
            onChange={maxLengthHandler}
            id="post_value"
            placeholder="Treść posta"
            maxLength={300}
            ref={postText}
          />
          <div className={classes.postOptions}>
            <Checkbox
              id="anonimowyPost"
              label="Anonimowy post"
              ref={isAnonymous}
            />
            <Button type="submit" buttonText="Dodaj post" />
          </div>
        </form>
      </>
    );
};

export default AddPostModal;
