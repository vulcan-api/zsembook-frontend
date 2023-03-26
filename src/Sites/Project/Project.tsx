import React, { useEffect } from "react";
import classes from "./Project.module.css";
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import LoadingSpinner from "../../Components/LoadingSpinner";
import Modal from "../../Layout/ModalComponents/Modal";
import ProjectItem from "./ProjectItem";

const Events = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      date: new Date("2023-03-02:09:09.433Z"),
      title: "XI Piknik Naukowy",
      text: "Kolejna edycja jednego z największych wydarzeń w ZSEM we współpracy z WSB-NLU",
      img: "https://zsem.edu.pl/img/piknik.jpeg",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalProjectId, setModalProjectId] = useState(-100);
  const [isActive, setIsActive] = useState(false);

  function changeListType(active?: boolean) {
    active !== undefined ? setIsActive(active) : setIsActive(!isActive);
  }

  async function getAllProjects() {
    setIsLoading(true);
    try {
      await fetch(`${process.env.REACT_APP_REQUEST_URL}/event?take=20`, {
        method: "GET",
        credentials: "include",
      })
        .then((res) => res.json())
        .then(setProjects);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }
  const closeModal = () => {
    setShowModal(false);
    getAllProjects();
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <>
      <h1 className={classes.h1}>Wydarzenia</h1>
      {showModal && (
        <Modal
          projectId={modalProjectId}
          onBgClick={closeModal}
          onClose={closeModal}
          modalContent={modalContent}
        />
      )}
      <div className={classes.menu}>
        <div className={classes.managementIcons}>
          <Icon.List
            className={isActive ? "" : classes.active}
            onClick={() => changeListType()}
          />
          <Icon.GridFill
            className={isActive ? classes.active : ""}
            onClick={() => changeListType()}
          />
        </div>
      </div>
      {!isLoading && (
        <div className={classes.posts}>
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className={
                  isActive ? classes.narrowContainer : classes.wideContainer
                }
              >
                <ProjectItem
                  project={project}
                  setShowModal={setShowModal}
                  setModalProjectId={setModalProjectId}
                  setModalContent={setModalContent}
                />
              </div>
            );
          })}
        </div>
      )}
      {isLoading && <LoadingSpinner />}
    </>
  );
};

export default Events;
