import { Button } from "../components/button";

/**
 *
 */
export function header_render() {
  const button1 = new Button("See Our Project");

  return `
    <header class="header">
      <nav class="header__navbar">
        <img src="/src/assets/logo2.svg" alt="Navigation">
        <img src="/src/assets/ic_menu_48px.svg" alt="Navigation">
      </nav>
      <div class="header__top">
        <div class="header__top--blocks">
          <div class="header__top--blocks--left">
            <div class="header__main--info">
              <h1>New Automation Tool for Your Home</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Faucibus tristique vulputate ultrices ut mauris tellus at. 
                Posuere sollicitudin odio tellus elit.
              </p>
            </div>
            <div class="header--button">${button1.render()}</div>
          </div>
          <img src="/src/assets/illustration.svg" alt="Illustration">
        </div>
      </div>
    </header>
  `;
}