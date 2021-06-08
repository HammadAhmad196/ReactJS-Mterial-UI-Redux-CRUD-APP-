import React from "react";

const Logout = ({ handleLogout }) => {
    return (
        <center>
            <div className="button1">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </center>
    );
};

export default Logout;