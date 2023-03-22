import Wrapper from "../../Layout/Wrapper";
import classes from "./Project.module.css";
import * as Icon from "react-bootstrap-icons";
import React from "react";
import Button from "../../Components/Button";

const ProjectItem = (props: any) => {
  const project = props.project;
  return (
    <div style={props.listType}>
      <Wrapper className={classes.post}>
        <div className={classes.topData}>
          <div>
            <Icon.CalendarDate />
            {new Date(project.date).toLocaleDateString()}
          </div>
        </div>
        <h2>{project.title}</h2>
        <p className={classes.content}>{project.text}</p>
        <div className={classes.buttonFlex}>
          <Button buttonText="Facebook" icon={<Icon.Facebook />} />
          <Button buttonText="Strona szkoły" icon={<Icon.BrowserFirefox />} className="alternate" onClick={() => {window.location.replace(project.website)}}/>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProjectItem;
