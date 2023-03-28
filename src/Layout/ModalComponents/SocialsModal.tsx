import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { BrowserFirefox, Facebook, Instagram, Youtube } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import classes from "./SocialsModal.module.css";

interface SocialsModalProps {
  userId: Number,
  onClose: Function,
  showSpinner: Function,
}

interface SocialElementProps {
  icon: ReactNode, 
  name: string, 
  url: string,
  fullUrl?: boolean,
}

interface SocialsType {
  facebook: string,
  instagram: string,
  youtube: string,
  website: string,
}

const SocialElement = (props: SocialElementProps) => 
  <Link to={props.url + (props.fullUrl ? '' : props.name)} className={classes.socialElem} target='_blank'>
    <span className={classes.icon}>
      {props.icon}
    </span>
    <span className={classes.name}>
      {props.name}
    </span>
  </Link>

const SocialsModal = (props: SocialsModalProps) => {
  const [socials, setSocials] = useState<SocialsType>();

  const getSocials = useCallback(async () => {
      fetch(`${process.env.REACT_APP_REQUEST_URL}/user/${props.userId}`)
      .then(res => res.json())
      .then(json => setSocials(json))
  }, [props.userId]);

  useEffect(() => {
    props.showSpinner(false);
    getSocials();
  }, [props, getSocials]);

  return <>
    <p>Social media</p>
    <ul>
      {socials?.facebook && <SocialElement icon={<Facebook/>} name={socials.facebook} url='https://facebook.com/' />}
      {socials?.instagram && <SocialElement icon={<Instagram/>} name={socials.instagram} url='https://instagram.com/' />}
      {socials?.youtube && <SocialElement icon={<Youtube/>} name={socials.youtube} url='https://youtube.com/@' />}
      {socials?.website && <SocialElement icon={<BrowserFirefox/>} name={new URL(socials.website).hostname} url={socials.website} fullUrl={true}/>}
    </ul>
  </>
};

export default SocialsModal;