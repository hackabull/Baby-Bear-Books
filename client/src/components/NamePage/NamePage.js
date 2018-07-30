import React  from "react";
import "./NamePage.css";

// becomes dumb component
const NamePage = (props) => {
 
    const { handleSubmit, userName, handleNameChange } = props;

        return (
        <div className="container">

            {/* <div className="input-field col s6">
                <input value="" id="first_name2" type="text" className="validate" />
            </div> */}

            <div className="container">
                <img src="../img/rightindex2.png" alt="right-index" width="100%" height="680px" />
                    <div id="indexText">
                    This Book Belongs To: <br />
                        <form onSubmit={handleSubmit}>
                            <input id="nametext" type="text" value={userName} onChange={handleNameChange} />
                        <input id="submit" type="submit" value="Submit" />
                        </form>
                    </div>
            </div>

            {/* <div className="bird-container bird-container--one">
                <div className="bird bird--one"></div>
            </div>

            <div className="bird-container bird-container--two">
                <div className="bird bird--two"></div>
            </div>

            <div className="bird-container bird-container--three">
                <div className="bird bird--three"></div>
            </div>

            <div className="bird-container bird-container--four">
                <div className="bird bird--four"></div>
            </div> */}
        </div>
        );
  
};
export default NamePage;