"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[2401],{2401:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var a=n(93433),s=n(4942),i=n(1413),l=n(15671),c=n(43144),r=n(60136),d=n(29388),o=n(72791),u=n(95316),m=n(99410),h=n(29795),f=n(29546),v=n(55353),x=n(73193),p=n(86836),N=n(56600),g=n(2841),b=n(80184),j=function(e){(0,r.Z)(n,e);var t=(0,d.Z)(n);function n(){return(0,l.Z)(this,n),t.apply(this,arguments)}return(0,c.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.networkList,n=e.updateNetworkList,a=e.selectedField;return(0,b.jsx)("div",{className:"row gx-1",children:t.length>0?t.map((function(e){var t=e.name,s=e.id;return(0,b.jsx)("div",{className:"col-sm-4 col-lg-3",children:(0,b.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,b.jsxs)("label",{className:"form-check mb-3 flex-grow-1",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",name:"",value:"instagram",onChange:function(){return n(s)},"data-id":s,checked:-1!==a.indexOf(s)}),(0,b.jsxs)("span",{className:"form-check-label d-flex align-items-start",children:[(0,b.jsx)("img",{className:"img-fluid h-100 me-1",src:(0,N.F)("media/icons/social-icons/".concat((0,g.O5)(s),".svg")),height:18,width:18,alt:t,style:{marginTop:2}}),t]})]})})},s)})):null})}}]),n}(o.Component),k=j,Z=n(78687),w=n(34867),C=function(e){(0,r.Z)(n,e);var t=(0,d.Z)(n);function n(e){var s;return(0,l.Z)(this,n),(s=t.call(this,e)).state={feedData:[],selectedFeed:[]},s.onLoadFeedList=function(){var e=s.props.feedData.filterList;s.setState((function(t){return(0,i.Z)((0,i.Z)({},t),{},{feedData:e})}))},s.handleOnChange=function(e){var t=s.props.updateFeedList,n=s.state.selectedFeed;if(-1!==n.indexOf(e)){var l=n.filter((function(t){return t!==e}));s.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},{selectedFeed:l})}),(function(){t(s.state.selectedFeed)}))}else s.setState((function(t){return(0,i.Z)((0,i.Z)({},t),{},{selectedFeed:[].concat((0,a.Z)(s.state.selectedFeed),[e])})}),(function(){t(s.state.selectedFeed)}))},s}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){this.onLoadFeedList()}},{key:"render",value:function(){var e=this,t=this.state.feedData;return(0,b.jsx)("div",{className:"row gx-3",children:t&&Object.keys(t).length>0&&t.feeds.length>0?t.feeds.map((function(t){return t.name?(0,b.jsx)("div",{className:"col-sm-6 col-lg-4",children:(0,b.jsxs)("div",{className:"d-flex align-items-start justify-content-between mb-3",children:[(0,b.jsxs)("label",{className:"form-check mb-xxl-3 mb-3 flex-grow-1 overflow-hidden w-100 pe-2",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",name:t.feedId,value:t.feedId,onChange:function(){return e.handleOnChange(t.feedId)},checked:-1!==e.props.selectedFeedsList.indexOf(t.feedId)}),(0,b.jsx)("span",{className:"form-check-label text-break",children:(0,w.ZP)(t.name)})]}),(0,b.jsx)("span",{className:"badge text-muted border rounded-4 min-w-30px fs-9",children:t.count})]})},t.feedId):null})):null})}}]),n}(o.Component),y=(0,Z.$j)((function(e){return{feedData:e.feedData}}))(C),O=n(65045),S=n(91523),F=function(){return(0,b.jsx)("i",{className:"ri-at-line icon-5"})},L={ruleOn:1,advanceOption:1,name:"",action:"Copy",text:"",tag:[],collectionId:0,selectedNetworkList:[],selectedFeedsList:[],validateName:!1,validateCollection:!1,validateAction:!1,validateAdvOpt:!1,iconContent:F(),isRequest:!1},A=function(e){(0,r.Z)(n,e);var t=(0,d.Z)(n);function n(){var e;return(0,l.Z)(this,n),(e=t.call(this)).advanceOpFun=function(t){var n=parseInt(t.target.value);1===n?e.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},{selectedFeedsList:[],selectedNetworkList:[]})})):2===n?e.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},{selectedFeedsList:[]})})):3===n&&e.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},{selectedNetworkList:[]})})),e.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},{advanceOption:n})})),e.hideValidation()},e.handleOnChange=function(t){var n=t.target.value;e.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,s.Z)({},t.target.name,n))})),e.hideValidation()},e.iconChangeOnTab=function(t){var n=parseInt(t.target.value);switch(e.setState({ruleOn:n}),n){case 1:default:return e.setState({iconContent:F()});case 2:return e.setState({iconContent:(0,b.jsx)("i",{className:"ri-hashtag icon-5"})});case 3:return e.setState({iconContent:(0,b.jsx)("i",{className:"ri-text icon-5"})});case 4:return e.setState({iconContent:(0,b.jsx)("i",{className:"ri-price-tag-3-line icon-5"})})}},e.handleDropDownValue=function(t){e.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},{action:t})})),e.hideValidation()},e.handleChangeMultiSelect=function(t){e.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},{tag:t})})),e.hideValidation()},e.updateNetworkList=function(t){var n=e.state.selectedNetworkList;if(-1!==n.indexOf(t)){var s=[];2==t?n.map((function(e){2!=e&&18!=e&&s.push(e)})):s=n.filter((function(e){return e!==t})),e.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},{selectedNetworkList:s})}))}else{var l=[t];2==t&&(l=[2,18]),e.setState((function(t){return(0,i.Z)((0,i.Z)({},t),{},{selectedNetworkList:[].concat((0,a.Z)(e.state.selectedNetworkList),(0,a.Z)(l))})}))}e.hideValidation()},e.updateFeedList=function(t){e.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},{selectedFeedsList:t})})),e.hideValidation()},e.updateCollectionList=function(t){e.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},{collectionId:t.value})})),e.hideValidation()},e.convertArrToString=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.length>0&&!t){var n=e.toString();return n}if(e.length>0&&t){var a=e.map((function(e){return e.value}));return a.toString()}return""},e.handleCloseModal=function(){e.props.createEditCallback(!1),e.setState(L)},e.handleFormSubmission=function(){var t=e.state,n=t.name,a=t.collectionId;if(""===n||n.length<=1)e.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},{validateName:!0})}));else if(0===a)e.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},{validateCollection:!0})}));else if(e.validatingAction())e.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},{validateAction:!0})}));else if(e.validatingAdvanceOption())e.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},{validateAdvOpt:!0})}));else{var s=e.props.addNewRule,l=e.creatingPostBody();e.setState({isRequest:!0}),s(l,e.handleCloseModal)}},e.state=L,e}return(0,c.Z)(n,[{key:"validatingAdvanceOption",value:function(){var e=this.state,t=e.advanceOption,n=e.selectedNetworkList,a=e.selectedFeedsList;return 2===t&&0===n.length||3===t&&0===a.length}},{key:"validatingAction",value:function(){var e=this.state,t=e.ruleOn,n=e.text,a=e.tag;return 1===t&&""===n||(2===t&&""===n||(3===t&&""===n||4===t&&0===a.length))}},{key:"hideValidation",value:function(){var e=this.state,t=e.validateAction,n=e.validateCollection,a=e.validateAdvOpt,s=e.validateName;(a||s||t||n)&&this.setState((function(e){return(0,i.Z)((0,i.Z)({},e),{},{validateAdvOpt:!1,validateName:!1,validateAction:!1,validateCollection:!1})}))}},{key:"creatingPostBody",value:function(){var e=this.state,t=e.name,n=e.collectionId,a=e.advanceOption,s=e.action,i=e.text,l=e.ruleOn,c=e.selectedFeedsList,r=e.selectedNetworkList,d=e.tag,o={name:t,collection:Number(n),target:Number(a),action:Number("Copy"===s?"5":"4"),text:4===l&&d.length>0?this.convertArrToString(d,!0):i,filter:Number(l),feeds:this.convertArrToString(c),networks:this.convertArrToString(r),tags:"Copy"!==s?i:""};return 4!=l&&"Tag"==s&&(o.tags=this.convertArrToString(d,!0)),5===o.action&&(o.tags=""),o}},{key:"render",value:function(){var e=this,t=this.props,n=t.createEditToggle,a=t.networkList,s=t.tags,i=this.state,l=i.ruleOn,c=i.name,r=i.text,d=i.action,o=i.advanceOption,N=i.selectedNetworkList,g=i.selectedFeedsList,j=i.validateAction,Z=i.validateName,w=i.validateCollection,C=i.validateAdvOpt,S=i.iconContent,F=i.isRequest;return(0,b.jsxs)(u.Z,{show:n,onHide:function(){return e.handleCloseModal()},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,b.jsx)(u.Z.Header,{closeButton:!0,children:(0,b.jsx)(u.Z.Title,{children:"Add Rule"})}),(0,b.jsx)(u.Z.Body,{children:(0,b.jsxs)("div",{className:"mx-xl-4 px-2 px-lg-4 mx-0 pt-4",children:[(0,b.jsxs)("div",{className:"row mb-4 mb-xl-5",children:[(0,b.jsxs)("label",{className:"col-sm-3 text-gray-800 mb-2",children:["Rule Name ",(0,b.jsx)("strong",{className:"text-danger",children:"*"})]}),(0,b.jsxs)("div",{className:"col-sm-9",children:[(0,b.jsx)("input",{type:"text",name:"name",className:"form-control ".concat(Z?"is-invalid":""),placeholder:"Enter rule name\u2026",value:c,onChange:this.handleOnChange}),(0,b.jsx)("div",{className:"invalid-feedback",children:"Please provide a name."})]})]}),(0,b.jsxs)("div",{className:"row mb-4 mb-xl-5",children:[(0,b.jsxs)("label",{className:"col-sm-3 text-gray-800 mb-2",children:["Select Collection ",(0,b.jsx)("strong",{className:"text-danger",children:"*"})]}),(0,b.jsxs)("div",{className:"col-sm-9",children:[(0,b.jsx)("div",{className:"w-100".concat(w?" is-invalid":""),children:(0,b.jsx)(O.default,{className:"w-100",updateCollectionList:this.updateCollectionList,onSelectedCollection:this.updateCollectionList})}),(0,b.jsx)("div",{className:"invalid-feedback",children:"Please provide a name."})]})]}),(0,b.jsxs)("div",{className:"row mb-4 mb-xl-5",children:[(0,b.jsxs)("label",{className:"col-sm-3 text-gray-800 mb-2",children:["Take Action ",(0,b.jsx)("strong",{className:"text-danger",children:"*"})]}),(0,b.jsx)("div",{className:"col-sm-9",children:(0,b.jsxs)("div",{className:"d-flex align-items-center flex-wrap",onChange:this.iconChangeOnTab,children:[(0,b.jsxs)("div",{className:"form-check me-2 me-sm-3",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",name:"ruleOn",value:1,id:"byHandle",defaultChecked:!0}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"byHandle",children:"By Handle"})]}),(0,b.jsxs)("div",{className:"form-check me-2 me-sm-3",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",name:"ruleOn",value:2,id:"byHashtag"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"byHashtag",children:"By Hashtag"})]}),(0,b.jsxs)("div",{className:"form-check me-2 me-sm-3",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",name:"ruleOn",value:3,id:"byWord"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"byWord",children:"By Word"})]}),(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",name:"ruleOn",value:4,id:"byTags"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"byTags",children:"By Tags"})]})]})})]}),(0,b.jsx)("div",{className:"row mb-4 mb-xl-5",children:(0,b.jsx)("div",{className:"offset-sm-3 col-sm-9",children:4!==l?(0,b.jsxs)("div",{className:"position-relative w-100 mb-3",style:{zIndex:0},children:[(0,b.jsx)("span",{className:"h-38px w-38px block-center svg-icon svg-icon-4 text-gray-500 position-absolute top-0 start-0 translate-middle-x ms-4 ps-1 d-flex",style:{zIndex:9},children:S}),(0,b.jsxs)(m.Z,{className:"".concat(j?"is-invalid":""),children:[(0,b.jsx)(h.Z.Control,{className:"ps-9 fw-bolder","aria-label":"Text input with dropdown",name:"text",placeholder:"",onChange:function(t){return e.handleOnChange(t)},value:r}),(0,b.jsxs)(f.Z,{variant:"outline-secondary",title:d,children:[(0,b.jsx)(v.Z.Item,{onClick:function(){return e.handleDropDownValue("Copy")},children:"Copy"}),(0,b.jsx)(v.Z.Item,{onClick:function(){return e.handleDropDownValue("Tag")},children:"Tag"})]})]}),(0,b.jsx)("div",{className:"invalid-feedback",children:"Please provide a name."})]}):(0,b.jsxs)("div",{className:"position-relative w-100 mb-3",style:{zIndex:0},children:[(0,b.jsx)("div",{className:"".concat(j?"is-invalid":""),children:(0,b.jsxs)(m.Z,{className:"".concat(j?"is-invalid":""),children:[(0,b.jsx)(p.Z,{isMulti:!0,className:"form-input-select selectpicker",classNamePrefix:"selectpicker",options:s.tagList.map((function(e){return{value:e,label:e}})),onChange:function(t){return e.handleChangeMultiSelect(t)}}),(0,b.jsx)("span",{className:"input-group-text",children:"Copy"})]})}),(0,b.jsx)("div",{className:"invalid-feedback",children:"Please provide a name."})]})})}),"Tag"==d?(0,b.jsx)("div",{className:"row mb-4 mb-xl-5",children:(0,b.jsx)("div",{className:"offset-sm-3 col-sm-9",children:(0,b.jsxs)("div",{className:"position-relative w-100 mb-3",style:{zIndex:0},children:[(0,b.jsx)("div",{className:"".concat(j?"is-invalid":""),children:(0,b.jsx)(m.Z,{className:"".concat(j?"is-invalid":""),children:(0,b.jsx)(p.Z,{isMulti:!0,className:"form-input-select selectpicker",classNamePrefix:"selectpicker",options:s.tagList.map((function(e){return{value:e,label:e}})),onChange:function(t){return e.handleChangeMultiSelect(t)}})})}),(0,b.jsx)("div",{className:"invalid-feedback",children:"Please provide a name."})]})})}):null,(0,b.jsxs)("div",{className:"row mb-4 mb-xl-5",children:[(0,b.jsxs)("label",{className:"col-sm-3 text-gray-800 mb-2 d-flex",children:["Advance Options ",(0,b.jsx)("strong",{className:"text-danger",children:"*"})]}),(0,b.jsx)("div",{className:"col-sm-9",children:(0,b.jsxs)("div",{className:"d-flex align-items-center flex-wrap",onChange:this.advanceOpFun,children:[(0,b.jsxs)("div",{className:"form-check me-2 me-sm-3",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",name:"advanceOpt",value:1,id:"allFeedNetwork",defaultChecked:!0}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"allFeedNetwork",children:"All Assets"})]}),(0,b.jsxs)("div",{className:"form-check me-2 me-sm-3",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",name:"advanceOpt",value:2,id:"selectedNetwork"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"selectedNetwork",children:"Selected Networks"})]}),(0,b.jsxs)("div",{className:"form-check me-2 me-sm-3",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",name:"advanceOpt",value:3,id:"selectedFeed"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"selectedFeed",children:"Selected Feeds"})]})]})})]}),(0,b.jsx)("div",{className:"row mb-4 mb-xl-5",children:(0,b.jsxs)("div",{className:"col-sm-12",children:[(0,b.jsx)(x.Z,{in:2===o,children:(0,b.jsx)("div",{children:(0,b.jsx)(k,{networkList:a,updateNetworkList:this.updateNetworkList,selectedField:N})})}),(0,b.jsx)(x.Z,{in:3===o,children:(0,b.jsx)("div",{children:(0,b.jsx)(y,{updateFeedList:this.updateFeedList,selectedFeedsList:g})})})]})}),C?(0,b.jsx)("p",{children:"Please select a value"}):null]})}),(0,b.jsx)(u.Z.Footer,{className:"p-3",children:(0,b.jsxs)("div",{className:"mx-xl-4 px-2 px-lg-4 mx-0",children:[(0,b.jsx)("button",{type:"button",className:"btn btn-secondary btn-sm btn-min-w me-3",onClick:function(){return e.handleCloseModal()},children:"Cancel"}),(0,b.jsx)("button",{type:"button",className:"btn btn-primary btn-sm btn-min-w ".concat(F?"spinner":""),onClick:this.handleFormSubmission,children:"Save Rule"})]})})]})}}]),n}(o.Component),T=(0,Z.$j)((function(e){return{tags:e.tags}}),(function(e){return{addNewRule:function(t,n){return e((0,S.HP)(t,n))}}}))(A)},29546:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(1413),s=n(45987),i=n(72791),l=n(52007),c=n.n(l),r=n(55353),d=n(5107),o=n(20070),u=c().oneOf(["start","end"]),m=c().oneOfType([u,c().shape({sm:u}),c().shape({md:u}),c().shape({lg:u}),c().shape({xl:u}),c().shape({xxl:u}),c().object]),h=n(80184),f=["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","renderMenuOnMount","disabled","href","id","menuVariant","flip"],v={id:c().string,href:c().string,onClick:c().func,title:c().node.isRequired,disabled:c().bool,align:m,menuRole:c().string,renderMenuOnMount:c().bool,rootCloseEvent:c().string,menuVariant:c().oneOf(["dark"]),flip:c().bool,bsPrefix:c().string,variant:c().string,size:c().string},x=i.forwardRef((function(e,t){var n=e.title,i=e.children,l=e.bsPrefix,c=e.rootCloseEvent,u=e.variant,m=e.size,v=e.menuRole,x=e.renderMenuOnMount,p=e.disabled,N=e.href,g=e.id,b=e.menuVariant,j=e.flip,k=(0,s.Z)(e,f);return(0,h.jsxs)(r.Z,(0,a.Z)((0,a.Z)({ref:t},k),{},{children:[(0,h.jsx)(d.Z,{id:g,href:N,size:m,variant:u,disabled:p,childBsPrefix:l,children:n}),(0,h.jsx)(o.Z,{role:v,renderOnMount:x,rootCloseEvent:c,variant:b,flip:j,children:i})]}))}));x.displayName="DropdownButton",x.propTypes=v;var p=x}}]);
//# sourceMappingURL=2401.0ff00c0a.chunk.js.map