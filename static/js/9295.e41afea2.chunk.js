"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[9295],{29295:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var s=n(1413),i=n(15671),l=n(43144),o=n(60136),a=n(29388),c=n(72791),r=n(78687),d=n(74342),u=n(44533),h=n(28949),p=n(23794),m=n(56600),g=(n(32002),n(65882)),f=n(91731),y=n(97326),b=n(3826),x=n(12576),v=(n(73609),n(94111)),j=n(80184),C=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var s=arguments.length,l=new Array(s),o=0;o<s;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={active:null},e.onClickToEdit=function(t){return function(n){var s=(0,y.Z)(e);(0,v.FN)(t.id).then((function(e){var t=e.data,n=t.publishCode,i=t.assestCount;s.props.onUpdateReponseData({assestCount:i,publishCode:n})})).catch((function(e){s.props.onUpdateReponseData({assestCount:0,publishCode:t})}))}},e}return(0,l.Z)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.state;t.history,this.state.active;return(0,j.jsx)("div",{className:"filter_list accordion",children:n.collectionList.length>0&&n.publishList.length>0&&n.publishList.map((function(t,n){return(0,j.jsx)("div",{className:"accordion-item mb-1",children:(0,j.jsx)("div",{className:"menu-item",children:(0,j.jsx)("button",{type:"button","aria-expanded":"false",className:"btn btn-secondary w-100 py-1",children:(0,j.jsxs)("div",{className:"d-flex justify-content-between align-items-center w-100",onClick:e.onClickToEdit(t),children:[(0,j.jsx)("span",{className:"menu-title fw-bold text-ellipsis d-block me-3 fs-8",children:t.name}),(0,j.jsx)("div",{className:"d-flex align-items-center justify-content-end",children:(0,j.jsx)(b.Z,{placement:"top",overlay:(0,j.jsx)(x.Z,{children:"Remove"}),children:(0,j.jsx)("button",{type:"button",className:"btn btn-icon btn-secondary h-26px w-26px",onClick:e.props.onClickToDelete({id:t.id}),children:(0,j.jsx)("i",{className:"ri-delete-bin-6-line me-0 icon-7"})})})})]})})},n)})}))})}}]),n}(c.Component),S=C,N=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var s;return(0,i.Z)(this,n),(s=t.call(this,e)).campaignTypeFun=function(e){return s.props.campaignTypeCallback(e)},s.state={showModal:!1,campaignType:"HashtagCampaign",publishList:[]},s}return(0,l.Z)(n,[{key:"componentDidMount",value:function(){var e=this,t=document.querySelector("#web_hashtag_panel-tab-aside-assets_filter");t&&t.addEventListener("click",(function(t){return e.props.onUpdateReponseData(null)}))}},{key:"render",value:function(){var e=this,t=(this.state.setValue,this.props),n=t.filterApply,i=t.state,l=(t.genratedCodeModal,t.onClickToDelete,t.onResetFilter),o=(t.activeFilter,t.history,t.onChangeName),a=t.isPublishEdit,r=t.templeteList,y=t.onSubmit,b=t.templatNameError;return(0,j.jsx)("div",{className:"card-body",children:(0,j.jsxs)("div",{className:"innerAsideWrapper",children:[(0,j.jsx)("div",{className:"d-flex align-items-center justify-content-between mb-2",children:(0,j.jsx)("h6",{className:"fs-7 fw-bolder mb-0",children:"Select Filter"})}),(0,j.jsxs)(d.Z.Container,{id:"".concat(a?"edit_hashtag_tab_panel":"web_hashtag_panel"),defaultActiveKey:"aside-assets_filter",children:[(0,j.jsxs)(u.Z,{variant:"underline",className:"border-bottom mb-3",children:[(0,j.jsx)(u.Z.Item,{className:"",children:(0,j.jsx)(u.Z.Link,{className:"me-3 px-0",eventKey:"aside-assets_filter",children:"Assets Filter"})}),(0,j.jsx)(u.Z.Item,{className:"",children:(0,j.jsx)(u.Z.Link,{className:"px-0",eventKey:"filter-assets_published",children:"View All"})})]}),(0,j.jsxs)(d.Z.Content,{children:[(0,j.jsxs)(d.Z.Pane,{eventKey:"aside-assets_filter",children:[(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsxs)("label",{className:"text-gray-800 mb-2",children:["Campaign Name ",(0,j.jsx)("strong",{className:"text-danger",children:"*"})]}),(0,j.jsx)("input",{type:"text",className:"form-control form-control-sm ".concat(b?"is-invalid":""),placeholder:"Please enter hashtag campaign name..",value:i.publishCodeName,onChange:o}),b?(0,j.jsx)("div",{className:"invalid-feedback",children:"Please provide template name"}):null]}),(0,j.jsx)("div",{className:"publish_aside_inner",children:(0,j.jsxs)(h.Z,{defaultActiveKey:"0",children:[i.chooseFilter&&Object.keys(i.chooseFilter).map((function(t,n){return(0,j.jsx)(g.Z,(0,s.Z)((0,s.Z)({filterKey:t},e.props),{},{indexFilter:n}))})),(0,j.jsxs)(h.Z.Item,{eventKey:"0",className:"pb-3",children:[(0,j.jsxs)(h.Z.Header,{className:"add_fillter_btn",children:[(0,j.jsx)("i",{className:"ri-add-line plus_symbol me-1"}),(0,j.jsx)("i",{className:"ri-subtract-line minus_symbol me-1"}),(0,j.jsx)("span",{className:"fs-9 fw-medium",children:"Choose Filter"})]}),(0,j.jsxs)(h.Z.Body,{className:"border rounded-1 mt-1",children:[(0,j.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(i.chooseFilter).includes("collection")?"d-none disabled":""),onClick:n("collection"),children:[(0,j.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,j.jsx)("div",{className:"symbol-label",children:(0,j.jsx)("i",{className:"ri-folder-4-line icon-6 text-gray-800"})})}),(0,j.jsxs)("div",{className:"",children:[(0,j.jsx)("p",{className:"fs-9 fw-bold mb-0 text-gray-800",children:"Collection"}),(0,j.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the preferred collection"})]})]}),(0,j.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(i.chooseFilter).includes("source")?"d-none disabled":""),onClick:n("source"),children:[(0,j.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,j.jsx)("div",{className:"symbol-label",children:(0,j.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,j.jsx)(p.Z,{src:(0,m.F)("media/icons/svg-icons/network.svg"),height:18,width:18})})})}),(0,j.jsxs)("div",{className:"",children:[(0,j.jsx)("p",{className:"fs-9 fw-bold mb-0 text-gray-800",children:"Network"}),(0,j.jsx)("span",{className:"fs-10 text-gray-500",children:"Choose the required network"})]})]}),(0,j.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(i.chooseFilter).includes("connection")?"d-none disabled":""),onClick:n("connection"),children:[(0,j.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,j.jsx)("div",{className:"symbol-label",children:(0,j.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,j.jsx)(p.Z,{src:(0,m.F)("media/icons/svg-icons/network-manager.svg"),height:18,width:18})})})}),(0,j.jsxs)("div",{className:"",children:[(0,j.jsx)("p",{className:"fs-9 fw-bold mb-0 text-gray-800",children:"Connections"}),(0,j.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the connection type"})]})]}),(0,j.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(i.chooseFilter).includes("assetsType")?"d-none disabled":""),onClick:n("assetsType"),children:[(0,j.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,j.jsx)("div",{className:"symbol-label",children:(0,j.jsx)("i",{className:"ri-image-line icon-6 text-gray-800"})})}),(0,j.jsxs)("div",{className:"",children:[(0,j.jsx)("p",{className:"fs-9 fw-bold mb-0 text-gray-800",children:"Assets Type"}),(0,j.jsx)("span",{className:"fs-10 text-gray-500",children:"Choose the type of asset"})]})]}),(0,j.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(i.chooseFilter).includes("tags")?"d-none disabled":""),onClick:n("tags"),children:[(0,j.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,j.jsx)("div",{className:"symbol-label",children:(0,j.jsx)("i",{className:"ri-price-tag-3-line icon-6 text-gray-800"})})}),(0,j.jsxs)("div",{className:"",children:[(0,j.jsx)("p",{className:"fs-9 fw-bold mb-0 text-gray-800",children:"Tag"}),(0,j.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the preferred tag"})]})]}),(0,j.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(i.chooseFilter).includes("ugcrights")?"d-none disabled":""),onClick:n("ugcrights"),children:[(0,j.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,j.jsx)("div",{className:"symbol-label",children:(0,j.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,j.jsx)(p.Z,{src:(0,m.F)("media/icons/svg-icons/rights-approved-line.svg"),height:18,width:18})})})}),(0,j.jsxs)("div",{className:"",children:[(0,j.jsx)("p",{className:"fs-9 fw-bold mb-0 text-gray-800",children:"UGC Rights"}),(0,j.jsx)("span",{className:"fs-10 text-gray-500",children:"Select the preferred ugc rights status"})]})]})]})]}),(0,c.createElement)(f.Z,(0,s.Z)((0,s.Z)({},this.props),{},{key:r.length>0}))]})}),(0,j.jsx)("div",{className:"bg-white w-100 text-center flex-column d-flex pt-2",children:(0,j.jsx)("button",{type:"button",className:"btn btn-primary w-100 ".concat(i.isRequesting?"spinner":""),onClick:y,children:"Save Changes"})}),(0,j.jsx)("div",{className:"bg-white w-100 text-center flex-column d-flex pt-2",children:(0,j.jsx)("button",{type:"button",className:"btn border-0 text-hover-primary btn-sm text-decoration-underline text-muted p-1",onClick:l,children:"Reset Filters"})})]}),(0,j.jsx)(d.Z.Pane,{eventKey:"filter-assets_published",children:(0,j.jsx)(S,(0,s.Z)({},this.props))})]})]})]})})}}]),n}(c.Component),k=(0,r.$j)((function(e){return{templeteList:e.templates.templeteList}}))(N)},73609:function(e,t,n){var s=n(1413),i=n(15671),l=n(43144),o=n(97326),a=n(60136),c=n(29388),r=n(72791),d=n(9085),u=n(21830),h=n.n(u),p=n(78687),m=n(46305),g=n(32002),f=n(80184),y=r.lazy((function(){return n.e(8923).then(n.bind(n,38923))})),b=r.lazy((function(){return n.e(3566).then(n.bind(n,53566))})),x=r.lazy((function(){return n.e(6106).then(n.bind(n,86106))})),v=r.lazy((function(){return n.e(2835).then(n.bind(n,32835))})),j=r.lazy((function(){return n.e(1013).then(n.bind(n,61013))})),C=r.lazy((function(){return n.e(4464).then(n.bind(n,74464))})),S=r.lazy((function(){return n.e(4205).then(n.bind(n,74205))})),N=function(e){var t={};return e&&String(e).length>0&&String(e).split(",").map((function(e){t[e]=!0})),t},k=function(e){var t=[];return e&&String(e).length>0&&String(e).split(",").map((function(e){t.push(e)})),t},A=function(e){var t={};return e&&String(e).length>0&&(String(e).includes("2,4")?t["2,4"]=!0:String(e).includes("3,5")&&(t["3,5"]=!0),String(e).includes("1")&&(t[1]=!0)),t},w=function(e,t,n,s,i,l){var o={};return e&&(o.assetsType=!0),t&&(o.collection=!0),n&&(o.connection=!0),s&&(o.source=!0),i&&(o.tags=!0),l&&(o.ugcrights=!0),o},F=function(e){(0,a.Z)(n,e);var t=(0,c.Z)(n);function n(e){var l;(0,i.Z)(this,n),(l=t.call(this,e)).timeout=0,l.onClickToDelete=function(e){return function(t){h().fire({title:"Are you sure?",text:"You want to delete this",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!"}).then((function(t){if(t.isConfirmed){var n=(0,o.Z)(l);(0,g.bD)(e).then((function(e){n.onLoadPublish(),d.Am.success("Your widget has been deleted.")}))}}))}},l.onTagApply=function(e){var t=l.state.tagApply;t.push(e),l.setState({tagApply:t})},l.onTagRemove=function(e){return function(t){var n=l.state.tagApply;n.splice(e,1),l.setState({tagApply:n})}},l.conditionApply=function(e){return function(t){l.setState({condition:e})}},l.filterApply=function(e){return function(t){var n=l.state.chooseFilter,i={};n[e]?(delete n[e],"collection"==e&&(i={selectedCollection:{}}),"source"==e&&(i={selectedNetwork:{}}),"assetsType"==e&&(i={assetsApply:{}}),"tags"==e&&(i={tagApply:[]}),"ugcrights"==e&&(i={ugcRigths:{}}),"connection"==e&&(i={selectedConnection:{}}),l.setState((0,s.Z)({chooseFilter:n,activeKey:""},i))):(n[e]=!0,l.setState({chooseFilter:n,activeKey:e}))}},l.onSelectActive=function(e){return function(t){l.setState({activeKey:l.state.activeKey==e?"":e})}},l.shareEmbedModal=function(e){return l.setState({showGenratedCode:!0})},l.genratedCodeCallback=function(e){l.setState({showGenratedCode:e})},l.renderSwitch=function(e){var t=l.state.responseData;switch(e){case"p-html":default:return(0,f.jsx)(y,{data:t});case"p-wordpress":return(0,f.jsx)(b,{data:t});case"p-wix":return(0,f.jsx)(x,{data:t});case"p-squarespace":return(0,f.jsx)(v,{data:t});case"p-shopify":return(0,f.jsx)(j,{data:t});case"p-other":return(0,f.jsx)(C,{data:t})}},l.onSelectTemplate=function(e){return function(t){return l.setState({selectedTemplate:e})}},l.onUgcRigths=function(e){return function(t){var n=l.state.ugcRigths;n[e]?(delete n[e],l.setState({ugcRigths:n})):(n[e]=!0,l.setState({ugcRigths:n}))}},l.onSelectAllUgcRigths=function(e){var t=l.state.ugcRigths;t&&Object.keys(t).length>=3?l.setState({ugcRigths:{}}):l.setState({ugcRigths:{1:!0,2:!0,3:!0}})},l.onconnectionApply=function(e){return function(t){var n=l.state.selectedConnection;n[e]?(delete n[e],l.setState({selectedConnection:n})):(n[e]=!0,l.setState({selectedConnection:n}))}},l.onConnectionSelectAll=function(e){var t=l.state,n=t.selectedConnection,s=t.feedData;if(n&&Object.keys(n).length>=s.length)l.setState({selectedConnection:{}});else{var i={};s.map((function(e){i[e.feedId]=!0})),l.setState({selectedConnection:i})}},l.onConnectionSearchFilter=function(e){var t=e.target.value;l.timeout&&clearTimeout(l.timeout),l.timeout=setTimeout((function(){l.setState({textConnectionSearch:t?String(t).toLowerCase():t},(function(){return l.onLoadConnectionFilterData()}))}),1e3)},l.onLoadConnectionFilterData=function(){var e=l.props.feedData,t=l.state.textConnectionSearch,n=e.filter((function(e){return String(e.name).toLowerCase().includes(t)}));l.setState({feedData:n})},l.onAssetsApply=function(e){return function(t){var n=l.state.assetsApply;n[e]?(delete n[e],l.setState({assetsApply:n})):(n[e]=!0,l.setState({assetsApply:n}))}},l.onSelectAllAssetsApply=function(e){var t=l.state.assetsApply;t&&Object.keys(t).length>=3?l.setState({assetsApply:{}}):l.setState({assetsApply:{1:!0,"2,4":!0,"3,5":!0}})},l.onNetworkApply=function(e){return function(t){var n=l.state.selectedNetwork;n[e]?(delete n[e],l.setState({selectedNetwork:n})):(n[e]=!0,l.setState({selectedNetwork:n}))}},l.onClickSelectAll=function(e){var t=l.state,n=t.selectedNetwork,s=t.networkData;if(n&&Object.keys(n).length>=s.length)l.setState({selectedNetwork:{}});else{var i={};s.map((function(e){i[e.id]=!0})),l.setState({selectedNetwork:i})}},l.onSearchFilter=function(e){var t=e.target.value;l.timeout&&clearTimeout(l.timeout),l.timeout=setTimeout((function(){l.setState({textSearch:t?String(t).toLowerCase():t},(function(){return l.onLoadFilterData()}))}),1e3)},l.onLoadFilterData=function(){var e=l.props.networks,t=l.state.textSearch,n=e.filter((function(e){return String(e.name).toLowerCase().includes(t)}));l.setState({networkData:n})},l.onLoadCollectionList=function(){var e=(0,o.Z)(l),t=l.props.collectionData;t&&Object.keys(t).length>0&&t.collectionList.length>0?e.setState({collectionList:t.collectionList,collectionCompleteList:t.collectionList,assetsCount:t.assetsCount}):(0,m.M1)().then((function(t){var n=t.data.responseData;n&&Object.keys(n).length>0&&e.setState({collectionList:n.collection,collectionCompleteList:n.collection})})).catch((function(e){}))},l.onCollectionApply=function(e){return function(t){var n=l.state.selectedCollection;n[e]?(delete n[e],l.setState({selectedCollection:n})):(n[e]=!0,l.setState({selectedCollection:n}))}},l.onCollectionSelectAll=function(e){var t=l.state,n=t.selectedCollection,s=t.collectionList;if(n&&Object.keys(n).length>=s.length)l.setState({selectedCollection:{}});else{var i={};s.map((function(e){i[e.id]=!0})),l.setState({selectedCollection:i})}},l.onCollectionSearchFilter=function(e){var t=e.target.value;l.timeout&&clearTimeout(l.timeout),l.timeout=setTimeout((function(){l.setState({collectionSearch:t?String(t).toLowerCase():t},(function(){return l.onLoadCollectionFilterData()}))}),1e3)},l.onLoadCollectionFilterData=function(){var e=l.state,t=e.collectionSearch,n=e.collectionCompleteList.filter((function(e){return String(e.name).toLowerCase().includes(t)}));l.setState({collectionList:n})},l.onChangeName=function(e){l.setState({publishCodeName:e.target.value})},l.onRequestPublish=function(e){var t=l.state,n=t.id,s=t.selectedTemplate,i=t.selectedCollection,a=t.selectedConnection,c=t.selectedNetwork,r=t.condition,u=(t.showGenratedCode,t.ugcRigths),h=t.assetsApply,p=t.publishCodeName,m=t.tagApply,f=(0,o.Z)(l),y=[],b="",x=[],v=[],j=[],C=[],S=[];if(u&&Object.keys(u).length>0&&Object.keys(u).map((function(e){S.push(e)})),s&&Object.keys(s).length>0&&s.id&&(b=s.id),c&&Object.keys(c).length>0&&Object.keys(c).map((function(e){C.push(e)})),i&&Object.keys(i).length>0&&Object.keys(i).map((function(e){y.push(e)})),a&&Object.keys(a).length>0&&Object.keys(a).map((function(e){x.push(e)})),h&&Object.keys(h).length>0&&Object.keys(h).map((function(e){v.push(e)})),m&&m.length>0&&(j=m),s&&Object.keys(s).length>0&&s.id&&(y.length>0||x.length>0||j.length>0||v.length>0||S.length>0||C.length>0)){var N={id:n,name:p,template:b,collection:y.join(","),source:x.join(","),assets_type:v.join(","),tags:j.join(","),ugc_status:S.join(","),publish_type:1,campaign_type:"",screen_type:"",platform:"",network:C.join(","),filterType:String(r).toUpperCase()};l.setState({isUpdating:!0}),(0,g.S5)(N).then((function(e){var t=e.data,n=t.status,s=(t.response_code,t.response_message);"success"==n?(d.Am.success("Publish widget successfully updated."),f.setState({isUpdating:!1},(function(){return f.props.onLoadPublish()}))):d.Am.error(s)})).catch((function(e){}))}else s?d.Am.error("Please select filter.",{autoClose:3e3}):d.Am.error("Please select template.",{autoClose:3e3})},l.onResetFilter=function(e){l.setState({showGenratedCode:"p-html",chooseFilter:{},collectionApply:[],sourceApply:{},assetsApply:{},tagApply:[],ugcRigths:{},selectedTemplate:null,condition:"and",selectedNetwork:{},selectedConnection:{},textSearch:"",textConnectionSearch:"",selectedCollection:{},collectionSearch:"",genrateCode:!1,responseData:null,activeFilter:null,publishCodeName:"",isUpdating:!1})};var a=e.item,c=e.templeteList,r={};if(c&&c.length>0){var u=c.filter((function(e){return e.id==a.template}));r=u&&u.length>0?u[0]:{id:a.template}}else r={id:a.template};return l.state={showGenratedCode:"p-html",chooseFilter:w(a.assets_type,a.collection,a.source,a.network,a.tags,a.ugc_status),collectionApply:[],sourceApply:{},assetsApply:A(a.assets_type),tagApply:k(a.tags),ugcRigths:{},selectedTemplate:r,condition:String(a.filterType).toLowerCase(),networkData:[],feedData:[],selectedNetwork:N(a.network),selectedConnection:N(a.source),textSearch:"",textConnectionSearch:"",collectionList:[],collectionCompleteList:[],selectedCollection:N(a.collection),collectionSearch:"",genrateCode:!1,publishList:[],responseData:a,activeFilter:null,selectedWebEmbed:null,publishCodeName:a.Publish&&a.Publish.name?a.Publish.name:"Untitled-1",id:a.id,isUpdating:!1},l}return(0,l.Z)(n,[{key:"componentWillMount",value:function(){this.onLoadCollectionList()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.networks,n=e.feedData;this.setState({networkData:t,feedData:n.feeds})}},{key:"componentWillReceiveProps",value:function(e){var t=e.networks,n=e.feedData;this.setState({networkData:t,feedData:n.feeds})}},{key:"render",value:function(){var e=this.state,t=e.showGenratedCode,n=(e.chooseFilter,e.genrateCode,e.responseData,e.activeFilter),s=this.props,i=(s.networks,s.history);return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(S,{genratedCodeCallback:this.genratedCodeCallback,genratedCodeModal:t,filterApply:this.filterApply,state:this.state,onSelectTemplate:this.onSelectTemplate,onSelectAllUgcRigths:this.onSelectAllUgcRigths,onUgcRigths:this.onUgcRigths,onTagRemove:this.onTagRemove,onTagApply:this.onTagApply,onAssetsApply:this.onAssetsApply,onconnectionApply:this.onconnectionApply,onSelectAllAssetsApply:this.onSelectAllAssetsApply,onNetworkApply:this.onNetworkApply,onClickSelectAll:this.onClickSelectAll,onSearchFilter:this.onSearchFilter,onCollectionSearchFilter:this.onCollectionSearchFilter,onCollectionSelectAll:this.onCollectionSelectAll,onCollectionApply:this.onCollectionApply,conditionApply:this.conditionApply,onConnectionSearchFilter:this.onConnectionSearchFilter,onConnectionSelectAll:this.onConnectionSelectAll,onClickToDelete:this.onClickToDelete,onResetFilter:this.onResetFilter,activeFilter:n,history:i,onChangeName:this.onChangeName,onUpdateReponseData:this.onUpdateReponseData,onLoadPublish:this.onLoadPublish,onSelectActive:this.onSelectActive,onRequestPublish:this.onRequestPublish,isPublishEdit:!0})})}}]),n}(r.Component);t.Z=(0,p.$j)((function(e){return{networks:e.networks.networkData,feedData:e.feedData.filterList,collectionData:e.collection,templeteList:e.templates.templeteList}}))(F)}}]);
//# sourceMappingURL=9295.e41afea2.chunk.js.map