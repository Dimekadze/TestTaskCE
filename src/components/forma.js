export class Form {
  constructor() {}


  render() {
    return `
      <div class="forma" id="modal">
        <h2>SEND US MESSAGE</h2>
        <form action="/submit-form" method="post">
          <label for="name">Full Name</label>
          <input type="text" id="name" name="user_name" required>
          
          <label for="email">Email</label>
          <input type="email" id="email" name="user_email" required>

          <label for="textarea">Message</label>
          <input type="textarea" id="text" name="user_text" required>
          
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    `;
  }
}