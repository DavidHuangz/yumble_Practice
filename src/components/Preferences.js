import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Help from "./Help";
import "./Help.css";

function Preferences() {
  const [ButtonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <h1 className="Title">yumble</h1>
      <Link to="JoinGroup">
        <button className="BackButton">Back</button>
      </Link>
      <button onClick={() => setButtonPopup(true)} className="HelpButton">
        help?
      </button>
      <Help trigger={ButtonPopup} setTrigger={setButtonPopup}>
        <p>
          If you're visiting this page, you're likely here because you're
          searching for a random sentence. Sometimes a random word just isn't
          enough, and that is where the random sentence generator comes into
          play. By inputting the desired number, you can make a list of as many
          random sentences as you want or need. Producing random sentences can
          be helpful in a number of different ways.
        </p>
      </Help>
    </>
  );
}

export default Preferences;
