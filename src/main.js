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
  let valid_field = true;
  let valid_email = true;

  open_modal.addEventListener('click', () => {
    modal.showModal();
    document.body.style.overflow = 'hidden';
  });

  close_modal.addEventListener('click', () => {
    modal.close();
    document.body.style.overflow = '';
  });

  form.onsubmit = (e) => {
    e.preventDefault();
    
    const form_name = document.getElementById('name').value;
    const form_email = document.getElementById('email').value;
    const form_message = document.getElementById('message').value;
    
    if (form_name === "" || form_email === "" || form_message === "") {
      if (form_name === "") {
        document.getElementById('name--error').style.display = 'block';
        valid_field = false;
      }
      if (form_email === "") {
        document.getElementById('email--error').style.display = 'block';
        valid_field = false;
      }   
      if (form_message === "") {
        document.getElementById('message--error').style.display = 'block';
        valid_field = false;
      }
    } else valid_field = true;

    if (!form_email.includes('@')) {
      valid_email = false;
    } else valid_email = true;

    if (valid_field && valid_email) {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          form_name, 
          form_email, 
          form_message 
        })
      });
      modal.close();
      document.body.style.overflow = '';
      form.reset();
    } else {
      alert('Все поля должны быть заполнены');
    }
  };
}

renderPage();