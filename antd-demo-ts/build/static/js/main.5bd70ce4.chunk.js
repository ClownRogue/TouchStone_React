(this["webpackJsonpantd-demo-ts"]=this["webpackJsonpantd-demo-ts"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),i=n(2),s=n.n(i),a=(n(13),n.p+"static/media/logo.6ce24c58.svg"),o=(n(14),n(3)),l=n(4),d=n(8),u="ADD_TODO",p="TOGGLE_TODO",b="SET_VISIBILITY_FILTER";function h(t){return{type:u,text:t}}function j(t){return{type:p,index:t}}function f(t){return{type:b,filter:t}}var g="SHOW_ALL";var v=Object(l.a)({visibilityFilter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return e.filter;default:return t}},todos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return[].concat(Object(d.a)(t),[{text:e.text,completed:!1}]);case p:return t.map((function(t,n){return n===e.index?Object.assign({},t,{completed:!t.completed}):t}));default:return t}}}),O=n(1),x=Object(l.b)(v);console.log(x.getState());var m=x.subscribe((function(){return console.log(x.getState())}));x.dispatch(h("Learn about actions")),x.dispatch(h("Learn about reducers")),x.dispatch(h("Learn about store")),x.dispatch(j(0)),x.dispatch(j(1)),m();var L=1,y=function(){x.dispatch(f(L++))},F=Object(o.b)((function(t){return console.log(t),{visibilityFilter:t.visibilityFilter}}))((function(t){var e=t.visibilityFilter,n=t.text;return Object(O.jsxs)("div",{children:[e,"  ",n]})}));var T=function(){return Object(O.jsx)(o.a,{store:x,children:Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("img",{src:a,className:"App-logo",alt:"logo"}),Object(O.jsxs)("p",{onClick:y,children:["Edit ",Object(O.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(O.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(O.jsx)(F,{text:"222"})]})})})},A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),i(t),s(t)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),A()}},[[22,1,2]]]);
//# sourceMappingURL=main.5bd70ce4.chunk.js.map