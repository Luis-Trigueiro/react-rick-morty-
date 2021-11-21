(this["webpackJsonprick-morty"]=this["webpackJsonprick-morty"]||[]).push([[0],{100:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(22),s=c.n(i),r=(c(73),c(8)),l=c(19),o=c.n(l),d=c(105),j=c(111),u=c(112),b=c(106),h=c(5),x=c(1),O=function(e){var t=e.character,c=Object(h.f)();return Object(x.jsx)(d.a,{className:"my-2",children:Object(x.jsxs)(j.a,{style:{width:"15rem"},children:[Object(x.jsx)(j.a.Img,{variant:"top",src:t.image}),Object(x.jsxs)(j.a.Body,{className:"text-center",children:[Object(x.jsx)(j.a.Title,{className:"text-center",children:t.name}),Object(x.jsxs)(u.a,{variant:"flush",children:[Object(x.jsxs)(u.a.Item,{className:"text-center",children:["Species: ",t.species]}),Object(x.jsxs)(u.a.Item,{className:"text-center",children:["Gender: ",t.gender]}),Object(x.jsxs)(u.a.Item,{className:"text-center",children:["Status: ",t.status]})]}),Object(x.jsx)(b.a,{onClick:function(){return c("/".concat(t.id))},style:{background:"black",border:"black"},children:"See more"})]})]})})},m=c(108),f=c(109),v=c(107),p=c(110),g=c.p+"static/media/logo.027363c0.png",y=function(e){var t=e.alive,c=e.dead,n=e.all,a=Object(h.f)();return Object(x.jsx)(f.a,{bg:"light",children:Object(x.jsxs)(v.a,{children:[Object(x.jsx)(f.a.Brand,{style:{cursor:"pointer"},onClick:function(){return a("/")},children:Object(x.jsx)("img",{src:g,width:"95px",className:"d-inline-block align-top",alt:"Rick and Morty logo"})}),Object(x.jsxs)(p.a,{className:"me-auto",children:[Object(x.jsx)(p.a.Link,{onClick:n,children:"All"}),Object(x.jsx)(p.a.Link,{onClick:t,children:"Alive"}),Object(x.jsx)(p.a.Link,{onClick:c,children:"Dead"})]})]})})},k=(c(101),function(){var e,t,c=Object(n.useState)([]),a=Object(r.a)(c,2),i=a[0],s=a[1],l=function(){document.body.scrollTo({top:0,behavior:"smooth"}),document.documentElement.scrollTo({top:0,behavior:"smooth"})};Object(n.useEffect)((function(){o.a.get("https://rickandmortyapi.com/api/character").then((function(e){s(e.data)}))}),[]);var d=i.results;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("header",{children:Object(x.jsx)(y,{alive:function(){return o.a.get("https://rickandmortyapi.com/api/character/?status=alive").then((function(e){s(e.data)}))},dead:function(){return o.a.get("https://rickandmortyapi.com/api/character/?status=dead").then((function(e){s(e.data)}))},all:function(){return o.a.get("https://rickandmortyapi.com/api/character").then((function(e){s(e.data)}))}})}),Object(x.jsxs)(m.a,{style:{background:"black",padding:"26px 0 0 50px"},children:[null===d||void 0===d?void 0:d.map((function(e,t){return Object(x.jsx)(O,{character:e},t)})),Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(null===i||void 0===i||null===(e=i.info)||void 0===e?void 0:e.prev)&&Object(x.jsx)(b.a,{style:{margin:"20px"},onClick:function(){var e;o.a.get(null===(e=i.info)||void 0===e?void 0:e.prev).then((function(e){s(e.data),l()}))},children:"Back"}),(null===i||void 0===i||null===(t=i.info)||void 0===t?void 0:t.next)&&Object(x.jsx)(b.a,{style:{margin:"20px"},onClick:function(){var e;o.a.get(null===(e=i.info)||void 0===e?void 0:e.next).then((function(e){s(e.data),l()}))},children:"Next"})]})]})]})}),N=function(e){var t=e.episodes,c=(Object(h.f)(),Object(n.useState)()),a=Object(r.a)(c,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){o.a.get(t).then((function(e){s(e.data)}))}),[]),console.log(t),console.log(i),Object(x.jsx)(u.a,{variant:"flush",children:Object(x.jsxs)(u.a.Item,{href:"#",children:[null===i||void 0===i?void 0:i.name,";"]})})},C=function(){var e,t=Object(h.g)().id,c=Object(n.useState)(),a=Object(r.a)(c,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){o.a.get("https://rickandmortyapi.com/api/character/".concat(t)).then((function(e){s(e.data)}))}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("header",{children:Object(x.jsx)(y,{})}),Object(x.jsx)("section",{style:{background:"black"},children:Object(x.jsx)(v.a,{style:{display:"flex",justifyContent:"center"},children:Object(x.jsxs)(j.a,{style:{width:"18rem",margin:"46px"},children:[Object(x.jsx)(j.a.Img,{variant:"top",src:null===i||void 0===i?void 0:i.image}),Object(x.jsx)(j.a.Body,{children:Object(x.jsx)(j.a.Title,{style:{textAlign:"center"},children:null===i||void 0===i?void 0:i.name})}),Object(x.jsxs)(u.a,{variant:"flush",children:[Object(x.jsxs)(u.a.Item,{className:"text-center",children:["Species: ",null===i||void 0===i?void 0:i.species]}),Object(x.jsxs)(u.a.Item,{className:"text-center",children:["Gender: ",null===i||void 0===i?void 0:i.gender]}),Object(x.jsxs)(u.a.Item,{className:"text-center",children:["Status: ",null===i||void 0===i?void 0:i.status]}),Object(x.jsxs)(u.a.Item,{className:"text-center",children:["Location: ",null===i||void 0===i||null===(e=i.location)||void 0===e?void 0:e.name]})]}),Object(x.jsxs)(j.a.Body,{children:[Object(x.jsx)("h6",{style:{textAlign:"center"},children:"Episodes:"}),null===i||void 0===i?void 0:i.episode.map((function(e,t){return Object(x.jsx)(N,{episodes:e},t)}))]})]})})})]})},I=c(67),S=function(){return Object(x.jsx)(I.a,{basename:"/react-rick-morty-",children:Object(x.jsxs)(h.c,{children:[Object(x.jsx)(h.a,{path:"/",element:Object(x.jsx)(k,{})}),",",Object(x.jsx)(h.a,{path:"/:id",element:Object(x.jsx)(C,{})})]})})};c(99),c(100);var B=function(){return Object(x.jsx)(S,{})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,113)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(B,{})}),document.getElementById("root")),E()},73:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.d1eb9c85.chunk.js.map