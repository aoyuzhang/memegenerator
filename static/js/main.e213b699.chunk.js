(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),l=function(){return a.a.createElement("header",null,a.a.createElement("h1",null,"Simple meme generator"))},m=n(2),u=n(1);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var s=function(){var e=Object(r.useState)({topText:"",bottomText:""}),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)("https://i.imgflip.com/26am/jpg"),l=Object(u.a)(c,2),s=l[0],p=l[1],b=Object(r.useState)([]),f=Object(u.a)(b,2),O=f[0],g=f[1],h=function(e){o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,Object(m.a)({},e.target.name,e.target.value)))};return Object(r.useEffect)((function(){console.log("test run"),fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){return g(e.data.memes)}))}),[]),console.log(Object(r.useState)("hello")),a.a.createElement("div",{className:"meme-container"},a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("submitted");var t=Math.floor(Math.random()*O.length),n=O[t].url;p(n)}},a.a.createElement("input",{type:"text",name:"topText",placeholder:"Add Top Text",value:n.topText,onChange:h}),a.a.createElement("input",{type:"text",name:"bottomText",placeholder:"Add Bottom Text",value:n.bottomText,onChange:h}),a.a.createElement("button",null," Generate")),a.a.createElement("div",{className:"meme"},a.a.createElement("img",{src:s,alt:""}),a.a.createElement("h2",{className:"top"},n.topText),a.a.createElement("h2",{className:"bottom"},n.bottomText)))},p=function(){return a.a.createElement("div",null,a.a.createElement(l,null),a.a.createElement(s,null))};n(10);c.a.render(a.a.createElement(p,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.e213b699.chunk.js.map