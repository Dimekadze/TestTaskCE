(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{constructor(e,t=`button`){this.text=e,this.type=t}render(e=null){return`
      <button ${e?`id="${e}"`:``} class="button button--primary" type="${this.type}">${this.text}</button>
    `}},t=new e(`SUBMIT`,`submit`),n=class{render(){return`
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
            <div class="forma--button">${t.render()}</div>
          </form>
        </div>
      </div>
    `}};function r(){let t=new e(`Let's Talk`),r=new n;return`
    <footer class="footer">
      <div class="footer__top">
        <div class="footer__top--slogan">
          <h2>Our Beloved Client</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam.
          </p>
        </div>

        <table>
          <tr>
            <th>LOGO CLIENT 1</th>
            <th>LOGO CLIENT 2</th>
            <th>LOGO CLIENT 3</th>
            <th>LOGO CLIENT 4</th>
          </tr>
          <tr>
            <th>LOGO CLIENT 5</th>
            <th>LOGO CLIENT 6</th>
            <th>LOGO CLIENT 7</th>
            <th class="footer--unique">More Client</th>
          </tr>
        </table>
        
        <div class="footer__down">
          <div class="footer__down--block--up">
            <div class="footer__down--block--team">
              <h2>Interested to work with our team?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam.
              </p>
            </div>
            ${t.render(`open_modal`)}
          </div>
  
          <div class="footer__down--hr">
            <hr>
          </div>
  
          <div class="footer__down--block--down">
            <div class="footer__down--contacts">
              <div class="footer__down--contacts--logo">
                <img src="/src/assets/logo(1).svg" alt="Logo">
                <h2 class="footer__down--unique">Afrianska</h2>
              </div>
              <ol>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li>+62-812-7313-4321</li>
                <li>hello.afrian@gmail.com</li>
              </ol>
            </div>
            <div class="footer__down--about">
              <h2>About US</h2>
              <ul>
                <li>About</li>
                <li>What We Do</li>
                <li>Project</li>
                <li>How It Work With Us</li>
              </ul>
            </div>
            <div class="footer__down--follow">
              <h2>Follow US</h2>
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Youtube</li>
              </ul>
            </div>
          </div>
          <p class="footer__down--rights">2019 &copy; Afrianska. All rights reserved.</p>
        </div>
      </div>


    </footer>

    <dialog id="modal" class="footer--forma">
      ${r.render()}
    </dialog>
  `}function i(){return`
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
            <div class="header--button">${new e(`See Our Project`).render()}</div>
          </div>
          <img src="/src/assets/illustration.svg" alt="Illustration">
        </div>
      </div>
    </header>
  `}var a=class{constructor(e,t,n,r){this.title=e,this.text=t,this.iconUrl=n,this.iconArrow=r}render(){return`
      <div class="card">
        <img src="${this.iconUrl}" alt="card icon" class="card__logo--top">
        <div class="card__info">
          <h3>${this.title}</h3>
          <p>${this.text}</p>
          <div class="card__link">
            <a href="#" class="card__link">Learn more </a>
            <img src="${this.iconArrow}" alt="arrow icon" class="arrow__icon">
          </div>
        </div>
      </div>
    `}},o=[{title:`Make Your business To Be Better Famous In Internet`,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,iconUrl:`/src/assets/1.svg`,iconArrow:`/src/assets/Vector.svg`},{title:`Bring Technology To Your Comfrotable Home`,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,iconUrl:`/src/assets/3.svg`,iconArrow:`/src/assets/Vector.svg`},{title:`Build Your Digital Product That Suitable For Your Need`,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,iconUrl:`/src/assets/2 20.svg`,iconArrow:`/src/assets/Vector.svg`}];function s(){let e=new a(o[0].title,o[0].text,o[0].iconUrl,o[0].iconArrow),t=new a(o[1].title,o[1].text,o[1].iconUrl,o[1].iconArrow),n=new a(o[2].title,o[2].text,o[2].iconUrl,o[2].iconArrow);return`
    <main class="main">
      <div class="main__cards--block">
        <div class="main__left">
          <h1>What we do to help our client grow in digital era</h1>
          <div class="main__left--card1">
            ${e.render()}
          </div>
        </div>
        <div class="main__right">
          <div class="main__right--card2">
            ${t.render()}
          </div>
          <div class="main__right--card3">
            ${n.render()}
          </div>
        </div>
      </div>
    </main>
  `}function c(){let e=document.getElementById(`app`);e.innerHTML=`
    ${i()}
    ${s()}
    ${r()}
  `;let t=document.getElementById(`modal`),n=document.getElementById(`open_modal`),a=document.getElementById(`close_modal`),o=document.getElementById(`contact_form`);n.addEventListener(`click`,()=>{t.showModal(),document.body.style.overflow=`hidden`}),a.addEventListener(`click`,()=>{t.close(),document.body.style.overflow=``}),o.addEventListener(`submit`,e=>{e.preventDefault();let n=!0,r=!0;[`name--error`,`email--error`,`message--error`].forEach(e=>{document.getElementById(e).style.display=`none`});let i=document.getElementById(`name`).value.trim(),a=document.getElementById(`email`).value.trim(),s=document.getElementById(`message`).value.trim();i||(document.getElementById(`name--error`).style.display=`block`,n=!1),a?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)||(document.getElementById(`email--error`).style.display=`block`,document.getElementById(`email--error`).textContent=`Enter a correct email`,r=!1):(document.getElementById(`email--error`).style.display=`block`,n=!1),s||(document.getElementById(`message--error`).style.display=`block`,n=!1),n&&r&&(fetch(`https://httpbin.org/post`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({name:i,email:a,message:s})}),t.close(),document.body.style.overflow=``,o.reset())})}c();