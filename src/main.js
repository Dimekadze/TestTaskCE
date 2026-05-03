// main.js
import './style.scss';

import { header_render } from './layouts/header.js';
import { main_body_render } from './layouts/mainbody.js';
import { footer_render } from './layouts/footer.js';
import { Form } from './components/forma.js'

function renderPage() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    ${header_render()}
    ${main_body_render()}
    ${footer_render()}
  `;

  const modal = document.getElementById('modal');
  const openmodal = document.getElementById('open_modal');

  openmodal.addEventListener('click', () => {
    modal.show();
  });
}

renderPage();