"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[4462],{24462:function(e,i,s){s.r(i);var t=s(1413),n=s(15671),a=s(43144),l=s(60136),o=s(29388),c=s(72791),r=s(78687),d=s(55353),m=s(11087),u=s(56600),h=s(23794),x=s(2841),p=s(46900),b=s(46305),g=s(12756),f=s(88890),j=s.n(f),N=(s(8663),s(80184)),y=c.lazy((function(){return s.e(9977).then(s.bind(s,89977))})),v=c.lazy((function(){return s.e(982).then(s.bind(s,20982))})),k=function(e){(0,l.Z)(s,e);var i=(0,o.Z)(s);function s(e){var t;((0,n.Z)(this,s),(t=i.call(this,e)).setMode=function(e){document.getElementsByTagName("html")[0].setAttribute("data-theme",e),t.props.uploadModalClick(t.state.editMediaShowModal),t.setState({appThemeSkin:e},(function(){return t.props.setAppThemeSkin(e)}))},t.editMediaHandleModalShow=function(){t.setState({editMediaShowModal:!0})},t.editMediaHandleCallback=function(e){t.setState({editMediaShowModal:e}),t.props.uploadModalClick(!1)},t.onClickSignOut=function(e){t.setState({logOutSpinner:!0}),t.props.logOutUser()},t.onEmailCopy=function(e){return function(i){return(0,x.U5)(e)}},t.state={isActiveAside:!1,appThemeSkin:e.cookies?e.cookies:"light",editMediaShowModal:!1,logOutSpinner:!1},e.cookies)&&document.getElementsByTagName("html")[0].setAttribute("data-theme",e.cookies);return t}return(0,a.Z)(s,[{key:"componentWillReceiveProps",value:function(e){e.uploadStatus!=this.state.editMediaShowModal&&(e.uploadStatus?this.setState({editMediaShowModal:!0}):(this.setState({editMediaShowModal:!1}),j()("#resetUppyUpload")&&j()(".uppy-Container").length>0&&j()("#resetUppyUpload").click()))}},{key:"render",value:function(){var e=this,i=this.state,s=i.appThemeSkin,n=i.editMediaShowModal,a=i.logOutSpinner,l=this.props,o=l.userData,r=l.notificationList,b=l.history;return(0,N.jsxs)("div",{className:"header-menu d-flex align-items-center justify-content-end w-xs-100 h-100",children:[(0,N.jsxs)("div",{className:"d-flex align-items-center h-100 flex-shrink-0",children:[(0,N.jsxs)(d.Z,{id:"head_skin_",align:"end",className:"block-center position-relative head_skin_",children:[(0,N.jsxs)(d.Z.Toggle,{variant:"link",className:"btn btn-icon btn-active-light btn-active-color-primary p-0 text-decoration-none transition-none arrow_disabled",children:["light"===s?(0,N.jsx)("i",{className:"ri-sun-fill icon-6"}):null,"dark"===s?(0,N.jsx)("i",{className:"ri-moon-clear-fill icon-6"}):null,"system"===s?(0,N.jsx)("span",{className:"svg-icon me-0 text-dark",children:(0,N.jsx)(h.Z,{src:(0,u.F)("media/icons/svg-icons/computer-setting.svg"),height:16,width:16})}):null]}),(0,N.jsxs)(d.Z.Menu,{children:[(0,N.jsx)("div",{className:"menu-item",children:(0,N.jsxs)(d.Z.Item,{className:"".concat("light"===s?"active ":"","px-3 py-2"),onClick:function(){return e.setMode("light")},children:[(0,N.jsx)("i",{className:"ri-sun-fill icon-6 me-2 text-dark"}),(0,N.jsx)("span",{className:"menu-title",children:"Light"})]})}),(0,N.jsx)("div",{className:"menu-item",children:(0,N.jsxs)(d.Z.Item,{className:"".concat("dark"===s?"active ":"","px-3 py-2"),onClick:function(){return e.setMode("dark")},children:[(0,N.jsx)("i",{className:"ri-moon-clear-fill icon-6 me-2 text-dark"}),(0,N.jsx)("span",{className:"menu-title",children:"Dark"})]})}),(0,N.jsx)("div",{className:"menu-item",children:(0,N.jsxs)(d.Z.Item,{className:"".concat("system"===s?"active ":"","px-3 py-2"),onClick:function(){return e.setMode("system")},children:[(0,N.jsx)("span",{className:"svg-icon svg-icon-5",children:(0,N.jsx)(h.Z,{src:(0,u.F)("media/icons/svg-icons/computer-setting.svg"),height:16,width:16})}),(0,N.jsx)("span",{className:"menu-title",children:"System"})]})})]})]}),(0,N.jsx)("div",{className:"head_upload_ block-center border-end",children:(0,N.jsxs)("button",{type:"button",className:"btn btn-primary d-flex align-items-center ".concat(localStorage.getItem("expired")?"disabled":""),onClick:this.editMediaHandleModalShow,children:[(0,N.jsx)("span",{className:"svg-icon svg-icon-5 me-lg-2 me-0",children:(0,N.jsx)(h.Z,{src:(0,u.F)("media/icons/svg-icons/cloud-upload.svg")})}),(0,N.jsx)("span",{className:"d-lg-flex d-none fw-medium fs-8",children:"Upload"})]})}),(0,N.jsxs)(d.Z,{className:"block-center head_notifications_",align:"end",children:[(0,N.jsx)(d.Z.Toggle,{variant:"link",id:"head_notifications_",className:"btn btn-icon btn-active-light btn-active-color-primary text-decoration-none p-0 position-relative arrow_disabled",children:(0,N.jsxs)("span",{className:"d-flex align-items-center justify-content-center",children:[(0,N.jsx)("span",{className:"notifications_count bg-primary text-light-alt position-absolute rounded-circle",id:"notificationCount",style:{display:"none"},children:" 0"}),(0,N.jsx)("i",{className:"ri-notification-4-line icon-4"})]})}),(0,N.jsx)(d.Z.Menu,{className:"p-0",children:(0,N.jsx)(c.Suspense,{fallback:(0,N.jsx)(N.Fragment,{}),children:(0,N.jsx)(v,{notificationList:r})})})]}),(0,N.jsxs)(d.Z,{className:"block-center user_profile_",align:"end",autoClose:!0,children:[(0,N.jsx)(d.Z.Toggle,{variant:"link",id:"user_profile_",className:"btn author_profile p-0 border-0 text-decoration-none d-block rounded-circle overflow-hidden arrow_disabled",children:o&&Object.keys(o).length>0?(0,N.jsx)(g.default,{className:"symbol symbol-38 rounded-circle bg-light",imageSize:38,symbolClass:"symbol-label text-light-alt fw-bolder text-uppercase fs-5",name:o.user.name,profileUrl:(0,x.iW)(o.user.picture),networkId:0}):null}),o&&Object.keys(o).length>0?(0,N.jsxs)(d.Z.Menu,{className:"p-0",children:[(0,N.jsx)("div",{className:"d-flex align-items-center justify-content-between w-100 p-3 border-bottom",children:(0,N.jsxs)("div",{className:"d-flex align-items-center me-2",children:[(0,N.jsx)(m.rU,{to:"/profile",className:"text-decoration-none",children:(0,N.jsx)(g.default,{className:"symbol symbol-40 rounded-circle flex-shrink-0 me-2 overflow-hidden bg-light",imageSize:40,symbolClass:"symbol-label text-light-alt fw-bolder text-uppercase fs-5",name:o.user.name,profileUrl:(0,x.iW)(o.user.picture),networkId:0})}),(0,N.jsxs)("div",{className:"",children:[(0,N.jsx)("p",{className:"text-dark mb-0",children:(0,N.jsx)(m.rU,{to:"/profile",className:"text-decoration-none",children:(0,N.jsx)("strong",{className:"fs-6 fw-bold text-break text-gray-800",children:o.user.name})})}),(0,N.jsx)("span",{className:"mb-0 text-gray-600 text-break fs-8 cursor-pointer",id:"headerProfileEmail",onClick:this.onEmailCopy("headerProfileEmail"),children:o.user.emailId})]})]})}),(0,N.jsxs)("div",{className:"px-5 mb-3",children:[localStorage.getItem("isAdmin")?(0,N.jsxs)(d.Z.Item,{className:"navi-item px-0 py-2 py-xxl-3 border-bottom dropdown-item rounded-0",onClick:function(e){return(0,p.Qr)()},children:[(0,N.jsx)("div",{className:"symbol symbol-40 bg-light me-3",children:(0,N.jsx)("div",{className:"symbol-label",children:(0,N.jsx)("i",{className:"ri-logout-circle-r-line icon-6 me-0 text-warning"})})}),(0,N.jsx)("div",{className:"navi-text",children:(0,N.jsx)("div",{className:"fs-7 fw-semibold mb-0 text-warning",children:"Back To Admin"})})]}):null,(0,N.jsxs)(d.Z.Item,{className:"navi-item px-0 py-2 py-xxl-3 border-bottom dropdown-item rounded-0",onClick:function(e){return b("/profile")},children:[(0,N.jsx)("div",{className:"symbol symbol-40 bg-light me-3",children:(0,N.jsx)("div",{className:"symbol-label text-dark",children:(0,N.jsx)("i",{className:"ri-user-3-line icon-6 me-0"})})}),(0,N.jsxs)("div",{className:"navi-text",children:[(0,N.jsx)("div",{className:"fs-7 fw-semibold mb-1",children:"My Profile"}),(0,N.jsx)("div",{className:"text-gray-600 fs-8",children:"View/Edit your personal information "})]})]}),(0,N.jsxs)(d.Z.Item,{className:"navi-item px-0 py-2 py-xxl-3 border-bottom dropdown-item rounded-0",onClick:function(e){return b("/billing")},children:[(0,N.jsx)("div",{className:"symbol symbol-40 bg-light me-3",children:(0,N.jsx)("div",{className:"symbol-label text-dark",children:(0,N.jsx)("i",{className:"ri-contacts-line icon-6 me-0"})})}),(0,N.jsxs)("div",{className:"navi-text",children:[(0,N.jsx)("div",{className:"fs-7 fw-semibold mb-1",children:"My Account"}),(0,N.jsx)("div",{className:"text-gray-600 fs-8",children:"Account information and plan details"})]})]}),(0,N.jsxs)("button",{type:"button",onClick:this.onClickSignOut,className:"navi-item px-0 py-2 py-xxl-3 dropdown-item rounded-0 ".concat(a?"disabled":""),children:[(0,N.jsx)("div",{className:"symbol symbol-40 bg-light me-3",children:(0,N.jsx)("div",{className:"symbol-label ".concat(a?"text-gray-500":"text-dark"),children:(0,N.jsx)("i",{className:"ri-logout-circle-r-line icon-6 me-0"})})}),(0,N.jsx)("div",{className:"navi-text",children:(0,N.jsx)("div",{className:"fs-7 fw-semibold mb-1 ".concat(a?"spinner spinner-gray text-gray-500":""),children:"Sign Out"})})]})]})]}):null]})]}),(0,N.jsx)(c.Suspense,{fallback:(0,N.jsx)(N.Fragment,{}),children:n?(0,N.jsx)(y,(0,t.Z)({editMediaHandleCallback:this.editMediaHandleCallback,editMediaToggle:n},this.props)):null})]})}}]),s}(c.Component);i.default=(0,r.$j)((function(e){return{userData:e.authenticated.userData,uploadStatus:e.modalstatus.uploadStatus,notificationList:e.notifications.notificationList}}),(function(e){return{logOutUser:function(){return e((0,p.ne)())},uploadModalClick:function(i){return e((0,b.lN)(i))}}}))(k)}}]);
//# sourceMappingURL=4462.5dcb36a6.chunk.js.map