(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{2:function(e){e.exports=JSON.parse('{"data":[{"question":"Which of the following is the major element in earth crust?","choices":["Silicon","Oxygen","Iron","Aluminium"],"answer":"Oxygen"},{"question":"Which among the following country is known as \u201cLand of White Elephant\u201d?","choices":["India","Sri Lanka","UAE","Thailand"],"answer":"Thailand"},{"question":"What is the capital of Austria ?","choices":["Graz","Salzburg","Innsbruck","Vienna"],"answer":"Vienna"},{"question":"The term Ground Stroke is associated with which of the following games?","choices":["Cricket","Badminton","Tennis","Draughts"],"answer":"Tennis"},{"question":"What is the name of the biggest planet in our solar system ?","choices":["Mars","Jupiter","Earth","Mercury"],"answer":"Jupiter"}]}')},22:function(e,t,n){},23:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(9),a=n.n(s),i=(n(22),n(4)),o=(n(23),n(5)),r="QUIZ_START",l="QUIZ_RESET",u="QUIZ_NEXT",j="QUIZ_PREV",d="QUIZ_SUBMIT",b="QUIZ_TIMEOUT",O=n(2),h=n(0),m=function(e){var t=e.show,n=e.children,c=t?"modal display-block":"modal display-none";return Object(h.jsx)("div",{className:c,children:Object(h.jsx)("section",{className:"modal-main",children:n})})},p=n.p+"static/media/trophy.16e6df06.png",v=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.quizReducer})),n=t.answers,s=t.time,a=Object(c.useState)(0),r=Object(i.a)(a,2),u=r[0],j=r[1],d=Object(c.useState)(!1),b=Object(i.a)(d,2),v=b[0],f=b[1];Object(c.useEffect)((function(){var e=0;n.forEach((function(t,n){t.a===(null===O||void 0===O?void 0:O.data[n].answer)&&e++})),j(e)}),[]);return Object(h.jsxs)("div",{className:"endBox",children:[Object(h.jsx)("img",{src:p,className:"trophy",alt:"",srcset:""}),Object(h.jsx)("h3",{children:"Your results"}),Object(h.jsxs)("p",{children:[u," of ",null===O||void 0===O?void 0:O.data.length]}),Object(h.jsx)("p",{children:Object(h.jsxs)("strong",{children:[Math.floor(u/(null===O||void 0===O?void 0:O.data.length)*100),"%"]})}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Your time:"})," ",s,"sec"]}),Object(h.jsxs)("section",{children:[Object(h.jsx)("button",{className:"button",onClick:function(){return f(!0)},children:"Check your answers"}),Object(h.jsx)("button",{className:"button",style:{marginLeft:"20px"},onClick:function(){e((function(e){e({type:l,payload:null})}))},children:"Try again"})]}),Object(h.jsx)(m,{show:v,children:Object(h.jsxs)("section",{className:"modalBody",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("p",{className:"",children:"Your Answers"}),Object(h.jsx)("p",{style:{cursor:"pointer"},onClick:function(){return f(!1)},children:"X"})]}),Object(h.jsx)("section",{className:"content",children:Object(h.jsx)("ul",{children:n.map((function(e,t){return Object(h.jsxs)("li",{className:"mb-6",children:[Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:e.q})}),Object(h.jsxs)("p",{className:e.a===(null===O||void 0===O?void 0:O.data[t].answer)?"bg-success":"bg-danger",children:["Your answer: ",e.a]}),e.a!==(null===O||void 0===O?void 0:O.data[t].answer)&&Object(h.jsxs)("p",{className:"bg-warning",children:["Correct answer: ",null===O||void 0===O?void 0:O.data[t].answer]})]},t)}))})})]})})]})},f=n(6),x=n.p+"static/media/buzzer-or-wrong-answer-20582.ee37d6ea.mp3",g=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return null===e||void 0===e?void 0:e.quizReducer})),n=t.activeQuestion,s=t.answers,a=t.time,r=Object(c.useState)(null===O||void 0===O?void 0:O.data[n]),l=Object(i.a)(r,2),m=l[0],p=l[1],v=Object(c.useState)(""),g=Object(i.a)(v,2),w=g[0],y=g[1],N=Object(c.useState)(""),S=Object(i.a)(N,2),k=S[0],q=S[1],I=Object(c.useState)(a),E=Object(i.a)(I,2),T=E[0],C=E[1];Object(c.useEffect)((function(){T>0?setTimeout((function(){return C(T-1)}),1e3):e((function(e){e({type:b,payload:null})}))}),[T]);var B=Object(c.useRef)();Object(c.useEffect)((function(){p(null===O||void 0===O?void 0:O.data[n]),void 0!=s[n]&&(q(s[n].a),console.log("RUn once"))}),[m,n]);var Q=function(e){q(e.target.value),w&&y("")};return Object(h.jsxs)("div",{className:"questionBox",children:[Object(h.jsx)("div",{children:Object(h.jsx)("audio",{id:"selectb",src:x})}),Object(h.jsxs)("section",{className:"questionHead",children:[Object(h.jsxs)("h3",{children:["Question ",n+1,"/",null===O||void 0===O?void 0:O.data.length]}),Object(h.jsx)("h5",{children:T})]}),Object(h.jsxs)("section",{className:"middleBox",children:[Object(h.jsxs)("div",{className:"question",children:[Object(h.jsx)("p",{children:null===m||void 0===m?void 0:m.question}),w&&Object(h.jsx)("div",{children:w})]}),Object(h.jsx)("div",{className:"option",ref:B,children:null===m||void 0===m?void 0:m.choices.map((function(e,t){return Object(h.jsxs)("label",{className:"".concat(e===k?"selected":"text"),children:[Object(h.jsx)("input",{type:"radio",name:"answer",value:e,onChange:Q,checked:e===k}),e]},t)}))})]}),Object(h.jsxs)("section",{className:"questionBottom",children:[n<=0?null:Object(h.jsx)("button",{className:"button",onClick:function(){y(""),e((function(e){e({type:j,payload:null})}))},children:"Prev"}),n+1>=(null===O||void 0===O?void 0:O.data.length)?Object(h.jsx)("button",{className:"button nextBtn",onClick:function(){if(""===k)return y("Please select one option!");e(function(e){var t=e.answers,n=e.time;return function(e){e({type:d,payload:{answers:t,time:n}})}}({answers:[].concat(Object(f.a)(s),[s[n]={q:m.question,a:k}]),time:a-T}))},children:"Submit"}):Object(h.jsx)("button",{className:"button nextBtn",onClick:function(t){if(""===k)return document.getElementById("selectb").play(),y("Please select one option!");var c=Object(f.a)(s);c[n]={q:m.question,a:k},e(function(e){var t=e.answers;return function(e){e({type:u,payload:t})}}({answers:c})),q("");var a=B.current.querySelector("input:checked");a&&(a.checked=!1)},children:"Next"})]})]})},w=n.p+"static/media/welcome.5c587312.mp3",y=function(){var e=Object(o.b)(),t=Object(c.useState)(1),n=Object(i.a)(t,2),s=n[0],a=n[1],l=Object(c.useState)(0),u=Object(i.a)(l,2),j=u[0],d=u[1],b=Object(c.useState)(60),O=Object(i.a)(b,2),m=O[0],p=O[1];return Object(c.useEffect)((function(){s>59&&a(1),j>59&&d(1)}),[s,j]),Object(c.useEffect)((function(){console.log(s),console.log(typeof s),NaN!==s&&NaN!==j&&(document.getElementById("welcome").play(),p(60*s+j))}),[s,j]),Object(h.jsxs)("div",{className:"startBox",children:[Object(h.jsx)("div",{children:Object(h.jsx)("audio",{id:"welcome",src:w})}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Start the Quiz"}),Object(h.jsx)("p",{children:"Good luck!"}),Object(h.jsxs)("p",{children:["Time:\xa0\xa0",m,"sec"]}),Object(h.jsxs)("section",{children:[Object(h.jsxs)("label",{htmlFor:"",children:[Object(h.jsx)("input",{type:"number",className:"timeInput",value:s,onChange:function(e){return a(parseInt(e.target.value))}}),"min"]}),Object(h.jsxs)("label",{htmlFor:"",children:[Object(h.jsx)("input",{type:"number",className:"timeInput",value:j,onChange:function(e){return d(parseInt(e.target.value))}}),"sec"]})]}),Object(h.jsx)("button",{className:"startButton",onClick:function(){document.getElementById("welcome").play(),e(function(e){return function(t){t({type:r,payload:e})}}(m))},"data-aos":"fade-up",children:"START"})]})})]})},N=function(){Object(o.b)();var e=Object(o.c)((function(e){return null===e||void 0===e?void 0:e.quizReducer})),t=e.step,n=e.answers;console.log(t),console.log(n);var s=Object(c.useState)(!1),a=Object(i.a)(s,2),r=(a[0],a[1]),l=Object(c.useState)(0),u=Object(i.a)(l,2),j=u[0];u[1];return Object(c.useEffect)((function(){3===t&&clearInterval(undefined)}),[t]),Object(h.jsxs)("div",{className:"App",children:[1===t&&Object(h.jsx)(y,{}),2===t&&Object(h.jsx)(g,{}),3===t&&Object(h.jsx)(v,{data:O.data,time:j,onAnswersCheck:function(){return r(!0)}})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))},k=n(7),q=n(16),I=(n(28),n(15)),E=n.n(I),T=n(11),C=n(3),B={step:1,activeQuestion:0,answers:[],time:60},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case r:return Object(C.a)(Object(C.a)({},e),{},{step:2,time:c});case u:return Object(C.a)(Object(C.a)({},e),{},{answers:Object(f.a)(c),activeQuestion:(null===e||void 0===e?void 0:e.activeQuestion)+1});case d:return Object(C.a)(Object(C.a)({},e),{},{step:3,answers:Object(f.a)(null===c||void 0===c?void 0:c.answers),time:null===c||void 0===c?void 0:c.time});case l:return Object(C.a)(Object(C.a)({},e),{},{step:1,activeQuestion:0,answers:[],time:60});case j:return Object(C.a)(Object(C.a)({},e),{},{activeQuestion:(null===e||void 0===e?void 0:e.activeQuestion)-1});case b:return Object(C.a)(Object(C.a)({},e),{},{time:0,step:3});default:return e}},z=Object(T.a)({storage:E.a,key:"a27"},Object(k.b)({quizReducer:Q})),R=[];R=[].concat(Object(f.a)(R),[q.a]);var U=Object(k.c)(z,{},k.a.apply(void 0,Object(f.a)(R))),A=n(17),F=Object(T.b)(U);a.a.render(Object(h.jsx)(o.a,{store:U,children:Object(h.jsx)(A.a,{loading:null,persistor:F,children:Object(h.jsx)(N,{})})}),document.getElementById("root")),S()}},[[32,1,2]]]);
//# sourceMappingURL=main.c9264684.chunk.js.map