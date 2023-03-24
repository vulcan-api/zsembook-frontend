import React, { useState, useEffect } from "react";
import Wrapper from "../../Layout/Wrapper";
import User from "../../Lib/User";
import LoadingSpinner from "../../Components/LoadingSpinner";
import * as Icon from "react-bootstrap-icons";
//@ts-ignore
import { NotificationManager } from "react-notifications";
import classes from "../Spotted/Spotted.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 69,
      createdAt: new Date("2023-02-06T19:21:38.727Z"),
      author: {
        id: 4,
        username: "",
      },
      title: "Lekcja z symfony u stopiarza",
      text: "Chciałem się pochwalić że prowadziłem lekcje u stopiarza",
      isAnonymous: false,
      isLiked: false,
      likes: 69,
      username: "jajco",
    },
  ]);
  // @ts-ignore

  async function getPosts() {
    setIsLoading(true);
    try {
      await fetch(`https://${process.env.REACT_APP_REQUEST_URL}/spotted/post?postTake=4`, {
        method: "GET",
        credentials: "include",
      })
        .then((res) => res.json())
        .then(setPosts);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getPosts();
  }, []);

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
      NotificationManager.success("Udało się polubić post.", "Sukces!", 3000);
    }
  }

  const like = async (id: Number) => {
    await fetch(`https://${process.env.REACT_APP_REQUEST_URL}/spotted/post/${id}/like`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });
  };

  const unlike = async (id: Number) => {
    await fetch(`https://${process.env.REACT_APP_REQUEST_URL}/spotted/post/${id}/unlike`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div>
        <h1>
          {User.isLogged
            ? `Witaj ${User.data.name} ${User.data.surname}!`
            : `Witaj na ZSEMBook!`}
        </h1>
      </div>
      <Wrapper>
        <h2>Aktualności</h2>
        <p className={classes.centerOnPhone}>\\ Wkrótce //</p>
      </Wrapper>
      <Wrapper>
        <h2>Spotted</h2>
        {!isLoading && Array.isArray(posts) ? (
          <>
            <p className={classes.centerOnPhone}>Proponowane posty</p>
            <div className={classes.posts}>
              {posts.map((post) => {
                return (
                  <Wrapper
                    className={`${classes.post} ${classes.narrowContainer}`}
                    key={post.id}
                  >
                    <div className={classes.topData}>
                      {post.isAnonymous ? (
                        <div>
                          <Icon.PersonFill />
                          <p>
                            {post.isAnonymous ? "Anonim" : post.author.username}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <Link
                            to={`/profile/${
                              post.isAnonymous ? 0 : post.author.id
                            }`}
                          >
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
                        {new Date(post.createdAt).getUTCHours() + ":"}
                        {new Date(post.createdAt).getUTCMinutes() < 10
                          ? "0" + new Date(post.createdAt).getUTCMinutes()
                          : new Date(post.createdAt).getUTCMinutes()}
                      </div>
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
                            post.isLiked ? { color: "var(--add1-500)" } : {}
                          }
                        >
                          {post.likes}
                        </p>
                      </div>
                    </div>
                  </Wrapper>
                );
              })}
              <div className={classes.loadMoreButton}>
                <Button
                  buttonText="Więcej postów"
                  onClick={() => navigate("/spotted")}
                />
              </div>
            </div>
          </>
        ) : (
          <p>Brak postów do wyświetlenia</p>
        )}
      </Wrapper>
    </>
  );
};

export default Homepage;
