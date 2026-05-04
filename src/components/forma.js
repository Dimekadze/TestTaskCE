// components/forma.js
import { Button } from "./button.js";

const button3 = new Button("SUBMIT", "submit");

export class Form {
  render() {
    return `
      <div class="forma">
        <div class="forma__window">
          <div class="forma__top">
            <h2>SEND US MESSAGE</h2>
            <button id="close_modal" class="forma__close">&times;</button>
          </div>
          <form id="contact_form" class="forma__form">
            <div class="forma__field">
              <label class="forma__label" for="name">Full Name</label>
              <input class="forma__input" type="text" id="name" name="user_name" placeholder="Your Name">
              <div id="name--error" data-for="name"></div>
            </div>
            <div class="forma__field">
              <label class="forma__label" for="email">Email</label>
              <input class="forma__input" type="email" id="email" name="user_email" placeholder="Your Email">
              <div id="email--error" data-for="email"></div>
            </div>
            <div class="forma__field">
              <label class="forma__label" for="message">Message</label>
              <textarea class="forma__textarea" id="message" name="user_message" placeholder="Your Message" rows="5"></textarea>
              <div id="message--error" data-for="message"></div>
            </div>
            <div class="forma--button">${button3.render()}</div>
          </form>
        </div>
      </div>
    `;
  }
}