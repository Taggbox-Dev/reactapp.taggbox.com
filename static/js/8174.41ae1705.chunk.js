"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[8174],{90179:function(e,s,t){t.r(s);var l=t(1413),c=t(15671),n=t(43144),i=t(60136),a=t(29388),r=t(72791),o=t(34867),d=t(18622),m=t(25167),u=t(28949),x=t(47798),h=t(12576),f=t(78687),p=t(94111),j=t(2841),b=t(56600),k=t(80184),g=function(e){(0,i.Z)(t,e);var s=(0,a.Z)(t);function t(e){var n;return(0,c.Z)(this,t),(n=s.call(this,e)).state={isActiveAside:!1,feedData:[],listTags:[],tagString:[],selectedOption:null},n.onLoadFeedList=function(){var e=n.props.feedData.filterList;n.setState((function(s){return(0,l.Z)((0,l.Z)({},s),{},{feedData:e})}))},n.toogleFilter=function(){n.setState({isActiveAside:!n.state.isActiveAside}),setTimeout((function(){var e=document.querySelector(".offcanvas-backdrop");e&&e.classList.add("filter-backdrop")}),100)},n.onClickToFeed=function(e,s){return function(t){return n.props.feedsFilter(e,s)}},n.onClickToUgc=function(e){return function(s){return n.props.ugcStatusFilter(e)}},n.onClickToPostType=function(e){return function(s){return n.props.postTypeFilter(e)}},n.onClickToResetFilter=function(e){return n.props.resetFilter()},n.onClickToCollection=function(e,s){return function(t){return n.props.collectionsFilter(e,s)}},n.onClickToNetwork=function(e,s){return function(t){return n.props.networkFilter(e,s)}},n.handleChange=function(e){e&&Object.keys(e).length>0&&n.props.tagsFilter(e.value)},n}return(0,n.Z)(t,[{key:"componentWillMount",value:function(){var e=this.props.tagList;if(e&&e.length>0){var s=[];e.map((function(e){s.push({value:e,label:e})})),this.setState({listTags:s})}}},{key:"componentDidMount",value:function(){var e=document.getElementById("filter_aside");e&&e.addEventListener("click",this.toogleFilter),this.onLoadFeedList()}},{key:"componentWillReceiveProps",value:function(e){var s=e.feedData.filterList;s!=this.state.feedData&&this.setState((function(e){return(0,l.Z)((0,l.Z)({},e),{},{feedData:s})}))}},{key:"render",value:function(){var e=this,s=this.state,t=s.isActiveAside,l=s.feedData,c=s.listTags,n=this.props,i=n.filterBody,a=n.collections,r=n.networks,f=n.isCollection;return(0,k.jsx)(m.Z,{show:t,placement:"end",name:"end",onHide:this.toogleFilter,className:"filter_aside",children:(0,k.jsxs)(m.Z.Body,{children:[(0,k.jsxs)("div",{className:"d-flex align-items-center justify-content-between px-3 px-xxl-4 py-3 border-bottom",children:[(0,k.jsx)("div",{className:"fs-5 fw-medium",children:"Add Filter"}),(0,k.jsx)("button",{type:"button",className:"btn btn-icon btn-active-light btn-active-color-primary p-0 w-30px h-30px border-0",onClick:this.toogleFilter,children:(0,k.jsx)("i",{className:"ri-close-line icon-6"})})]}),f?null:(0,k.jsx)(u.Z,{className:"border-bottom",flush:!0,children:(0,k.jsxs)(u.Z.Item,{defaultactivekey:"0",children:[(0,k.jsx)(u.Z.Header,{children:(0,k.jsx)("span",{className:"text-uppercase fs-8 fw-medium",children:"Collections"})}),(0,k.jsx)(u.Z.Body,{className:"px-5 py-1",children:a&&a.length>0?a.map((function(s){return s.name?(0,k.jsxs)("div",{className:"d-flex align-items-start justify-content-between mb-xxl-3 mb-3",children:[(0,k.jsxs)("label",{className:"form-check flex-grow-1 w-100 overflow-hidden",children:[i.collection?(0,k.jsx)("input",{className:"form-check-input",type:"checkbox",name:s.id,checked:Object.keys(i.collection).includes(String(s.id)),onClick:e.onClickToCollection(s.id,s.name)}):null,(0,k.jsx)(x.Z,{placement:"top",overlay:(0,k.jsx)(h.Z,{children:s.name}),children:(0,k.jsxs)("span",{className:"form-check-label d-flex fw-medium me-2 w-100 overflow-hidden",children:[(0,k.jsx)("div",{className:"symbol symbol-18 d-flex align-items-center justify-content-center flex-shrink-0 bg-light me-1",style:{borderRadius:2},children:s.thumbnails?(0,k.jsx)("img",{className:"object-center-cover",src:s.thumbnails,height:20,width:20,alt:s.name,style:{borderRadius:2}}):(0,k.jsx)("i",{className:"ri-folder-open-line me-0"})}),(0,k.jsx)("span",{className:"text-ellipsis",children:s.name})]})})]}),(0,k.jsx)("span",{className:"badge text-muted border rounded-4 min-w-30px",children:s.assets})]},s.id):null})):null})]})}),(0,k.jsx)(u.Z,{className:"border-bottom",flush:!0,children:(0,k.jsxs)(u.Z.Item,{defaultactivekey:"0",children:[(0,k.jsx)(u.Z.Header,{children:(0,k.jsx)("span",{className:"text-uppercase fs-8 fw-medium",children:"Connections"})}),(0,k.jsx)(u.Z.Body,{className:"px-5 py-1",children:l&&Object.keys(l).length>0&&l.feeds.length>0?l.feeds.map((function(s){return s.name?(0,k.jsxs)("div",{className:"d-flex align-items-start justify-content-between",children:[(0,k.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1 w-100 overflow-hidden",children:[i.socialFeed?(0,k.jsx)("input",{className:"form-check-input",type:"checkbox",name:s.feedId,checked:Object.keys(i.socialFeed).includes(String(s.feedId)),onClick:e.onClickToFeed(s.feedId,s.name)}):null,(0,k.jsx)(x.Z,{placement:"top",overlay:(0,k.jsx)(h.Z,{children:(0,o.ZP)(s.name)}),children:(0,k.jsxs)("span",{className:"form-check-label d-flex fw-medium me-2 w-100 overflow-hidden",children:[(0,k.jsx)("img",{className:"img-fluid me-1",src:(0,b.F)("media/icons/social-icons/".concat((0,j.O5)(s.networkId),".svg")),height:18,width:18,alt:(0,j.BK)(s.networkId)}),(0,k.jsx)("span",{className:"text-ellipsis",children:(0,o.ZP)(s.name)})]})})]}),(0,k.jsx)("span",{className:"badge text-muted border rounded-4 min-w-30px",children:s.count})]},s.feedId):null})):null})]})}),(0,k.jsx)(u.Z,{className:"border-bottom",flush:!0,children:(0,k.jsxs)(u.Z.Item,{defaultactivekey:"0",children:[(0,k.jsx)(u.Z.Header,{children:(0,k.jsx)("span",{className:"text-uppercase fs-8 fw-medium",children:"Networks"})}),(0,k.jsx)(u.Z.Body,{className:"px-5 py-1",children:r&&r.length>0?r.map((function(s){return s.name?(0,k.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,k.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[i.networks?(0,k.jsx)("input",{className:"form-check-input",type:"checkbox",name:s.id,checked:Object.keys(i.networks).includes(String(s.id)),onClick:e.onClickToNetwork(s.id,s.name)}):null,(0,k.jsxs)("span",{className:"form-check-label d-flex fw-medium me-2",children:[(0,k.jsx)("img",{className:"img-fluid me-1",src:(0,b.F)("media/icons/social-icons/".concat((0,j.O5)(s.id),".svg")),height:18,width:18,alt:(0,j.BK)(s.networkId)}),s.name]})]})},s.id):null})):null})]})}),(0,k.jsx)(u.Z,{className:"border-bottom",flush:!0,children:(0,k.jsxs)(u.Z.Item,{defaultactivekey:"0",children:[(0,k.jsx)(u.Z.Header,{children:(0,k.jsx)("span",{className:"text-uppercase fs-8 fw-medium",children:"Tags"})}),(0,k.jsxs)(u.Z.Body,{className:"px-5 pt-1 pb-3",children:[(0,k.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,k.jsx)(d.ZP,{className:"selectpicker w-100",classNamePrefix:"selectpicker",value:this.state.selectedOption,onChange:this.handleChange,options:c})}),i.postTags&&Object.keys(i.postTags).length>0?(0,k.jsx)("div",{className:"d-flex w-100 flex-wrap w-100 pt-2 ",children:Object.keys(i.postTags).map((function(s,t){return(0,k.jsxs)("div",{className:"badge bg-secondary rounded-pill text-gray-800 border me-1 mb-1 px-2 d-flex align-items-center",style:{top:0,maxWidth:"100%"},children:[(0,k.jsx)("span",{className:"text-break",style:{whiteSpace:"normal"},children:s}),(0,k.jsx)("button",{className:"btn btn-sm p-0 ms-1",onClick:function(t){return e.props.tagsFilter(s)},children:(0,k.jsx)("i",{className:"ri-close-line icon-7"})})]},s)}))}):null]})]})}),(0,k.jsx)(u.Z,{className:"border-bottom",flush:!0,children:(0,k.jsxs)(u.Z.Item,{defaultactivekey:"0",children:[(0,k.jsx)(u.Z.Header,{children:(0,k.jsx)("span",{className:"text-uppercase fs-8 fw-medium",children:"Post Type"})}),(0,k.jsxs)(u.Z.Body,{className:"px-5 py-1",children:[(0,k.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,k.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,k.jsx)("input",{className:"form-check-input",type:"checkbox",name:"",id:"image_type",onClick:this.onClickToPostType("2,4"),checked:Object.keys(i.postType).includes("2,4")}),(0,k.jsx)("span",{className:"form-check-label fw-medium",children:"Image Only"})]})}),(0,k.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,k.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,k.jsx)("input",{className:"form-check-input",type:"checkbox",name:"",id:"video_type",onClick:this.onClickToPostType("3,5"),checked:!!Object.keys(i.postType).includes("3,5")}),(0,k.jsx)("span",{className:"form-check-label fw-medium",children:"Video Only"})]})})]})]})}),(0,k.jsx)(u.Z,{className:"border-bottom d-none",flush:!0,children:(0,k.jsxs)(u.Z.Item,{defaultactivekey:"0",children:[(0,k.jsx)(u.Z.Header,{children:(0,k.jsx)("span",{className:"text-uppercase fs-8 fw-medium",children:"Other"})}),(0,k.jsxs)(u.Z.Body,{className:"px-5 py-1",children:[(0,k.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,k.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,k.jsx)("input",{className:"form-check-input",type:"checkbox",name:"",value:""}),(0,k.jsx)("span",{className:"form-check-label fw-medium",children:"Pinned to top"})]})}),(0,k.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,k.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,k.jsx)("input",{className:"form-check-input",type:"checkbox",name:"",value:""}),(0,k.jsx)("span",{className:"form-check-label fw-medium",children:"Recent"})]})}),(0,k.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,k.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,k.jsx)("input",{className:"form-check-input",type:"checkbox",name:"",value:""}),(0,k.jsx)("span",{className:"form-check-label fw-medium",children:"Retweets"})]})})]})]})}),(0,k.jsx)(u.Z,{flush:!0,children:(0,k.jsxs)(u.Z.Item,{defaultactivekey:"0",children:[(0,k.jsx)(u.Z.Header,{children:(0,k.jsx)("span",{className:"text-uppercase fs-8 fw-medium",children:"UGC Rights"})}),(0,k.jsxs)(u.Z.Body,{className:"px-5 py-1",children:[(0,k.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,k.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,k.jsx)("input",{className:"form-check-input",type:"checkbox",checked:Object.keys(i.ugcStatus).includes("1"),onClick:this.onClickToUgc("1")}),(0,k.jsx)("span",{className:"form-check-label fw-medium",children:"Pending Post"})]})}),(0,k.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,k.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,k.jsx)("input",{className:"form-check-input",type:"checkbox",checked:Object.keys(i.ugcStatus).includes("2"),onClick:this.onClickToUgc("2")}),(0,k.jsx)("span",{className:"form-check-label fw-medium",children:"Approved Post"})]})}),(0,k.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,k.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,k.jsx)("input",{className:"form-check-input",type:"checkbox",checked:Object.keys(i.ugcStatus).includes("3"),onClick:this.onClickToUgc("3")}),(0,k.jsx)("span",{className:"form-check-label fw-medium",children:"Rejected Post"})]})}),(0,k.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,k.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,k.jsx)("input",{className:"form-check-input",type:"checkbox",checked:Object.keys(i.ugcStatus).includes("4"),onClick:this.onClickToUgc("4")}),(0,k.jsx)("span",{className:"form-check-label fw-medium",children:"Expired Post"})]})})]})]})}),(0,k.jsx)("div",{className:"d-flex justify-content-center text-align-center flex-column w-100 px-4 pb-4",children:(0,k.jsx)("button",{type:"button",className:"btn border-0 text-hover-primary btn-sm text-decoration-underline text-muted p-1",onClick:this.onClickToResetFilter,children:"Reset results"})})]})})}}]),t}(r.Component);s.default=(0,f.$j)((function(e){return{feedData:e.feedData,filterBody:e.assets.filterBody,networks:e.networks.networkData,tagList:e.tags.tagList}}),(function(e){return{feedsFilter:function(s,t){return e((0,p.a)(s,t))},tagsFilter:function(s){return e((0,p.EC)(s))},ugcStatusFilter:function(s){return e((0,p.cS)(s))},textFilter:function(s){return e((0,p.DN)(s))},postTypeFilter:function(s){return e((0,p.kl)(s))},resetFilter:function(){return e((0,p.sx)())},collectionsFilter:function(s,t){return e((0,p.ep)(s,t))},networkFilter:function(s,t){return e((0,p.kf)(s,t))}}}))(g)}}]);
//# sourceMappingURL=8174.41ae1705.chunk.js.map