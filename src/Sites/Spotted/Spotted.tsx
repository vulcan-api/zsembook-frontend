import React, { useEffect, useCallback } from "react";
import classes from "./Spotted.module.css";
import Button from "../../Components/Button";
import * as Icon from "react-bootstrap-icons";
import Wrapper from "../../Layout/Wrapper";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../Components/LoadingSpinner";
import Modal from "../../Layout/ModalComponents/Modal";
import { useNavigate } from "react-router-dom";
import User, { UserRole } from "../../Lib/User";

const Spotted = () => {
  const navigate = useNavigate();
  const [showMorePostsButton, setShowMorePostsButton] = useState(true);
  const [posts, setPosts] = useState([
    {
      id: 69,
      createdAt: new Date(""),
      author: {
        id: 4,
        username: "",
      },
      title: "",
      text: "",
      isAnonymous: false,
      isLiked: false,
      likes: 69,
      username: "",
      isOwned: true,
    },
  ]);
  const [spottedPostsCount, setSpottedPostsCount] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("report");
  const [modalPostId, setModalPostId] = useState(-100);
  const [isActive, setIsActive] = useState(true);

  function changeListType(active?: boolean) {
    active !== undefined ? setIsActive(active) : setIsActive(!isActive);
  }

  function likeHandler(post: any) {
    let postsCopy = [...posts];
    let index = postsCopy.indexOf(post);
    if (posts[index].isLiked) {
      posts[index].isLiked = false;
      posts[index].likes -= 1;
      unlike(posts[index].id);
      setPosts(postsCopy);
    } else {
      posts[index].isLiked = true;
      posts[index].likes += 1;
      like(posts[index].id);
      setPosts(postsCopy);
    }
  }

  const like = async (id: Number) => {
    await fetch(
      `${process.env.REACT_APP_REQUEST_URL}/spotted/post/${id}/like`,
      {
        method: "POST",
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });
  };

  const unlike = async (id: Number) => {
    await fetch(
      `${process.env.REACT_APP_REQUEST_URL}/spotted/post/${id}/unlike`,
      {
        method: "POST",
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });
  };

  const getAllPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      await fetch(
        `${process.env.REACT_APP_REQUEST_URL}/spotted/post?postTake=${spottedPostsCount}`,
        {
          method: "GET",
          credentials: "include",
        }
      )
        .then((res) => res.json())
        .then(setPosts);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, [spottedPostsCount]);

  const downloadMorePosts = () => {
    console.log(posts);
    if (spottedPostsCount + 10 < posts.length) {
      setSpottedPostsCount(spottedPostsCount + 10);
    } else {
      setSpottedPostsCount(spottedPostsCount + 10);
      setShowMorePostsButton(false);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  const closeModal = () => {
    setShowModal(false);
    getAllPosts();
  };

  return (
    <>
      {showModal && (
        <Modal
          postId={modalPostId}
          onBgClick={closeModal}
          onClose={closeModal}
          modalContent={modalContent}
        />
      )}
      <h1 className={classes.h1}>Spotted</h1>
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
        {User.isLogged ? (
          <Button
            buttonText="Dodaj post"
            onClick={() => {
              setShowModal(true);
              setModalContent("addpost");
            }}
          />
        ) : (
          <Button
            buttonText="Zaloguj się aby dodać post"
            onClick={() => {
              navigate("/auth/login");
            }}
          />
        )}
      </div>
      {!isLoading && (
        <>
          <div className={classes.posts}>
            {posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className={
                    isActive ? classes.narrowContainer : classes.wideContainer
                  }
                >
                  <Wrapper className={classes.post}>
                    <div className={classes.topData}>
                      {post.isAnonymous ? (
                        <div>
                          <p>
                            {post.isAnonymous ? "Anonim" : post.author.username}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <Link to={`/profile/${post.author.id}`}>
                            <Icon.PersonFill />
                            <p>
                              {post.isAnonymous
                                ? "Anonim"
                                : post.author.username}
                            </p>
                          </Link>
                        </div>
                      )}
                      <div>
                        <Icon.CalendarDate />
                        {new Date(post.createdAt).toLocaleDateString()}
                      </div>
                      <div>
                        <Icon.Clock />
                        {new Date(post.createdAt).getHours() + ":"}
                        {new Date(post.createdAt).getMinutes() < 10
                          ? "0" + new Date(post.createdAt).getMinutes()
                          : new Date(post.createdAt).getMinutes()}
                      </div>
                      {(User.isItMe(post.author?.id) || User.role === UserRole.Moderator) ? (
                        <Icon.TrashFill
                          onClick={() => {
                            setShowModal(true);
                            setModalPostId(post.id);
                            setModalContent("delete");
                          }}
                          className={classes.report}
                        />
                      ) : User.isLogged && (
                        <Icon.FlagFill
                          onClick={() => {
                            setShowModal(true);
                            setModalPostId(post.id);
                            setModalContent("report");
                          }}
                          className={classes.report}
                        />
                      )}
                    </div>
                    <div className={classes.content}>{post.text}</div>
                    <div className={classes.bottomData}>
                      <div
                        onClick={() => {
                          User.isLogged && likeHandler(post);
                        }}
                      >
                        {post.isLiked && (
                          <Icon.HeartFill
                            style={{ color: "var(--add1-500)" }}
                          />
                        )}
                        {!post.isLiked && <Icon.Heart />}
                        <p
                          style={
                            post.isLiked ? { color: "var(--add1-500)" } : {}
                          }
                        >
                          {post.likes}
                        </p>
                      </div>
                    </div>
                  </Wrapper>
                </div>
              );
            })}
          </div>
          {showMorePostsButton && (
            <div className={classes.loadMoreButton}>
              <Button
                buttonText="Więcej postów"
                onClick={downloadMorePosts}
                className="alternate"
              />
            </div>
          )}
        </>
      )}
      {isLoading && <LoadingSpinner />}
    </>
  );
};

export default Spotted;
