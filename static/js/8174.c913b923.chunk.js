"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[8174],{90179:function(e,t,s){s.r(t);var n=s(1413),c=s(15671),i=s(43144),a=s(60136),l=s(29388),r=s(72791),o=s(25167),d=s(28949),m=s(78687),u=s(94111),f=s(80184),x=function(e){(0,a.Z)(s,e);var t=(0,l.Z)(s);function s(e){var i;return(0,c.Z)(this,s),(i=t.call(this,e)).state={isActiveAside:!1,feedData:[]},i.onLoadFeedList=function(){var e=i.props.feedData.filterList;i.setState((function(t){return(0,n.Z)((0,n.Z)({},t),{},{feedData:e})}))},i.toogleFilter=function(){i.setState({isActiveAside:!i.state.isActiveAside}),setTimeout((function(){var e=document.querySelector(".offcanvas-backdrop");e&&e.classList.add("filter-backdrop")}),100)},i.onClickToFeed=function(e){return function(t){return i.props.feedsFilter(e)}},i.onClickToUgc=function(e){return function(t){return i.props.ugcStatusFilter(e)}},i.onClickToPostType=function(e){return function(t){return i.props.postTypeFilter(e)}},i.onClickToResetFilter=function(e){return i.props.resetFilter()},i}return(0,i.Z)(s,[{key:"componentDidMount",value:function(){var e=document.getElementById("filter_aside");e&&e.addEventListener("click",this.toogleFilter),this.onLoadFeedList()}},{key:"render",value:function(){var e=this,t=this.state,s=t.isActiveAside,n=t.feedData,c=this.props,i=(c.onfeedNetworkfilterApply,c.ontypeFilterApply,c.onlocationfilterApply,c.onOtherFilterApply,c.onUgcrightsFilterApply,c.feedNetworkfilter,c.typeFilter,c.locationfilter,c.otherFilter,c.ugcrightsFilter,c.filterBody);return(0,f.jsx)(o.Z,{show:s,placement:"end",name:"end",onHide:this.toogleFilter,className:"filter_aside",children:(0,f.jsxs)(o.Z.Body,{children:[(0,f.jsxs)("div",{className:"d-flex align-items-center justify-content-between px-3 px-xxl-4 py-3 border-bottom",children:[(0,f.jsx)("div",{className:"fs-5 fw-medium",children:"Add Filter"}),(0,f.jsx)("button",{type:"button",className:"btn btn-icon btn-active-light btn-active-color-primary p-0 w-30px h-30px border-0",onClick:this.toogleFilter,children:(0,f.jsx)("span",{className:"svg-icon svg-icon-5 me-0",children:(0,f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,f.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,f.jsx)("path",{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z",fill:"currentColor"})]})})})]}),(0,f.jsx)(d.Z,{className:"border-bottom",flush:!0,children:(0,f.jsxs)(d.Z.Item,{defaultactivekey:"0",children:[(0,f.jsx)(d.Z.Header,{children:(0,f.jsx)("span",{className:"text-uppercase fs-7 fw-medium",children:"Social Network"})}),(0,f.jsx)(d.Z.Body,{className:"pt-1",children:n&&Object.keys(n).length>0&&n.feeds.length>0?n.feeds.map((function(t){return t.name?(0,f.jsxs)("div",{className:"d-flex align-items-start justify-content-between",children:[(0,f.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,f.jsx)("input",{className:"form-check-input",type:"checkbox",name:t.feedId,checked:Object.keys(i.socialFeed).includes(String(t.feedId)),onClick:e.onClickToFeed(t.feedId)}),(0,f.jsx)("span",{className:"form-check-label",children:t.name})]}),(0,f.jsx)("span",{className:"badge text-muted border rounded-4 mt-1 min-w-30px",children:t.count})]},t):null})):null})]})}),(0,f.jsx)(d.Z,{className:"border-bottom",flush:!0,children:(0,f.jsxs)(d.Z.Item,{defaultactivekey:"0",children:[(0,f.jsx)(d.Z.Header,{children:(0,f.jsx)("span",{className:"text-uppercase fs-7 fw-medium",children:"Post Type"})}),(0,f.jsxs)(d.Z.Body,{className:"pt-1",children:[(0,f.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,f.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,f.jsx)("input",{className:"form-check-input",type:"checkbox",name:"",id:"image_type",onClick:this.onClickToPostType("2,4"),checked:Object.keys(i.postType).includes("2,4")}),(0,f.jsx)("span",{className:"form-check-label",children:"Image Only"})]})}),(0,f.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,f.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,f.jsx)("input",{className:"form-check-input",type:"checkbox",name:"",id:"video_type",onClick:this.onClickToPostType("3,5"),checked:!!Object.keys(i.postType).includes("3,5")}),(0,f.jsx)("span",{className:"form-check-label",children:"Video Only"})]})})]})]})}),(0,f.jsx)(d.Z,{className:"border-bottom",flush:!0,children:(0,f.jsxs)(d.Z.Item,{defaultactivekey:"0",children:[(0,f.jsx)(d.Z.Header,{children:(0,f.jsx)("span",{className:"text-uppercase fs-7 fw-medium",children:"Other"})}),(0,f.jsxs)(d.Z.Body,{className:"pt-1",children:[(0,f.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,f.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,f.jsx)("input",{className:"form-check-input",type:"checkbox",name:"",value:""}),(0,f.jsx)("span",{className:"form-check-label",children:"Pinned to top"})]})}),(0,f.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,f.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,f.jsx)("input",{className:"form-check-input",type:"checkbox",name:"",value:""}),(0,f.jsx)("span",{className:"form-check-label",children:"Recent"})]})}),(0,f.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,f.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,f.jsx)("input",{className:"form-check-input",type:"checkbox",name:"",value:""}),(0,f.jsx)("span",{className:"form-check-label",children:"Retweets"})]})})]})]})}),(0,f.jsx)(d.Z,{flush:!0,children:(0,f.jsxs)(d.Z.Item,{defaultactivekey:"0",children:[(0,f.jsx)(d.Z.Header,{children:(0,f.jsx)("span",{className:"text-uppercase fs-7 fw-medium",children:"UGC Rights"})}),(0,f.jsxs)(d.Z.Body,{className:"pt-1",children:[(0,f.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,f.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,f.jsx)("input",{className:"form-check-input",type:"checkbox",checked:Object.keys(i.ugcStatus).includes("1"),onClick:this.onClickToUgc("1")}),(0,f.jsx)("span",{className:"form-check-label",children:"Pending Post"})]})}),(0,f.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,f.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,f.jsx)("input",{className:"form-check-input",type:"checkbox",checked:Object.keys(i.ugcStatus).includes("2"),onClick:this.onClickToUgc("2")}),(0,f.jsx)("span",{className:"form-check-label",children:"Approved Post"})]})}),(0,f.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,f.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,f.jsx)("input",{className:"form-check-input",type:"checkbox",checked:Object.keys(i.ugcStatus).includes("3"),onClick:this.onClickToUgc("3")}),(0,f.jsx)("span",{className:"form-check-label",children:"Rejected Post"})]})}),(0,f.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,f.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1",children:[(0,f.jsx)("input",{className:"form-check-input",type:"checkbox",checked:Object.keys(i.ugcStatus).includes("4"),onClick:this.onClickToUgc("4")}),(0,f.jsx)("span",{className:"form-check-label",children:"Expired Post"})]})})]})]})}),(0,f.jsx)("div",{className:"d-flex justify-content-center text-align-center flex-column w-100 px-4 pb-4",children:(0,f.jsx)("button",{type:"button",className:"btn border-0 text-hover-primary btn-sm text-decoration-underline text-muted p-1",onClick:this.onClickToResetFilter,children:"Reset results"})})]})})}}]),s}(r.Component);t.default=(0,m.$j)((function(e){return{feedData:e.feedData,filterBody:e.assets.filterBody}}),(function(e){return{feedsFilter:function(t){return e((0,u.a)(t))},tagsFilter:function(t){return e((0,u.EC)(t))},ugcStatusFilter:function(t){return e((0,u.cS)(t))},textFilter:function(t){return e((0,u.DN)(t))},postTypeFilter:function(t){return e((0,u.kl)(t))},resetFilter:function(){return e((0,u.sx)())}}}))(x)},28949:function(e,t,s){s.d(t,{Z:function(){return B}});var n=s(1413),c=s(45987),i=s(81694),a=s.n(i),l=s(72791),r=s(32592),o=s(10162),d=s(73193);function m(e,t){return Array.isArray(e)?e.includes(t):e===t}var u=l.createContext({});u.displayName="AccordionContext";var f=u,x=s(80184),h=["as","bsPrefix","className","children","eventKey"],p=l.forwardRef((function(e,t){var s=e.as,i=void 0===s?"div":s,r=e.bsPrefix,u=e.className,p=e.children,b=e.eventKey,v=(0,c.Z)(e,h),y=(0,l.useContext)(f).activeEventKey;return r=(0,o.vE)(r,"accordion-collapse"),(0,x.jsx)(d.Z,(0,n.Z)((0,n.Z)({ref:t,in:m(y,b)},v),{},{className:a()(u,r),children:(0,x.jsx)(i,{children:l.Children.only(p)})}))}));p.displayName="AccordionCollapse";var b=p,v=l.createContext({eventKey:""});v.displayName="AccordionItemContext";var y=v,j=["as","bsPrefix","className","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],k=l.forwardRef((function(e,t){var s=e.as,i=void 0===s?"div":s,r=e.bsPrefix,d=e.className,m=e.onEnter,u=e.onEntering,f=e.onEntered,h=e.onExit,p=e.onExiting,v=e.onExited,k=(0,c.Z)(e,j);r=(0,o.vE)(r,"accordion-body");var N=(0,l.useContext)(y).eventKey;return(0,x.jsx)(b,{eventKey:N,onEnter:m,onEntering:u,onEntered:f,onExit:h,onExiting:p,onExited:v,children:(0,x.jsx)(i,(0,n.Z)((0,n.Z)({ref:t},k),{},{className:a()(d,r)}))})}));k.displayName="AccordionBody";var N=k,g=s(93433),w=["as","bsPrefix","className","onClick"];var C=l.forwardRef((function(e,t){var s=e.as,i=void 0===s?"button":s,r=e.bsPrefix,d=e.className,u=e.onClick,h=(0,c.Z)(e,w);r=(0,o.vE)(r,"accordion-button");var p=(0,l.useContext)(y).eventKey,b=function(e,t){var s=(0,l.useContext)(f),n=s.activeEventKey,c=s.onSelect,i=s.alwaysOpen;return function(s){var a=e===n?null:e;i&&(a=Array.isArray(n)?n.includes(e)?n.filter((function(t){return t!==e})):[].concat((0,g.Z)(n),[e]):[e]),null==c||c(a,s),null==t||t(s)}}(p,u),v=(0,l.useContext)(f).activeEventKey;return"button"===i&&(h.type="button"),(0,x.jsx)(i,(0,n.Z)((0,n.Z)({ref:t,onClick:b},h),{},{"aria-expanded":p===v,className:a()(d,r,!m(v,p)&&"collapsed")}))}));C.displayName="AccordionButton";var Z=C,E=["as","bsPrefix","className","children","onClick"],F=l.forwardRef((function(e,t){var s=e.as,i=void 0===s?"h2":s,l=e.bsPrefix,r=e.className,d=e.children,m=e.onClick,u=(0,c.Z)(e,E);return l=(0,o.vE)(l,"accordion-header"),(0,x.jsx)(i,(0,n.Z)((0,n.Z)({ref:t},u),{},{className:a()(r,l),children:(0,x.jsx)(Z,{onClick:m,children:d})}))}));F.displayName="AccordionHeader";var A=F,P=["as","bsPrefix","className","eventKey"],T=l.forwardRef((function(e,t){var s=e.as,i=void 0===s?"div":s,r=e.bsPrefix,d=e.className,m=e.eventKey,u=(0,c.Z)(e,P);r=(0,o.vE)(r,"accordion-item");var f=(0,l.useMemo)((function(){return{eventKey:m}}),[m]);return(0,x.jsx)(y.Provider,{value:f,children:(0,x.jsx)(i,(0,n.Z)((0,n.Z)({ref:t},u),{},{className:a()(d,r)}))})}));T.displayName="AccordionItem";var O=T,S=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],K=l.forwardRef((function(e,t){var s=(0,r.Ch)(e,{activeKey:"onSelect"}),i=s.as,d=void 0===i?"div":i,m=s.activeKey,u=s.bsPrefix,h=s.className,p=s.onSelect,b=s.flush,v=s.alwaysOpen,y=(0,c.Z)(s,S),j=(0,o.vE)(u,"accordion"),k=(0,l.useMemo)((function(){return{activeEventKey:m,onSelect:p,alwaysOpen:v}}),[m,p,v]);return(0,x.jsx)(f.Provider,{value:k,children:(0,x.jsx)(d,(0,n.Z)((0,n.Z)({ref:t},y),{},{className:a()(h,j,b&&"".concat(j,"-flush"))}))})}));K.displayName="Accordion";var B=Object.assign(K,{Button:Z,Collapse:b,Item:O,Header:A,Body:N})}}]);
//# sourceMappingURL=8174.c913b923.chunk.js.map