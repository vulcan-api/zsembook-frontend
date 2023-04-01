import Wrapper from "../../Layout/Wrapper";
import classes from "./Project.module.css";
import * as Icon from "react-bootstrap-icons";
import React from "react";
import Button from "../../Components/Button";

const ProjectItem = (props: any) => {
    const project = props.project;
    const isMobile = /Mobile/.test(navigator.userAgent);
    const handleFacebookClick = () => {
        if (isMobile) {
            window.location.replace(project.facebook);
        } else {
            window.open(project.facebook, '_blank');
        }
    }
    const handleWebsiteClick = () => {
        if (isMobile) {
            window.location.replace(project.website);
        } else {
            window.open(project.website, '_blank');
        }
    }
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
            {project.facebook ? (
              <Button
                buttonText="Facebook"
                icon={<Icon.Facebook />}
                onClick={handleFacebookClick}
              />
            ) : (
              <Button
                buttonText="Facebook"
                icon={<Icon.Facebook />}
                style={{cursor: "not-allowed"}}
              />
            )}
            <Button
              buttonText="Strona szkoły"
              icon={<Icon.BrowserFirefox />}
              className="alternate"
              onClick={handleWebsiteClick}
            />
          </div>
        </Wrapper>
      </div>
    );
};

export default ProjectItem;
