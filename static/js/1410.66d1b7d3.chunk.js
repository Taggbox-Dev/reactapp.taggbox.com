"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[1410],{91410:function(e,s,t){t.r(s),t.d(s,{default:function(){return v}});var a=t(15671),n=t(43144),c=t(60136),o=t(29388),l=t(72791),i=t(21830),r=t.n(i),d=t(8663),m=t(56600),u=t(80238),h=t(29439),p=t(84866),f=(t(84682),t(32480)),x=t(80184),w=function(e){var s=(0,l.useState)(""),t=(0,h.Z)(s,2),a=t[0],n=t[1],c=(0,l.useState)(),o=(0,h.Z)(c,2),i=o[0],r=o[1],d=(0,l.useCallback)((function(){alert("login start")}),[]);(0,l.useCallback)((function(){r(null),n(""),alert("logout success")}),[]),(0,l.useCallback)((function(){}),[]);return console.log("provider",a,i),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(p.LO,{client_id:"95564504779-0hejo69vc4apo6p0avpafasvbcfhlvom.apps.googleusercontent.com",onLoginStart:d,redirect_uri:"https://reactapp.taggbox.com/login",scope:"openid profile email",discoveryDocs:"claims_supported",access_type:"offline",onResolve:function(s){var t=s.provider,a=s.data;return e.onUpdateData(t,a)},onReject:function(e){console.log(e)},children:(0,x.jsxs)("div",{className:"d-flex align-items-center rounded-1 mb-2 p-3 btn btn-outline-secondary w-100",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center flex-grow-1 w-75",children:[(0,x.jsx)("div",{className:"symbol symbol-40 bg-light rounded-circle flex-shrink-0 me-2 overflow-hidden"}),(0,x.jsx)("div",{className:"w-75 overflow-hidden",children:(0,x.jsx)("span",{className:"text-start fs-7 d-block fw-bolder text-ellipsis",children:"Add Account"})})]}),(0,x.jsx)("div",{className:"d-flex",children:(0,x.jsx)("span",{className:"h-20px w-20px",children:(0,x.jsx)("img",{className:"object-center-cover",src:(0,m.F)("media/icons/social-icons/".concat((0,f.O5)(7),".svg")),alt:"network",style:{filter:"grayscale(1)",opacity:".5"}})})})]})})})},b=t(7566),g=function(e){(0,c.Z)(t,e);var s=(0,o.Z)(t);function t(){var e;(0,a.Z)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=s.call.apply(s,[this].concat(c))).state={connected:null,showConfirm:!1},e.handleYes=function(s){e.setState({showConfirm:!0})},e.handleNo=function(s){e.setState({showConfirm:!0})},e.onClickSocialConnect=function(e){return function(s){e&&Object.keys(e).length>0&&r().fire({imageUrl:(0,m.F)("media/icons/social-icons/".concat((0,f.O5)(e.networkId),".svg")),title:"<strong>".concat((0,f.O5)(e.networkId),"</strong>"),html:"Connect to ".concat((0,f.O5)(e.networkId)," and start collecting assets."),showCloseButton:!0,showCancelButton:!1,focusConfirm:!0,confirmButtonText:"Continue with ".concat((0,f.O5)(e.networkId)),confirmButtonAriaLabel:"Continue with ".concat((0,f.O5)(e.networkId)),cancelButtonText:'<i className="fa fa-thumbs-down"></i>',cancelButtonAriaLabel:"Thumbs down"}).then((function(s){switch(localStorage.setItem("socialConnect",!0),localStorage.setItem("socialNetworkId",e.networkId),e.networkId){case 1:(0,b.ho)(!0);break;case 6:(0,b.nY)(6);break;case 21:(0,b.pz)("yammer",null,!0);break;case 11:(0,b.GC)(11);break;case 8:(0,b.UB)(!0);break;case 3:(0,b.W8)(3,!0);break;case 2:var t="https://api.instagram.com/oauth/authorize?client_id=".concat("480810795949098","&redirect_uri=",d.XP,"/instagram/feeds/authCallback&scope=user_profile,user_media&response_type=code");window.open(t,"_blank","width=786,height=786");break;case 18:(0,b.W8)(18,!0)}}))}},e}return(0,n.Z)(t,[{key:"render",value:function(){this.state.showConfirm;var e=this.props,s=e.modalAssetData,t=e.connectedAccount;return console.log("modalAssetData social account",s),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"p-lg-6 p-3",children:(0,x.jsx)("div",{className:"m-auto",children:t&&Object.keys(t).length>0?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h3",{className:"mb-2 pb-2 fs-7 pt-1",children:(0,x.jsx)("span",{className:"fw-medium",children:"Connect Account"})}),(0,x.jsxs)("div",{className:"mb-8",children:[(0,x.jsxs)("button",{type:"button",className:"d-flex align-items-center rounded-1 mb-2 p-3 border border-dark bg-white w-100",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center flex-grow-1 w-75",children:[(0,x.jsx)("div",{className:"symbol symbol-40 rounded-circle flex-shrink-0 me-2 overflow-hidden",children:(0,x.jsx)("img",{className:"object-center-cover",src:t.data.picture.data.url,srcSet:t.data.picture.data.url,height:40,width:40,alt:"instagram"})}),(0,x.jsx)("div",{className:"w-75 overflow-hidden",children:(0,x.jsxs)("span",{className:"text-start fs-7 d-block fw-bolder text-dark text-ellipsis",children:["@",t.data.name]})})]}),(0,x.jsx)("div",{className:"d-flex",children:(0,x.jsx)("span",{className:"h-20px w-20px",children:(0,x.jsx)("img",{className:"object-center-cover",src:(0,m.F)("media/icons/social-icons/".concat(t.provider,".svg")),alt:""})})})]}),(0,x.jsx)("span",{className:"fw-medium",children:"You are logged in with this account"})]})]}):(0,x.jsx)(x.Fragment,{children:3==s.networkId?(0,x.jsx)(u.Z,{onUpdateData:this.props.onUpdateData}):7==s.networkId?(0,x.jsx)(w,{onUpdateData:this.props.onUpdateData}):(0,x.jsxs)("button",{type:"button",className:"d-flex align-items-center rounded-1 mb-2 p-3 btn btn-outline-secondary w-100",onClick:this.onClickSocialConnect(s),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center flex-grow-1 w-75",children:[(0,x.jsx)("div",{className:"symbol symbol-40 bg-light rounded-circle flex-shrink-0 me-2 overflow-hidden"}),(0,x.jsx)("div",{className:"w-75 overflow-hidden",children:(0,x.jsx)("span",{className:"text-start fs-7 d-block fw-bolder text-ellipsis",children:"Add Account"})})]}),s.networkId?(0,x.jsx)("div",{className:"d-flex",children:(0,x.jsx)("span",{className:"h-20px w-20px",children:(0,x.jsx)("img",{className:"object-center-cover",src:(0,m.F)("media/icons/social-icons/".concat((0,f.O5)(s.networkId),".svg")),alt:"network",style:{filter:"grayscale(1)",opacity:".5"}})})}):null]})})})})})}}]),t}(l.Component),v=g}}]);
//# sourceMappingURL=1410.66d1b7d3.chunk.js.map