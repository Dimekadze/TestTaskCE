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
  const form = document.getElementById('contact_form');

  open_modal.addEventListener('click', () => {
    modal.showModal();
    document.body.style.overflow = 'hidden';
  });

  close_modal.addEventListener('click', () => {
    modal.close();
    document.body.style.overflow = '';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid_field = true;
    let valid_email = true;

    ['name--error', 'email--error', 'message--error'].forEach(id => {
      document.getElementById(id).style.display = 'none';
    });
    
    const form_name = document.getElementById('name').value.trim();
    const form_email = document.getElementById('email').value.trim();
    const form_message = document.getElementById('message').value.trim();
    
    if (!form_name) {
      document.getElementById('name--error').style.display = 'block';
      valid_field = false;
    }
    if (!form_email) {
      document.getElementById('email--error').style.display = 'block';
      valid_field = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form_email)) {
      document.getElementById('email--error').style.display = 'block';
      document.getElementById('email--error').textContent = 'Enter a correct email';
      valid_email = false;
    }
    if (!form_message) {
      document.getElementById('message--error').style.display = 'block';
      valid_field = false;
    }

    if (valid_field && valid_email) {
      fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form_name, 
          email: form_email, 
          message: form_message 
        })
      });
      modal.close();
      document.body.style.overflow = '';
      form.reset();
    }
  });
}

renderPage();