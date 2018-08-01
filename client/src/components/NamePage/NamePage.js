import React  from "react";
import "./NamePage.css";

const NamePage = (props) => {
  // deconstructed the props oject here to make NamePage a dumb component
const { handleSubmit, userName, handleNameChange } = props;
  return (
    <div className="container">
      <div className="container">
        <img src="../img/rightindex2.png" alt="right-index" width="100%" height="680px" />
        <div id="indexText">
          This Book Belongs To: <br />
            <form onSubmit={handleSubmit}>
              <input id="nametext" type="text" value={userName} onChange=           {handleNameChange} />
              <input id="submit" type="submit" value="Submit" />
            </form>
        </div>
      </div>
    </div>
  );
};
export default NamePage;