"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[2311],{72311:function(s,e,a){a.r(e);var l=a(1413),i=a(15671),t=a(43144),n=a(97326),c=a(60136),r=a(29388),d=a(72791),o=a(74342),m=a(13953),h=a(28949),x=a(32002),v=a(65882),g=a(91731),p=a(80184),j=function(s){(0,c.Z)(a,s);var e=(0,r.Z)(a);function a(){var s;return(0,i.Z)(this,a),(s=e.call(this)).onLoadPublish=function(){var e=(0,n.Z)(s);(0,x.Vv)().then((function(s){e.setState({publishList:s.data})}))},s.campaignTypeFun=function(e){return s.props.campaignTypeCallback(e)},s.state={showModal:!1,campaignType:"HashtagCampaign",publishList:[]},s}return(0,t.Z)(a,[{key:"componentDidMount",value:function(){this.onLoadPublish()}},{key:"render",value:function(){var s=this,e=(this.state.setValue,this.props),a=e.filterApply,i=e.state;e.genratedCodeModal;return(0,p.jsx)("div",{className:"card-body",children:(0,p.jsxs)("div",{className:"innerAsideWrapper",children:[(0,p.jsx)("div",{className:"d-flex align-items-center justify-content-between mb-2",children:(0,p.jsx)("h6",{className:"fs-7 fw-boldest mb-0",children:"Select Filter"})}),(0,p.jsxs)(o.Z.Container,{id:"billing_tab_panel",defaultActiveKey:"aside-assets_filter",children:[(0,p.jsxs)(m.Z,{variant:"nav",className:"border-bottom mb-3",children:[(0,p.jsx)(m.Z.Item,{className:"",children:(0,p.jsx)(m.Z.Link,{className:"me-3 px-0",eventKey:"aside-assets_filter",children:"Assets Filter"})}),(0,p.jsx)(m.Z.Item,{className:"",children:(0,p.jsx)(m.Z.Link,{className:"px-0",eventKey:"filter-assets_published",children:"View All"})})]}),(0,p.jsxs)(o.Z.Content,{children:[(0,p.jsxs)(o.Z.Pane,{eventKey:"aside-assets_filter",children:[(0,p.jsxs)(h.Z,{defaultActiveKey:"0",children:[i.chooseFilter&&Object.keys(i.chooseFilter).map((function(e,a){return(0,p.jsx)(v.Z,(0,l.Z)((0,l.Z)({filterKey:e},s.props),{},{indexFilter:a}))})),(0,p.jsxs)(h.Z.Item,{eventKey:"0",className:"pb-3",children:[(0,p.jsx)(h.Z.Header,{children:(0,p.jsx)("span",{className:"fs-8 text-gray-800 fw-semibold",children:"Choose Filter"})}),(0,p.jsxs)(h.Z.Body,{className:"border rounded-1 mt-1",children:[(0,p.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(i.chooseFilter).includes("collection")?"disabled":""),onClick:a("collection"),children:[(0,p.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,p.jsx)("div",{className:"symbol-label",children:(0,p.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,p.jsx)("path",{d:"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM8 19h12v-8H8v8zm-2 0v-9a1 1 0 0 1 1-1h13V7h-8.414l-2-2H4v14h2z",fill:"currentColor"})]})})})}),(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)("p",{className:"fs-8 fw-semibold mb-0 text-gray-800",children:"Collection"}),(0,p.jsx)("span",{className:"fs-9 text-gray-500",children:"Select collection and filter assets"})]})]}),(0,p.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(i.chooseFilter).includes("source")?"disabled":""),onClick:a("source"),children:[(0,p.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,p.jsx)("div",{className:"symbol-label",children:(0,p.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,p.jsx)("path",{id:"Path_1","data-name":"Path 1",d:"M0,0H24V24H0Z",fill:"none"}),(0,p.jsx)("path",{id:"Path_4","data-name":"Path 4",d:"M8.365,20.286A9.309,9.309,0,0,1,2.9,14.82a3.246,3.246,0,0,1,0-6.455A9.309,9.309,0,0,1,8.365,2.9a3.246,3.246,0,0,1,6.455,0,9.309,9.309,0,0,1,5.465,5.466,3.246,3.246,0,0,1,0,6.455,9.311,9.311,0,0,1-5.466,5.465,3.246,3.246,0,0,1-6.455,0Zm1.836-.347a1.391,1.391,0,0,0,2.782.048v-.1a1.391,1.391,0,0,0-2.782.048ZM6.328,16.818a7.393,7.393,0,0,0,2.388,1.614,3.247,3.247,0,0,1,5.751,0,7.444,7.444,0,0,0,3.965-3.963,3.247,3.247,0,0,1,0-5.752,7.447,7.447,0,0,0-3.964-3.964,3.247,3.247,0,0,1-5.752,0A7.444,7.444,0,0,0,4.752,8.716a3.247,3.247,0,0,1,0,5.752A7.427,7.427,0,0,0,6.328,16.818Zm12.22-5.226a1.391,1.391,0,1,0,1.39-1.391A1.392,1.392,0,0,0,18.548,11.592Zm-15.3,1.391a1.391,1.391,0,1,0-1.391-1.391A1.393,1.393,0,0,0,3.246,12.983ZM10.2,3.246a1.391,1.391,0,0,0,2.782.048V3.2a1.391,1.391,0,0,0-2.782.048Z",transform:"translate(0.408 0.408)",fill:"currentColor"})]})})})}),(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)("p",{className:"fs-8 fw-semibold mb-0 text-gray-800",children:"Source"}),(0,p.jsx)("span",{className:"fs-9 text-gray-500",children:"Select collection and filter assets"})]})]}),(0,p.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(i.chooseFilter).includes("assetsType")?"disabled":""),onClick:a("assetsType"),children:[(0,p.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,p.jsx)("div",{className:"symbol-label",children:(0,p.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,p.jsx)("path",{d:"M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",fill:"currentColor"})]})})})}),(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)("p",{className:"fs-8 fw-semibold mb-0 text-gray-800",children:"Assets Type"}),(0,p.jsx)("span",{className:"fs-9 text-gray-500",children:"Select collection and filter assets"})]})]}),(0,p.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(i.chooseFilter).includes("tags")?"disabled":""),onClick:a("tags"),children:[(0,p.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,p.jsx)("div",{className:"symbol-label",children:(0,p.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,p.jsx)("path",{d:"M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z",fill:"currentColor"})]})})})}),(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)("p",{className:"fs-8 fw-semibold mb-0 text-gray-800",children:"Tag"}),(0,p.jsx)("span",{className:"fs-9 text-gray-500",children:"Select collection and filter assets"})]})]}),(0,p.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(i.chooseFilter).includes("ugcrights")?"disabled":""),onClick:a("ugcrights"),children:[(0,p.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,p.jsx)("div",{className:"symbol-label",children:(0,p.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10.236",height:"11.897",viewBox:"0 0 10.236 11.897",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0H24V24H0z"}),(0,p.jsx)("path",{id:"Path_1","data-name":"Path 1",d:"M-564.279-307.182a7.534,7.534,0,0,1-3.436-2.79A7.534,7.534,0,0,1-569-314.209v-2.052a1.041,1.041,0,0,1,.649-.969l4.066-1.689a1.036,1.036,0,0,1,.4-.08,1.028,1.028,0,0,1,.4.082l4.065,1.688a1.042,1.042,0,0,1,.647.968v2.054a7.527,7.527,0,0,1-1.285,4.235,7.531,7.531,0,0,1-3.438,2.791,1.029,1.029,0,0,1-.394.077A1.047,1.047,0,0,1-564.279-307.182ZM-563.9-318l-4.071,1.691a.047.047,0,0,0-.031.044v2.055a6.532,6.532,0,0,0,1.115,3.677,6.527,6.527,0,0,0,2.983,2.422.061.061,0,0,0,.021,0,.038.038,0,0,0,.015,0,6.538,6.538,0,0,0,2.986-2.422,6.543,6.543,0,0,0,1.115-3.677v-2.055a.046.046,0,0,0-.029-.044l-4.07-1.69a.048.048,0,0,0-.02,0A.048.048,0,0,0-563.9-318Zm-.83,6.364-1.161-1.158a.553.553,0,0,1-.131-.4.553.553,0,0,1,.193-.378.549.549,0,0,1,.7,0l.786.779,1.691-1.691a.545.545,0,0,1,.764-.061.549.549,0,0,1,.07.772.559.559,0,0,1-.069.069l-2.07,2.07a.546.546,0,0,1-.387.158h0A.546.546,0,0,1-564.728-311.633Z",transform:"translate(569 319)",fill:"currentColor"})]})})})}),(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)("p",{className:"fs-8 fw-semibold mb-0 text-gray-800",children:"UGC Rights"}),(0,p.jsx)("span",{className:"fs-9 text-gray-500",children:"Select collection and filter assets"})]})]})]})]}),(0,p.jsx)(g.Z,(0,l.Z)({},this.props)),(0,p.jsx)("label",{className:"text-gray-800 mb-2",children:"To Publish it anywhere"}),(0,p.jsxs)(h.Z.Item,{eventKey:"9",className:"pb-3",children:[(0,p.jsx)(h.Z.Header,{className:"w-100",children:(0,p.jsx)("span",{className:"fs-7 fw-medium",children:"Campaign URL"})}),(0,p.jsxs)(h.Z.Body,{className:"border rounded-1 mt-1",children:[(0,p.jsxs)("div",{className:"navi-item d-flex align-items-center border-bottom py-2 cursor-pointer cursor-pointer",onClick:function(){return s.campaignTypeFun("HashtagCampaign")},children:[(0,p.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,p.jsx)("div",{className:"symbol-label",children:(0,p.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,p.jsx)("path",{d:"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z",fill:"currentColor"})]})})})}),(0,p.jsxs)("div",{className:"navi-text",children:[(0,p.jsx)("p",{className:"fs-8 text-gray-800 fw-semibold mb-0",children:"Campaign URL"}),(0,p.jsx)("span",{className:"fs-9 text-gray-500",children:"Get link of your entire campaign"})]})]}),(0,p.jsxs)("div",{className:"navi-item d-flex align-items-center border-bottom py-2 cursor-pointer cursor-pointer",onClick:function(){return s.campaignTypeFun("LandingPageCampaign")},children:[(0,p.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,p.jsx)("div",{className:"symbol-label",children:(0,p.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,p.jsx)("path",{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 8H4v8h16v-8zm0-2V5H4v4h16zM9 6h2v2H9V6zM5 6h2v2H5V6z",fill:"currentColor"})]})})})}),(0,p.jsxs)("div",{className:"navi-text",children:[(0,p.jsx)("p",{className:"fs-8 text-gray-800 fw-semibold mb-0",children:"Landing Page"}),(0,p.jsx)("span",{className:"fs-9 text-gray-500",children:"Publish hashtag content on your website"})]})]}),(0,p.jsxs)("div",{className:"navi-item d-flex align-items-center py-2 cursor-pointer cursor-pointer",onClick:function(){return s.campaignTypeFun("EmailCampaign")},children:[(0,p.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,p.jsx)("div",{className:"symbol-label",children:(0,p.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,p.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,p.jsx)("path",{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z",fill:"currentColor"})]})})})}),(0,p.jsxs)("div",{className:"navi-text",children:[(0,p.jsx)("p",{className:"fs-8 text-gray-800 fw-semibold mb-0",children:"Email"}),(0,p.jsx)("span",{className:"fs-9 text-gray-500",children:"Repurpose hashtag content on email"})]})]})]})]})]}),(0,p.jsx)("div",{className:"bg-white pt-2 w-100",children:(0,p.jsx)("button",{type:"button",className:"btn btn-primary w-100",children:"Save Changes"})})]}),(0,p.jsx)(o.Z.Pane,{eventKey:"filter-assets_published",children:(0,p.jsxs)("div",{className:"dropdown-menu show position-relative shadow-none p-0",children:[(0,p.jsx)("div",{className:"menu-item",children:(0,p.jsx)("div",{className:"dropdown-item",children:(0,p.jsx)("span",{className:"menu-title fw-bold",children:"The american store"})})}),(0,p.jsx)("div",{className:"menu-item",children:(0,p.jsx)("div",{className:"dropdown-item",children:(0,p.jsx)("span",{className:"menu-title fw-bold",children:"Mall of USA"})})}),(0,p.jsx)("div",{className:"menu-item",children:(0,p.jsx)("div",{className:"dropdown-item",children:(0,p.jsx)("span",{className:"menu-title fw-bold",children:"UGC template"})})})]})})]})]})]})})}}]),a}(d.Component);e.default=j}}]);
//# sourceMappingURL=2311.bcf8da05.chunk.js.map