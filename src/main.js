// main.js
import './style.scss';

import { header_render } from './layouts/header.js';
import { main_body_render } from './layouts/mainbody.js';
import { footer_render } from './layouts/footer.js';

function renderPage() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    ${header_render()}
    ${main_body_render()}
    ${footer_render()}
  `;

  const modal = document.getElementById('modal');
  const open_modal = document.getElementById('open_modal');
  const close_modal = document.getElementById('close_modal');

  if (open_modal && modal) {
    open_modal.addEventListener('click', () => {
      modal.showModal();
      document.body.style.overflow = 'hidden';
    });
  }

}

renderPage();