import React, { useState } from "react";
import LoadingSpinner from "../../Components/LoadingSpinner";
import classes from "./Walk.module.css";

const Walk = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
        <div className={classes.walkCont}>
            {isLoading && <div className={classes.spinner}><LoadingSpinner /></div>}
            <iframe className={classes.iframe} title="SchoolInside" src="https://share.spotbrowser.com/f7d73886-299c-4063-aeaa-689abe3eed45-8433?lang=pl&amp;nc" allowFullScreen={true} frameBorder={0} onLoad={() => setIsLoading(false)}></iframe>
        </div>
        </>
    )
};

export default Walk;
