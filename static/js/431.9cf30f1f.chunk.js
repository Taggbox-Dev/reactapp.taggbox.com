"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[431],{70431:function(e,t,a){a.r(t);var n=a(15671),s=a(43144),c=a(97326),o=a(60136),i=a(29388),r=a(72791),l=a(21830),d=a.n(l),u=a(55920),h=a(8663),m=a(56600),p=a(92719),f=a(67839),g=a(29795),k=(a(12756),a(49907),a(2841)),w=a(7566),v=a(23544),x=a(25554),b=a(78027),y=a(32002),j=a(46900),C=a(80184),I=new BroadcastChannel("connect"),_=new u.Z,N=function(e){(0,o.Z)(a,e);var t=(0,i.Z)(a);function a(){var e;(0,n.Z)(this,a);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={connected:null,showConfirm:!1,rightsVia:""},e.onLoadSocialAccount=function(){try{var t=e.props.modalAssetData;if(_.get("ugcRights".concat(t.networkId))){var a=_.get("ugcRights".concat(t.networkId));a&&a.length>0&&e.setState({access_token:"",socialData:null,accountsData:a},(function(){return e.props.onUpdateData(String((0,k.O5)(t.networkId)).toLowerCase(),a)}))}}catch(n){}},e.readAuthenticationCode=function(t){var a=JSON.parse(t.data),n=a.data,s=a.networkId,o=a.type,i=(0,c.Z)(e);if("get-rights"==o){JSON.parse(t.data);var r=e.props.modalAssetData;if(2==r.networkId||18==r.networkId)(0,x.YK)(n,(function(t){(0,y.H$)({access_token:t.token}).then((function(t){var a=t.data,n=[];a&&Object.keys(a).length>0&&n.push({id:a.id,name:a.username,picture:(0,m.F)("media/icons/social-icons/".concat((0,k.O5)(r.networkId),".svg"))}),_.set("ugcRights".concat(r.networkId),JSON.stringify(n),{path:"/"}),i.setState({access_token:a.token,socialData:t.data,accountsData:n},(function(){return e.props.onUpdateData("instagram",n)}))}))}));else if(3==r.networkId)(0,x.XN)(n,s,(function(t){(0,y.pV)({access_token:t.token}).then((function(a){var n=a.data.pages,s=[];n&&n.length>0&&n.map((function(e){s.push({id:e.id,name:e.name,access_token:e.access_token,picture:(0,m.F)("media/icons/social-icons/".concat((0,k.O5)(r.networkId),".svg"))})})),_.set("ugcRights".concat(r.networkId),JSON.stringify(s),{path:"/"}),i.setState({access_token:t.token,socialData:a.data,accountsData:s},(function(){return e.props.onUpdateData("facebook",s)}))}))}));else if(1==r.networkId){var l=[];n&&Object.keys(n).length>0&&l.push({id:n.id_str,name:n.name,picture:n.picture?n.picture:(0,m.F)("media/icons/social-icons/".concat((0,k.O5)(r.networkId),".svg"))}),_.set("ugcRights".concat(r.networkId),JSON.stringify(l),{path:"/"}),i.setState({access_token:localStorage.getItem("tokenSecret"),socialData:n,accountsData:l},(function(){return e.props.onUpdateData("twitter",l)}))}else if(28==r.networkId){l=[];n&&Object.keys(n).length>0&&l.push({id:n.display_name,name:n.display_name,picture:n.avatar?n.avatar:(0,m.F)("media/icons/social-icons/".concat((0,k.O5)(r.networkId),".svg"))}),_.set("ugcRights".concat(r.networkId),JSON.stringify(l),{path:"/"}),i.setState({access_token:n.client_key,socialData:n,accountsData:l},(function(){return e.props.onUpdateData("tiktok",l)}))}else(0,b.Jr)(n,s,(function(e){}))}},e.handleYes=function(t){e.setState({showConfirm:!0})},e.handleNo=function(t){e.setState({showConfirm:!0})},e.onClickSocialConnect=function(e){return function(t){e&&Object.keys(e).length>0&&d().fire({imageUrl:(0,m.F)("media/icons/social-icons-square/".concat((0,k.O5)(e.networkId),".svg")),imageHeight:40,imageWidth:40,title:"<strong>".concat((0,k.nX)((0,k.O5)(e.networkId)),"</strong>"),html:"Add an account to continue",showCloseButton:!0,showCancelButton:!1,focusConfirm:!0,confirmButtonText:"Continue with ".concat((0,k.nX)((0,k.O5)(e.networkId))),confirmButtonAriaLabel:"Continue with ".concat((0,k.nX)((0,k.O5)(e.networkId)))}).then((function(t){if(t.isConfirmed)switch(localStorage.setItem("networkId",e.networkId),localStorage.setItem("connectionType","get-rights"),e.networkId){case 1:(0,j.ov)();break;case 6:(0,w.nY)(6);break;case 21:(0,v.$8)();break;case 11:(0,w.GC)(11);break;case 8:(0,v.ok)();break;case 3:(0,v.vr)(3);break;case 28:(0,v.Bq)();break;case 2:var a="https://api.instagram.com/oauth/authorize?client_id=".concat(h.yz,"&redirect_uri=").concat(h.XP,"/instagram/feeds/authCallback/&scope=user_profile,user_media&response_type=code");window.open(a,"_blank","width=786,height=786");break;case 18:var n="https://api.instagram.com/oauth/authorize?client_id=".concat(h.yz,"&redirect_uri=").concat(h.XP,"/instagram/feeds/authCallback/&scope=user_profile,user_media&response_type=code");window.open(n,"_blank","width=786,height=786")}}))}},e.handleChangeOption=function(t){e.setState({rightsVia:t})},e}return(0,s.Z)(a,[{key:"componentDidMount",value:function(){I.addEventListener("message",this.readAuthenticationCode),this.onLoadSocialAccount()}},{key:"componentWillUnmount",value:function(){I.removeEventListener("message",this.readAuthenticationCode)}},{key:"render",value:function(){var e=this.props,t=e.modalAssetData,a=(e.connectedAccount,e.rightsViaOption),n=e.rightsVia,s=!(!(t&&Object.keys(t).length>0)||2!=t.networkId&&18!=t.networkId);return(0,C.jsx)("div",{className:"p-lg-6 p-3",children:(0,C.jsxs)("div",{className:"m-auto",children:[(0,C.jsx)("h3",{className:"mb-1 fs-7 pt-1",children:"Select the mode for Right Request"}),(0,C.jsxs)("p",{children:["Tagbox offers ",s?"two":"one"," distinct modes to request rights. ",s?"Comment Request and DM Request":"DM Request",". "]}),(0,C.jsx)("div",{className:"mb-3 d-flex flex-column",children:(0,C.jsxs)(p.Z,{type:"radio",name:"options",defaultValue:n,className:"flex-column",onChange:a,children:[s?(0,C.jsxs)(f.Z,{variant:"outline-secondary",id:"rightsVia-2",value:"viaComments",className:"mb-2 d-flex bg-transparent justify-content-between py-4 ".concat("viaComments"==n?"border-success":""),children:[(0,C.jsxs)("div",{className:"d-flex me-3 fw-normal",children:[(0,C.jsx)("i",{class:"ri-message-line icon-3 mt-1 me-2 fw-normal"}),(0,C.jsxs)("span",{className:"text-start",children:[(0,C.jsx)("p",{className:"h6 mb-0 fw-medium",children:"Comment Request"}),(0,C.jsx)("span",{className:"fs-10",children:"Request rights by commenting under the post you desire the rights for! "})]})]}),(0,C.jsx)(g.Z.Check.Input,{type:"radio",name:"rights-via",className:"d-none"}),(0,C.jsx)("span",{className:"w-20px",children:"viaComments"==n?(0,C.jsx)("i",{class:"ri-checkbox-circle-fill icon-5 me-0 text-success"}):null})]}):null,(0,C.jsxs)(f.Z,{variant:"outline-secondary",id:"rightsVia-3",value:"viaDM",className:"mb-2 d-flex bg-transparent justify-content-between py-4 ".concat("viaDM"==n?"border-success":""),children:[(0,C.jsxs)("div",{className:"d-flex me-3 fw-normal",children:[(0,C.jsx)("i",{class:"ri-discuss-line icon-3 mt-1 me-2 fw-normal"}),(0,C.jsxs)("span",{className:"text-start",children:[(0,C.jsx)("p",{className:"h6 mb-0 fw-medium",children:"DM Request"}),(0,C.jsx)("span",{className:"fs-10",children:"Send a Rights request directly into the DM of the creators! "})]})]}),(0,C.jsx)(g.Z.Check.Input,{type:"radio",name:"rights-via",className:"d-none"}),(0,C.jsx)("span",{className:"w-20px",children:"viaDM"==n?(0,C.jsx)("i",{class:"ri-checkbox-circle-fill icon-5 me-0 text-success"}):null})]})]})},"inline-radio")]})})}}]),a}(r.Component);t.default=N}}]);
//# sourceMappingURL=431.9cf30f1f.chunk.js.map