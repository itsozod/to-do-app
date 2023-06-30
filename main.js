(()=>{"use strict";(function(){const e=document.querySelector("#content"),t=function(){const e=document.createElement("header");e.setAttribute("id","header");const t=document.createElement("div");t.classList.add("header-container");const n=document.createElement("h1");n.classList.add("h1-header"),n.textContent="To-Do-App";const d=document.createElement("img");return d.classList.add("checked-img"),d.src="./images/checked-image.png",t.appendChild(n),t.appendChild(d),e.appendChild(t),e}();e.appendChild(t);const n=function(){const e=document.createElement("div");e.classList.add("page-container");const t=document.createElement("navbar");t.classList.add("side-bar");const n=document.createElement("ul");n.classList.add("ul-bar");const d=document.createElement("li");d.classList.add("list-home"),d.textContent="Home",d.classList.add("active");const a=document.createElement("li");a.classList.add("list-notes"),a.textContent="Notes",n.appendChild(d),n.appendChild(a),t.appendChild(n),e.appendChild(t);const s=document.createElement("main");s.setAttribute("id","main");const c=document.createElement("div");c.classList.add("add-homeContainer");const o=document.createElement("h1");o.classList.add("h1-home"),o.textContent="Add a To Do";const i=document.createElement("img");i.classList.add("add-home-btn"),i.src="./images/add-button.png",c.appendChild(o),c.appendChild(i),s.appendChild(c);const l=document.createElement("div");l.classList.add("add-notesContainer");const r=document.createElement("h1");r.classList.add("h1-notes"),r.textContent="Add a note";const m=document.createElement("img");return m.classList.add("add-notes-btn"),m.src="./images/add-button.png",l.appendChild(r),l.appendChild(m),s.appendChild(l),e.appendChild(s),e}();e.appendChild(n)})(),function(){const e=document.querySelector(".list-home"),t=document.querySelector(".list-notes"),n=document.querySelector(".add-homeContainer"),d=document.querySelector(".add-notesContainer"),a=document.querySelector(".add-home-btn"),s=document.querySelector(".add-notes-btn");e.addEventListener("click",(()=>{e.classList.add("active"),t.classList.remove("active"),n.style.display="flex",d.style.display="none"})),t.addEventListener("click",(()=>{const a=document.querySelector(".form-container");t.classList.add("active"),e.classList.remove("active"),n.style.display="none",d.style.display="flex",a.style.display="none"})),a.addEventListener("click",(()=>{const e=document.querySelector(".form-container");a.classList.contains("active")?(a.classList.remove("active"),e.style.display="none"):(a.classList.add("active"),e.style.display="flex")})),s.addEventListener("click",(()=>{s.classList.contains("active")?s.classList.remove("active"):s.classList.add("active")}))}(),function(){const e=document.querySelector("#main"),t=function(){const e=document.createElement("div");return e.classList.add("form-container"),e.innerHTML='\n    <form action="" id="form">\n    <input type="text" id="name" name="name" placeholder="Your to do\'s name">\n    <button type="submit" id="submit-btn">Submit</button>\n    <div id="nameError" class="error"></div>\n</form>\n    ',e}();e.appendChild(t)}()})();