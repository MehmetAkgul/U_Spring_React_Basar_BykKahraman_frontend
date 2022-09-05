import React from 'react';
import {withRouter} from "react-router-dom";
import {composeInitialProps} from "react-i18next";


const ProfileCard = props => {
    const pathUsername = props.match.params.username
    const loggedInUsername = props.username;
    let message = "We cannot edit.";
    if (loggedInUsername === pathUsername)
        message = "we can edit";
    return (
        <div className="container">
            {message}
        </div>
    );
};

export default withRouter(ProfileCard);