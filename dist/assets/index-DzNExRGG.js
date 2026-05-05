(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_524)'%3e%3ccircle%20cx='16'%20cy='24'%20r='16'%20fill='%2398C3E8'/%3e%3ccircle%20cx='32'%20cy='24'%20r='15'%20fill='white'%20stroke='%23316099'%20stroke-width='2'/%3e%3cpath%20d='M38.3%2031L33.38%2017H29.96L25.06%2031H28.04L28.88%2028.48H34.46L35.3%2031H38.3ZM31.68%2020.18L33.6%2025.9H29.76L31.68%2020.18Z'%20fill='%23316099'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_524'%3e%3crect%20width='48'%20height='48'%20fill='white'%20transform='matrix(1%200%200%20-1%200%2048)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e`,t=class{constructor(e,t=`button`){this.text=e,this.type=t}render(e=null){return`
      <button ${e?`id="${e}"`:``} class="button button--primary" type="${this.type}">${this.text}</button>
    `}},n=new t(`SUBMIT`,`submit`),r=class{render(){return`
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
            <div class="forma--button">${n.render()}</div>
          </form>
        </div>
      </div>
    `}};function i(){let n=new t(`Let's Talk`),i=new r;return`
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
            ${n.render(`open_modal`)}
          </div>
  
          <div class="footer__down--hr">
            <hr>
          </div>
  
          <div class="footer__down--block--down">
            <div class="footer__down--contacts">
              <div class="footer__down--contacts--logo">
                <img src="${e}" alt="Logo">
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
      ${i.render()}
    </dialog>
  `}var a=`/TestTaskCE/assets/illustration-DmYcKpGo.svg`,o=`data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2024H28V21.3333H4V24ZM4%2017.3333H28V14.6667H4V17.3333ZM4%208V10.6667H28V8H4Z'%20fill='%23356EAD'/%3e%3c/svg%3e`,s=`data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_283)'%3e%3ccircle%20cx='16'%20cy='24'%20r='16'%20fill='%23316099'/%3e%3ccircle%20cx='32'%20cy='24'%20r='15'%20fill='white'%20stroke='%23316099'%20stroke-width='2'/%3e%3cpath%20d='M39.3%2030L34.38%2016H30.96L26.06%2030H29.04L29.88%2027.48H35.46L36.3%2030H39.3ZM32.68%2019.18L34.6%2024.9H30.76L32.68%2019.18Z'%20fill='%23316099'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_283'%3e%3crect%20width='48'%20height='48'%20fill='white'%20transform='matrix(1%200%200%20-1%200%2048)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e`;function c(){return`
    <header class="header">
      <nav class="header__navbar">
        <img src="${s}" alt="Navigation">
        <img src="${o}" alt="Navigation">
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
            <div class="header--button">${new t(`See Our Project`).render()}</div>
          </div>
          <img src="${a}" alt="Illustration">
        </div>
      </div>
    </header>
  `}var l=class{constructor(e,t,n,r){this.title=e,this.text=t,this.iconUrl=n,this.iconArrow=r}render(){return`
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
    `}},u=`/TestTaskCE/assets/female-Ck_s-Xkp.svg`,d=`/TestTaskCE/assets/man1-ByH_dFz_.svg`,f=`/TestTaskCE/assets/man2-Bc7GiCCf.svg`,p=`data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%200L6.59%201.41L12.17%207H0V9H12.17L6.59%2014.59L8%2016L16%208L8%200Z'%20fill='%235A98D0'/%3e%3c/svg%3e`,m=[{title:`Make Your business To Be Better Famous In Internet`,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,iconUrl:d,iconArrow:p},{title:`Bring Technology To Your Comfrotable Home`,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,iconUrl:f,iconArrow:p},{title:`Build Your Digital Product That Suitable For Your Need`,text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,iconUrl:u,iconArrow:p}];function h(){let e=new l(m[0].title,m[0].text,m[0].iconUrl,m[0].iconArrow),t=new l(m[1].title,m[1].text,m[1].iconUrl,m[1].iconArrow),n=new l(m[2].title,m[2].text,m[2].iconUrl,m[2].iconArrow);return`
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
  `}function g(){let e=document.getElementById(`app`);e.innerHTML=`
    ${c()}
    ${h()}
    ${i()}
  `;let t=document.getElementById(`modal`),n=document.getElementById(`open_modal`),r=document.getElementById(`close_modal`),a=document.getElementById(`contact_form`);n.addEventListener(`click`,()=>{t.showModal(),document.body.style.overflow=`hidden`}),r.addEventListener(`click`,()=>{t.close(),document.body.style.overflow=``}),a.addEventListener(`submit`,e=>{e.preventDefault();let n=!0,r=!0;[`name--error`,`email--error`,`message--error`].forEach(e=>{document.getElementById(e).style.display=`none`});let i=document.getElementById(`name`).value.trim(),o=document.getElementById(`email`).value.trim(),s=document.getElementById(`message`).value.trim();i||(document.getElementById(`name--error`).style.display=`block`,n=!1),o?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)||(document.getElementById(`email--error`).style.display=`block`,document.getElementById(`email--error`).textContent=`Enter a correct email`,r=!1):(document.getElementById(`email--error`).style.display=`block`,n=!1),s||(document.getElementById(`message--error`).style.display=`block`,n=!1),n&&r&&(fetch(`https://httpbin.org/post`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({name:i,email:o,message:s})}),t.close(),document.body.style.overflow=``,a.reset())})}g();