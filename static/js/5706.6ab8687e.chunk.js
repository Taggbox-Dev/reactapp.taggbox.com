"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[5706],{95706:function(e,s,t){t.r(s),t.d(s,{default:function(){return C}});var n=t(1413),l=t(15671),a=t(43144),i=t(97326),r=t(60136),c=t(29388),o=t(72791),d=t(21830),p=t.n(d),m=t(78687),x=t(56600),u=t(42195),h=t.n(u),f=t(80184),w=function(){return(0,f.jsxs)("div",{className:"",children:[(0,f.jsxs)("div",{className:"w-100 mb-1 fs-7 fw-medium text-start d-flex align-items-center px-3 py-2",children:[(0,f.jsx)("span",{className:"sk_rect h-24px w-24px me-2"}),(0,f.jsx)("p",{className:"sk_line sk_line_100 sk_line_height_12 my-1 w-75"})]}),(0,f.jsxs)("div",{className:"w-100 mb-1 fs-7 fw-medium text-start d-flex align-items-center px-3 py-2",children:[(0,f.jsx)("span",{className:"sk_rect h-24px w-24px me-2"}),(0,f.jsx)("p",{className:"sk_line sk_line_100 sk_line_height_12 my-1 w-75"})]}),(0,f.jsxs)("div",{className:"w-100 mb-1 fs-7 fw-medium text-start d-flex align-items-center px-3 py-2",children:[(0,f.jsx)("span",{className:"sk_rect h-24px w-24px me-2"}),(0,f.jsx)("p",{className:"sk_line sk_line_100 sk_line_height_12 my-1 w-75"})]}),(0,f.jsxs)("div",{className:"w-100 mb-1 fs-7 fw-medium text-start d-flex align-items-center px-3 py-2",children:[(0,f.jsx)("span",{className:"sk_rect h-24px w-24px me-2"}),(0,f.jsx)("p",{className:"sk_line sk_line_100 sk_line_height_12 my-1 w-75"})]}),(0,f.jsxs)("div",{className:"w-100 mb-1 fs-7 fw-medium text-start d-flex align-items-center px-3 py-2",children:[(0,f.jsx)("span",{className:"sk_rect h-24px w-24px me-2"}),(0,f.jsx)("p",{className:"sk_line sk_line_100 sk_line_height_12 my-1 w-75"})]}),(0,f.jsxs)("div",{className:"w-100 mb-1 fs-7 fw-medium text-start d-flex align-items-center px-3 py-2",children:[(0,f.jsx)("span",{className:"sk_rect h-24px w-24px me-2"}),(0,f.jsx)("p",{className:"sk_line sk_line_100 sk_line_height_12 my-1 w-75"})]}),(0,f.jsxs)("div",{className:"w-100 mb-1 fs-7 fw-medium text-start d-flex align-items-center px-3 py-2",children:[(0,f.jsx)("span",{className:"sk_rect h-24px w-24px me-2"}),(0,f.jsx)("p",{className:"sk_line sk_line_100 sk_line_height_12 my-1 w-75"})]}),(0,f.jsxs)("div",{className:"w-100 mb-1 fs-7 fw-medium text-start d-flex align-items-center px-3 py-2",children:[(0,f.jsx)("span",{className:"sk_rect h-24px w-24px me-2"}),(0,f.jsx)("p",{className:"sk_line sk_line_100 sk_line_height_12 my-1 w-75"})]}),(0,f.jsxs)("div",{className:"w-100 mb-1 fs-7 fw-medium text-start d-flex align-items-center px-3 py-2",children:[(0,f.jsx)("span",{className:"sk_rect h-24px w-24px me-2"}),(0,f.jsx)("p",{className:"sk_line sk_line_100 sk_line_height_12 my-1 w-75"})]}),(0,f.jsxs)("div",{className:"w-100 mb-1 fs-7 fw-medium text-start d-flex align-items-center px-3 py-2",children:[(0,f.jsx)("span",{className:"sk_rect h-24px w-24px me-2"}),(0,f.jsx)("p",{className:"sk_line sk_line_100 sk_line_height_12 my-1 w-75"})]}),(0,f.jsxs)("div",{className:"w-100 mb-1 fs-7 fw-medium text-start d-flex align-items-center px-3 py-2",children:[(0,f.jsx)("span",{className:"sk_rect h-24px w-24px me-2"}),(0,f.jsx)("p",{className:"sk_line sk_line_100 sk_line_height_12 my-1 w-75"})]}),(0,f.jsxs)("div",{className:"w-100 mb-1 fs-7 fw-medium text-start d-flex align-items-center px-3 py-2",children:[(0,f.jsx)("span",{className:"sk_rect h-24px w-24px me-2"}),(0,f.jsx)("p",{className:"sk_line sk_line_100 sk_line_height_12 my-1 w-75"})]})]})},k=t(32480),j=function(e){(0,r.Z)(t,e);var s=(0,c.Z)(t);function t(e){var n;return(0,l.Z)(this,t),(n=s.call(this,e)).filterNetworkList=function(e){var s=n.filterList(e.target.value);n.setState({textValue:e.target.value,networkList:s})},n.filterList=function(e){var s=n.props.networkList;return s.length>0?s.filter((function(s){return s.name.toLowerCase().match(e.toLowerCase())})):[]},n.uploadType=function(e,s){n.props.uploadTypeCallback(e,s)},n.state={textValue:"",networkList:e.networkList,networkListLoading:!1},n}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){var e=this.state.networkList;e&&e.length>0?this.setState({networkListLoading:!1}):this.setState({networkListLoading:!0})}},{key:"componentWillReceiveProps",value:function(e){this.state.networkList!=e.networkList?this.setState({networkList:e.networkList,networkListLoading:!1}):this.setState({networkListLoading:this.props.networkList>0})}},{key:"render",value:function(){var e=this,s=this.props.selectedNetworkId,t=this.state,n=t.networkList,l=t.textValue,a=t.networkListLoading;return(0,f.jsx)(h(),{children:(0,f.jsxs)("div",{className:"addSourceNetworkList px-3",children:[(0,f.jsx)("div",{className:"mb-4",children:(0,f.jsx)("input",{type:"text",className:"form-control",placeholder:"Search your network...",value:l,onChange:function(s){return e.filterNetworkList(s)}})}),(0,f.jsxs)("button",{type:"button",className:"btn btn-active-light border border-dashed py-3 w-100 mb-2 fs-7 fw-medium",onClick:function(){return e.uploadType("uploadAssets",null)},children:[(0,f.jsx)("span",{className:"svg-icon svg-icon-2",children:(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,f.jsx)("path",{d:"M7 20.9811C3.64378 20.7257 1 17.9216 1 14.5C1 12.1716 2.22429 10.1291 4.06426 8.9812C4.56469 5.044 7.92686 2 12 2C16.0731 2 19.4353 5.044 19.9357 8.9812C21.7757 10.1291 23 12.1716 23 14.5C23 17.9216 20.3562 20.7257 17 20.9811V21H7V20.9811ZM13 13H16L12 8L8 13H11V17H13V13Z",fill:"currentColor"})})}),"Browse From Device"]}),a?(0,f.jsx)(w,{}):n&&n.length>0?n.map((function(t,n){return(0,f.jsxs)("button",{type:"button","data-id":t.id,className:"btn w-100 btn-active-light btn-sm mb-1 fs-7 fw-medium text-start d-flex align-items-center ".concat(s===t.id?"active":""),onClick:function(){return e.uploadType(29===t.id?"onsite-upload":"byNetwork",t)},children:[(0,f.jsx)("span",{className:"symbol symbol-24 me-2 bg-light",children:(0,f.jsx)("img",{className:"object-center-contain",src:(0,x.F)("media/icons/social-icons-square/".concat((0,k.O5)(t.id),".svg")),alt:(0,k.BK)(t.id),height:30,width:30})}),29===t.id?"UGC Uploader":t.name]},t.id)})):(0,f.jsx)("span",{className:"py-5 text-center d-block fs-8 fw-medium text-gray-500",children:"No Network Found"})]})})}}]),t}(o.Component),_=(0,m.$j)((function(e){return{networkData:e.networks.networkData}}))(j),b=o.lazy((function(){return Promise.resolve().then(t.bind(t,16911))})),y=o.lazy((function(){return t.e(9699).then(t.bind(t,59699))})),N=o.lazy((function(){return Promise.resolve().then(t.bind(t,65045))})),g=o.lazy((function(){return t.e(3047).then(t.bind(t,43047))})),v=o.lazy((function(){return t.e(3102).then(t.bind(t,53102))})),L=function(e){(0,r.Z)(t,e);var s=(0,c.Z)(t);function t(){var e;return(0,l.Z)(this,t),(e=s.call(this)).uploadType=function(s,t){e.setState({uploadTypeSec:s,filterTabs:t?t.networkTab:null,selectedNetwork:t})},e.getAssets=function(){e.props.getAssetsCallback()},e.onUppyResetAndClose=function(s){var t=e.props.uploadedData;if(t&&t.length>0){var n=e.props,l=n.onClearUPloadObject,a=n.uppyPostEdit;a.cancelAll(),a.removeFile(),l([])}else{var i=e.props,r=i.onClearUPloadObject,c=i.uppyPostEdit;c.cancelAll(),c.removeFile(),r([]),e.props.editMediaHandleCallback(!1)}},e.onCancelUpload=function(s){var t=e.props.uploadedData,n=(0,i.Z)(e);t&&t.length>0?p().fire({title:"Are you sure?",text:"You want to  discard changes!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, discard changes!"}).then((function(e){if(e.isConfirmed){var s=n.props,t=s.onClearUPloadObject,l=s.uppyPostEdit;l.cancelAll(),l.removeFile(),t([])}})):e.props.editMediaHandleCallback(!1)},e.state={uploadTypeSec:"uploadAssets",filterTabs:[],selectedNetwork:null},e}return(0,a.Z)(t,[{key:"render",value:function(){var e=this,s=this.state,t=s.uploadTypeSec,l=s.filterTabs,a=s.selectedNetwork,i=this.props,r=i.uploadedData,c=i.collectionError,d=i.networkList;return(0,f.jsx)("div",{className:"container container-xs",children:(0,f.jsx)("div",{className:"block-center flex-column view-sm-h",children:(0,f.jsxs)("div",{className:"addSource d-flex align-items-stretch flex-column flex-lg-row w-100",children:[(0,f.jsx)("div",{className:"addSourceNetwork d-flex flex-column flex-shrink-0 pe-lg-4",children:(0,f.jsx)("div",{className:"card mb-xxl-4 mb-3 h-100",children:(0,f.jsx)("div",{className:"card-body px-2",children:(0,f.jsx)(_,{uploadTypeCallback:this.uploadType,networkList:d,selectedNetworkId:a?a.id:null})})})}),(0,f.jsxs)("div",{className:"d-flex flex-column flex-grow-1 w-100 mb-3",children:[(0,f.jsxs)("div",{className:"",children:[(0,f.jsx)("h6",{className:"fs-7 mb-3",children:"Select the collection where you want to put your data"}),(0,f.jsxs)("div",{className:"mb-3",style:{maxWidth:300},children:[(0,f.jsx)(o.Suspense,{fallback:(0,f.jsx)(f.Fragment,{}),children:(0,f.jsx)(N,(0,n.Z)({},this.props))}),c?(0,f.jsx)("span",{className:"text-danger",children:"Please select collection."}):null]}),"uploadAssets"===t?(0,f.jsx)(o.Suspense,{fallback:(0,f.jsx)(f.Fragment,{}),children:(0,f.jsx)(g,(0,n.Z)((0,n.Z)({},this.props),{},{uppyPostEdit:this.props.uppyPostEdit}))}):"onsite-upload"===t?(0,f.jsx)(o.Suspense,{fallback:(0,f.jsx)(f.Fragment,{}),children:(0,f.jsx)(v,(0,n.Z)({onBack:function(){return e.uploadType("uploadAssets",null)}},this.props))}):"byNetwork"===t?(0,f.jsx)(o.Suspense,{fallback:(0,f.jsx)(f.Fragment,{}),children:(0,f.jsx)(y,(0,n.Z)({filterTabs:l,selectedNetwork:a,onBack:function(){return e.uploadType("uploadAssets",null)}},this.props))}):null]}),"uploadAssets"===t?(0,f.jsxs)("div",{className:"d-flex flex-wrap align-items-center justify-content-between",children:[(0,f.jsx)(o.Suspense,{fallback:(0,f.jsx)(f.Fragment,{}),children:(0,f.jsx)(b,{content:"Need Help",supportUrl:"#",videoUrl:"#",changeText:!0})}),(0,f.jsxs)("div",{className:"my-1 d-flex align-items-center justify-content-end flex-wrap",children:[(0,f.jsx)("button",{type:"button",className:"btn btn-secondary me-3",onClick:this.onCancelUpload,children:"Cancel"}),(0,f.jsx)("button",{type:"button",id:"resetUppyUpload",className:"btn btn-secondary me-3",onClick:this.onUppyResetAndClose,hidden:!0,children:"Uppy Reset"}),(0,f.jsxs)("button",{type:"button",className:"btn btn-primary ".concat(r&&r.length>0?"":"disabled"),onClick:function(){return e.getAssets()},children:["Fetch Assets ",r&&r.length>0?"(".concat(r.length,")"):""]})]})]}):null]})]})})})}}]),t}(o.Component),C=(0,m.$j)((function(e){return{networkList:e.addFeed.networkList}}))(L)}}]);
//# sourceMappingURL=5706.6ab8687e.chunk.js.map