import React, { useState, useEffect, useCallback } from "react";
import classes from "./Profile.module.css";
import defaultAvatar from "./Graphics/default.png";
import Button from "../../Components/Button";
import { Instagram } from "react-bootstrap-icons";
import * as Icon from "react-bootstrap-icons";
import { useParams, useNavigate } from "react-router-dom";
//@ts-ignore
import { NotificationManager } from "react-notifications";
import LoadingSpinner from "../../Components/LoadingSpinner";
import Wrapper from "../../Layout/Wrapper";
import Modal from "../../Layout/ModalComponents/Modal";
import getUserObject from "../../Lib/getUser";

const Profile = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [projectId, setProjectId] = useState(-100);
  const [postId, setPostId] = useState(-100);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 69,
      createdAt: new Date("2023-02-06T19:21:38.727Z"),
      author: {
        name: String,
        surname: String,
        username: String,
        id: 0,
      },
      title: "Lekcja z symfony u stopiarza",
      text: "Chciałem się pochwalić że prowadziłem lekcje u stopiarza",
      isAnonymous: false,
      isLiked: false,
      likes: 69,
      username: "jajco",
    },
  ]);
  const [user, setUser] = useState({
    name: "",
    surname: "",
    username: "",
    class_name: "",
    profileDesc: "",
    email: "",
    Followers: 0,
    Following: 0,
    isAlreadyFollowed: true,
  });

  const loggedUser = getUserObject();

  const { userId } = useParams();

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
    await fetch(`http://localhost:3000/spotted/post/${id}/like`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });
  };

  const unlike = async (id: Number) => {
    await fetch(`http://localhost:3000/spotted/post/${id}/unlike`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });
  };

  const getUserPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      await fetch(`http://localhost:3000/user/${userId}/spottedPosts`, {
        method: "GET",
        credentials: "include",
      })
        .then((res) => res.json())
        .then(console.log);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, [userId]);

  useEffect(() => {
    getUserPosts();
    userId === undefined ? navigate("/") : <></>;
  }, [getUserPosts, navigate, userId]);

  const getPublicInfo = useCallback(
    async function getPublicInfo() {
      setIsLoading(true);
      try {
        await fetch(`http://localhost:3000/user/${userId}`, {
          method: "GET",
          credentials: "include",
        })
          .then((res) => res.json())
          .then(setUser)
          .finally(() => setIsLoading(false));
      } catch (error) {
        console.error(error);
        navigate("/");
      }
    },
    [userId, navigate]
  );

  useEffect(() => {
    getPublicInfo();
  }, [getPublicInfo]);

  const closeModal = () => {
    setShowModal(false);
    setPostId(-100);
    setProjectId(-100);
  };

  const followUser = async () => {
    const response = await fetch("http://localhost:3000/user/follows", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        userId: userId,
      }),
    });
    if (!response.ok) {
      NotificationManager.error("Wystąpił błąd!", "Błąd!", 3000);
    } else {
      NotificationManager.success("Wystąpił sukces!", "Sukces!", 3000);
    }
  };

  const unFollowUser = async () => {
    const response = await fetch("http://localhost:3000/user/follows", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        userId: userId,
      }),
    });
    if (!response.ok) {
      NotificationManager.error("Wystąpił błąd!", "Błąd!", 3000);
    } else {
      NotificationManager.success("Wystąpił sukces!", "Sukces!", 3000);
    }
  };

  const followHandler = () => {
    let userCopy = JSON.parse(JSON.stringify(user));
    if (user.isAlreadyFollowed) {
      userCopy.Followers -= 1;
      userCopy.isAlreadyFollowed = false;
      unFollowUser();
      setUser(userCopy);
    } else {
      userCopy.Followers += 1;
      userCopy.isAlreadyFollowed = true;
      followUser();
      setUser(userCopy);
    }
  };

  return (
    <>
      {showModal && (
        <Modal
          projectId={projectId}
          postId={postId}
          onBgClick={closeModal}
          onClose={closeModal}
          modalContent={modalContent}
          userId={userId}
        />
      )}
      {isLoading && <LoadingSpinner />}
      <div className={classes.personContainer}>
        <div className={classes.avatar}>
          <img className={classes.avImage} src={defaultAvatar} alt="" />
        </div>
        <div className={classes.managementContainer}>
          <div className={classes.detailsContainer}>
            <h2>{user.username}</h2>
            <p className={classes.ovColor}>
              {user.name +
                " " +
                user.surname +
                " " +
                (user.class_name ? user.class_name.toUpperCase() : "")}
            </p>
            <p>{user.profileDesc}</p>
          </div>
          <div className={classes.buttonsArea}>
            {user.Followers < 1 || user.Followers === undefined ? (
              <p>Obserwujący: 0</p>
            ) : (
              <p
                onClick={() => {
                  setShowModal(true);
                  setModalContent("followers");
                }}
                className={classes.activeFollowing}
              >
                Obserwujący: {user.Followers}
              </p>
            )}
            {user.Following < 1 || user.Following === undefined ? (
              <p>Obserwuje: 0</p>
            ) : (
              <p
                onClick={() => {
                  setShowModal(true);
                  setModalContent("following");
                }}
                className={classes.activeFollowing}
              >
                Obserwuje: {user.Following}
              </p>
            )}
            {loggedUser.id !== +userId! && (
              <Button
                className={user.isAlreadyFollowed ? "alternate" : ""}
                buttonText={user.isAlreadyFollowed ? "Obserwujesz" : "Obserwuj"}
                onClick={followHandler}
              />
            )}
            <Button
              onClick={() => {
                setShowModal(true);
                setModalContent("socials");
              }}
              buttonText={
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: ".3rem",
                  }}
                >
                  Sociale{" "}
                  <Instagram
                    style={{
                      width: "1.2rem",
                      height: "1.2rem",
                      paddingTop: ".3rem",
                    }}
                  />
                </span>
              }
              className="alternate"
            />
          </div>
        </div>
      </div>
      <div className={classes.profileContent}>
        {posts.length < 1 ? (
          <p className={classes.textCenter}>
            Brak postów użytkownika do wyświetlenia.
          </p>
        ) : (
          <>
            <p>Posty użytkownika {user.username || "jajco"} na spotted</p>
            {posts.map((post) => {
              return (
                <div key={post.id} className={classes.postWrapper}>
                  <Wrapper className={classes.post}>
                    <div className={classes.topData}>
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
                      {post.author.id === loggedUser.id ? (
                        <Icon.TrashFill
                          onClick={() => {
                            setShowModal(true);
                            setPostId(post.id);
                            setModalContent("delete");
                          }}
                          className={classes.report}
                        />
                      ) : (
                        <Icon.FlagFill
                          onClick={() => {
                            setShowModal(true);
                            setPostId(post.id);
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
                          likeHandler(post);
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
                            post.isLiked
                              ? { color: "var(--add1-500)" }
                              : { color: "var(--main-400)" }
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
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
