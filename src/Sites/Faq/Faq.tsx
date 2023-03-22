import React, { useCallback, useEffect, useState } from "react";
import Button from "../../Components/Button";
import LoadingSpinner from "../../Components/LoadingSpinner";
import Modal from "../../Layout/ModalComponents/Modal";
import classes from "./Faq.module.css";

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

    const getQuestions = useCallback(async () => {
        setIsLoading(true);
        fetch('http://localhost:3000/faq', {method: 'GET'})
        .then(res => res.json())
        .then(json => setQuestions(json))
        .finally(() => {setIsLoading(false)})
    }, [setQuestions, setIsLoading])

    const closeModal = () => {
        setShowModal(false);
    };

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
        {isLoading || questions?.map((quest, key) => {return(
            <div key={key} className={classes.questionCont}>
                <p className={classes.question}>{quest.question}</p>
                <p className={classes.answer}>{quest.answer}</p>
            </div>
        )}) 
        }
        {isLoading && <LoadingSpinner />}

        <div>
            <p className={classes.buttonDesc}>Nie ma tutaj nurtującego Cię pytania?</p>
            <div className={classes.buttonCont}>
                <Button buttonText="Zadaj pytanie" onClick={
                    () => {
                    setShowModal(true);
                    setModalContent("addquestion");
                    }
                } />
            </div>
        </div>
    </>)
}

export default Faq;