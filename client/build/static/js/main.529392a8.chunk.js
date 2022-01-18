(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{72:function(e,n,t){},83:function(e,n,t){"use strict";t.r(n);var a,c,r,s,i,l,o=t(3),d=t.n(o),j=t(56),b=t.n(j),u=(t(72),t(20)),m=(t(73),t(18)),p=t(7),O=t(63),h=t(85),x=t(96),g=t(94),v=t(62),w=(t.p,t(88)),f=t(22),y=t(95),N=(Object(y.a)(a||(a=Object(f.a)(["\n  query getProducts($category: String) {\n    products(category: $category) {\n      _id\n      title\n      description\n      starBid\n      image\n      category \n      \n    }\n  }\n"]))),Object(y.a)(c||(c=Object(f.a)(["\n  {\n    products {\n      _id\n      title\n      description\n      startBid\n      image\n      category \n\n      \n    }\n  }\n"])))),k=(Object(y.a)(r||(r=Object(f.a)(["\n  {\n    query categories ($category:String) {\n      categories(category:$category) {\n        _id\n        title\n        description\n        startBid\n        category \n        image\n      }\n         \n    }\n    \n    \n  }\n"]))),Object(y.a)(s||(s=Object(f.a)(["\n  {\n    user {\n      username\n      products{\n        _id\n        title\n        description\n        startBid\n        category \n        image\n      } \n\n    }\n  }\n"]))),t(2)),S=function(){var e=Object(w.a)(N),n=(e.loading,e.data),t=(null===n||void 0===n?void 0:n.products)||[];return console.log(t),Object(k.jsx)("div",{children:"Hello"})},C=function(){return Object(k.jsx)("div",{className:"container",children:Object(k.jsx)(S,{})})},$=t(27),_=t(41),T=t(30),I=t(29),B=t.n(I),L=t(89),E=Object(y.a)(i||(i=Object(f.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),F=Object(y.a)(l||(l=Object(f.a)(["\n  mutation addUser(\n    $username: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      username: $username\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),P=t(57),D=t(58),U=t(47),W=t.n(U),q=new(function(){function e(){Object(P.a)(this,e)}return Object(D.a)(e,[{key:"getProfile",value:function(){return W()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return W()(e).exp<Date.now()/1e3}catch(n){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}());var H=function(e){var n=Object(o.useState)({email:"",password:""}),t=Object(T.a)(n,2),a=t[0],c=t[1],r=Object(L.a)(E),s=Object(T.a)(r,2),i=s[0],l=s[1].error,d=function(){var e=Object(_.a)(B.a.mark((function e(n){var t,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,i({variables:{email:a.email,password:a.password}});case 4:t=e.sent,c=t.data,q.login(c.login.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}(),j=function(e){var n=e.target,t=n.name,r=n.value;c(Object(u.a)(Object(u.a)({},a),{},Object($.a)({},t,r)))};return Object(k.jsx)("div",{className:"container pt-5",children:Object(k.jsxs)("div",{className:"pt-5 text-center",children:[Object(k.jsx)("h2",{children:"Login"}),Object(k.jsx)("p",{children:"Please login to see your watchlist and bid on new art!"}),Object(k.jsxs)("form",{onSubmit:d,children:[Object(k.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(k.jsx)("label",{htmlFor:"email",children:"Email address: \xa0 "}),Object(k.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(k.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(k.jsx)("label",{htmlFor:"pwd",children:"Password: \xa0  "}),Object(k.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),Object(k.jsx)("div",{children:Object(k.jsx)(m.b,{to:"Signup",className:"p-4",children:"Create a new account"})}),l?Object(k.jsx)("div",{children:Object(k.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(k.jsx)("div",{className:"flex-row flex-end p-2",children:Object(k.jsx)("button",{type:"submit",className:"btn btn-outline-dark m-2 buttonStyle",children:"Submit"})})]})]})})};var J=function(e){var n=Object(o.useState)({email:"",password:"",username:""}),t=Object(T.a)(n,2),a=t[0],c=t[1],r=Object(L.a)(F),s=Object(T.a)(r,1)[0],i=function(){var e=Object(_.a)(B.a.mark((function e(n){var t,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,s({variables:{email:a.email,password:a.password,username:a.username}});case 3:t=e.sent,c=t.data.addUser.token,q.login(c);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(e){var n=e.target,t=n.name,r=n.value;c(Object(u.a)(Object(u.a)({},a),{},Object($.a)({},t,r)))};return Object(k.jsx)("div",{className:"container pt-5",children:Object(k.jsxs)("div",{className:"pt-5 text-center",children:[Object(k.jsx)("h2",{children:"Signup"}),Object(k.jsx)("p",{children:"Don't have an account? No problem. Create an account below!"}),Object(k.jsxs)("form",{onSubmit:i,children:[Object(k.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(k.jsx)("label",{htmlFor:"name",children:"Username:\xa0"}),Object(k.jsx)("input",{placeholder:"artRox",name:"username",type:"username",id:"username",onChange:l})]}),Object(k.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(k.jsx)("label",{htmlFor:"email",children:"Email:\xa0"}),Object(k.jsx)("input",{placeholder:"artrox@email.com",name:"email",type:"email",id:"email",onChange:l})]}),Object(k.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(k.jsx)("label",{htmlFor:"pwd",children:"Password:\xa0 "}),Object(k.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:l})]}),Object(k.jsx)(m.b,{to:"Login",children:"Already have an account? Login Here."}),Object(k.jsx)("div",{className:"flex-row flex-end",children:Object(k.jsx)("button",{type:"submit",className:"btn btn-outline-dark m-2 buttonStyle",children:"Submit"})})]})]})})},z=function(){return Object(k.jsxs)("nav",{className:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark",children:[Object(k.jsxs)(m.b,{to:"/",className:"navbar-brand mx-5",id:"artWatchStyle",children:["art",Object(k.jsx)("a",{children:"Watch"})]}),q.loggedIn()?Object(k.jsxs)("div",{children:[Object(k.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(k.jsx)("span",{className:"navbar-toggler-icon"})}),Object(k.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(k.jsxs)("ul",{className:"navbar-nav ms-auto mx-5",children:[Object(k.jsx)("li",{className:"nav-item active",children:Object(k.jsx)(m.b,{to:"/Watchlist",className:"nav-link sr-only",children:"Watchlist"})}),Object(k.jsx)("li",{className:"nav-item active",children:Object(k.jsx)("a",{href:"/",className:"nav-link sr-only",onClick:function(){return q.logout()},children:"Logout"})})]})})]}):Object(k.jsxs)("div",{children:[Object(k.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(k.jsx)("span",{className:"navbar-toggler-icon"})}),Object(k.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(k.jsxs)("ul",{className:"navbar-nav ms-auto mx-5",children:[Object(k.jsx)("li",{className:"nav-item active",children:Object(k.jsx)(m.b,{to:"/Signup",className:"nav-link sr-only",children:"Signup"})}),Object(k.jsx)("li",{className:"nav-item active",children:Object(k.jsx)(m.b,{to:"/Login",className:"nav-link sr-only",children:"Login"})})]})})]})]})},A=Object(O.a)({uri:"/graphql"}),M=Object(v.a)((function(e,n){var t=n.headers,a=localStorage.getItem("id_token");return{headers:Object(u.a)(Object(u.a)({},t),{},{authorization:a?"Bearer ".concat(a):""})}})),R=new h.a({link:M.concat(A),cache:new x.a});var G=function(){return Object(k.jsx)(g.a,{client:R,children:Object(k.jsx)(m.a,{children:Object(k.jsxs)("div",{children:[Object(k.jsx)(z,{}),Object(k.jsxs)(p.c,{children:[Object(k.jsx)(p.a,{exact:!0,path:"/",component:C}),Object(k.jsx)(p.a,{exact:!0,path:"/login",component:H}),Object(k.jsx)(p.a,{exact:!0,path:"/signup",component:J})]})]})})})};b.a.render(Object(k.jsx)(d.a.StrictMode,{children:Object(k.jsx)(G,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.529392a8.chunk.js.map