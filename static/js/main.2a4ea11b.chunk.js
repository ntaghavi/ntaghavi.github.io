(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{21:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(15),r=n.n(i),l=(n(21),n(8)),a=n(0),j=function(){return Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)("h1",{children:"Nazanin Taghavi"}),Object(a.jsxs)("div",{className:"links",children:[Object(a.jsx)(l.b,{to:"/",children:"Home"}),Object(a.jsx)(l.b,{to:"/contact",children:"Contact"}),Object(a.jsx)(l.b,{to:"/create",style:{color:"white",backgroundColor:"#7d17b8",borderRadius:"8px"},children:"Resume"})]})]})},b=function(){return Object(a.jsxs)("div",{className:"intro",children:[Object(a.jsx)("h2",{children:"A brief Introduction"}),Object(a.jsx)("img",{src:"C:\\Users\\Nazanin\\Documents\\Resume\\resume\\profile.jpg",alt:"",className:"intro-profile"}),Object(a.jsxs)("p",{className:"intro-text",children:["Hi! My name is ",Object(a.jsx)("b",{children:"Nazanin Taghavi"}),". Thanks for checking out my resume :)",Object(a.jsx)("br",{}),"For a brief introduction, I've studied ",Object(a.jsx)("b",{children:"Computer Engineering"}),"in ",Object(a.jsx)("b",{children:"AmirKabir University of Technology"}),".",Object(a.jsx)("br",{}),"My main focus was AI but I self studied Web Development as well. Currently I've been working in ",Object(a.jsx)("b",{children:"HasebGostar Corp."})," as ",Object(a.jsx)("b",{children:"React Developer"})," and ",Object(a.jsx)("b",{children:"AI engineer"}),". Anyway here's my set of skills..."]})]})},o=function(e){var t=e.skills,n=e.title;return Object(a.jsxs)("div",{className:"skill-list",children:[Object(a.jsx)("h2",{children:n}),t.map((function(e){return Object(a.jsx)("div",{className:"skill-preview",children:Object(a.jsxs)(l.b,{to:"/skills/".concat(e.id),children:[Object(a.jsx)("h2",{children:e.title}),Object(a.jsxs)("p",{children:["Skill Class: ",e.class]})]})},e.id)}))]})},d=n(4),u=function(e){var t=Object(c.useState)(null),n=Object(d.a)(t,2),s=n[0],i=n[1],r=Object(c.useState)(!0),l=Object(d.a)(r,2),a=l[0],j=l[1],b=Object(c.useState)(null),o=Object(d.a)(b,2),u=o[0],h=o[1];return Object(c.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("Could not fetch data");return e.json()})).then((function(e){i(e),j(!1),h(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch abort"):(j(!1),h(e.message))})),function(){return t.abort()}}),[e]),{data:s,isPending:a,error:u}},h=function(){var e=u("http://localhost:3000/skills"),t=e.data,n=e.isPending,c=e.error;return Object(a.jsxs)("div",{className:"home",children:[c&&Object(a.jsx)("div",{children:c}),n&&Object(a.jsx)("div",{children:"Loading ..."}),Object(a.jsx)(b,{}),t&&Object(a.jsxs)("div",{className:"skill-sect",children:[Object(a.jsx)(o,{skills:t.filter((function(e){return"Web Development"===e.class})),title:"My Web Skills"})," "]}),t&&Object(a.jsx)("div",{className:"skill-sect",children:Object(a.jsx)(o,{skills:t.filter((function(e){return"AI"===e.class})),title:"My AI Skills"})})]})},O=n(2),x=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),r=Object(d.a)(i,2),l=r[0],j=r[1],b=Object(c.useState)(!1),o=Object(d.a)(b,2),u=o[0],h=o[1];return Object(a.jsxs)("div",{className:"contact",children:[Object(a.jsx)("h2",{children:"Feel free to be in touch with me!"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={sender:n,message:l};h(!0),fetch("http://localhost:3000/comments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){h(!1)}))},children:[Object(a.jsx)("label",{children:"Your Name:"}),Object(a.jsx)("input",{type:"text",required:!0,value:n,onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("label",{children:"Your Message:"}),Object(a.jsx)("textarea",{required:!0,value:l,onChange:function(e){return j(e.target.value)}}),!u&&Object(a.jsx)("button",{children:"Submit"}),u&&Object(a.jsx)("button",{children:"Sending Message ..."})]})]})},f=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),r=Object(d.a)(i,2),l=r[0],j=r[1],b=Object(c.useState)(""),o=Object(d.a)(b,2),u=o[0],h=o[1],x=Object(c.useState)("AI"),f=Object(d.a)(x,2),v=f[0],m=f[1],p=Object(c.useState)(!1),g=Object(d.a)(p,2),k=g[0],S=g[1],y=Object(O.f)();return Object(a.jsxs)("div",{className:"create",children:[Object(a.jsx)("h2",{children:"Add new Skills (admin mode)"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:n,cls:v,body:u};S(!0),fetch("http://localhost:3000/skills",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("new skill added"),S(!1),y.push("/")}))},children:[Object(a.jsx)("label",{children:"Admin Password"}),Object(a.jsx)("input",{type:"password",required:!0,value:l,onChange:function(e){return j(e.target.value)}}),Object(a.jsx)("label",{children:"Skill Title:"}),Object(a.jsx)("input",{type:"text",required:!0,value:n,onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("label",{children:"Skill Description:"}),Object(a.jsx)("textarea",{required:!0,value:u,onChange:function(e){return h(e.target.value)}}),Object(a.jsx)("label",{children:"Skill Class:"}),Object(a.jsxs)("select",{value:v,onChange:function(e){return m(e.target.value)},children:[Object(a.jsx)("option",{value:"AI",children:"AI"}),Object(a.jsx)("option",{value:"Web Development",children:"Web Development"})]}),!k&&Object(a.jsx)("button",{children:"Add Skill"}),k&&Object(a.jsx)("button",{children:"Adding Skill ..."})]})]})},v=function(){var e=Object(O.g)().id,t=u("http://localhost:3000/skills/"+e),n=t.data,c=t.isPending,s=t.error;Object(O.f)();return Object(a.jsxs)("div",{className:"skill-details",children:[c&&Object(a.jsx)("div",{children:"Loading ... "}),s&&Object(a.jsx)("div",{children:"Loading ... "}),n&&Object(a.jsxs)("article",{children:[Object(a.jsx)("h2",{children:n.title}),Object(a.jsx)("p",{children:"Written by Me!"}),Object(a.jsx)("div",{children:n.body})]})]})};var m=function(){return Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{}),Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)(O.c,{children:[Object(a.jsx)(O.a,{exact:!0,path:"/",children:Object(a.jsx)(h,{})}),Object(a.jsx)(O.a,{path:"/create",children:Object(a.jsx)(f,{})}),Object(a.jsx)(O.a,{path:"/contact",children:Object(a.jsx)(x,{})}),Object(a.jsx)(O.a,{path:"/skills/:id",children:Object(a.jsx)(v,{})})]})})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),p()}},[[31,1,2]]]);
//# sourceMappingURL=main.2a4ea11b.chunk.js.map