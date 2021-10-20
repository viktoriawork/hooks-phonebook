(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{20:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var a,o,r,i,c=t(0),l=t.n(c),s=t(11),d=t.n(s),b=(t(20),t(15)),u=t(4),m=t(26),p=t(2),f=t(3),j=f.a.form(a||(a=Object(p.a)(['\n  \ndisplay:flex;\nflex-direction:column;\nalign-items:center;\n  .form-label {\n    display: block;\n    text-align:center;\n    margin-bottom: 10px;\n    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;\n    font-weight: 500;\n    font-size: 20px;\n    color: #f3f3f3;\n  }\n  .form-input {\n    display: block;\n    padding: 5px;\n    text-align: center;\n    margin: 0 auto;\n    color: #636161;\n    outline: none;\n  }\n\n  input:focus {\n    box-shadow: 1px 1px 2px 0 #12bcb0;\n    border: 1px solid #dbd9d9;\n  }\n\n  .addBtn {\n\n    margin-top: 20px;\n    padding: 5px;\n    background-color: white;\n    border-color:white;\n    border-radius: 5px;\n    font-weight: 700;\n    color: #8b1455;\n\n    &:hover,\n    &:focus {\n      box-shadow: 1px 1px 2px 0 #0b2349;\n    }\n  }\n\n']))),x=t(1),h=function(n){var e=n.onSubmit,t=Object(c.useState)(""),a=Object(u.a)(t,2),o=a[0],r=a[1],i=Object(c.useState)(""),l=Object(u.a)(i,2),s=l[0],d=l[1],b=function(n){n.preventDefault(),e({name:o,number:s,id:Object(m.a)()}),r(""),d("")},p=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":d(a);break;default:return}};return Object(x.jsxs)(j,{onSubmit:b,method:"post",children:[Object(x.jsxs)("label",{className:"form-label",children:["Name",Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"form-input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:p,value:o})]}),Object(x.jsxs)("label",{className:"form-label",children:["Number",Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"form-input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:p,value:s})]}),o&&Object(x.jsx)("button",{type:"submit",className:"addBtn",onClick:b,children:"Add contact"})]})},g=f.a.ul(o||(o=Object(p.a)(["\nmargin-top: 30px;\n.item {\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n}\np {\n  display: inline-block;\n  margin-right: 20px;\n}\n\n.name {\n  color: #f0f1f3;\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.number {\n  color:#f0f1f3;\n  font-weight: 600;\n  font-size: 17px;\n}\n\n.delBtn {\n\n  margin-left: auto;\n  padding: 5px;\n  color:#8b1455;\n  border-color:8b1455;\n  background-color:#f0f1f3;\n  border-radius: 5px;\n  font-weight: 700;\n  &:hover,\n  &:focus {\n    box-shadow: 1px 1px 3px 0 #8b1455;\n  }\n}\n"]))),O=function(n){var e=n.getVisibleContacts,t=n.onDeleteContactById,a=function(n){return t(n.target.id)};return Object(x.jsx)(g,{children:e().map((function(n){var e=n.name,t=n.number,o=n.id;return Object(x.jsx)("li",{className:"item",children:Object(x.jsxs)("div",{className:"name",children:[Object(x.jsxs)("p",{className:"number",children:[e," ",t]}),Object(x.jsx)("button",{className:"delBtn",type:"button",id:o,onClick:a,children:"delete"})]})},o)}))})},w=f.a.div(r||(r=Object(p.a)(["\ntext-align: center;\n\n.form-title {\n  color: white;\n  margin-bottom: 10px;\n}\n\n.finde-input {\n  display: block;\n  padding: 5px;\n  text-align: center;\n  margin: 0 auto;\n  color: #bc0dad;\n  outline: none;\n}\n\ninput:focus {\n  box-shadow: 1px 1px 2px 0 #bc0dad;\n  border: 1px solid #bc0dad;\n}\n"]))),C=function(n){var e=n.onChangeFilter,t=n.filter;return Object(x.jsx)(w,{children:Object(x.jsxs)("label",{className:"form-title",children:["Find contacts by name",Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"finde-input",value:t,onChange:e,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})})},v=f.a.section(i||(i=Object(p.a)(["\n\n\n  .title {\n    text-align: center;\n  }\n"]))),k=function(n){var e=n.title,t=n.children;return Object(x.jsxs)(v,{children:[Object(x.jsx)("h2",{className:"title",children:e}),t]})},N=function(){var n=Object(c.useState)((function(){return JSON.parse(window.localStorage.getItem("contacts"))||[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]})),e=Object(u.a)(n,2),t=e[0],a=e[1],o=Object(c.useState)(""),r=Object(u.a)(o,2),i=r[0],l=r[1];Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(t))}),[t]);return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(k,{title:"Phonebook",children:Object(x.jsx)(h,{onSubmit:function(n){t.some((function(e){return e.name.toLocaleLowerCase()===n.name.toLocaleLowerCase()}))?alert("".concat(n.name," is already in contacts.")):a((function(e){return[].concat(Object(b.a)(e),[n])}))}})}),Object(x.jsxs)(k,{title:"Contacts",children:[Object(x.jsx)(C,{onChangeFilter:function(n){var e=n.target.value;l(e)},filter:i}),Object(x.jsx)(O,{getVisibleContacts:function(){return t.filter((function(n){return n.name.toLocaleLowerCase().includes(i.toLocaleLowerCase())}))},contacts:t,onDeleteContactById:function(n){a((function(e){return e.filter((function(e){return e.id!==n}))}))}})]})]})};d.a.render(Object(x.jsx)(l.a.StrictMode,{children:Object(x.jsx)(N,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.ba579120.chunk.js.map