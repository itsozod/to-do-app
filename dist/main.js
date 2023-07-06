(()=>{"use strict";function e(){const e=document.querySelector("#toggleDark"),t=document.querySelector("body"),n=document.querySelector(".h1-header"),o=document.querySelector(".h1-home"),d=document.querySelector(".h1-notes");e.classList.toggle("bi-moon-fill"),e.classList.toggle("bi-brightness-high-fill")?(e.style.color="goldenrod",n.style.color="black",n.style.textShadow="2px 2px 5px white",o.style.color="black",o.style.textShadow="2px 2px 5px white",d.style.color="black",d.style.textShadow="2px 2px 5px white",t.style.setProperty("--before-opacity","1"),localStorage.setItem("mode","light")):(e.style.color="#1a193a",n.style.color="white",n.style.textShadow="2px 2px 5px black",o.style.color="yellow",o.style.textShadow="2px 2px 2px black",d.style.color="yellow",d.style.textShadow="2px 2px 2px black",t.style.setProperty("--before-opacity","0"),t.style.backgroundColor="#1a193a",localStorage.setItem("mode","dark"))}function t(){const e=document.querySelector(".line1"),t=document.querySelector(".line2"),n=document.querySelector(".line3"),o=document.querySelector(".side-bar"),d=document.querySelector(".add-home-btn"),s=document.querySelector(".add-notes-btn"),c=document.querySelector(".form-container"),a=document.querySelector(".form-container1");e.classList.contains("active")&&n.classList.contains("active")?setTimeout((()=>{e.classList.remove("active"),t.style.opacity="1",n.classList.remove("active"),o.style.display="none"}),500):(setTimeout((()=>{e.classList.add("active"),t.style.opacity="0",n.classList.add("active"),o.style.display="flex"}),500),d.classList.remove("active"),c.style.display="none",s.classList.remove("active"),a.style.display="none")}let n=JSON.parse(localStorage.getItem("todo"))||[];function o(e,t){this.name=e,this.completed=t||!1}function d(){const e=document.querySelector(".todos-container");e.innerHTML="",n.forEach((function(t,o){let c=document.createElement("div");c.classList.add("container"),c.innerHTML=`\n    <img src="images/icon-green.png" alt="icon" class="green" data-index="${o}">\n    <img src="images/icon-red.png" alt="icon" class="red" data-index="${o}">\n    <h2 class="todo ${t.completed?"completed":""}">${t.name}</h2>\n    <div class="button-container">\n      <img src="images/delete-button.png" alt="delete" class="delete-todo">\n      <img src="images/edit-button.png" alt="edit" class="todo-btn">\n    </div>\n  `,e.appendChild(c),e.style.display="flex",c.querySelector(".delete-todo").addEventListener("click",(()=>{const o=n.indexOf(t);n.splice(o,1),0===n.length&&(e.style.display="none"),d(),setTimeout((()=>{alert("Your todo has been deleted!")}),500),console.log("Your todo has been deleted!"),s()}));const a=c.querySelector(".todo"),l=c.querySelector(`.green[data-index="${o}"]`),i=c.querySelector(`.red[data-index="${o}"]`);a.addEventListener("click",(function(){l&&i?"none"!==l.style.display?(l.style.display="none",i.style.display="block",t.completed=!0,setTimeout((()=>{alert("Todo has been marked as completed")}),500)):(l.style.display="block",i.style.display="none",t.completed=!1,setTimeout((()=>{alert("Todo has been marked as not completed")}),500)):t.completed=!t.completed,a.classList.toggle("completed"),s()})),l.addEventListener("click",(function(){t.completed=!t.completed,l.style.display="none",i.style.display="block",a.classList.toggle("completed"),setTimeout((()=>{alert("Todo has been marked as completed")}),500),s()})),i.addEventListener("click",(function(){t.completed=!t.completed,l.style.display="block",i.style.display="none",a.classList.toggle("completed"),setTimeout((()=>{alert("Todo has been marked as not completed")}),500),s()}));const r=c.querySelector(".todo-btn");r.addEventListener("click",(function(){!function(e,t,n,o){const d=t.nextElementSibling,c=document.createElement("img");c.src="./images/add-btn.png",c.id=o,c.classList.add("add-back-btn"),n.style.display="none",d.appendChild(c);const a=document.createElement("input");a.type="text",a.classList.add("input-add"),a.value=e.name,t.replaceWith(a),a.focus(),c.addEventListener("click",(function(){e.name=a.value,n.style.display="block",c.style.display="none",t.textContent=e.name,a.replaceWith(t),setTimeout((()=>{alert("Your todo has been edited"),console.log("Your todo has been edited")}),500),t.addEventListener("click",(function(){!function(e,t){e.completed=!e.completed,t.classList.toggle("completed"),s()}(e,t)})),s()}))}(t,a,r,`#add-back-btn-${o}`)})),l.style.display=t.completed?"none":"block",i.style.display=t.completed?"block":"none"}))}function s(){localStorage.setItem("todo",JSON.stringify(n))}let c=[];function a(e,t){this.description=e,this.noteName=t}function l(){const e=document.querySelector(".notes-container");e.innerHTML="",c.forEach((function(t){let n=document.createElement("div");n.classList.add("notes"),n.innerHTML=`\n        <div class="note-content">\n          <div class="desc-container">\n            <img src="./images/delete-button.png" alt="delete" class="delete-note">\n          </div>\n          <textarea class="description">${t.description}</textarea>\n          <textarea class="note-name">${t.noteName}</textarea>\n        </div>\n      `,e.appendChild(n),n.querySelector(".delete-note").addEventListener("click",(()=>{const e=c.indexOf(t);c.splice(e,1),l(),setTimeout((()=>{alert("Your note has been deleted")}),500),console.log("Your note has been deleted")}))}))}(function(){const e=document.querySelector("#content"),n=function(){const e=document.createElement("header");e.setAttribute("id","header");const t=document.createElement("div");t.classList.add("lines");const n=document.createElement("div");n.classList.add("line1");const o=document.createElement("div");o.classList.add("line2");const d=document.createElement("div");d.classList.add("line3"),t.appendChild(n),t.appendChild(o),t.appendChild(d);const s=document.createElement("div");s.classList.add("header-container");const c=document.createElement("h1");c.classList.add("h1-header"),c.textContent="To-Do-App";const a=document.createElement("i");a.setAttribute("id","toggleDark"),a.classList.add("bi-brightness-high-fill");const l=document.createElement("img");return l.classList.add("checked-img"),l.src="./images/checked-image.png",s.appendChild(c),s.appendChild(l),e.appendChild(t),e.appendChild(s),e.appendChild(a),e}();e.appendChild(n);const o=function(){const e=document.createElement("div");e.classList.add("page-container");const t=document.createElement("navbar");t.classList.add("side-bar");const n=document.createElement("ul");n.classList.add("ul-bar");const o=document.createElement("li");o.classList.add("list-home"),o.textContent="Todos",o.classList.add("active");const d=document.createElement("li");d.classList.add("list-notes"),d.textContent="Notes",n.appendChild(o),n.appendChild(d),t.appendChild(n),e.appendChild(t);const s=document.createElement("main");s.setAttribute("id","main");const c=document.createElement("div");c.classList.add("main-add-home");const a=document.createElement("div");a.classList.add("add-homeContainer"),c.appendChild(a);const l=document.createElement("h1");l.classList.add("h1-home"),l.textContent="Add a To Do";const i=document.createElement("img");i.classList.add("add-home-btn"),i.src="./images/add-button.png",i.alt="Add button",a.appendChild(l),a.appendChild(i);const r=document.createElement("div");r.classList.add("main-home-form");const m=document.createElement("div");m.classList.add("form-container"),r.appendChild(m);const u=document.createElement("div");u.classList.add("main-todos");const p=document.createElement("div");p.classList.add("todos-container"),u.appendChild(p),s.appendChild(c),s.appendChild(r),s.appendChild(u);const y=document.createElement("div");y.classList.add("main-add-notes");const h=document.createElement("div");h.classList.add("add-notesContainer"),y.appendChild(h);const v=document.createElement("h1");v.classList.add("h1-notes"),v.textContent="Add a note";const b=document.createElement("img");b.classList.add("add-notes-btn"),b.src="./images/add-button.png",b.alt="Add button",h.appendChild(v),h.appendChild(b),s.appendChild(y);const L=document.createElement("div");L.classList.add("main-notes-form");const g=document.createElement("div");g.classList.add("form-container1"),L.appendChild(g);const f=document.createElement("div");f.classList.add("main-notes-container");const S=document.createElement("div");return S.classList.add("notes-container"),f.appendChild(S),s.appendChild(L),s.appendChild(f),e.appendChild(s),e}();e.appendChild(o),document.querySelector(".lines").addEventListener("click",t)})(),function(){const e=document.querySelector(".list-home"),t=document.querySelector(".list-notes"),o=document.querySelector(".add-homeContainer"),d=document.querySelector(".add-home-btn"),s=document.querySelector(".add-notesContainer"),c=document.querySelector(".add-notes-btn"),a=document.querySelector(".form-container"),l=document.querySelector(".form-container1"),i=document.querySelector(".todos-container"),r=document.querySelector(".notes-container");e.addEventListener("click",(()=>{e.classList.add("active"),t.classList.remove("active"),o.style.display="flex",c.classList.remove("active"),s.style.display="none",l.style.display="none",r.style.display="none",i.style.display="flex",0===n.length?i.style.display="none":i.style.display="flex"})),t.addEventListener("click",(()=>{e.classList.remove("active"),t.classList.add("active"),o.style.display="none",d.classList.remove("active"),s.style.display="flex",a.style.display="none",i.style.display="none",r.style.display="grid"})),d.addEventListener("click",(()=>{d.classList.contains("active")?(d.classList.remove("active"),a.style.display="none"):(d.classList.add("active"),a.style.display="flex")})),c.addEventListener("click",(()=>{c.classList.contains("active")?(c.classList.remove("active"),l.style.display="none"):(c.classList.add("active"),l.style.display="flex")}))}(),function(){const e=document.querySelector(".form-container"),t=function(){const e=document.createElement("form");return e.setAttribute("id","form"),e.innerHTML='\n    <input type="text" id="name" name="name" placeholder="Your to do\'s name">\n    <button type="submit" id="submit-btn">Submit</button>\n    <div id="nameError" class="error"></div>\n    ',e}();e.appendChild(t);const n=document.querySelector(".form-container1"),o=function(){const e=document.createElement("form");return e.setAttribute("id","form1"),e.innerHTML='\n    <textarea id="note" name="name" placeholder="Your notes\'s description"></textarea>\n    <textarea id="noteName" name="name" placeholder="Your notes\'s name"></textarea>\n    <button type="submit" id="submit-btn1">Submit</button>\n    <div id="noteError" class="error"></div>\n    ',e}();n.appendChild(o),function(){const e=document.querySelector("#form"),t=document.querySelector("#name"),n=document.querySelector("#nameError");e.addEventListener("submit",(function(e){e.preventDefault(),""===t.value?n.textContent=" * Fill the input field":n.textContent=""}))}(),function(){const e=document.querySelector("#form1"),t=document.querySelector("#note"),n=document.querySelector("#noteName"),o=document.querySelector("#noteError");e.addEventListener("submit",(function(e){e.preventDefault(),""===t.value?o.textContent=" * Fill the textarea fields":o.textContent="",""===n.value?o.textContent=" * Fill the textarea fields":o.textContent=""}))}()}(),document.querySelector("#submit-btn").addEventListener("click",(function(){let e=document.querySelector("#name").value;if(e){let t=new o(e);n.push(t),d(),setTimeout((()=>{alert("Your todo has been added!")}),500),s(),console.log("Your todo has been added!")}})),d(),document.querySelector("#submit-btn1").addEventListener("click",(function(){let e=document.querySelector("#note").value,t=document.querySelector("#noteName").value;if(t){let n=new a(e,t);c.push(n),l(),setTimeout((()=>{alert("Your note has been added")}),500),console.log("Your note has been added")}})),document.querySelector("#toggleDark").addEventListener("click",e),"dark"===localStorage.getItem("mode")&&e()})();