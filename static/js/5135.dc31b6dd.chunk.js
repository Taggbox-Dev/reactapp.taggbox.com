"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[5135],{45135:function(e,t,n){n.r(t);var s=n(15671),o=n(43144),a=n(60136),l=n(29388),c=n(72791),i=n(28949),r=n(25862),d=n(12576),u=n(88890),h=n.n(u),p=n(50732),m=n(90031),g=n(6697),b=n(53841),x=n(22109),f=n(80184),k=c.lazy((function(){return Promise.all([n.e(3108),n.e(650)]).then(n.bind(n,30650))})),y="0701d3d7f8d94e92a65a9cba388b1d96",j="cloud.taggbox.com",v="47ABVORKG52UYE1KB28S",w="pcaTfeokaz28geAAns08H3yaGbOVz6ILgTptu19v",N="https://test.taggbox.com",B=function(e){(0,a.Z)(n,e);var t=(0,l.Z)(n);function n(e){var o;return(0,s.Z)(this,n),(o=t.call(this,e)).state={backgroundModal:!1},o.onBackgroundClose=function(e){o.uppy.cancelAll(),o.setState({backgroundModal:!1})},o.onBackgroundOpen=function(e){o.setState({backgroundModal:!0},(function(){h()(".uppy-Dashboard-close").click((function(){o.uppy.cancelAll(),o.setState({backgroundModal:!1})}))}))},o.uppy=new p.hS({debug:!0,autoProceed:!1,restrictions:{maxFileSize:5e6,maxNumberOfFiles:1,minNumberOfFiles:1,allowedFileTypes:["image/*"]}}).use(m.ZP,{target:"#a",params:{auth:{key:y},steps:{store:{robot:"/wasabi/store",bucket_region:"us-west-1",bucket:j,key:v,secret:w,path:"postimage/${file.id}"}}},waitForEncoding:!0}).use(g.Z,{target:p.hS.Dashboard,companionUrl:N}).use(b.Z,{target:p.hS.Dashboard,companionUrl:N}),o}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){var e=this,t=this;this.uppy.on("transloadit:result",(function(n,s){t.props.onClickTouploadImage("https://cloud.taggbox.com/postimage/".concat(s.id),s.id,(function(){setTimeout((function(){e.uppy.cancelAll(),e.setState({backgroundModal:!1})}),300)}))}))}},{key:"render",value:function(){var e=this.props,t=e.onClickEnableBackground,n=e.onClickBackgroundColor,s=e.background,o=e.backgroundImageRemove,a=this.state.backgroundModal;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(i.Z.Item,{eventKey:"2",className:"pb-3",children:[(0,f.jsx)(i.Z.Header,{className:"w-100",children:(0,f.jsx)("span",{className:"fs-7 fw-semibold",children:"Background"})}),(0,f.jsxs)(i.Z.Body,{className:"border rounded-1 mt-1 p-2",children:[(0,f.jsxs)("label",{className:"form-check form-switch py-2 align-items-center justify-content-between border-bottom h-40px py-1",children:[(0,f.jsx)("span",{className:"form-check-label ps-0 fs-8 text-gray-800",children:"Enable Background"}),(0,f.jsx)("input",{className:"form-check-input",type:"checkbox",name:"autoplayVideos",checked:s.status,onClick:t})]}),(0,f.jsxs)("label",{className:"d-flex align-items-center justify-content-between border-bottom h-40px py-1",children:[(0,f.jsx)("span",{className:"ms-0 fs-8 text-gray-800 fw-semibold",children:"Background Color"}),(0,f.jsx)(c.Suspense,{fallback:(0,f.jsx)(f.Fragment,{}),children:(0,f.jsx)(k,{color:s.color,onChangeColor:n})})]}),(0,f.jsxs)("div",{className:"d-flex align-items-start justify-content-between flex-column py-1",children:[(0,f.jsx)("p",{className:"fs-8 text-gray-800 fw-semibold text-start mt-2",children:"Upload Background Image"}),(0,f.jsx)("button",{type:"button",className:"btn btn-secondary btn-sm w-100 mb-2",onClick:this.onBackgroundOpen,children:"Attach Image"}),s.image?(0,f.jsx)("div",{className:"card card-custom w-100 rounded-1",children:(0,f.jsx)("div",{className:"card-body d-flex flex-column p-1",children:(0,f.jsxs)("div",{className:"position-relative d-flex align-items-center cursor-pointer",children:[(0,f.jsx)("div",{className:"position-relative rounded-1 bg-light overflow-hidden w-100",style:{paddingBottom:"66%"},children:(0,f.jsx)("img",{className:"object-center-contain position-absolute",loading:"lazy",src:s.image,height:500,width:300,alt:"suit"})}),(0,f.jsx)("div",{className:"removeBanner position-absolute end-0 top-0 pt-2 pe-2",children:(0,f.jsxs)("div",{className:"d-flex align-items-center justify-content-end",children:[(0,f.jsx)(r.Z,{placement:"top",overlay:(0,f.jsx)(d.Z,{id:"button-tooltip-2",children:"Edit"}),children:(0,f.jsx)("button",{type:"button",className:"btn btn-icon btn-secondary h-28px w-28px me-2",onClick:this.onBackgroundOpen,children:(0,f.jsx)("span",{className:"svg-icon svg-icon-6 me-0",children:(0,f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,f.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,f.jsx)("path",{d:"M16.757 3l-2 2H5v14h14V9.243l2-2V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12.757zm3.728-.9L21.9 3.516l-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z",fill:"currentColor"})]})})})}),(0,f.jsx)(r.Z,{placement:"top",overlay:(0,f.jsx)(d.Z,{id:"button-tooltip-2",children:"Remove"}),children:(0,f.jsx)("button",{type:"button",className:"btn btn-icon btn-secondary h-28px w-28px",onClick:o,children:(0,f.jsx)("span",{className:"svg-icon svg-icon-6 me-0",children:(0,f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,f.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,f.jsx)("path",{d:"M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z",fill:"currentColor"})]})})})})]})})]})})}):null]})]})]}),a?(0,f.jsx)(x.j6,{animateOpenClose:!0,proudlyDisplayPoweredByUppy:!1,inline:!1,showProgressDetails:!0,height:750,browserBackButtonClose:!0,showRemoveButtonAfterComplete:!1,uppy:this.uppy,open:!0,onRequestCloseModal:this.onBackgroundClose,closeAfterFinish:!0,plugins:[]}):null]})}}]),n}(c.Component);t.default=B}}]);
//# sourceMappingURL=5135.dc31b6dd.chunk.js.map