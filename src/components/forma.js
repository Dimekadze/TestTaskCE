import { Button } from "./button";

const button3 = new Button("SUBMIT");
export class Form {

  render() {
    return `
      <div class="forma">
        <div class="forma__window">
          <h2>SEND US MESSAGE</h2>
          <form class="forma__window--main" action="/submit-form" method="post">
            <div class="forma__window--name">
              <label class="forma__window--label" for="name">Full Name</label>
              <input class="forma__window--input" type="text" id="name" name="user_name" placeholder="Your Name">
            </div>
            <div class="forma__window--email">
              <label class="forma__window--label" for="email">Email</label>
              <input class="forma__window--input" type="email" id="email" name="user_email" placeholder="Your Email">
            </div>
            <div class="forma__window--text">
              <label class="forma__window--label" for="textarea">Message</label>
              <input class="forma__window--input" type="textarea" id="text" name="user_text" placeholder="Your Message">
            </div>
            
            </form>
          <div class="forma--button">${button3.render()}</div>
        </div>
      </div>
    `;
  }
}