import Wrapper from "../../Layout/Wrapper";
import classes from "./Project.module.css";
import * as Icon from "react-bootstrap-icons";
import React from "react";

const ProjectItem = (props: any) => {
  const project = props.project;
  console.log(project.img);
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
        <img src={project.img} alt={project.title} />
        <p className={classes.content}>{project.text}</p>
      </Wrapper>
    </div>
  );
};

export default ProjectItem;
