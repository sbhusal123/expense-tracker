(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),a=n.n(r),s=n(7),i=n.n(s),o=function(t){var e=t.title;return Object(c.jsx)("h2",{children:e})},j=n(3),u=n(8),l=n(2),b=function(t,e){switch(e.type){case"DELETE_TRANSACTION":return Object(l.a)(Object(l.a)({},t),{},{transactions:t.transactions.filter((function(t){return t.id!==e.payload}))});case"ADD_TRANSACTION":return Object(l.a)(Object(l.a)({},t),{},{transactions:[].concat(Object(u.a)(t.transactions),[e.payload])});default:return t}},d={transactions:[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}]},O=Object(r.createContext)(d),x=function(t){var e=t.children,n=Object(r.useReducer)(b,d),a=Object(j.a)(n,2),s=a[0],i=a[1];return Object(c.jsx)(O.Provider,{value:{transactions:s.transactions,dispatch:i},children:e})},h=function(){var t=Object(r.useContext)(O).transactions.map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0).toFixed(2);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{children:"Your Balance"}),Object(c.jsxs)("h1",{children:[" $",t]})]})},m=function(){var t=Object(r.useContext)(O).transactions.map((function(t){return t.amount})),e=t.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0).toFixed(2),n=t.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0)*-1..toFixed(2);return Object(c.jsxs)("div",{className:"inc-exp-container",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Income"}),Object(c.jsxs)("p",{className:"money plus",children:["$",e]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Expense"}),Object(c.jsxs)("p",{className:"money minus",children:["$",n]})]})]})};var p=function(t){var e=t.amount,n=t.id,a=t.text,s=e<0?"-":"+",i=e<0?"minus":"plus",o=Object(r.useContext)(O).dispatch;return Object(c.jsx)("div",{children:Object(c.jsxs)("li",{className:i,children:[a," ",Object(c.jsxs)("span",{children:[s,"$",Math.abs(e)]}),Object(c.jsx)("button",{className:"delete-btn",onClick:function(){return function(t,e){e({type:"DELETE_TRANSACTION",payload:t})}(n,o)},children:"X"})]})})},f=function(){var t=Object(r.useContext)(O).transactions;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"History"}),Object(c.jsx)("ul",{className:"list",children:t.map((function(t){return Object(r.createElement)(p,Object(l.a)(Object(l.a)({},t),{},{key:t.id}))}))})]})};function v(t){var e=Object(r.useState)(t),n=Object(j.a)(e,2),c=n[0],a=n[1];return[c,{value:c,onChange:function(t){a(t.target.value)}},function(){a(t)}]}var N=function(){var t=v(""),e=Object(j.a)(t,3),n=e[0],a=e[1],s=e[2],i=v(0),o=Object(j.a)(i,3),u=o[0],b=o[1],d=o[2],x=Object(r.useContext)(O),h=x.transactions,m=x.dispatch,p=function(){s(),d()};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"Add new transaction"}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==n.trim()&&0!==u?(!function(t,e){e({type:"ADD_TRANSACTION",payload:t})}({id:h.length+1,amount:+u,text:n},m),p()):alert("Invalid Transaction")},children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{htmlFor:"text",children:"Text"}),Object(c.jsx)("input",Object(l.a)(Object(l.a)({type:"text"},a),{},{placeholder:"Enter text.."}))]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(c.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(c.jsx)("input",Object(l.a)(Object(l.a)({type:"number"},b),{},{placeholder:"Enter amount.."}))]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"btn",children:" Add Transaction"}),Object(c.jsxs)("button",{className:"btn",type:"button",onClick:function(){return p()},style:{background:"red"},children:[" ","Clear"]})]})]})]})};n(14);var y=function(){return Object(c.jsxs)(x,{children:[Object(c.jsx)(o,{title:"Expense Tracker App"}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(h,{}),Object(c.jsx)(m,{}),Object(c.jsx)(f,{}),Object(c.jsx)(N,{})]})]})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.094d9c9e.chunk.js.map