(this["webpackJsonppizza-test"]=this["webpackJsonppizza-test"]||[]).push([[0],{22:function(e,a,t){e.exports=t(40)},27:function(e,a,t){},28:function(e,a,t){},30:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),c=t.n(r),m=(t(27),t(28),t(6)),i=t(1),o=t(8),s=t(9),u=t(11),h=t(10),E=(t(29),t(30),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.pathname;return l.a.createElement(n.Fragment,null,l.a.createElement("header",{className:"main-nav"},l.a.createElement("div",{className:"main-nav__left"},l.a.createElement("div",{className:"logo"},"Pizza",l.a.createElement("span",{className:"logo__highlight"}," Hub"))),l.a.createElement("div",{className:"main-nav__middle"},l.a.createElement("nav",{className:"main-navbar"},l.a.createElement(m.b,{to:"/",className:"main-navbar__item ".concat("/"===e?"main-navbar__item--active":null)},"MENU"),l.a.createElement(m.b,{to:"/about",className:"main-navbar__item ".concat("/about"===e?"main-navbar__item--active":null)},"ABOUT US"),l.a.createElement(m.b,{to:"/stores",className:"main-navbar__item ".concat("/stores"===e?"main-navbar__item--active":null)},"STORES"))),l.a.createElement("div",{className:"main-nav__right"},l.a.createElement("div",{className:"login"},l.a.createElement(m.b,{to:"/account"},l.a.createElement("i",{className:"fa fa-user-circle"})," My Account")))))}}]),t}(l.a.Component)),v=(t(36),[{title:"PIZZAS",routeName:"#PIZZAS",items:[{name:"NEW PRODUCTS",href:"#NEW_PRODUCTS"},{name:"PREMIUM PIZZAS",href:"#PREMIUM_PIZZAS"},{name:"TRADITIONAL PIZZAS",href:"#TRADITIONAL_PIZZAS"},{name:"DIY PIZZAS",href:"#DIY_PIZZAS"}]},{title:"DESSERTS",routeName:"#DESSERTS",items:[{name:"D1",href:"#D1"},{name:"D2",href:"#D2"},{name:"D3",href:"#D3"}]}]),b=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={foods:v},n}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.hashtag;0===e.length&&(e="#PIZZAS");var a=this.state.foods.filter((function(a){return a.routeName===e}));return l.a.createElement(n.Fragment,null,l.a.createElement("header",{className:"menu-nav"},l.a.createElement("nav",{className:"menu-navbar"},l.a.createElement("a",{href:"#PIZZAS",className:"menu-navbar__item ".concat("#PIZZAS"===e?"menu-navbar__item--active":null)},"PIZZAS"),l.a.createElement("a",{href:"#DRINKS",className:"menu-navbar__item ".concat("#DRINKS"===e?"menu-navbar__item--active":null)},"DRINKS"),l.a.createElement("a",{href:"#DESSERTS",className:"menu-navbar__item ".concat("#DESSERTS"===e?"menu-navbar__item--active":null)},"DESSERTS")),0===a.length?null:l.a.createElement("nav",{className:"menu-sub-navbar"},a[0].items.map((function(e,a){})))))}}]),t}(l.a.Component),p=function(e){console.log(e);var a=e.location.pathname,t=e.location.hash;return l.a.createElement("div",null,l.a.createElement(E,{pathname:a}),l.a.createElement(b,{hashtag:t}),l.a.createElement("h1",null,"Menu PAGE"))},f=function(e){var a=e.location.pathname;return l.a.createElement("div",null,l.a.createElement(E,{pathname:a}),l.a.createElement("h1",null,"About US PAGE"))},d=function(e){var a=e.location.pathname;return l.a.createElement("div",null,l.a.createElement(E,{pathname:a}),l.a.createElement("h1",null,"Stores PAGE"))},S=t(21),_=t(13),N=(t(37),function(e){var a=e.handleChange,t=e.label,n=Object(_.a)(e,["handleChange","label"]);return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form__input",onChange:a},n)),t?l.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form__input-label")},t.toUpperCase()):null)}),g=(t(38),function(e){var a=e.children,t=Object(_.a)(e,["children"]);return l.a.createElement("button",Object.assign({className:"custom-button"},t),a)}),I=(t(39),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.setState({email:"",password:""})},n.handleChange=function(e){var a=e.target,t=a.name,l=a.value;n.setState(Object(S.a)({},t,l))},n.state={email:"",password:""},n}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"sign-in"},l.a.createElement("h2",null,"I already have an account"),l.a.createElement("span",null,"Sign in with your email and password"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(N,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),l.a.createElement(N,{name:"password",type:"password",handleChange:this.handleChange,value:this.state.password,label:"password",required:!0}),l.a.createElement(g,{type:"submit"},"SIGN IN")))}}]),t}(l.a.Component)),A=function(e){var a=e.location.pathname;return l.a.createElement("div",null,l.a.createElement(E,{pathname:a}),l.a.createElement("h1",null,"ACCOUNT PAGE"),l.a.createElement(I,null))};var O=function(){return l.a.createElement(m.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:p}),l.a.createElement(i.a,{exact:!0,path:"/about",component:f}),l.a.createElement(i.a,{exact:!0,path:"/stores",component:d}),l.a.createElement(i.a,{exact:!0,path:"/account",component:A}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.ccbe68f5.chunk.js.map