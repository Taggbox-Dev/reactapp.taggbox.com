"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[2124],{92124:function(e,t,n){n.r(t);var l=n(15671),o=n(43144),a=n(97326),i=n(60136),c=n(29388),s=n(72791),r=n(9085),d=n(95316),m=n(46305),u=n(78687),h=n(80184),p=function(e){(0,i.Z)(n,e);var t=(0,c.Z)(n);function n(e){var o;return(0,l.Z)(this,n),(o=t.call(this,e)).onClickCreate=function(e){var t=o.props,n=t.collectionRename,l=t.collectionData,i=(0,a.Z)(o),c=o.state.collectioName;if(c&&String(c).trim().length>0){var s=r.Am.loading("Loading...");if(l&&Object.keys(l).length>0&&l.collectionList&&l.collectionList.length>0){var d=l.collectionList.filter((function(e){return String(e.name).trim().toLowerCase()==String(c).trim().toLowerCase()}));d&&d.length>0?(r.Am.update(s,{render:"Collection already exists.",type:"error",isLoading:!1,autoClose:3e3}),i.setState({isRequesting:!1})):(0,m.LU)({name:c,id:n.id}).then((function(e){r.Am.update(s,{render:"Collection name has been updated.",type:"success",isLoading:!1,autoClose:3e3}),i.props.addCollectionCallbackWithAPI(!1)})).catch((function(e){var t=e.response.data;r.Am.update(s,{render:t.message,type:"error",isLoading:!1,autoClose:3e3})}))}}else r.Am.error("Please enter valid collection name.")},o.onChangeCollectionName=function(e){o.setState({collectioName:e.target.value})},o.handleClose=function(e){return o.props.addCollectionCallback(!1)},o.state={collectioName:e.collectionRename.name},o}return(0,o.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.addCollectionModal,n=(e.collectionRename,this.state.collectioName);return(0,h.jsxs)(d.Z,{show:t,onHide:this.handleClose,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,h.jsx)(d.Z.Header,{closeButton:!0,children:(0,h.jsx)(d.Z.Title,{children:"Rename Collection"})}),(0,h.jsx)(d.Z.Body,{children:(0,h.jsx)("div",{className:"mx-xl-4 px-2 px-lg-4 mx-0 pt-4",children:(0,h.jsxs)("div",{className:"row mb-4 mb-xl-5",children:[(0,h.jsx)("label",{className:"col-sm-3 text-muted mb-2",children:"Collection Name"}),(0,h.jsx)("div",{className:"col-sm-9",children:(0,h.jsx)("input",{type:"text",name:"company",className:"form-control",placeholder:"Enter collection name...",onChange:this.onChangeCollectionName,value:n})})]})})}),(0,h.jsx)(d.Z.Footer,{className:"p-3",children:(0,h.jsxs)("div",{className:"mx-xl-4 px-2 px-lg-4 mx-0",children:[(0,h.jsx)("button",{type:"button",className:"btn btn-secondary btn-sm btn-min-w me-3",onClick:this.handleClose,children:"Cancel"}),(0,h.jsx)("button",{type:"button",className:"btn btn-primary btn-sm btn-min-w",onClick:this.onClickCreate,children:"Rename"})]})})]})}}]),n}(s.Component);t.default=(0,u.$j)((function(e){return{collectionData:e.collection}}))(p)}}]);
//# sourceMappingURL=2124.69693c3f.chunk.js.map