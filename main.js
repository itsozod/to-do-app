(()=>{"use strict";(function(){const e=document.querySelector("#content"),t=function(){const e=document.createElement("header");e.setAttribute("id","header");const t=document.createElement("div");t.classList.add("header-container");const n=document.createElement("h1");n.classList.add("h1-header"),n.textContent="To-Do-App";const d=document.createElement("img");return d.classList.add("checked-img"),d.src="./images/checked-image.png",t.appendChild(n),t.appendChild(d),e.appendChild(t),e}();e.appendChild(t);const n=function(){const e=document.createElement("div");e.classList.add("page-container");const t=document.createElement("navbar");t.classList.add("side-bar");const n=document.createElement("ul");n.classList.add("ul-bar");const d=document.createElement("li");d.classList.add("list-home"),d.textContent="Home",d.classList.add("active");const c=document.createElement("li");c.classList.add("list-notes"),c.textContent="Notes",n.appendChild(d),n.appendChild(c),t.appendChild(n),e.appendChild(t);const a=document.createElement("main");a.setAttribute("id","main");const s=document.createElement("div");s.classList.add("add-container");const i=document.createElement("h1");return i.classList.add("h1-main"),i.textContent="Add a To Do",s.appendChild(i),a.appendChild(s),e.appendChild(a),e}();e.appendChild(n)})(),function(){const e=document.querySelector(".list-home"),t=document.querySelector(".list-notes");e.addEventListener("click",(()=>{e.classList.add("active"),t.classList.remove("active")})),t.addEventListener("click",(()=>{t.classList.add("active"),e.classList.remove("active")}))}()})();