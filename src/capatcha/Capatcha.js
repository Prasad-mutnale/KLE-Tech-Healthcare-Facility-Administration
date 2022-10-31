import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect } from "react";

import {
//   loadCaptchaEnginge,
  LoadCanvasTemplate,
//   validateCaptcha
} from "react-simple-captcha";

const Capatcha = () => {
    // useEffect(() => {
    //     loadCaptchaEnginge(8)
    // })

    // function doSubmit(){
    //     let user_captcha = document.getElementById("user_captcha_input").value;
    
    //     if (validateCaptcha(user_captcha) === true) {
    //       alert("Captcha Matched");
    //       loadCaptchaEnginge(6);
    //       Document.getElementById("user_captcha_input").value = " ";
    //     } else {
    //       alert("Captcha Does Not Match");
    //       Document.getElementById("user_captcha_input").value = " ";
    //     }
    //   };
  return (
    <div>
        <div className="container">
          <div className="form-group">
            <div className="col mt-3">
              <LoadCanvasTemplate />
            </div>

            <div className="col mt-3">
              <div>
                <input
                  placeholder="Enter Captcha"
                  id="captcha"
                  name="user_captcha_input"
                  type="text"
                ></input>
              </div>
            </div>

            {/* <div className="col mt-3">
              <div>
                <button
                  className="btn btn-primary"
                  onClick={doSubmit} value="Submit">
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
  );
}

export default Capatcha


