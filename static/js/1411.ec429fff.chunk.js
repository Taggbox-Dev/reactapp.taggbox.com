"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[1411],{1411:function(e,s,l){l.r(s);var a=l(1413),i=l(15671),t=l(43144),c=l(97326),n=l(60136),r=l(29388),o=l(72791),d=l(28949),m=l(56600),h=l(32002),x=l(65882),p=(l(42195),l(91731),l(80184)),g=function(e){(0,n.Z)(l,e);var s=(0,r.Z)(l);function l(){var e;return(0,i.Z)(this,l),(e=s.call(this)).onLoadPublish=function(){var s=(0,c.Z)(e);(0,h.Vv)().then((function(e){s.setState({publishList:e.data})}))},e.campaignTypeFun=function(s){return e.props.campaignTypeCallback(s)},e.state={showModal:!1,campaignType:"HashtagCampaign",publishList:[]},e}return(0,t.Z)(l,[{key:"componentDidMount",value:function(){this.onLoadPublish()}},{key:"render",value:function(){var e=this,s=(this.state.setValue,this.props),l=s.filterApply,i=s.state,t=(s.genratedCodeModal,s.onClickToDelete,s.onResetFilter),c=(s.activeFilter,s.history,s.onChangeName,s.onClickConnectWith),n=s.onClickmediaSize,r=s.onClickPublishType,o=s.onChangeDescription;return(0,p.jsxs)("div",{className:"card-body pe-1",children:[(0,p.jsx)("div",{className:"d-flex align-items-center justify-content-between mb-2",children:(0,p.jsx)("h6",{className:"fs-7 fw-bolder mb-0",children:"Select Filter"})}),(0,p.jsx)("div",{className:"social_aside_inner",children:(0,p.jsxs)(d.Z,{defaultActiveKey:"0",children:[i.chooseFilter&&Object.keys(i.chooseFilter).map((function(s,l){return(0,p.jsx)(x.Z,(0,a.Z)((0,a.Z)({filterKey:s},e.props),{},{indexFilter:l}))})),(0,p.jsxs)(d.Z.Item,{eventKey:"0",className:"pb-3",children:[(0,p.jsxs)(d.Z.Header,{className:"add_fillter_btn",children:[(0,p.jsx)("span",{className:"svg-icon text-gray-800 d-flex",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[(0,p.jsx)("path",{className:"plus_symbol",d:"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z",fill:"currentColor"}),(0,p.jsx)("path",{className:"minus_symbol",d:"M5 11V13H19V11H5Z",fill:"currentColor"})]})}),(0,p.jsx)("span",{className:"fs-9 fw-medium",children:"Choose Filter"})]}),(0,p.jsxs)(d.Z.Body,{className:"border rounded-1 mt-1",children:[(0,p.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(i.chooseFilter).includes("collection")?"d-none disabled":""),onClick:l("collection"),children:[(0,p.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,p.jsx)("div",{className:"symbol-label",children:(0,p.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,p.jsx)("path",{d:"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM8 19h12v-8H8v8zm-2 0v-9a1 1 0 0 1 1-1h13V7h-8.414l-2-2H4v14h2z",fill:"currentColor"})]})})})}),(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)("p",{className:"fs-9 fw-bold mb-0 text-gray-800",children:"Collection"}),(0,p.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the preferred collection"})]})]}),(0,p.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(i.chooseFilter).includes("source")?"d-none disabled":""),onClick:l("source"),children:[(0,p.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,p.jsx)("div",{className:"symbol-label",children:(0,p.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,p.jsx)("path",{id:"Path_1","data-name":"Path 1",d:"M0,0H24V24H0Z",fill:"none"}),(0,p.jsx)("path",{id:"Path_4","data-name":"Path 4",d:"M8.365,20.286A9.309,9.309,0,0,1,2.9,14.82a3.246,3.246,0,0,1,0-6.455A9.309,9.309,0,0,1,8.365,2.9a3.246,3.246,0,0,1,6.455,0,9.309,9.309,0,0,1,5.465,5.466,3.246,3.246,0,0,1,0,6.455,9.311,9.311,0,0,1-5.466,5.465,3.246,3.246,0,0,1-6.455,0Zm1.836-.347a1.391,1.391,0,0,0,2.782.048v-.1a1.391,1.391,0,0,0-2.782.048ZM6.328,16.818a7.393,7.393,0,0,0,2.388,1.614,3.247,3.247,0,0,1,5.751,0,7.444,7.444,0,0,0,3.965-3.963,3.247,3.247,0,0,1,0-5.752,7.447,7.447,0,0,0-3.964-3.964,3.247,3.247,0,0,1-5.752,0A7.444,7.444,0,0,0,4.752,8.716a3.247,3.247,0,0,1,0,5.752A7.427,7.427,0,0,0,6.328,16.818Zm12.22-5.226a1.391,1.391,0,1,0,1.39-1.391A1.392,1.392,0,0,0,18.548,11.592Zm-15.3,1.391a1.391,1.391,0,1,0-1.391-1.391A1.393,1.393,0,0,0,3.246,12.983ZM10.2,3.246a1.391,1.391,0,0,0,2.782.048V3.2a1.391,1.391,0,0,0-2.782.048Z",transform:"translate(0.408 0.408)",fill:"currentColor"})]})})})}),(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)("p",{className:"fs-9 fw-bold mb-0 text-gray-800",children:"Network"}),(0,p.jsx)("span",{className:"fs-10 text-gray-500",children:"Choose the required network"})]})]}),(0,p.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(i.chooseFilter).includes("connection")?"d-none disabled":""),onClick:l("connection"),children:[(0,p.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,p.jsx)("div",{className:"symbol-label",children:(0,p.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0H24V24H0z"}),(0,p.jsxs)("g",{children:[(0,p.jsx)("path",{id:"Path_2321","data-name":"Path 2321",d:"M21,14v5a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3h5V5H5V19H19V14Z",fill:"currentColor"}),(0,p.jsx)("path",{id:"Path_2322","data-name":"Path 2322",d:"M21,7H17V3H15V7H11V9h4v4h2V9h4",fill:"currentColor"})]})]})})})}),(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)("p",{className:"fs-9 fw-bold mb-0 text-gray-800",children:"Network Manager"}),(0,p.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the connection type"})]})]}),(0,p.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(i.chooseFilter).includes("assetsType")?"d-none disabled":""),onClick:l("assetsType"),children:[(0,p.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,p.jsx)("div",{className:"symbol-label",children:(0,p.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,p.jsx)("path",{d:"M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",fill:"currentColor"})]})})})}),(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)("p",{className:"fs-9 fw-bold mb-0 text-gray-800",children:"Assets Type"}),(0,p.jsx)("span",{className:"fs-10 text-gray-500",children:"Choose the type of asset"})]})]}),(0,p.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(i.chooseFilter).includes("tags")?"d-none disabled":""),onClick:l("tags"),children:[(0,p.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,p.jsx)("div",{className:"symbol-label",children:(0,p.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,p.jsx)("path",{d:"M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z",fill:"currentColor"})]})})})}),(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)("p",{className:"fs-9 fw-bold mb-0 text-gray-800",children:"Tag"}),(0,p.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the preferred tag"})]})]}),(0,p.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(i.chooseFilter).includes("ugcrights")?"d-none disabled":""),onClick:l("ugcrights"),children:[(0,p.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,p.jsx)("div",{className:"symbol-label",children:(0,p.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10.236",height:"11.897",viewBox:"0 0 10.236 11.897",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0H24V24H0z"}),(0,p.jsx)("path",{id:"Path_1","data-name":"Path 1",d:"M-564.279-307.182a7.534,7.534,0,0,1-3.436-2.79A7.534,7.534,0,0,1-569-314.209v-2.052a1.041,1.041,0,0,1,.649-.969l4.066-1.689a1.036,1.036,0,0,1,.4-.08,1.028,1.028,0,0,1,.4.082l4.065,1.688a1.042,1.042,0,0,1,.647.968v2.054a7.527,7.527,0,0,1-1.285,4.235,7.531,7.531,0,0,1-3.438,2.791,1.029,1.029,0,0,1-.394.077A1.047,1.047,0,0,1-564.279-307.182ZM-563.9-318l-4.071,1.691a.047.047,0,0,0-.031.044v2.055a6.532,6.532,0,0,0,1.115,3.677,6.527,6.527,0,0,0,2.983,2.422.061.061,0,0,0,.021,0,.038.038,0,0,0,.015,0,6.538,6.538,0,0,0,2.986-2.422,6.543,6.543,0,0,0,1.115-3.677v-2.055a.046.046,0,0,0-.029-.044l-4.07-1.69a.048.048,0,0,0-.02,0A.048.048,0,0,0-563.9-318Zm-.83,6.364-1.161-1.158a.553.553,0,0,1-.131-.4.553.553,0,0,1,.193-.378.549.549,0,0,1,.7,0l.786.779,1.691-1.691a.545.545,0,0,1,.764-.061.549.549,0,0,1,.07.772.559.559,0,0,1-.069.069l-2.07,2.07a.546.546,0,0,1-.387.158h0A.546.546,0,0,1-564.728-311.633Z",transform:"translate(569 319)",fill:"currentColor"})]})})})}),(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)("p",{className:"fs-9 fw-bold mb-0 text-gray-800",children:"UGC Rights"}),(0,p.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the preferred ugc rights status"})]})]})]})]}),(0,p.jsx)("label",{className:"text-gray-800 mb-2",children:"Select Network"}),(0,p.jsxs)(d.Z.Item,{eventKey:"7",className:"pb-3",children:[(0,p.jsx)(d.Z.Header,{className:"w-100",children:(0,p.jsx)("span",{className:"fs-9 fw-medium",children:"Select Network"})}),(0,p.jsxs)(d.Z.Body,{className:"border rounded-1 mt-1",children:[(0,p.jsx)("div",{className:"navi-item d-flex align-items-center py-2 cursor-pointer",children:(0,p.jsx)("label",{className:"form-check flex-grow-1",htmlFor:"searchNetwork",children:(0,p.jsx)("div",{className:"navi-text",children:(0,p.jsx)("p",{className:"fs-9 fw-medium mb-0",children:"Search Network"})})})}),(0,p.jsxs)("div",{className:"",children:[(0,p.jsxs)("div",{className:"dropdown-item px-0 border-bottom rounded-0",children:[(0,p.jsxs)("label",{className:"form-check flex-grow-1 overflow-hidden align-items-center",htmlFor:"twitter",children:[(0,p.jsx)("span",{className:"symbol symbol-22",children:(0,p.jsx)("img",{className:"img-fluid h-100",src:(0,m.F)("media/icons/social-icons-square/twitter.svg"),height:20,width:20,alt:"twitter"})}),(0,p.jsx)("span",{className:"form-check-label text-gray-800 text-ellipsis",children:"Twitter"})]}),(0,p.jsx)("input",{className:"form-check-input flex-shrink-0",type:"radio",name:"network",checked:1==i.connectWith,id:"twitter",onClick:c(1)})]}),(0,p.jsxs)("div",{className:"dropdown-item px-0 border-bottom rounded-0",children:[(0,p.jsxs)("label",{className:"form-check flex-grow-1 overflow-hidden align-items-center",htmlFor:"instagram",children:[(0,p.jsx)("span",{className:"symbol symbol-22",children:(0,p.jsx)("img",{className:"img-fluid h-100",src:(0,m.F)("media/icons/social-icons-square/instagram.svg"),height:20,width:20,alt:"instagram"})}),(0,p.jsx)("span",{className:"form-check-label text-gray-800 text-ellipsis",children:"Instagram"})]}),(0,p.jsx)("input",{className:"form-check-input flex-shrink-0",type:"radio",name:"network",checked:18==i.connectWith,id:"instagram",onClick:c(18)})]}),(0,p.jsxs)("div",{className:"dropdown-item px-0 rounded-0",children:[(0,p.jsxs)("label",{className:"form-check flex-grow-1 overflow-hidden align-items-center",htmlFor:"facebook",children:[(0,p.jsx)("span",{className:"symbol symbol-22",children:(0,p.jsx)("img",{className:"img-fluid h-100",src:(0,m.F)("media/icons/social-icons-square/facebook.svg"),height:20,width:20,alt:"twitter"})}),(0,p.jsx)("span",{className:"form-check-label text-gray-800 text-ellipsis",children:"Facebook"})]}),(0,p.jsx)("input",{className:"form-check-input flex-shrink-0",type:"radio",name:"network",checked:3==i.connectWith,id:"facebook",onClick:c(3)})]}),(0,p.jsxs)("div",{className:"dropdown-item px-0 rounded-0 d-none",children:[(0,p.jsxs)("label",{className:"form-check flex-grow-1 overflow-hidden align-items-center",htmlFor:"tiktok",children:[(0,p.jsx)("span",{className:"symbol symbol-22",children:(0,p.jsx)("img",{className:"img-fluid h-100",src:(0,m.F)("media/icons/social-icons-square/tiktok.svg"),height:20,width:20,alt:"twitter"})}),(0,p.jsx)("span",{className:"form-check-label text-gray-800 text-ellipsis",children:"TikTok"})]}),(0,p.jsx)("input",{className:"form-check-input flex-shrink-0",type:"radio",name:"network",value:"",id:"tiktok"})]})]})]})]}),(0,p.jsx)("label",{className:"text-gray-800 mb-2",children:"Select Publish Type"}),(0,p.jsxs)(d.Z.Item,{eventKey:"8",className:"pb-3",children:[(0,p.jsx)(d.Z.Header,{children:(0,p.jsx)("span",{className:"fs-9 fw-medium",children:"Publish Type"})}),(0,p.jsxs)(d.Z.Body,{className:"border rounded-1 mt-1",children:[(0,p.jsx)("div",{className:"navi-item d-flex align-items-center py-2 cursor-pointer cursor-pointer",children:(0,p.jsxs)("label",{className:"form-check flex-grow-1 align-items-center",htmlFor:"singleMedia",children:[(0,p.jsx)("input",{className:"form-check-input",type:"radio",name:"publishType",value:"singleMedia",id:"singleMedia",checked:1==i.publishType,onClick:r(1)}),(0,p.jsx)("div",{className:"navi-text ms-2",children:(0,p.jsx)("p",{className:"fs-9 fw-medium mb-0",children:"Single Image or Video"})})]})}),(0,p.jsx)("div",{className:"navi-item d-flex align-items-center py-2 cursor-pointer cursor-pointer d-none",children:(0,p.jsxs)("label",{className:"form-check flex-grow-1 align-items-center",htmlFor:"carouselPost",children:[(0,p.jsx)("input",{className:"form-check-input",type:"radio",name:"publishType",value:"carouselPost",id:"carouselPost",checked:2==i.publishType,onClick:r(2)}),(0,p.jsx)("div",{className:"navi-text ms-2",children:(0,p.jsx)("p",{className:"fs-9 fw-medium mb-0",children:"Carousel"})})]})})]})]}),(0,p.jsxs)(d.Z.Item,{eventKey:"9",className:"pb-3",children:[(0,p.jsx)(d.Z.Header,{children:(0,p.jsx)("span",{className:"fs-9 fw-medium",children:"Media Size"})}),(0,p.jsxs)(d.Z.Body,{className:"border rounded-1 mt-1",children:[(0,p.jsx)("div",{className:"navi-item d-flex align-items-center border-bottom py-2 cursor-pointer",children:(0,p.jsxs)("label",{className:"form-check flex-grow-1 align-items-center",htmlFor:"1x1",children:[(0,p.jsx)("input",{className:"form-check-input",type:"radio",name:"imageSize",value:"1x1",id:"1x1",onClick:n(1),checked:1==i.mediaSize}),(0,p.jsx)("div",{className:"navi-text ms-2",children:(0,p.jsx)("p",{className:"fs-9 fw-medium mb-0",children:"1:1"})})]})}),(0,p.jsx)("div",{className:"navi-item d-flex align-items-center border-bottom py-2 cursor-pointer",children:(0,p.jsxs)("label",{className:"form-check flex-grow-1 align-items-center",htmlFor:"16x9",children:[(0,p.jsx)("input",{className:"form-check-input",type:"radio",name:"imageSize",value:"16x9",id:"16x9",onClick:n(16),checked:16==i.mediaSize}),(0,p.jsx)("div",{className:"navi-text ms-2",children:(0,p.jsx)("p",{className:"fs-9 fw-medium mb-0",children:"16:9"})})]})}),(0,p.jsx)("div",{className:"navi-item d-flex align-items-center py-2 cursor-pointer",children:(0,p.jsxs)("label",{className:"form-check flex-grow-1 align-items-center",htmlFor:"defaultSize",children:[(0,p.jsx)("input",{className:"form-check-input",type:"radio",name:"imageSize",value:"defaultSize",id:"defaultSize",onClick:n(0),checked:0==i.mediaSize}),(0,p.jsx)("div",{className:"navi-text ms-2",children:(0,p.jsx)("p",{className:"fs-9 fw-medium mb-0",children:"Default Size"})})]})})]})]}),(0,p.jsx)("label",{className:"text-gray-800 mb-2",children:"Description"}),(0,p.jsx)("div",{className:"w-100 mb-2",children:(0,p.jsx)("textarea",{className:"form-control textarea-min-row-5 fs-9",row:5,onChange:o,value:i.selectedPost?i.selectedPost.content:null})})]})}),(0,p.jsx)("div",{className:"bg-white w-100 text-center flex-column d-flex pt-2",children:(0,p.jsx)("button",{type:"button",className:"btn border-0 text-hover-primary btn-sm text-decoration-underline text-muted p-1",onClick:t,children:"Reset Filters"})})]})}}]),l}(o.Component);s.default=g}}]);
//# sourceMappingURL=1411.ec429fff.chunk.js.map