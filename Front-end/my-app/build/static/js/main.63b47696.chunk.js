(this.webpackJsonplingopeer=this.webpackJsonplingopeer||[]).push([[0],{117:function(e,t,n){},141:function(e,t,n){},158:function(e,t,n){},193:function(e,t){},195:function(e,t){},204:function(e,t,n){},228:function(e,t,n){},229:function(e,t,n){},230:function(e,t,n){},231:function(e,t,n){},232:function(e,t,n){},319:function(e,t,n){},320:function(e,t,n){},321:function(e,t,n){},322:function(e,t,n){},323:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),c=n.n(a),r=n(131),i=n.n(r),o=n(9),l=n(3),j=n(4),d=n(10),u=n(6),h=n(5),b=(n(141),n(26)),m=n.n(b);function O(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var v,g="https://lingopeerbe.herokuapp.com/api/test/",x=new(function(){function e(){Object(l.a)(this,e)}return Object(j.a)(e,[{key:"getPublicContent",value:function(){return m.a.get(g+"all")}},{key:"getUserBoard",value:function(){return m.a.get(g+"user",{headers:O()})}},{key:"getModeratorBoard",value:function(){return m.a.get(g+"mod",{headers:O()})}},{key:"getAdminBoard",value:function(){return m.a.get(g+"admin",{headers:O()})}}]),e}()),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={content:""},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.getUserBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}))}},{key:"render",value:function(){return"User Content."==this.state.content?Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{id:"message-container"}),Object(s.jsx)("form",{id:"message-input"})]}):Object(s.jsx)("div",{children:Object(s.jsx)("header",{className:"jumbotron",children:Object(s.jsx)("h3",{children:"Connectez-vous pour acceder \xe0 ce contenu !"})})})}}]),n}(c.a.Component),f=n(11),N=n(55),C=(n(158),n(51)),A=n.n(C),y=n(71),k=n.n(y),S=n(56),w=n(135),L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII=",U=(n(204),function(e){var t=e.users;return Object(s.jsx)("div",{className:"textContainer",children:t?Object(s.jsxs)("div",{className:"TextUser",children:[Object(s.jsx)("h1",{children:"Utilisateurs pr\xe9sents:"}),Object(s.jsx)("div",{className:"activeContainer",children:Object(s.jsx)("h2",{children:t.map((function(e){var t=e.name;return Object(s.jsxs)("div",{className:"activeItem",children:[t,Object(s.jsx)("img",{alt:"Online Icon",src:L})]},t)}))})})]}):null})}),I=n(132),B=n.n(I),E=(n(228),n(72)),D=n.n(E),P=function(e){var t=e.message,n=t.text,a=t.user,c=!1,r=e.name.trim().toLowerCase();return a===r&&(c=!0),c?Object(s.jsxs)("div",{className:"messageContainer justifyEnd",children:[Object(s.jsx)("p",{className:"sentText pr-10",children:r}),Object(s.jsx)("div",{className:"messageBox backgroundBlue",children:Object(s.jsx)("p",{className:"messageText colorWhite",children:D.a.emojify(n)})})]}):Object(s.jsxs)("div",{className:"messageContainer justifyStart",children:[Object(s.jsx)("div",{className:"messageBox backgroundLight",children:Object(s.jsx)("p",{className:"messageText colorDark",children:D.a.emojify(n)})}),Object(s.jsx)("p",{className:"sentText pl-10 ",children:a})]})},M=(n(229),function(e){var t=e.messages,n=e.name;return Object(s.jsx)(B.a,{className:"messages",children:t.map((function(e,t){return Object(s.jsx)("div",{children:Object(s.jsx)(P,{message:e,name:n})},t)}))})}),T=(n(230),function(e){var t=e.room;return Object(s.jsxs)("div",{className:"infoBar",children:[Object(s.jsxs)("div",{className:"leftInnerContainer",children:[Object(s.jsx)("img",{className:"onlineIcon",src:L,alt:"online icon"}),Object(s.jsx)("h3",{children:t})]}),Object(s.jsx)("div",{className:"rightInnerContainer",children:Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII=",alt:"close icon"})})})]})}),R=(n(231),function(e){var t=e.setMessage,n=e.sendMessage,a=e.message;return Object(s.jsxs)("form",{className:"form",children:[Object(s.jsx)("input",{className:"input",type:"text",placeholder:"Type a message...",value:a,onChange:function(e){var n=e.target.value;return t(n)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),Object(s.jsx)("button",{className:"sendButton",onClick:function(e){return n(e)},children:"Send"})]})}),_="https://lingopeerbe.herokuapp.com/api/auth/",F=new(function(){function e(){Object(l.a)(this,e)}return Object(j.a)(e,[{key:"login",value:function(e,t){return m.a.post(_+"signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t,n,s,a,c,r){return m.a.post(_+"signup",{username:e,email:t,password:n,langue1:s,lvl1:a,langue2:c,lvl2:r})}},{key:"getCurrentUser",value:function(){return JSON.parse(localStorage.getItem("user"))}}]),e}()),J=(n(232),"localhost:8080"),q=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(f.a)(r,2),o=i[0],l=i[1],j=Object(a.useState)(""),d=Object(f.a)(j,2),u=d[0],h=d[1],b=Object(a.useState)(""),m=Object(f.a)(b,2),O=m[0],g=m[1],x=Object(a.useState)([]),p=Object(f.a)(x,2),N=p[0],C=p[1];Object(a.useEffect)((function(){var e={name:F.getCurrentUser().username,room:"room"},t=e.name,n=e.room;v=A()(J),l(n),c(t),v.emit("join",{name:t,room:n},(function(e){console.log(t),e&&alert(e)}))}),[J]),Object(a.useEffect)((function(){v.on("message",(function(e){C((function(t){return[].concat(Object(w.a)(t),[e])}))})),v.on("roomData",(function(e){var t=e.users;h(t)}))}),[]);return Object(s.jsxs)("div",{className:"outerContainer",children:[Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(T,{room:o}),Object(s.jsx)(M,{messages:N,name:n}),Object(s.jsx)(R,{message:O,setMessage:g,sendMessage:function(e){e.preventDefault(),O&&v.emit("sendMessage",O,(function(){return g("")}))}})]}),Object(s.jsx)(U,{users:u})]})};function Y(){var e=Object(N.a)(["\n  border: 1px solid blue;\n  width: 50%;\n  height: 50%;\n"]);return Y=function(){return e},e}function z(){var e=Object(N.a)(["\n  display: flex;\n  width: 100%;\n"]);return z=function(){return e},e}function Q(){var e=Object(N.a)(["\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return Q=function(){return e},e}var V=S.a.div(Q()),K=S.a.div(z()),W=S.a.video(Y());var G=function(){var e,t,n,c=Object(a.useState)(""),r=Object(f.a)(c,2),i=r[0],o=r[1],l=Object(a.useState)({}),j=Object(f.a)(l,2),d=j[0],u=j[1],h=Object(a.useState)(),b=Object(f.a)(h,2),m=b[0],O=b[1],v=Object(a.useState)(!1),g=Object(f.a)(v,2),x=g[0],p=g[1],N=Object(a.useState)(""),C=Object(f.a)(N,2),y=C[0],S=C[1],w=Object(a.useState)(),L=Object(f.a)(w,2),U=L[0],I=L[1],B=Object(a.useState)(!1),E=Object(f.a)(B,2),D=E[0],P=E[1],M=Object(a.useRef)(),T=Object(a.useRef)(),R=Object(a.useRef)();return Object(a.useEffect)((function(){R.current=A.a.connect("/"),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){O(e),M.current&&(M.current.srcObject=e)})),R.current.on("yourID",(function(e){o(e)})),R.current.on("allUsers",(function(e){u(e),console.log(e)})),R.current.on("hey",(function(e){p(!0),S(e.from),I(e.signal)}))}),[]),m&&(e=Object(s.jsx)(W,{playsInline:!0,muted:!0,hidden:!0,ref:M,autoPlay:!0})),D&&(e=Object(s.jsx)(W,{playsInline:!0,muted:!0,ref:M,autoPlay:!0}),t=Object(s.jsx)(W,{playsInline:!0,ref:T,autoPlay:!0})),x&&(n=Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:[y," is calling you"]}),Object(s.jsx)("button",{onClick:function(){P(!0);var e=new k.a({initiator:!1,trickle:!1,stream:m});e.on("signal",(function(e){R.current.emit("acceptCall",{signal:e,to:y})})),e.on("stream",(function(e){T.current.srcObject=e})),e.signal(U)},children:"Accept"})]})),Object(s.jsxs)(V,{children:[Object(s.jsx)("h1",{children:"Conversation"}),Object(s.jsxs)(K,{children:[e,t]}),Object(s.jsx)(q,{}),Object(s.jsx)(K,{children:Object.keys(d).map((function(e){return e===i?null:Object(s.jsxs)("button",{onClick:function(){return function(e){var t=new k.a({initiator:!0,trickle:!1,stream:m});t.on("signal",(function(t){R.current.emit("callUser",{userToCall:e,signalData:t,from:i})})),t.on("stream",(function(e){T.current&&(T.current.srcObject=e)})),R.current.on("callAccepted",(function(e){P(!0),t.signal(e)}))}(e)},children:["Call ",e]})}))}),Object(s.jsx)(K,{children:n})]})},X=n(38),Z=n.n(X),H=n(25),$=n.n(H),ee=n(39),te=n.n(ee),ne=(n(117),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={content:""},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.getUserBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}))}},{key:"render",value:function(){return"User Content."==this.state.content?Object(s.jsx)("div",{className:"containcard",children:Object(s.jsxs)("div",{className:"card card-container",children:[Object(s.jsx)("h5",{children:"Parametrage de la conversation: "}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"username",children:"Choisit une langue !  "}),Object(s.jsx)("p",{children:Object(s.jsxs)("select",{class:"Langue_s",name:"Langues",children:[Object(s.jsx)("option",{selected:!0,disabled:!0,children:"Langues"}),Object(s.jsx)("option",{value:"1",children:"fran\xe7ais"}),Object(s.jsx)("option",{value:"2",children:"Anglais"}),Object(s.jsx)("option",{value:"3",children:"Allemand"}),Object(s.jsx)("option",{value:"4",children:"Espagnol"}),Object(s.jsx)("option",{value:"5",children:"Italien"})]})})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"password",children:"Choisit un th\xe8me ! "}),Object(s.jsx)("p",{children:Object(s.jsxs)("select",{class:"Theme_s",name:"Themes",children:[Object(s.jsx)("option",{selected:!0,disabled:!0,children:"Themes"}),Object(s.jsx)("option",{value:"1",children:"Voyages"}),Object(s.jsx)("option",{value:"2",children:"Jeux videos"}),Object(s.jsx)("option",{value:"3",children:"Culture"}),Object(s.jsx)("option",{value:"4",children:"Cuisine"}),Object(s.jsx)("option",{value:"5",children:"Party"})]})})]}),Object(s.jsx)(o.b,{to:"./Room",children:Object(s.jsx)("button",{className:"btn btn-primary btn-block",type:"submit",children:Object(s.jsx)("span",{children:"Lancer la conversation"})})})]})}):Object(s.jsx)("div",{children:Object(s.jsx)("header",{className:"jumbotron",children:Object(s.jsx)("h3",{children:"Connectez-vous pour acceder \xe0 ce contenu !"})})})}}]),n}(c.a.Component)),se=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={content:""},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.getUserBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}))}},{key:"render",value:function(){return"User Content."==this.state.content?Object(s.jsx)("div",{className:"containcard2",children:Object(s.jsxs)("div",{className:"card card-container",children:[Object(s.jsx)("h5",{children:"Parametrage de la conversation: "}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Choisit une langue !  "}),Object(s.jsx)("p",{children:Object(s.jsxs)("select",{class:"Langue_s",name:"Langues",children:[Object(s.jsx)("option",{selected:!0,disabled:!0,children:"Langues"}),Object(s.jsx)("option",{value:"1",children:"fran\xe7ais"}),Object(s.jsx)("option",{value:"2",children:"Anglais"}),Object(s.jsx)("option",{value:"3",children:"Allemand"}),Object(s.jsx)("option",{value:"4",children:"Espagnol"}),Object(s.jsx)("option",{value:"5",children:"Italien"})]})})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Choisit un th\xe8me ! "}),Object(s.jsx)("p",{children:Object(s.jsxs)("select",{class:"Theme_s",name:"Themes",children:[Object(s.jsx)("option",{selected:!0,disabled:!0,children:"Themes"}),Object(s.jsx)("option",{value:"1",children:"Voyages"}),Object(s.jsx)("option",{value:"2",children:"Jeux videos"}),Object(s.jsx)("option",{value:"3",children:"Culture"}),Object(s.jsx)("option",{value:"4",children:"Cuisine"}),Object(s.jsx)("option",{value:"5",children:"Party"})]})})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:" Invite ton ami ! "}),Object(s.jsx)("p",{children:Object(s.jsxs)("select",{class:"Amis_s",name:"Amis",children:[Object(s.jsx)("option",{selected:!0,disabled:!0,children:"Amis"}),Object(s.jsx)("option",{value:"1",children:"ami1"}),Object(s.jsx)("option",{value:"2",children:"ami2"}),Object(s.jsx)("option",{value:"3",children:"ami3"}),Object(s.jsx)("option",{value:"4",children:"ami4"}),Object(s.jsx)("option",{value:"5",children:"ami5"})]})})]}),Object(s.jsx)(o.b,{to:"./Room",children:Object(s.jsx)("button",{className:"btn btn-primary btn-block",type:"submit",children:Object(s.jsx)("span",{children:"Lancer la conversation"})})})]})}):Object(s.jsx)("div",{children:Object(s.jsx)("header",{className:"jumbotron",children:Object(s.jsx)("h3",{children:"Connectez-vous pour acceder \xe0 ce contenu !"})})})}}]),n}(a.Component),ae=(n(240),n(7)),ce=function(e){if(!e)return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},re=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).handleLogin=s.handleLogin.bind(Object(d.a)(s)),s.onChangeUsername=s.onChangeUsername.bind(Object(d.a)(s)),s.onChangePassword=s.onChangePassword.bind(Object(d.a)(s)),s.state={username:"",password:"",loading:!1,message:""},s}return Object(j.a)(n,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",loading:!0}),this.form.validateAll(),0===this.checkBtn.context._errors.length?F.login(this.state.username,this.state.password).then((function(){t.props.history.push("/profile"),window.location.reload()}),(function(e){var n=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({loading:!1,message:n})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"col-md-12",children:Object(s.jsxs)("div",{className:"card card-container",children:[Object(s.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(s.jsxs)(Z.a,{onSubmit:this.handleLogin,ref:function(t){e.form=t},children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"username",children:"Username"}),Object(s.jsx)($.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[ce]})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"password",children:"Password"}),Object(s.jsx)($.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[ce]})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("button",{className:"btn btn-primary btn-block",disabled:this.state.loading,children:[this.state.loading&&Object(s.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(s.jsx)("span",{children:"Login"})]})}),this.state.message&&Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:this.state.message})}),Object(s.jsx)(te.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}})]})]})})}}]),n}(a.Component),ie=n(134),oe=function(e){if(!e)return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},le=function(e){if(!Object(ie.isEmail)(e))return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid email."})},je=function(e){if(e.length<3||e.length>20)return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The username must be between 3 and 20 characters."})},de=function(e){if(e.length<6||e.length>40)return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The password must be between 6 and 40 characters."})},ue=function(e){if("langue"===e)return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"selectionner une langue"})},he=function(e){if("lvl"===e)return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"selectionner un niveau"})},be=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).handleRegister=s.handleRegister.bind(Object(d.a)(s)),s.onChangeUsername=s.onChangeUsername.bind(Object(d.a)(s)),s.onChangeEmail=s.onChangeEmail.bind(Object(d.a)(s)),s.onChangePassword=s.onChangePassword.bind(Object(d.a)(s)),s.onChangeLangue1=s.onChangeLangue1.bind(Object(d.a)(s)),s.onChangeLvl1=s.onChangeLvl1.bind(Object(d.a)(s)),s.onChangeLangue2=s.onChangeLangue2.bind(Object(d.a)(s)),s.onChangeLvl2=s.onChangeLvl2.bind(Object(d.a)(s)),s.state={username:"",email:"",password:"",langue1:"",lvl1:"",langue2:"",lvl2:"",successful:!1,message:""},s}return Object(j.a)(n,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onChangeLangue1",value:function(e){this.setState({langue1:e.target.value})}},{key:"onChangeLvl1",value:function(e){this.setState({lvl1:e.target.value})}},{key:"onChangeLangue2",value:function(e){this.setState({langue2:e.target.value})}},{key:"onChangeLvl2",value:function(e){this.setState({lvl2:e.target.value})}},{key:"handleRegister",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",successful:!1}),this.form.validateAll(),0===this.checkBtn.context._errors.length&&F.register(this.state.username,this.state.email,this.state.password,this.state.langue1,this.state.lvl1,this.state.langue2,this.state.lvl2).then((function(e){t.setState({message:e.data.message,successful:!0})}),(function(e){var n=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({successful:!1,message:n})}))}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"col-md-12",children:Object(s.jsxs)("div",{className:"card card-container",children:[Object(s.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(s.jsxs)(Z.a,{onSubmit:this.handleRegister,ref:function(t){e.form=t},children:[!this.state.successful&&Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"username",children:"Username"}),Object(s.jsx)($.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[oe,je]})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email"}),Object(s.jsx)($.a,{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.onChangeEmail,validations:[oe,le]})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"password",children:"Password"}),Object(s.jsx)($.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[oe,de]})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsxs)("select",{class:"Langue",name:"langue1",onChange:this.onChangeLangue1,validations:[oe,ue],children:[Object(s.jsx)("option",{selected:!0,disabled:!0,children:"Langue 1"}),Object(s.jsx)("option",{value:"Fran\xe7ais",children:"Fran\xe7ais"}),Object(s.jsx)("option",{value:"Anglais",children:"Anglais"}),Object(s.jsx)("option",{value:"Allemand",children:"Allemand"}),Object(s.jsx)("option",{value:"Espagnol",children:"Espagnol"}),Object(s.jsx)("option",{value:"Italien",children:"Italien"})]}),Object(s.jsxs)("select",{class:"Niveau",name:"lvl1",onChange:this.onChangeLvl1,validations:[oe,he],children:[Object(s.jsx)("option",{selected:!0,disabled:!0,children:"Niveau 1"}),Object(s.jsx)("option",{value:"D\xe9butant",children:"D\xe9butant"}),Object(s.jsx)("option",{value:"Interm\xe9diaire",children:"Interm\xe9diaire"}),Object(s.jsx)("option",{value:"Expert",children:"Expert"})]}),Object(s.jsxs)("select",{class:"Langue",name:"langue2",onChange:this.onChangeLangue2,validations:[oe,ue],children:[Object(s.jsx)("option",{selected:!0,disabled:!0,children:"Langue 2"}),Object(s.jsx)("option",{value:"Fran\xe7ais",children:"Fran\xe7ais"}),Object(s.jsx)("option",{value:"Anglais",children:"Anglais"}),Object(s.jsx)("option",{value:"Allemand",children:"Allemand"}),Object(s.jsx)("option",{value:"Espagnol",children:"Espagnol"}),Object(s.jsx)("option",{value:"Italien",children:"Italien"})]}),Object(s.jsxs)("select",{class:"Niveau",name:"lvl2",onChange:this.onChangeLvl2,validations:[oe,ue],children:[Object(s.jsx)("option",{selected:!0,disabled:!0,children:"Niveau 2"}),Object(s.jsx)("option",{value:"D\xe9butant",children:"D\xe9butant"}),Object(s.jsx)("option",{value:"Interm\xe9diaire",children:"Interm\xe9diaire"}),Object(s.jsx)("option",{value:"Expert",children:"Expert"})]})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("button",{className:"btn btn-primary btn-block",children:"Sign Up"})})]}),this.state.message&&Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("div",{className:this.state.successful?"alert alert-success":"alert alert-danger",role:"alert",children:this.state.message})}),Object(s.jsx)(te.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}})]})]})})}}]),n}(a.Component),me=n.p+"static/media/planet-earth-svgrepo-com.067d5054.svg",Oe=(n(319),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={content:""},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.getPublicContent().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(s.jsx)("div",{class:"maxS",children:Object(s.jsxs)("div",{class:"principal",children:[Object(s.jsx)("div",{class:"gauche",children:Object(s.jsx)("img",{src:me,className:"App-logo",alt:"svgEarth"})}),Object(s.jsx)("div",{class:"droite",children:Object(s.jsxs)("div",{class:"blabla",children:[Object(s.jsx)("h1",{children:"Avec LingoPeer devenez le meilleur en langues"}),Object(s.jsx)("p",{children:"Totalement gratuit et facile d'utilisation, conversez avec des gens du monde entier, d\xe9marrez maintenant."})]})})]})})}}]),n}(a.Component)),ve=(n(320),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={currentUser:F.getCurrentUser()},s}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state.currentUser;return Object(s.jsx)("div",{className:"fullPage",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("header",{className:"jumbotron",children:Object(s.jsx)("h3",{children:Object(s.jsxs)("strong",{children:["Profil de ",e.username]})})}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Id:"})," ",e.id]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(s.jsxs)("p",{STYLE:"padding:0 0 0 20px;",children:[Object(s.jsx)("strong",{children:"Premi\xe8re Langue:"})," ",e.langue1," ",Object(s.jsx)("strong",{children:"Niveau:"})," ",e.lvl1]}),Object(s.jsxs)("p",{STYLE:"padding:0 0 0 20px;",children:[Object(s.jsx)("strong",{children:"Seconde Langue:"})," ",e.langue2,Object(s.jsx)("strong",{children:"Niveau:"})," ",e.lvl2]}),Object(s.jsx)("strong",{children:"R\xf4le:"}),Object(s.jsx)("ul",{children:e.roles&&e.roles.map((function(e,t){return Object(s.jsx)("li",{children:e},t)}))})]})})}}]),n}(a.Component)),ge=(n(321),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={content:""},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.getUserBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}))}},{key:"render",value:function(){return"User Content."==this.state.content?Object(s.jsx)("div",{children:Object(s.jsxs)("div",{class:"globaldiv",children:[Object(s.jsxs)("div",{id:"b1",children:[Object(s.jsx)("h1",{children:"Trouver une conversation"}),Object(s.jsx)("p",{children:"Lancer une roulette pour trouver un utilisateur avec qui avoir une conversation dans la langue de votre choix"}),Object(s.jsx)(o.b,{to:"./ParamConv",children:Object(s.jsx)("button",{class:"big-button",type:"button",children:"Commencer"})})]}),Object(s.jsxs)("div",{id:"b2",children:[Object(s.jsx)("h1",{children:"Creer une conversation"}),Object(s.jsx)("p",{children:"Creer une conversation avec un amis a vous avec qui avoir une conversation dans la langue de votre choix"}),Object(s.jsx)(o.b,{to:"./ParamConvA",children:Object(s.jsx)("button",{class:"big-button",type:"button",children:"Commencer"})})]})]})}):Object(s.jsx)("div",{children:Object(s.jsx)("header",{className:"jumbotron",children:Object(s.jsx)("h3",{children:"Connectez-vous pour acceder \xe0 ce contenu !"})})})}}]),n}(a.Component)),xe=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={content:""},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.getModeratorBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("header",{className:"jumbotron",children:Object(s.jsx)("h3",{children:this.state.content})})})}}]),n}(a.Component),pe=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={content:""},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.getAdminBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("header",{className:"jumbotron",children:Object(s.jsx)("h3",{children:this.state.content})})})}}]),n}(a.Component),fe=n.p+"static/media/photo_Louis.5e273d0b.jfif",Ne=n.p+"static/media/photo_Bapt.1074ec2f.jpg",Ce=n.p+"static/media/photo_Alec.6c3f7171.jpg",Ae=n.p+"static/media/photo_Nass.126d9af7.png",ye=n.p+"static/media/photo_driss.4bb87b27.jpg",ke=n.p+"static/media/photo_saad.add691d8.png",Se=(n(322),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{class:"introb",children:[Object(s.jsx)("h1",{children:"Qui sommes nous ?"}),Object(s.jsx)("p",{children:"Nous sommes une \xe9quipe de 6 \xe9tudiants en deuxi\xe8me ann\xe9e de DUT informatique \xe0 Grenoble, ce projet a pour but de permettre aux utilisateurs de maintenir ou renforcer leur niveau en langues. Avec diff\xe9rentes conversations \xe9crites mais surtout audios, ainsi que des mini jeux pour faciliter le dialogue. Nous avons pris deux mois \xe0 le mettre en place, mais le projet continue de se d\xe9velopper donc restez connect\xe9s :) ."}),Object(s.jsx)("h2",{children:"Voici les membres de l'\xe9quipe :"})]}),Object(s.jsxs)("div",{class:"englobe",children:[Object(s.jsxs)("div",{class:"membresph",children:[Object(s.jsxs)("div",{class:"Louis",children:[Object(s.jsx)("img",{src:fe,className:"Louis",alt:"photoLouis"}),Object(s.jsx)("p",{children:"Louis - D\xe9velopper back-end"})]}),Object(s.jsxs)("div",{class:"Bapt",children:[Object(s.jsx)("img",{src:Ne,className:"Bapt",alt:"photoBapt"}),Object(s.jsx)("p",{children:"Baptiste - D\xe9velopper front-end"})]}),Object(s.jsxs)("div",{class:"Alec",children:[Object(s.jsx)("img",{src:Ce,className:"Alec",alt:"photoAlec"}),Object(s.jsx)("p",{children:"Alec - D\xe9velopper front-end"})]})]}),Object(s.jsxs)("div",{class:"membresph",children:[Object(s.jsxs)("div",{class:"Nass",children:[Object(s.jsx)("img",{src:Ae,className:"Nass",alt:"photoNass"}),Object(s.jsx)("p",{children:"Nassim - Chef de projet"})]}),Object(s.jsxs)("div",{class:"Driss",children:[Object(s.jsx)("img",{src:ye,className:"Driss",alt:"photoDriss"}),Object(s.jsx)("p",{children:"Driss - D\xe9velopper back-end"})]}),Object(s.jsxs)("div",{class:"Saad",children:[Object(s.jsx)("img",{src:ke,className:"Saad",alt:"photoSaad"}),Object(s.jsx)("p",{children:"Saad - D\xe9velopper back-end"})]})]})]}),Object(s.jsx)("div",{class:"finb",children:Object(s.jsx)("p",{children:"Merci \xe0 vous d'utiliser notre application !"})})]})}}]),n}(a.Component)),we=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).logOut=s.logOut.bind(Object(d.a)(s)),s.state={showModeratorBoard:!1,showAdminBoard:!1,currentUser:void 0,addClass:!1},s}return Object(j.a)(n,[{key:"darkm",value:function(){this.setState({addClass:!this.state.addClass})}},{key:"componentDidMount",value:function(){var e=F.getCurrentUser();e&&this.setState({currentUser:e,showModeratorBoard:e.roles.includes("ROLE_MODERATOR"),showAdminBoard:e.roles.includes("ROLE_ADMIN")})}},{key:"logOut",value:function(){F.logout()}},{key:"render",value:function(){var e=this.state,t=e.currentUser,n=e.showModeratorBoard,a=e.showAdminBoard,c=["contain"];return this.state.addClass&&c.push("dark"),Object(s.jsxs)("div",{children:[Object(s.jsxs)("nav",{className:"navbar navbar-expand navbar-custom navbar-dark  navbar-default navbar-custom",children:[Object(s.jsx)(o.b,{to:"/",className:"navbar-brand",children:"LingoPeer"}),Object(s.jsxs)("div",{className:"navbar-nav mr",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/aboutus",className:"nav-link",children:"About us"})}),n&&Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/mod",className:"nav-link",children:"Moderator Board"})}),a&&Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/admin",className:"nav-link",children:"Admin Board"})}),t&&Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/user",className:"nav-link",children:"Conversation"})})]}),t?Object(s.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/profile",className:"nav-link",children:t.username})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{href:"/login",className:"nav-link",onClick:this.logOut,children:"LogOut"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("button",{className:"butonSom",onClick:this.darkm.bind(this),children:"Mode sombre"})})]}):Object(s.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/register",className:"nav-link",children:"Sign Up"})})]})]}),Object(s.jsx)("div",{className:c.join(" "),children:Object(s.jsxs)(ae.c,{children:[Object(s.jsx)(ae.a,{exact:!0,path:["/","/home"],component:Oe}),Object(s.jsx)(ae.a,{exact:!0,path:"/login",component:re}),Object(s.jsx)(ae.a,{exact:!0,path:"/register",component:be}),Object(s.jsx)(ae.a,{exact:!0,path:"/profile",component:ve}),Object(s.jsx)(ae.a,{exact:!0,path:"/aboutus",component:Se}),Object(s.jsx)(ae.a,{path:"/user",component:ge}),Object(s.jsx)(ae.a,{path:"/mod",component:xe}),Object(s.jsx)(ae.a,{path:"/admin",component:pe}),Object(s.jsx)(ae.a,{path:"/ParamConv",component:ne}),Object(s.jsx)(ae.a,{path:"/ParamConvA",component:se}),Object(s.jsx)(ae.a,{path:"/Chatrooms",component:p}),Object(s.jsx)(ae.a,{path:"/Room",component:G}),Object(s.jsx)(ae.a,{path:"/Chat",component:q})]})})]})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(s.jsx)(o.a,{children:Object(s.jsx)(we,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[323,1,2]]]);
//# sourceMappingURL=main.63b47696.chunk.js.map