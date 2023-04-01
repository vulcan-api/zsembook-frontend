import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import classes from "./OfferItem.module.css";
import profilesContent from "./Profiles.json";

const OfferItem = () => {
  const [isWrong, setIsWrong] = useState(true);
  const navigate = useNavigate();
  const profiles = profilesContent;

  const { profile = "" } = useParams<{ profile: string }>();

  useEffect(() => {
    let profileNames = [
      "informatyk",
      "mechatronik",
      "programista",
      "teleinformatyk",
      "elektronik",
      "elektryk",
    ];
    profile === undefined || profileNames.indexOf(profile) + 1 === 0
      ? navigate("/offer")
      : setIsWrong(false);
  }, [profile, navigate]);

  return (
    <>
      {!isWrong && (
        <>
          <h1 className={classes.h1}>{(profiles as any)[profile].title}</h1>
          {(profiles as any)[profile].related && <p className={classes.related}>
            Pokrewne kierunki:
            {(profiles as any)[profile].related.map(
              (profile: string, index: any) => {
                return (
                  <Link key={index} to={`/offer/${profile}`}>
                    Technik {profile}
                  </Link>
                );
              }
            )}
          </p>}
          <h2 className={classes.h2}>Nauczysz sie: </h2>
          <ul className={classes.mainDesc}>
            {(profiles as any)[profile].desc.map((qual: any, index: any) => {
              return (
                <li className={classes.offerLi} key={index}>
                  <span>{qual}</span>
                </li>
              );
            })}
          </ul>
          <h2 className={classes.h2}>Kwalifikacje</h2>
          <ul>
            {(profiles as any)[profile].qualifications.map(
              (qual: any, index: any) => {
                return (
                  <li className={classes.offerLi} key={index}>
                    <h3>{qual.name}</h3>
                    <span>{qual.desc}</span>
                  </li>
                );
              }
            )}
          </ul>
          <h2 className={classes.h2}>Przedmioty specjalistyczne</h2>
          <ul className={classes.lastItem}>
            {(profiles as any)[profile].specializedSubjects.map(
              (qual: any, index: any) => {
                return (
                  <li className={classes.offerLi} key={index}>
                    <span>{qual}</span>
                  </li>
                );
              }
            )}
          </ul>
        </>
      )}
    </>
  );
};

export default OfferItem;
