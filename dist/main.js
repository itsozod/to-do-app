(()=>{"use strict";let e=[];function t(e,t){this.name=e,this.completed=t||!1}function n(){const t=document.querySelector(".todos-container");t.innerHTML="",e.forEach((function(d,o){let s=document.createElement("div");s.classList.add("container"),s.innerHTML=`\n    <img src="images/icon-green.png" alt="icon" class="green" data-index="${o}">\n    <img src="images/icon-red.png" alt="icon" class="red" data-index="${o}">\n    <h2 class="todo ${d.completed?"completed":""}">${d.name}</h2>\n    <div class="button-container">\n      <img src="images/delete-button.png" alt="delete" class="delete-todo">\n      <img src="images/edit-button.png" alt="edit" class="todo-btn">\n    </div>\n  `,t.appendChild(s),t.style.display="flex",s.querySelector(".delete-todo").addEventListener("click",(()=>{const o=e.indexOf(d);e.splice(o,1),0===e.length&&(t.style.display="none"),n(),setTimeout((()=>{alert("Your todo has been deleted!")}),500),console.log("Your todo has been deleted!")}));const a=s.querySelector(".todo"),c=s.querySelector(`.green[data-index="${o}"]`),l=s.querySelector(`.red[data-index="${o}"]`);a.addEventListener("click",(function(){c&&l?"none"!==c.style.display?(c.style.display="none",l.style.display="block",d.completed=!0,setTimeout((()=>{alert("Todo has been marked as completed")}),500)):(c.style.display="block",l.style.display="none",d.completed=!1,setTimeout((()=>{alert("Todo has been marked as not completed")}),500)):d.completed=!d.completed,a.classList.toggle("completed")})),c.addEventListener("click",(function(){d.completed=!d.completed,c.style.display="none",l.style.display="block",a.classList.toggle("completed"),setTimeout((()=>{alert("Todo has been marked as completed")}),500)})),l.addEventListener("click",(function(){d.completed=!d.completed,c.style.display="block",l.style.display="none",a.classList.toggle("completed"),setTimeout((()=>{alert("Todo has been marked as not completed")}),500)}));const i=s.querySelector(".todo-btn");i.addEventListener("click",(function(){!function(e,t,n,d){const o=t.nextElementSibling,s=document.createElement("img");s.src="./images/add-btn.png",s.id=d,s.classList.add("add-back-btn"),n.style.display="none",o.appendChild(s);const a=document.createElement("input");a.type="text",a.classList.add("input-add"),a.value=e.name,t.replaceWith(a),a.focus(),s.addEventListener("click",(function(){e.name=a.value,n.style.display="block",s.style.display="none",t.textContent=e.name,a.replaceWith(t),setTimeout((()=>{alert("Your todo has been edited"),console.log("Your todo has been edited")}),500)}))}(d,a,i,`#add-back-btn-${o}`)})),c.style.display=d.completed?"none":"block",l.style.display=d.completed?"block":"none"}))}(function(){const e=document.querySelector("#content"),t=function(){const e=document.createElement("header");e.setAttribute("id","header");const t=document.createElement("div");t.classList.add("header-container");const n=document.createElement("h1");n.classList.add("h1-header"),n.textContent="To-Do-App";const d=document.createElement("img");return d.classList.add("checked-img"),d.src="./images/checked-image.png",t.appendChild(n),t.appendChild(d),e.appendChild(t),e}();e.appendChild(t);const n=function(){const e=document.createElement("div");e.classList.add("page-container");const t=document.createElement("navbar");t.classList.add("side-bar");const n=document.createElement("ul");n.classList.add("ul-bar");const d=document.createElement("li");d.classList.add("list-home"),d.textContent="Todos",d.classList.add("active");const o=document.createElement("li");o.classList.add("list-notes"),o.textContent="Notes",n.appendChild(d),n.appendChild(o),t.appendChild(n),e.appendChild(t);const s=document.createElement("main");s.setAttribute("id","main");const a=document.createElement("div");a.classList.add("add-homeContainer");const c=document.createElement("h1");c.classList.add("h1-home"),c.textContent="Add a To Do";const l=document.createElement("img");l.classList.add("add-home-btn"),l.src="./images/add-button.png",l.alt="Add button",a.appendChild(c),a.appendChild(l);const i=document.createElement("div");i.classList.add("form-container");const r=document.createElement("div");r.classList.add("todos-container"),s.appendChild(a),s.appendChild(i),s.appendChild(r);const m=document.createElement("div");m.classList.add("add-notesContainer");const u=document.createElement("h1");u.classList.add("h1-notes"),u.textContent="Add a note";const p=document.createElement("img");return p.classList.add("add-notes-btn"),p.src="./images/add-button.png",p.alt="Add button",m.appendChild(u),m.appendChild(p),s.appendChild(m),e.appendChild(s),e}();e.appendChild(n)})(),function(){const t=document.querySelector(".list-home"),n=document.querySelector(".list-notes"),d=document.querySelector(".add-homeContainer"),o=document.querySelector(".add-home-btn"),s=document.querySelector(".add-notesContainer"),a=document.querySelector(".add-notes-btn"),c=document.querySelector(".form-container"),l=document.querySelector(".todos-container");t.addEventListener("click",(()=>{t.classList.add("active"),n.classList.remove("active"),d.style.display="flex",a.classList.remove("active"),s.style.display="none",l.style.display="flex",0===e.length?l.style.display="none":l.style.display="flex"})),n.addEventListener("click",(()=>{t.classList.remove("active"),n.classList.add("active"),d.style.display="none",o.classList.remove("active"),s.style.display="flex",c.style.display="none",l.style.display="none"})),o.addEventListener("click",(()=>{o.classList.contains("active")?(o.classList.remove("active"),c.style.display="none"):(o.classList.add("active"),c.style.display="flex")})),a.addEventListener("click",(()=>{a.classList.contains("active")?a.classList.remove("active"):a.classList.add("active")}))}(),function(){const e=document.querySelector(".form-container"),t=function(){const e=document.createElement("form");return e.setAttribute("id","form"),e.innerHTML='\n    <input type="text" id="name" name="name" placeholder="Your to do\'s name">\n    <button type="submit" id="submit-btn">Submit</button>\n    <div id="nameError" class="error"></div>\n    ',e}();e.appendChild(t),function(){const e=document.querySelector("#form"),t=document.querySelector("#name"),n=document.querySelector("#nameError");e.addEventListener("submit",(function(e){e.preventDefault(),""===t.value?n.textContent=" * Fill the input field":n.textContent=""}))}()}(),document.querySelector("#submit-btn").addEventListener("click",(function(){let d=document.querySelector("#name").value;if(d){let o=new t(d);e.push(o),n(),setTimeout((()=>{alert("Your todo has been added!")}),500),console.log("Your todo has been added!")}}))})();