export class Button {
  constructor(text) {
    this.text = text;
  }

  render() {
    return `
      <button class="button" id="open_modal">${this.text}</button>
    `;
  }
}