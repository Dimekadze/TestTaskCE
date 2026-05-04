/**
 *
 */
export class Button {

  constructor(text, type = "button") {
    this.text = text;
    this.type = type;
  }

  render(id = null) {
    const idAttr = id ? `id="${id}"` : "";
    return `
      <button ${idAttr} class="button button--primary" type="${this.type}">${this.text}</button>
    `;
  }

}