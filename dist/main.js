(()=>{"use strict";let e=[];function t(e,t){this.name=e,this.completed=t||!1}function n(){const t=document.querySelector(".todos-container");t.innerHTML="",e.forEach((function(o,d){let a=document.createElement("div");a.classList.add("container"),a.innerHTML=`\n    <img src="images/icon-green.png" alt="icon" class="green" data-index="${d}">\n    <img src="images/icon-red.png" alt="icon" class="red" data-index="${d}">\n    <h2 class="todo ${o.completed?"completed":""}">${o.name}</h2>\n    <div class="button-container">\n      <img src="images/delete-button.png" alt="delete" class="delete-todo">\n      <img src="images/edit-button.png" alt="edit" class="todo-btn">\n    </div>\n  `,t.appendChild(a),t.style.display="flex",a.querySelector(".delete-todo").addEventListener("click",(()=>{const d=e.indexOf(o);e.splice(d,1),0===e.length&&(t.style.display="none"),n(),setTimeout((()=>{alert("Your todo has been deleted!")}),500),console.log("Your todo has been deleted!")}));const s=a.querySelector(".todo"),c=a.querySelector(`.green[data-index="${d}"]`),l=a.querySelector(`.red[data-index="${d}"]`);s.addEventListener("click",(function(){c&&l?"none"!==c.style.display?(c.style.display="none",l.style.display="block",o.completed=!0,setTimeout((()=>{alert("Todo has been marked as completed")}),500)):(c.style.display="block",l.style.display="none",o.completed=!1,setTimeout((()=>{alert("Todo has been marked as not completed")}),500)):o.completed=!o.completed,s.classList.toggle("completed")})),c.addEventListener("click",(function(){o.completed=!o.completed,c.style.display="none",l.style.display="block",s.classList.toggle("completed"),setTimeout((()=>{alert("Todo has been marked as completed")}),500)})),l.addEventListener("click",(function(){o.completed=!o.completed,c.style.display="block",l.style.display="none",s.classList.toggle("completed"),setTimeout((()=>{alert("Todo has been marked as not completed")}),500)}));const i=a.querySelector(".todo-btn");i.addEventListener("click",(function(){!function(e,t,n,o){const d=t.nextElementSibling,a=document.createElement("img");a.src="./images/add-btn.png",a.id=o,a.classList.add("add-back-btn"),n.style.display="none",d.appendChild(a);const s=document.createElement("input");s.type="text",s.classList.add("input-add"),s.value=e.name,t.replaceWith(s),s.focus(),a.addEventListener("click",(function(){e.name=s.value,n.style.display="block",a.style.display="none",t.textContent=e.name,s.replaceWith(t),setTimeout((()=>{alert("Your todo has been edited"),console.log("Your todo has been edited")}),500)}))}(o,s,i,`#add-back-btn-${d}`)})),c.style.display=o.completed?"none":"block",l.style.display=o.completed?"block":"none"}))}let o=[];function d(e,t){this.description=e,this.noteName=t}(function(){const e=document.querySelector("#content"),t=function(){const e=document.createElement("header");e.setAttribute("id","header");const t=document.createElement("div");t.classList.add("header-container");const n=document.createElement("h1");n.classList.add("h1-header"),n.textContent="To-Do-App";const o=document.createElement("img");return o.classList.add("checked-img"),o.src="./images/checked-image.png",t.appendChild(n),t.appendChild(o),e.appendChild(t),e}();e.appendChild(t);const n=function(){const e=document.createElement("div");e.classList.add("page-container");const t=document.createElement("navbar");t.classList.add("side-bar");const n=document.createElement("ul");n.classList.add("ul-bar");const o=document.createElement("li");o.classList.add("list-home"),o.textContent="Todos",o.classList.add("active");const d=document.createElement("li");d.classList.add("list-notes"),d.textContent="Notes",n.appendChild(o),n.appendChild(d),t.appendChild(n),e.appendChild(t);const a=document.createElement("main");a.setAttribute("id","main");const s=document.createElement("div");s.classList.add("add-homeContainer");const c=document.createElement("h1");c.classList.add("h1-home"),c.textContent="Add a To Do";const l=document.createElement("img");l.classList.add("add-home-btn"),l.src="./images/add-button.png",l.alt="Add button",s.appendChild(c),s.appendChild(l);const i=document.createElement("div");i.classList.add("form-container");const r=document.createElement("div");r.classList.add("todos-container"),a.appendChild(s),a.appendChild(i),a.appendChild(r);const m=document.createElement("div");m.classList.add("add-notesContainer");const u=document.createElement("h1");u.classList.add("h1-notes"),u.textContent="Add a note";const p=document.createElement("img");p.classList.add("add-notes-btn"),p.src="./images/add-button.png",p.alt="Add button",m.appendChild(u),m.appendChild(p),a.appendChild(m);const y=document.createElement("div");y.classList.add("form-container1");const h=document.createElement("div");return h.classList.add("notes-container"),a.appendChild(y),a.appendChild(h),e.appendChild(a),e}();e.appendChild(n)})(),function(){const t=document.querySelector(".list-home"),n=document.querySelector(".list-notes"),o=document.querySelector(".add-homeContainer"),d=document.querySelector(".add-home-btn"),a=document.querySelector(".add-notesContainer"),s=document.querySelector(".add-notes-btn"),c=document.querySelector(".form-container"),l=document.querySelector(".form-container1"),i=document.querySelector(".todos-container");t.addEventListener("click",(()=>{t.classList.add("active"),n.classList.remove("active"),o.style.display="flex",s.classList.remove("active"),a.style.display="none",l.style.display="none",i.style.display="flex",0===e.length?i.style.display="none":i.style.display="flex"})),n.addEventListener("click",(()=>{t.classList.remove("active"),n.classList.add("active"),o.style.display="none",d.classList.remove("active"),a.style.display="flex",c.style.display="none",i.style.display="none"})),d.addEventListener("click",(()=>{d.classList.contains("active")?(d.classList.remove("active"),c.style.display="none"):(d.classList.add("active"),c.style.display="flex")})),s.addEventListener("click",(()=>{s.classList.contains("active")?(s.classList.remove("active"),l.style.display="none"):(s.classList.add("active"),l.style.display="flex")}))}(),function(){const e=document.querySelector(".form-container"),t=function(){const e=document.createElement("form");return e.setAttribute("id","form"),e.innerHTML='\n    <input type="text" id="name" name="name" placeholder="Your to do\'s name">\n    <button type="submit" id="submit-btn">Submit</button>\n    <div id="nameError" class="error"></div>\n    ',e}();e.appendChild(t);const n=document.querySelector(".form-container1"),o=function(){const e=document.createElement("form");return e.setAttribute("id","form1"),e.innerHTML='\n    <textarea id="note" name="name" placeholder="Your notes\'s description"></textarea>\n    <textarea id="noteName" name="name" placeholder="Your notes\'s name"></textarea>\n    <button type="submit" id="submit-btn1">Submit</button>\n    <div id="noteError" class="error"></div>\n    ',e}();n.appendChild(o),function(){const e=document.querySelector("#form"),t=document.querySelector("#name"),n=document.querySelector("#nameError");e.addEventListener("submit",(function(e){e.preventDefault(),""===t.value?n.textContent=" * Fill the input field":n.textContent=""}))}(),function(){const e=document.querySelector("#form1"),t=document.querySelector("#note"),n=document.querySelector("#noteName"),o=document.querySelector("#noteError");e.addEventListener("submit",(function(e){e.preventDefault(),""===t.value?o.textContent=" * Fill the textarea fields":o.textContent="",""===n.value?o.textContent=" * Fill the textarea fields":o.textContent=""}))}()}(),document.querySelector("#submit-btn").addEventListener("click",(function(){let o=document.querySelector("#name").value;if(o){let d=new t(o);e.push(d),n(),setTimeout((()=>{alert("Your todo has been added!")}),500),console.log("Your todo has been added!")}})),document.querySelector("#submit-btn1").addEventListener("click",(function(){let e=document.querySelector("#note").value,t=document.querySelector("#noteName").value;if(t){let n=new d(e,t);o.push(n),function(){const e=document.querySelector(".notes-container");e.innerHTML="",o.forEach((t=>{let n=document.createElement("div");n.classList.add("notes"),n.innerHTML=`\n        <textarea class="description">${t.description}</textarea>\n        <textarea class="note-name">${t.noteName}</textarea>\n        `,e.appendChild(n)}))}()}}))})();