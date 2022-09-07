import React from 'react';
import {withRouter} from "react-router-dom";


const ProfileCard = props => {
    const pathUsername = props.match.params.username
    const loggedInUsername = value.state.username;
    let message = "We cannot edit.";
    if (pathUsername===loggedInUsername)
        message = "we can edit";
    return (
        <div className="container">
            {message}
        </div>
    );
};

export default withRouter(ProfileCard);