import React from 'react';
import Capatcha from '../capatcha/Capatcha';
import { useRef, useEffect } from 'react';

import { loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';

const Home = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el1 = ref.current;
    loadCaptchaEnginge(8);
  });

  function doSubmit() {
    let user_captcha = document.getElementById('user_captcha_input').value;

    if (validateCaptcha(user_captcha) === true) {
      alert('Captcha Matched');
      loadCaptchaEnginge(6);
      document.getElementById('user_captcha_input').value = ' ';
    } else {
      alert('Captcha Does Not Match');
      document.getElementById('user_captcha_input').value = ' ';
    }
  }
  return (
    <div id="homepage">
      <div id="container">
        <div id="main">
          <div id="login-title">
            <h2 id="lgm">Login</h2>
            <div id="form">
              <form action="">
                <label htmlFor="USN">USN</label>
                <br />
                <input id="usn" type="text" placeholder="USN" />
                <br />
                <br />
                <label htmlFor="">Password</label>
                <div class="uk-flex">
                  <select
                    id="dd"
                    class="validate[required] inputselectday"
                    name="dd"
                    required=""
                  >
                    <option disbaled Selected="" value="">
                      Day
                    </option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                  <select
                    name="mm"
                    id="mm"
                    class="validate[required] inputselectmonth"
                    required=""
                  >
                    <option disabled="" selected="" value="">
                      Month
                    </option>
                    <option value="01">Jan</option>
                    <option value="02">Feb</option>
                    <option value="03">Mar</option>
                    <option value="04">Apr</option>
                    <option value="05">May</option>
                    <option value="06">Jun</option>
                    <option value="07">Jul</option>
                    <option value="08">Aug</option>
                    <option value="09">Sept</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                  </select>

                  <select
                    name="yyyy"
                    id="yyyy"
                    class="validate[required] inputselectyear"
                    required=""
                  >
                    <option disabled="" selected="" value="">
                      Year
                    </option>
                    <option value="1975">1975</option>
                    <option value="1976">1976</option>
                    <option value="1977">1977</option>
                    <option value="1978">1978</option>
                    <option value="1979">1979</option>
                    <option value="1980">1980</option>
                    <option value="1981">1981</option>
                    <option value="1982">1982</option>
                    <option value="1983">1983</option>
                    <option value="1984">1984</option>
                    <option value="1985">1985</option>
                    <option value="1986">1986</option>
                    <option value="1987">1987</option>
                    <option value="1988">1988</option>
                    <option value="1989">1989</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                  </select>
                </div>
                <br />

                <div>
                  <Capatcha />
                </div>
                <p>
                  <label htmlFor="Login">
                    <input
                      id="login-btn"
                      type="button"
                      onClick={doSubmit}
                      value="Login"
                    />
                  </label>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
