"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[9694],{59694:function(e,t,n){n.r(t);var o=n(15671),s=n(43144),l=n(97326),c=n(60136),a=n(29388),i=n(72791),r=n(88890),u=n.n(r),d=n(64802),m=n.n(d),p=n(72426),g=n.n(p),h=n(74342),f=n(13953),x=n(56600),b=n(50732),y=n(34361),v=n(90031),C=n(6697),k=n(53841),j=n(80184),S=i.lazy((function(){return n.e(5217).then(n.bind(n,5217))})),w=i.lazy((function(){return n.e(1410).then(n.bind(n,91410))})),N=i.lazy((function(){return n.e(6293).then(n.bind(n,6293))})),F=i.lazy((function(){return n.e(3422).then(n.bind(n,53422))})),_=i.lazy((function(){return n.e(508).then(n.bind(n,90508))})),A="0701d3d7f8d94e92a65a9cba388b1d96",z="cloud.taggbox.com",R="47ABVORKG52UYE1KB28S",U="pcaTfeokaz28geAAns08H3yaGbOVz6ILgTptu19v",Z="https://test.taggbox.com",L=function(e){(0,c.Z)(n,e);var t=(0,a.Z)(n);function n(e){var s;return(0,o.Z)(this,n),(s=t.call(this,e)).state={step:1,client_logo:null,client_logo_name:null,comment:"What a fantastic shot! We loved your post. Would you mind us utilizing it for our brand?",tncName:"termAndConditions.docx",tncUrl:"termAndConditions.docx",tnc:!1,logoModal:!1,fileModal:!1,activeKey:"ugc-genralRequest",connectedAccount:null,commentError:null,tncUrlError:null,tncError:null,requestedRespone:null},s.onClickToChange=function(e){return function(t){1==s.state.step?s.state.comment&&s.state.tncUrl&&s.state.tnc?s.setState({step:e,activeKey:"ugc-socialAccount"}):(s.state.comment&&0!=String(s.state.comment).length||s.setState({commentError:!0}),s.state.tncUrl||s.setState({tncUrlError:!0}),s.state.tnc||s.setState({tncError:!0})):2==s.state.step?s.state.connectedAccount&&s.setState({step:e,activeKey:"ugc-copyUrl"},(function(){return s.onClicktoSendRequest()})):s.state.step}},s.onClickToRemoveLogo=function(e){return s.setState({client_logo:null,client_logo_name:null})},s.onClickClearFile=function(e){s.setState({tncName:"",tncUrl:""})},s.termsFileDownload=function(){m().saveAs((0,x.F)("media/downloads/Terms&ConditionsforuseofUGC.docx"),"Terms&ConditionsforuseofUGC.docx")},s.modalClose=function(e){return function(t){console.log("step-close",e),2==e?s.setState({step:1,activeKey:"ugc-genralRequest"}):s.props.modalClose(!1)}},s.onChangeComment=function(e){return s.setState({comment:e.target.value})},s.onClicktnc=function(e){var t=s.state.tnc;s.setState({tnc:!t,tncError:null})},s.onLogoClose=function(e){s.uppy.cancelAll(),s.setState({logoModal:!1})},s.onLogoOpen=function(e){return s.setState({logoModal:!0},(function(){u()(".uppy-Dashboard-close").click((function(){s.uppy.cancelAll(),s.setState({logoModal:!1})}))}))},s.onFileOpen=function(e){s.setState({fileModal:!0},(function(){u()(".uppy-Dashboard-close").click((function(){s.uppyPostEdit.cancelAll(),s.setState({fileModal:!1})}))}))},s.onFileClose=function(){s.uppyPostEdit.cancelAll(),s.setState({fileModal:!1})},s.onSelected=function(e){s.setState({activeKey:e})},s.onClicktoSendRequest=function(){var e=s.props.modalAssetData,t=s.state,n=t.comment,o=t.tncUrl,c=t.tncName,a=t.client_logo,i=t.connectedAccount,r=(0,l.Z)(s),u={feedId:e.feedId,custom_message:n,networkId:e.networkId,brandlink:a||"",termslink:o,custom_term_type:c,assets:[{referenceId:e.referenceId,username:i.data[0].email?i.data[0].email:i.data[0].id,media:e.postFile,video:e.mediaFile}]};(0,y.mL)(u).then((function(e){console.log("response",e),r.setState({requestedRespone:e.data})})),console.log("connectedAccountdsd sdfsd",i,u)},s.onUpdateData=function(e,t){s.setState({connectedAccount:{provider:e,data:t}})},s.uppy=new b.hS({debug:!0,autoProceed:!1,restrictions:{maxFileSize:5e6,maxNumberOfFiles:1,minNumberOfFiles:1,allowedFileTypes:["image/*"]}}).use(v.ZP,{target:"#a",params:{auth:{key:A},steps:{store:{robot:"/wasabi/store",bucket_region:"us-west-1",bucket:z,key:R,secret:U,path:"postimage/${file.id}"}}},waitForEncoding:!0}).use(C.Z,{target:b.hS.Dashboard,companionUrl:Z}).use(k.Z,{target:b.hS.Dashboard,companionUrl:Z}),s.uppyPostEdit=new b.hS({debug:!0,autoProceed:!1,restrictions:{maxFileSize:5e6,maxNumberOfFiles:1,minNumberOfFiles:1,allowedFileTypes:["application/pdf","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]}}).use(v.ZP,{target:"#a",params:{auth:{key:A},steps:{store:{robot:"/wasabi/store",bucket_region:"us-west-1",bucket:z,key:R,secret:U,path:"test/${file.id}"}}},waitForEncoding:!0}).use(C.Z,{target:b.hS.Dashboard,companionUrl:Z}).use(k.Z,{target:b.hS.Dashboard,companionUrl:Z}),s}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){var e=this;this.uppyPostEdit.on("transloadit:result",(function(t,n){console.log("client_logo",t,n);var o=n.url.split("/"),s=(o[o.length-1],e.state),l=s.tncName,c=s.tncUrl;c=n.id,l=n.name,console.log("client_logo",c,l),e.setState({tncName:l,tncUrl:c,selectedFile:n.id,filename:"https://cloud.taggbox.com/test/".concat(n.id),selected:"https://cloud.taggbox.com/test/".concat(n.id)},(function(){setTimeout((function(){e.uppyPostEdit.cancelAll(),e.setState({fileModal:!1})}),300)}))})),this.uppy.on("transloadit:result",(function(t,n){var o=e.state,s=o.client_logo,l=o.client_logo_name;s="https://cloud.taggbox.com/postimage/".concat(n.id),l=n.name,console.log("client_logo",s,l),e.setState({client_logo:s,client_logo_name:l,selectedlogoFile:n.id,logofilename:"https://cloud.taggbox.com/postimage/".concat(n.id),logoselected:"https://cloud.taggbox.com/postimage/".concat(n.id)},(function(){setTimeout((function(){e.uppy.cancelAll(),e.setState({logoModal:!1})}),300)}))}))}},{key:"componentWillUnmount",value:function(){this.uppy.close()}},{key:"render",value:function(){var e=this.props.modalAssetData,t=this.state,n=t.step,o=t.activeKey,s=t.connectedAccount,l=t.requestedRespone,c=t.comment;return console.log("connectedAccount",s),e&&Object.keys(e).length>0?(0,j.jsxs)("div",{className:"rights_modal_sidebar position-relative",children:[(0,j.jsx)("div",{className:"rights_modal_aside_wrap",children:null==e.ugcRights?(0,j.jsxs)(h.Z.Container,{activeKey:o,onSelect:this.onSelected,children:[(0,j.jsx)("div",{className:"ugc-wizard-nav",children:(0,j.jsxs)(f.Z,{variant:"nav",className:"bg-light justify-content-between row gx-0",children:[(0,j.jsx)(f.Z.Item,{className:"col-4",children:(0,j.jsxs)(f.Z.Link,{className:"py-3 py-xl-4 block-center ".concat(1==n||2==n||3==n?"active":""),eventKey:"ugc-genralRequest",children:[(0,j.jsx)("span",{className:"svg-icon text-success",children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,j.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,j.jsx)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z",fill:"currentColor"})]})}),(0,j.jsx)("span",{className:"fw-bold text-nowrap",children:"General Request"})]})}),(0,j.jsx)(f.Z.Item,{className:"col-4",children:(0,j.jsxs)(f.Z.Link,{className:"py-3 py-xl-4 block-center ".concat(2==n||3==n?"active":"disabled"),eventKey:"ugc-socialAccount",children:[(0,j.jsx)("span",{className:"svg-icon",children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,j.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,j.jsx)("path",{className:"checkIco",d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z",fill:"currentColor"}),(0,j.jsx)("path",{className:"checkIcoFilled",d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z",fill:"currentColor"})]})}),(0,j.jsx)("span",{className:"fw-bold text-nowrap",children:"Social Account"})]})}),(0,j.jsx)(f.Z.Item,{className:"col-4",children:(0,j.jsxs)(f.Z.Link,{className:"py-3 py-xl-4 block-center ".concat(3==n?"active":"disabled"),eventKey:"ugc-copyUrl",children:[(0,j.jsx)("span",{className:"svg-icon",children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,j.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,j.jsx)("path",{className:"checkIco",d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z",fill:"currentColor"}),(0,j.jsx)("path",{className:"checkIcoFilled",d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z",fill:"currentColor"})]})}),(0,j.jsx)("span",{className:"fw-bold text-nowrap",children:"Copy URL"})]})})]})}),(0,j.jsxs)(h.Z.Content,{children:[(0,j.jsx)(h.Z.Pane,{eventKey:"ugc-genralRequest",children:(0,j.jsx)(i.Suspense,{fallback:(0,j.jsx)(j.Fragment,{}),children:(0,j.jsx)(S,{state:this.state,onChangeComment:this.onChangeComment,onClicktnc:this.onClicktnc,onClickClearFile:this.onClickClearFile,uppyPostEdit:this.uppyPostEdit,uppy:this.uppy,onLogoClose:this.onLogoClose,onLogoOpen:this.onLogoOpen,onClickToRemoveLogo:this.onClickToRemoveLogo,onFileOpen:this.onFileOpen,onFileClose:this.onFileClose})})}),(0,j.jsx)(h.Z.Pane,{eventKey:"ugc-socialAccount",children:(0,j.jsx)(i.Suspense,{fallback:(0,j.jsx)(j.Fragment,{}),children:(0,j.jsx)(w,{modalAssetData:e,onUpdateData:this.onUpdateData,connectedAccount:s})})}),(0,j.jsx)(h.Z.Pane,{eventKey:"ugc-copyUrl",children:(0,j.jsx)(i.Suspense,{fallback:(0,j.jsx)(j.Fragment,{}),children:(0,j.jsx)(N,{requestedRespone:l,comment:c})})})]})]}):e.ugcRights&&Object.keys(e.ugcRights).length>0&&1==e.ugcRights.status?(0,j.jsx)(i.Suspense,{fallback:(0,j.jsx)(j.Fragment,{}),children:(0,j.jsx)(F,{days:parseInt(30)-parseInt(parseInt(g()().diff(g()(e.ugcRights.created),"days"))),expireStatus:!0,modalAssetData:e})}):e.ugcRights&&Object.keys(e.ugcRights).length>0&&2==e.ugcRights.status?(0,j.jsx)(i.Suspense,{fallback:(0,j.jsx)(j.Fragment,{}),children:(0,j.jsx)(_,{modalAssetData:e})}):null}),null==e.ugcRights?(0,j.jsxs)("div",{className:"rights_modal_actions text-center modal-footer w-100",children:[1==n||2==n?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("button",{type:"button",className:"btn btn-secondary me-2",onClick:this.modalClose(n),children:1==n?"Cancel":2==n?"Back":""}),(0,j.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.onClickToChange(1==n?2:2==n?3:4),children:"Next Step"})]}):null,3==n?(0,j.jsx)("button",{type:"button",className:"btn btn-secondary me-2",onClick:this.modalClose,children:"Done"}):null]}):null]}):null}}]),n}(i.Component);t.default=L}}]);
//# sourceMappingURL=9694.01658f7b.chunk.js.map