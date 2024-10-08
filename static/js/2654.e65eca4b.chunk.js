"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[2654],{22654:function(e,s,t){t.r(s);var i=t(15671),n=t(43144),l=t(97326),r=t(60136),a=t(29388),c=t(47313),g=t(70816),o=t.n(g),u=t(85520),d=t(43523),m=t(16390),p=(t(34491),t(46417)),h=function(e){try{var s=e;return e&&String(e).length>0&&String(e).includes('"img/flags/')?((s=String(e).replace("img/flags/",(0,u.F)("media/images/flags/")))&&String(s).includes(".png")&&(s=String(s).replace(".png",".svg")),s=String(s).replace("<img",'<img class="h-16px w-20px me-1" ')):e}catch(t){return e}},x=function(e){try{var s=e;return e&&String(e).length>0&&String(e).includes('"img/browser-svg/')?(s=String(e).replace("img/browser-svg/",(0,u.F)("media/icons/browser-svg/")),s=String(s).replace("<img",'<img class="h-20px w-20px me-1" ')):e}catch(t){return e}},f=function(e){(0,r.Z)(t,e);var s=(0,a.Z)(t);function t(){var e;(0,i.Z)(this,t);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=s.call.apply(s,[this].concat(r))).state={tncLoading:!1},e.onClickToDownloadFile=function(s){return function(t){e.setState({tncLoading:!0});var i=(0,l.Z)(e);e.onRequestTnc(s).then((function(e){setTimeout((function(){return i.setState({tncLoading:!1})}),1e3)})).catch((function(e){setTimeout((function(){return i.setState({tncLoading:!1})}),1e3)}))}},e.onRequestTnc=function(e){return new Promise((function(s){try{return(0,d.saveAs)(e,"TermsAndConditions.docx"),Promise.resolved("")}catch(t){return Promise.resolved("")}}))},e}return(0,n.Z)(t,[{key:"render",value:function(){var e=this.props,s=e.modalAssetData,t=(e.onUpdateRejectedRightDetail,this.state.tncLoading);return(0,p.jsx)("div",{className:"p-lg-6 p-3",children:(0,p.jsxs)("div",{className:"mb-6",children:[(0,p.jsx)("h6",{children:"Information"}),(0,p.jsxs)("ul",{className:"list-group rounded-1 mb-3",children:[(0,p.jsxs)("li",{className:"list-group-item d-flex justify-content-between p-3 bg-light",children:[(0,p.jsx)("span",{className:"text-ellipsis text-gray-600 fs-7 pe-3",children:"User handle"}),(0,p.jsxs)("span",{className:"text-ellipsis fw-bolder text-gray-800 fs-7",children:["@",s.username]})]}),(0,p.jsxs)("li",{className:"list-group-item d-flex justify-content-between p-3 bg-light",children:[(0,p.jsx)("span",{className:"text-ellipsis text-gray-600 fs-7 pe-3",children:"User name"}),(0,p.jsx)("span",{className:"text-ellipsis fw-bolder text-gray-800 fs-7",children:s.username})]}),(0,p.jsxs)("li",{className:"list-group-item d-flex justify-content-between p-3 bg-light",children:[(0,p.jsx)("span",{className:"text-ellipsis text-gray-600 fs-7 pe-3",children:"Post Rejection Date"}),(0,p.jsx)("span",{className:"text-ellipsis fw-bolder text-gray-800 fs-7",children:o().utc(s.ugcRights.actionTime).format("LLLL")})]}),(0,p.jsxs)("li",{className:"list-group-item d-flex justify-content-between p-3 bg-light",children:[(0,p.jsx)("span",{className:"text-ellipsis text-gray-600 fs-7 pe-3",children:"User IP"}),(0,p.jsx)("span",{className:"text-ellipsis fw-bolder text-gray-800 fs-7",children:""==s.ugcRights.userIP?"--":s.ugcRights.userIP})]}),(0,p.jsxs)("li",{className:"list-group-item d-flex justify-content-between p-3 bg-light",children:[(0,p.jsx)("span",{className:"text-ellipsis text-gray-600 fs-7 pe-3",children:"Timezone"}),(0,p.jsx)("span",{className:"text-ellipsis fw-bolder text-gray-800 fs-7",children:""==s.ugcRights.timezone?"--":(0,m.ZP)(h(s.ugcRights.timezone))})]}),(0,p.jsxs)("li",{className:"list-group-item d-flex justify-content-between p-3 bg-light",children:[(0,p.jsx)("span",{className:"text-ellipsis text-gray-600 fs-7 pe-3",children:"User Agent"}),(0,p.jsx)("span",{className:"text-ellipsis fw-bolder text-gray-800 fs-7",children:""==s.ugcRights.userAgent?"--":(0,m.ZP)(x(s.ugcRights.userAgent))})]}),(0,p.jsxs)("li",{className:"list-group-item d-flex justify-content-between p-3 bg-light",children:[(0,p.jsx)("span",{className:"text-ellipsis text-gray-600 fs-7 pe-3",children:"Terms & Condition"}),(0,p.jsx)("span",{className:"text-ellipsis fw-bolder text-gray-800",children:(0,p.jsxs)("button",{type:"button",className:"btn btn-outline-primary btn-sm ".concat(t?"spinner disabled":""),onClick:"CustomUrlType"==s.ugcRights.custom_term_type?window.open(s.ugcRights.custom_terms,"_blank"):this.onClickToDownloadFile(s.ugcRights.custom_terms),children:["Download",(0,p.jsx)("i",{className:"ri-file-download-line ms-1"})]})})]})]}),(0,p.jsx)("h6",{children:"User Comment"}),(0,p.jsx)("div",{className:"card rounded-1 mb-5 overflow-hidden",children:(0,p.jsx)("div",{className:"card-body d-flex align-items-center justify-content-between bg-light",children:(0,p.jsx)("p",{className:"fs-9 fw-medium",children:s.ugcRights&&Object.keys(s.ugcRights).length>0?s.ugcRights.comment:""})})})]})})}}]),t}(c.Component);s.default=f}}]);