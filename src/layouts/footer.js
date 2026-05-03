import { Button } from "../components/button";
import { Form } from '../components/forma.js';

export function footer_render() {
  const button2 = new Button("Let's Talk");
  const forma = new Form();

  return `
    <footer class="footer">
      <div class="footer__top">
        <div class="footer__top--slogan">
          <h2>Our Beloved Client</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam.
          </p>
        </div>

        <table>
          <tr>
            <th>LOGO CLIENT 1</th>
            <th>LOGO CLIENT 2</th>
            <th>LOGO CLIENT 3</th>
            <th>LOGO CLIENT 4</th>
          </tr>
          <tr>
            <th>LOGO CLIENT 5</th>
            <th>LOGO CLIENT 6</th>
            <th>LOGO CLIENT 7</th>
            <th class="footer--unique">More Client</th>
          </tr>
        </table>
      </div>

      <div class="footer__down">
        <div class="footer__down--block--up">
          <div class="footer__down--block--team">
            <h2>Interested to work with our team?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam.
            </p>
          </div>
          ${button2.render()}
        </div>

        <hr>

        <div class="footer__down--block--down">
          <div class="footer__down--contacts">
            <div class="footer__down--contacts--logo">
              <img src="/src/assets/logo(1).svg" alt="Logo">
              <h2 class="footer__down--unique">Afrianska</h2>
            </div>
            <ol>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              <li>+62-812-7313-4321</li>
              <li>hello.afrian@gmail.com</li>
            </ol>
          </div>
          <div class="footer__down--about">
            <h2>About US</h2>
            <ul>
              <li>About</li>
              <li>What We Do</li>
              <li>Project</li>
              <li>How It Work With Us</li>
            </ul>
          </div>
          <div class="footer__down--follow">
            <h2>Follow US</h2>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <p class="footer__down--rights">2019 © Afrianska. All rights reserved.</p>
      </div>
    </footer>


  `;
}