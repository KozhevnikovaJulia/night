(this.webpackJsonpnight=this.webpackJsonpnight||[]).push([[0],{10:function(e,t,a){e.exports={displayInputs:"CounterInputs_displayInputs__BBaoO",buttons:"CounterInputs_buttons__3lwyM"}},13:function(e,t,a){e.exports={displayResult:"CounterResult_displayResult__3rAQn",buttons:"CounterResult_buttons__jPhOW"}},14:function(e,t,a){},15:function(e,t,a){e.exports={button:"Button_button__2MnT8"}},21:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),u=a(6),s=a.n(u),l=(a(21),a(14),a(4)),i=a.n(l),c=a(1);function o(e){return Object(c.jsx)("div",{className:i.a.containerInputs,children:Object(c.jsxs)("div",{className:i.a.inputsArea,children:[Object(c.jsx)("span",{children:" max value"})," ",Object(c.jsx)("input",{className:e.errorMaxInput?i.a.errorInput:i.a.input,type:"number",value:e.maxValue,onChange:e.onChangeMaxInput,"data-currency":"max"}),Object(c.jsx)("span",{children:"start value"})," ",Object(c.jsx)("input",{className:e.errorStartInput?i.a.errorInput:i.a.input,type:"number",value:e.startValue,onChange:e.onChangeStartInput,"data-currency":"start"})]})})}var b=a(10),p=a.n(b),x=a(15),I=a.n(x);function m(e){return Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:I.a.button,disabled:e.incDisable?e.incDisable:e.resetDisable||e.setDisable,onClick:function(){e.incCallBack?e.incCallBack():e.resetCallBack?e.resetCallBack():e.setCallBack&&e.setCallBack()},children:e.title})})}function j(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function V(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}j("test",{x:"A",y:1});V("test",{x:"",y:0});var O=a(2),C={number:0,maxValue:5,startValue:0,incDisable:!1,resetDisable:!0,setDisable:!0,errorMaxInput:!1,errorStartInput:!1,warning:!1},d=a(3);function v(e){var t=Object(d.b)();return n.a.useEffect((function(){!function(){var e=function(e){return{type:"CHANGE=MAXVALUE-TORESTORE",restoreMaxValue:e}}(V("maxValueCounter",""));t(e)}(),function(){var e=function(e){return{type:"CHANGE=STARTVALUE-TORESTORE",restoreStartValue:e}}(V("startValueCounter",""));t(e)}()}),[]),Object(c.jsxs)("div",{className:p.a.displayInputs,children:[Object(c.jsx)(o,{maxValue:e.maxValue,startValue:e.startValue,onChangeMaxInput:function(e){var a={type:"ONCHANGE-MAXINPUT",maxInputValue:e.currentTarget.value};t(a)},onChangeStartInput:function(e){var a={type:"ONCHANGE-STARTINPUT",startInputValue:e.currentTarget.value};t(a)},errorMaxInput:e.errorMaxInput,errorStartInput:e.errorStartInput}),Object(c.jsx)("div",{className:p.a.buttons,children:Object(c.jsx)(m,{title:"set",setCallBack:function(){t({type:"SET-CALLBACK"}),j("maxValueCounter",String(e.maxValue)),j("startValueCounter",String(e.startValue))},setDisable:e.setDisable})})]})}var D=a(7),N=a.n(D);function _(e){return Object(c.jsx)("div",{children:e.warning?Object(c.jsxs)("div",{className:N.a.spanInterValue,children:["  ",e.errorMaxInput||e.errorStartInput?"Incorrect value!":"Enter values and press 'set'"]}):Object(c.jsxs)("div",{className:e.number>=e.maxValue||e.number<e.startValue?N.a.containerResultError:N.a.containerResult,children:[e.number," "]})})}var S=a(13),f=a.n(S);function g(e){return Object(c.jsxs)("div",{className:f.a.displayResult,children:[Object(c.jsx)(_,{number:e.number,maxValue:e.maxValue,startValue:e.startValue,warning:e.warning,errorMaxInput:e.errorMaxInput,errorStartInput:e.errorStartInput}),Object(c.jsxs)("div",{className:f.a.buttons,children:[Object(c.jsx)(m,{title:"inc",incCallBack:e.incCallBack,incDisable:e.incDisable}),Object(c.jsx)(m,{title:"reset",resetCallBack:e.resetCallBack,resetDisable:e.resetDisable})]})]})}function A(){var e=Object(d.c)((function(e){return e.state})),t=Object(d.b)();return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(v,{maxValue:e.maxValue,startValue:e.startValue,number:e.number,warning:e.warning,errorMaxInput:e.errorMaxInput,errorStartInput:e.errorStartInput,setDisable:e.setDisable}),Object(c.jsx)(g,{maxValue:e.maxValue,startValue:e.startValue,number:e.number,incCallBack:function(){t({type:"INC-CALLBACK"})},resetCallBack:function(){t({type:"RESET-CALLBACK"})},warning:e.warning,errorMaxInput:e.errorMaxInput,errorStartInput:e.errorStartInput,incDisable:e.incDisable,resetDisable:e.resetDisable})]})}var E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,u=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),u(e),s(e)}))},h=a(5),y=Object(h.b)({state:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INC-CALLBACK":var a=Object(O.a)({},e);return a.number=a.number+1,a.resetDisable=!1,a.number>=a.maxValue&&(a.incDisable=!0),a;case"RESET-CALLBACK":var r=Object(O.a)({},e);return r.number=r.startValue,r.incDisable=!1,r.number<=r.startValue&&(r.resetDisable=!0),r;case"ONCHANGE-MAXINPUT":var n=Object(O.a)({},e);return n.maxValue=Number(t.maxInputValue),n.incDisable=!0,n.resetDisable=!0,n.setDisable=!1,n.warning=!0,Number(t.maxInputValue)<=n.startValue||Number(t.maxInputValue)<0?(n.errorMaxInput=!0,n.setDisable=!0):(n.errorMaxInput=!1,n.setDisable=!1),n;case"ONCHANGE-STARTINPUT":var u=Object(O.a)({},e);return u.startValue=Number(t.startInputValue),u.incDisable=!0,u.resetDisable=!0,u.setDisable=!1,u.warning=!0,Number(t.startInputValue)>=u.maxValue||Number(t.startInputValue)<0?(u.errorStartInput=!0,u.setDisable=!0):(u.errorStartInput=!1,u.setDisable=!1),u;case"SET-CALLBACK":var s=Object(O.a)({},e);return s.number=s.startValue,s.incDisable=!1,s.setDisable=!0,s.warning=!s.warning,s;case"CHANGE=MAXVALUE-TORESTORE":var l=Object(O.a)({},e);return l.maxValue=Number(t.restoreMaxValue),l;case"CHANGE=STARTVALUE-TORESTORE":var i=Object(O.a)({},e);return i.startValue=Number(t.restoreStartValue),i.number=Number(t.restoreStartValue),i;default:return e}}}),T=Object(h.c)(y);s.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(d.a,{store:T,children:Object(c.jsx)(A,{})})}),document.getElementById("root")),E()},4:function(e,t,a){e.exports={containerInputs:"DisplayInputs_containerInputs__JIyJ6",containerInputsError:"DisplayInputs_containerInputsError__3OpxX",inputsArea:"DisplayInputs_inputsArea__24_oz",input:"DisplayInputs_input__2fWLd",errorInput:"DisplayInputs_errorInput__L8viN"}},7:function(e,t,a){e.exports={containerResult:"DisplayResult_containerResult__1l_Qa",containerResultError:"DisplayResult_containerResultError__2yMsq",spanInterValue:"DisplayResult_spanInterValue__3XIJg"}}},[[29,1,2]]]);
//# sourceMappingURL=main.eda93a3d.chunk.js.map