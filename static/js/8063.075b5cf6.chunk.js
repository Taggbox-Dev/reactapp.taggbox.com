"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[8063],{61764:function(e,t,s){s.d(t,{Z:function(){return V}});var n=s(1413),l=s(15671),a=s(43144),i=s(60136),o=s(29388),c=s(72791),r=s(28949),d=s(25862),h=s(12576),p=s(97326),u=s(9085),m=s(21830),g=s.n(m),x=s(78687),f=s(46305),v=s(32002),b=(s(32480),s(80184)),y=c.lazy((function(){return s.e(8923).then(s.bind(s,38923))})),j=c.lazy((function(){return s.e(3566).then(s.bind(s,53566))})),w=c.lazy((function(){return s.e(6106).then(s.bind(s,86106))})),C=c.lazy((function(){return s.e(2835).then(s.bind(s,32835))})),N=c.lazy((function(){return s.e(1013).then(s.bind(s,61013))})),S=c.lazy((function(){return s.e(4464).then(s.bind(s,74464))})),k=c.lazy((function(){return s.e(2910).then(s.bind(s,62910))})),A=function(e){var t={};return e&&String(e).length>0&&String(e).split(",").map((function(e){t[e]=!0})),t},Z=function(e){var t={};return e&&String(e).length>0&&(String(e).includes("2,4")?t["2,4"]=!0:String(e).includes("3,5")&&(t["3,5"]=!0),String(e).includes("1")&&(t[1]=!0)),t},F=function(e,t,s,n,l,a){var i={};return e&&(i.assetsType=!0),t&&(i.collection=!0),s&&(i.connection=!0),n&&(i.source=!0),l&&(i.tags=!0),a&&(i.ugcrights=!0),i},L=function(e){(0,i.Z)(s,e);var t=(0,o.Z)(s);function s(e){var n;(0,l.Z)(this,s),(n=t.call(this,e)).timeout=0,n.onLoadPublish=function(){var e=(0,p.Z)(n);(0,v.Vv)({publish_type:1}).then((function(t){e.setState({publishList:t.data.response})}))},n.onClickToDelete=function(e){return function(t){g().fire({title:"Are you sure?",text:"You want to delete this",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!"}).then((function(t){if(t.isConfirmed){var s=(0,p.Z)(n);(0,v.bD)(e).then((function(e){s.onLoadPublish(),u.Am.success("Your widget has been deleted.")}))}}))}},n.onTagRemove=function(e){return function(t){var s=n.state.tagApply;s.splice(e,1),n.setState({tagApply:s})}},n.conditionApply=function(e){return function(t){n.setState({condition:e})}},n.filterApply=function(e){return function(t){var s=n.state.chooseFilter;s[e]?(delete s[e],n.setState({chooseFilter:s})):(s[e]=!0,n.setState({chooseFilter:s}))}},n.shareEmbedModal=function(e){return n.setState({showGenratedCode:!0})},n.genratedCodeCallback=function(e){n.setState({showGenratedCode:e})},n.renderSwitch=function(e){var t=n.state.responseData;switch(e){case"p-html":default:return(0,b.jsx)(y,{data:t});case"p-wordpress":return(0,b.jsx)(j,{data:t});case"p-wix":return(0,b.jsx)(w,{data:t});case"p-squarespace":return(0,b.jsx)(C,{data:t});case"p-shopify":return(0,b.jsx)(N,{data:t});case"p-other":return(0,b.jsx)(S,{data:t})}},n.onSelectTemplate=function(e){return function(t){return n.setState({selectedTemplate:e})}},n.onUgcRigths=function(e){return function(t){var s=n.state.ugcRigths;s[e]?(delete s[e],n.setState({ugcRigths:s})):(s[e]=!0,n.setState({ugcRigths:s}))}},n.onSelectAllUgcRigths=function(e){var t=n.state.ugcRigths;t&&Object.keys(t).length>=3?n.setState({ugcRigths:{}}):n.setState({ugcRigths:{1:!0,2:!0,3:!0}})},n.onconnectionApply=function(e){return function(t){var s=n.state.selectedConnection;s[e]?(delete s[e],n.setState({selectedConnection:s})):(s[e]=!0,n.setState({selectedConnection:s}))}},n.onConnectionSelectAll=function(e){var t=n.state,s=t.selectedConnection,l=t.feedData;if(s&&Object.keys(s).length>=l.length)n.setState({selectedConnection:{}});else{var a={};l.map((function(e){a[e.feedId]=!0})),n.setState({selectedConnection:a})}},n.onConnectionSearchFilter=function(e){var t=e.target.value;n.timeout&&clearTimeout(n.timeout),n.timeout=setTimeout((function(){n.setState({textConnectionSearch:t?String(t).toLowerCase():t},(function(){return n.onLoadConnectionFilterData()}))}),1e3)},n.onLoadConnectionFilterData=function(){var e=n.props.feedData,t=n.state.textConnectionSearch,s=e.filter((function(e){return String(e.name).toLowerCase().includes(t)}));n.setState({feedData:s})},n.onAssetsApply=function(e){return function(t){var s=n.state.assetsApply;s[e]?(delete s[e],n.setState({assetsApply:s})):(s[e]=!0,n.setState({assetsApply:s}))}},n.onSelectAllAssetsApply=function(e){var t=n.state.assetsApply;t&&Object.keys(t).length>=3?n.setState({assetsApply:{}}):n.setState({assetsApply:{1:!0,"2,4":!0,"3,5":!0}})},n.onNetworkApply=function(e){return function(t){var s=n.state.selectedNetwork;s[e]?(delete s[e],n.setState({selectedNetwork:s})):(s[e]=!0,n.setState({selectedNetwork:s}))}},n.onClickSelectAll=function(e){var t=n.state,s=t.selectedNetwork,l=t.networkData;if(s&&Object.keys(s).length>=l.length)n.setState({selectedNetwork:{}});else{var a={};l.map((function(e){a[e.id]=!0})),n.setState({selectedNetwork:a})}},n.onSearchFilter=function(e){var t=e.target.value;n.timeout&&clearTimeout(n.timeout),n.timeout=setTimeout((function(){n.setState({textSearch:t?String(t).toLowerCase():t},(function(){return n.onLoadFilterData()}))}),1e3)},n.onLoadFilterData=function(){var e=n.props.networks,t=n.state.textSearch,s=e.filter((function(e){return String(e.name).toLowerCase().includes(t)}));n.setState({networkData:s})},n.onLoadCollectionList=function(){var e=(0,p.Z)(n);(0,f.M1)().then((function(t){var s=t.data.responseData;s&&Object.keys(s).length>0&&e.setState({collectionList:s.collection,collectionCompleteList:s.collection})})).catch((function(e){}))},n.onCollectionApply=function(e){return function(t){var s=n.state.selectedCollection;s[e]?(delete s[e],n.setState({selectedCollection:s})):(s[e]=!0,n.setState({selectedCollection:s}))}},n.onCollectionSelectAll=function(e){var t=n.state,s=t.selectedCollection,l=t.collectionList;if(s&&Object.keys(s).length>=l.length)n.setState({selectedCollection:{}});else{var a={};l.map((function(e){a[e.id]=!0})),n.setState({selectedCollection:a})}},n.onCollectionSearchFilter=function(e){var t=e.target.value;n.timeout&&clearTimeout(n.timeout),n.timeout=setTimeout((function(){n.setState({collectionSearch:t?String(t).toLowerCase():t},(function(){return n.onLoadCollectionFilterData()}))}),1e3)},n.onLoadCollectionFilterData=function(){var e=n.state,t=e.collectionSearch,s=e.collectionCompleteList.filter((function(e){return String(e.name).toLowerCase().includes(t)}));n.setState({collectionList:s})},n.onChangeName=function(e){n.setState({publishCodeName:e.target.value})},n.onRequestPublish=function(e){var t=n.state,s=t.id,l=t.selectedTemplate,a=t.selectedCollection,i=t.selectedConnection,o=t.selectedNetwork,c=t.condition,r=(t.showGenratedCode,t.ugcRigths),d=t.assetsApply,h=t.publishCodeName,m=(0,p.Z)(n),g=[],x="",f=[],b=[],y=[],j=[];if(r&&Object.keys(r).length>0&&Object.keys(r).map((function(e){j.push(e)})),l&&Object.keys(l).length>0&&l.id&&(x=l.id),o&&Object.keys(o).length>0&&Object.keys(o).map((function(e){y.push(e)})),a&&Object.keys(a).length>0&&Object.keys(a).map((function(e){g.push(e)})),i&&Object.keys(i).length>0&&Object.keys(i).map((function(e){f.push(e)})),d&&Object.keys(d).length>0&&Object.keys(d).map((function(e){b.push(e)})),l&&Object.keys(l).length>0&&l.id&&(g.length>0||f.length>0||b.length>0||j.length>0||y.length>0)){var w={id:s,name:h,template:x,collection:g.join(","),source:f.join(","),assets_type:b.join(","),tags:"",ugc_status:j.join(","),publish_type:1,campaign_type:"",screen_type:"",platform:"",network:y.join(","),filterType:String(c).toUpperCase()};(0,v.S5)(w).then((function(e){var t=e.data,s=t.status,n=(t.response_code,t.response_message);"success"==s?(u.Am.success("Publish widget successfully updated."),m.setState({responseData:e.data},(function(){return m.props.onLoadPublish()}))):u.Am.error(n)})).catch((function(e){}))}},n.onResetFilter=function(e){n.setState({showGenratedCode:"p-html",chooseFilter:{},collectionApply:[],sourceApply:{},assetsApply:{},tagApply:[],ugcRigths:{},selectedTemplate:null,condition:"or",selectedNetwork:{},selectedConnection:{},textSearch:"",textConnectionSearch:"",selectedCollection:{},collectionSearch:"",genrateCode:!1,responseData:null,activeFilter:null,publishCodeName:""})};var a=e.item;return n.state={showGenratedCode:"p-html",chooseFilter:F(a.assets_type,a.collection,a.source,a.network,a.tags,a.ugc_status),collectionApply:[],sourceApply:{},assetsApply:Z(a.assets_type),tagApply:A(a.tags),ugcRigths:{},selectedTemplate:{id:a.template},condition:String(a.filterType).toLowerCase(),networkData:[],feedData:[],selectedNetwork:A(a.network),selectedConnection:A(a.source),textSearch:"",textConnectionSearch:"",collectionList:[],collectionCompleteList:[],selectedCollection:A(a.collection),collectionSearch:"",genrateCode:!1,publishList:[],responseData:a,activeFilter:null,selectedWebEmbed:null,publishCodeName:a.Publish.name,id:a.id},n}return(0,a.Z)(s,[{key:"componentWillMount",value:function(){this.onLoadCollectionList()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.networks,s=e.feedData;this.setState({networkData:t,feedData:s.feeds}),this.onLoadPublish()}},{key:"componentWillReceiveProps",value:function(e){var t=e.networks,s=e.feedData;this.setState({networkData:t,feedData:s.feeds})}},{key:"render",value:function(){var e=this.state,t=e.showGenratedCode,s=(e.chooseFilter,e.genrateCode,e.responseData,e.activeFilter),n=this.props,l=(n.networks,n.history);return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(k,{genratedCodeCallback:this.genratedCodeCallback,genratedCodeModal:t,filterApply:this.filterApply,state:this.state,onSelectTemplate:this.onSelectTemplate,onSelectAllUgcRigths:this.onSelectAllUgcRigths,onUgcRigths:this.onUgcRigths,onTagRemove:this.onTagRemove,onAssetsApply:this.onAssetsApply,onconnectionApply:this.onconnectionApply,onSelectAllAssetsApply:this.onSelectAllAssetsApply,onNetworkApply:this.onNetworkApply,onClickSelectAll:this.onClickSelectAll,onSearchFilter:this.onSearchFilter,onCollectionSearchFilter:this.onCollectionSearchFilter,onCollectionSelectAll:this.onCollectionSelectAll,onCollectionApply:this.onCollectionApply,conditionApply:this.conditionApply,onConnectionSearchFilter:this.onConnectionSearchFilter,onConnectionSelectAll:this.onConnectionSelectAll,onClickToDelete:this.onClickToDelete,onResetFilter:this.onResetFilter,activeFilter:s,history:l,onChangeName:this.onChangeName,onRequestPublish:this.onRequestPublish})})}}]),s}(c.Component),H=(0,x.$j)((function(e){return{networks:e.networks.networkData,feedData:e.feedData.filterList}}))(L),D=function(e){(0,i.Z)(s,e);var t=(0,o.Z)(s);function s(){var e;(0,l.Z)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={active:null},e.onChange=function(t,s){return function(n){var l=e.state.active;e.setState({active:l==t?null:t},(function(){return e.props.onUpdateReponseData(s)}))}},e}return(0,a.Z)(s,[{key:"render",value:function(){var e=this,t=this.props,s=t.state,l=t.history;this.state.active;return(0,b.jsx)(r.Z,{defaultActiveKey:"filter_list",className:"filter_list",children:s.publishList.length>0&&s.publishList.map((function(t,s){return(0,b.jsxs)(r.Z.Item,{eventKey:s,children:[(0,b.jsx)("div",{className:"menu-item",children:(0,b.jsx)(r.Z.Header,{className:"w-100 disable_arrow",children:(0,b.jsxs)("div",{className:"d-flex justify-content-between align-items-center w-100",children:[(0,b.jsx)("span",{className:"menu-title fw-bold text-ellipsis d-block me-3 fs-8",children:t.name}),(0,b.jsxs)("div",{className:"d-flex align-items-center justify-content-end",children:[(0,b.jsx)(d.Z,{placement:"top",overlay:(0,b.jsx)(h.Z,{id:"button-tooltip-2",children:"Edit"}),children:(0,b.jsx)("button",{type:"button",className:"btn btn-icon btn-secondary h-28px w-28px me-2",onClick:e.onChange("p_code".concat(s),t),children:(0,b.jsx)("span",{className:"svg-icon svg-icon-6 me-0",children:(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,b.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,b.jsx)("path",{d:"M16.757 3l-2 2H5v14h14V9.243l2-2V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12.757zm3.728-.9L21.9 3.516l-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z",fill:"currentColor"})]})})})}),(0,b.jsx)(d.Z,{placement:"top",overlay:(0,b.jsx)(h.Z,{id:"button-tooltip-2",children:"Remove"}),children:(0,b.jsx)("button",{type:"button",className:"btn btn-icon btn-secondary h-28px w-28px",onClick:e.props.onClickToDelete({id:t.id,collection:t.collection}),children:(0,b.jsx)("span",{className:"svg-icon svg-icon-6 me-0",children:(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,b.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,b.jsx)("path",{d:"M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z",fill:"currentColor"})]})})})})]})]})})},s),(0,b.jsx)(r.Z.Body,{className:"p-0 pt-3",children:(0,b.jsx)(H,(0,n.Z)({history:l,item:t},e.props))})]})}))})}}]),s}(c.Component),V=D},48063:function(e,t,s){s.r(t);var n=s(1413),l=s(15671),a=s(43144),i=s(97326),o=s(60136),c=s(29388),r=s(72791),d=(s(72426),s(74342)),h=s(13953),p=s(28949),u=s(92719),m=s(67839),g=s(56600),x=s(32002),f=s(65882),v=s(91731),b=s(61764),y=s(80184),j=function(e){switch(e){case"p-html":default:return"Html";case"p-wordpress":return"Wordpress";case"p-wix":return"Wix";case"p-squarespace":return"Squarespace";case"p-shopify":return"Shopify";case"p-other":return"Other"}},w=function(e){(0,o.Z)(s,e);var t=(0,c.Z)(s);function s(e){var n;return(0,l.Z)(this,s),(n=t.call(this,e)).state={showModal:!1,publishList:[]},n.onLoadPublish=function(){var e=(0,i.Z)(n);(0,x.Vv)().then((function(t){e.setState({publishList:t.data})}))},n.embedCodeCallback=function(e){return n.props.genratedCodeCallback(e)},n}return(0,a.Z)(s,[{key:"componentDidMount",value:function(){this.onLoadPublish()}},{key:"handleSelect",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this,t=this.props,s=t.filterApply,l=t.state,a=t.genratedCodeModal,i=(t.onClickToDelete,t.onResetFilter),o=(t.activeFilter,t.history,t.onChangeName);return console.log("this.props",this.props),(0,y.jsx)("div",{className:"card-body",children:(0,y.jsxs)("div",{className:"innerAsideWrapper",children:[(0,y.jsx)("div",{className:"d-flex align-items-start justify-content-between",children:(0,y.jsx)("h6",{className:"fs-7 fw-boldest mb-0",children:"Add Filter"})}),(0,y.jsxs)(d.Z.Container,{id:"billing_tab_panel",defaultActiveKey:"aside-assets_filter",children:[(0,y.jsxs)(h.Z,{variant:"nav",className:"border-bottom mb-3",children:[(0,y.jsx)(h.Z.Item,{className:"",children:(0,y.jsx)(h.Z.Link,{className:"me-3 px-0",eventKey:"aside-assets_filter",children:"Assets Filter"})}),(0,y.jsx)(h.Z.Item,{className:"",children:(0,y.jsx)(h.Z.Link,{className:"px-0",eventKey:"filter-assets_published",children:"View All"})})]}),(0,y.jsxs)(d.Z.Content,{children:[(0,y.jsxs)(d.Z.Pane,{eventKey:"aside-assets_filter",children:[(0,y.jsx)("label",{className:"text-gray-800 mb-2",children:"Widget Name"}),(0,y.jsx)("input",{type:"text",className:"form-control form-control-sm mb-3",placeholder:"Please enter publish name..",value:l.publishCodeName,onChange:o}),l.chooseFilter&&Object.keys(l.chooseFilter).map((function(t,s){return(0,y.jsx)(f.Z,(0,n.Z)((0,n.Z)({filterKey:t},e.props),{},{indexFilter:s,isLast:Object.keys(l.chooseFilter)[Object.keys(l.chooseFilter).length-1]}))})),(0,y.jsxs)(p.Z,{defaultActiveKey:"0",children:[(0,y.jsxs)(p.Z.Item,{eventKey:"0",className:"pb-3",children:[(0,y.jsxs)(p.Z.Header,{className:"add_fillter_btn",children:[(0,y.jsx)("span",{className:"svg-icon svg-icon-3 text-gray-800",children:(0,y.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,y.jsx)("path",{d:"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z",fill:"currentColor"})})}),(0,y.jsx)("span",{className:"fs-8 text-gray-800 fw-semibold",children:"Choose Filter"})]}),(0,y.jsxs)(p.Z.Body,{className:"border rounded-1 mt-1",children:[(0,y.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(l.chooseFilter).includes("collection")?"disabled":""),onClick:s("collection"),children:[(0,y.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,y.jsx)("div",{className:"symbol-label",children:(0,y.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,y.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,y.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,y.jsx)("path",{d:"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM8 19h12v-8H8v8zm-2 0v-9a1 1 0 0 1 1-1h13V7h-8.414l-2-2H4v14h2z",fill:"currentColor"})]})})})}),(0,y.jsxs)("div",{className:"",children:[(0,y.jsx)("p",{className:"fs-8 fw-semibold mb-0 text-gray-800",children:"Collection"}),(0,y.jsx)("span",{className:"fs-9 text-gray-500",children:"Select the preferred collection"})]})]}),(0,y.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(l.chooseFilter).includes("source")?"disabled":""),onClick:s("source"),children:[(0,y.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,y.jsx)("div",{className:"symbol-label",children:(0,y.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,y.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,y.jsx)("path",{id:"Path_1","data-name":"Path 1",d:"M0,0H24V24H0Z",fill:"none"}),(0,y.jsx)("path",{id:"Path_4","data-name":"Path 4",d:"M8.365,20.286A9.309,9.309,0,0,1,2.9,14.82a3.246,3.246,0,0,1,0-6.455A9.309,9.309,0,0,1,8.365,2.9a3.246,3.246,0,0,1,6.455,0,9.309,9.309,0,0,1,5.465,5.466,3.246,3.246,0,0,1,0,6.455,9.311,9.311,0,0,1-5.466,5.465,3.246,3.246,0,0,1-6.455,0Zm1.836-.347a1.391,1.391,0,0,0,2.782.048v-.1a1.391,1.391,0,0,0-2.782.048ZM6.328,16.818a7.393,7.393,0,0,0,2.388,1.614,3.247,3.247,0,0,1,5.751,0,7.444,7.444,0,0,0,3.965-3.963,3.247,3.247,0,0,1,0-5.752,7.447,7.447,0,0,0-3.964-3.964,3.247,3.247,0,0,1-5.752,0A7.444,7.444,0,0,0,4.752,8.716a3.247,3.247,0,0,1,0,5.752A7.427,7.427,0,0,0,6.328,16.818Zm12.22-5.226a1.391,1.391,0,1,0,1.39-1.391A1.392,1.392,0,0,0,18.548,11.592Zm-15.3,1.391a1.391,1.391,0,1,0-1.391-1.391A1.393,1.393,0,0,0,3.246,12.983ZM10.2,3.246a1.391,1.391,0,0,0,2.782.048V3.2a1.391,1.391,0,0,0-2.782.048Z",transform:"translate(0.408 0.408)",fill:"currentColor"})]})})})}),(0,y.jsxs)("div",{className:"",children:[(0,y.jsx)("p",{className:"fs-8 fw-semibold mb-0 text-gray-800",children:"Network"}),(0,y.jsx)("span",{className:"fs-9 text-gray-500",children:"Choose the required network"})]})]}),(0,y.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(l.chooseFilter).includes("connection")?"disabled":""),onClick:s("connection"),children:[(0,y.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,y.jsx)("div",{className:"symbol-label",children:(0,y.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,y.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,y.jsx)("path",{fill:"none",d:"M0 0H24V24H0z"}),(0,y.jsxs)("g",{children:[(0,y.jsx)("path",{id:"Path_2321","data-name":"Path 2321",d:"M21,14v5a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3h5V5H5V19H19V14Z",fill:"#313a53"}),(0,y.jsx)("path",{id:"Path_2322","data-name":"Path 2322",d:"M21,7H17V3H15V7H11V9h4v4h2V9h4",fill:"currentColor"})]})]})})})}),(0,y.jsxs)("div",{className:"",children:[(0,y.jsx)("p",{className:"fs-8 fw-semibold mb-0 text-gray-800",children:"Connections"}),(0,y.jsx)("span",{className:"fs-9 text-gray-500",children:"Select the connection type"})]})]}),(0,y.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(l.chooseFilter).includes("assetsType")?"disabled":""),onClick:s("assetsType"),children:[(0,y.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,y.jsx)("div",{className:"symbol-label",children:(0,y.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,y.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,y.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,y.jsx)("path",{d:"M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",fill:"currentColor"})]})})})}),(0,y.jsxs)("div",{className:"",children:[(0,y.jsx)("p",{className:"fs-8 fw-semibold mb-0 text-gray-800",children:"Assets Type"}),(0,y.jsx)("span",{className:"fs-9 text-gray-500",children:"Choose the type of asset"})]})]}),(0,y.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(l.chooseFilter).includes("tags")?"disabled":""),onClick:s("tags"),children:[(0,y.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,y.jsx)("div",{className:"symbol-label",children:(0,y.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,y.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,y.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,y.jsx)("path",{d:"M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z",fill:"currentColor"})]})})})}),(0,y.jsxs)("div",{className:"",children:[(0,y.jsx)("p",{className:"fs-8 fw-semibold mb-0 text-gray-800",children:"Tag"}),(0,y.jsx)("span",{className:"fs-9 text-gray-500",children:"Select collection and filter assets"})]})]}),(0,y.jsxs)("div",{className:"d-flex align-items-center border-bottom py-2 cursor-pointer ".concat(Object.keys(l.chooseFilter).includes("ugcrights")?"disabled":""),onClick:s("ugcrights"),children:[(0,y.jsx)("div",{className:"symbol symbol-30 bg-light me-2",children:(0,y.jsx)("div",{className:"symbol-label",children:(0,y.jsx)("span",{className:"svg-icon svg-icon-5 text-gray-800 me-0",children:(0,y.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10.236",height:"11.897",viewBox:"0 0 10.236 11.897",children:[(0,y.jsx)("path",{fill:"none",d:"M0 0H24V24H0z"}),(0,y.jsx)("path",{id:"Path_1","data-name":"Path 1",d:"M-564.279-307.182a7.534,7.534,0,0,1-3.436-2.79A7.534,7.534,0,0,1-569-314.209v-2.052a1.041,1.041,0,0,1,.649-.969l4.066-1.689a1.036,1.036,0,0,1,.4-.08,1.028,1.028,0,0,1,.4.082l4.065,1.688a1.042,1.042,0,0,1,.647.968v2.054a7.527,7.527,0,0,1-1.285,4.235,7.531,7.531,0,0,1-3.438,2.791,1.029,1.029,0,0,1-.394.077A1.047,1.047,0,0,1-564.279-307.182ZM-563.9-318l-4.071,1.691a.047.047,0,0,0-.031.044v2.055a6.532,6.532,0,0,0,1.115,3.677,6.527,6.527,0,0,0,2.983,2.422.061.061,0,0,0,.021,0,.038.038,0,0,0,.015,0,6.538,6.538,0,0,0,2.986-2.422,6.543,6.543,0,0,0,1.115-3.677v-2.055a.046.046,0,0,0-.029-.044l-4.07-1.69a.048.048,0,0,0-.02,0A.048.048,0,0,0-563.9-318Zm-.83,6.364-1.161-1.158a.553.553,0,0,1-.131-.4.553.553,0,0,1,.193-.378.549.549,0,0,1,.7,0l.786.779,1.691-1.691a.545.545,0,0,1,.764-.061.549.549,0,0,1,.07.772.559.559,0,0,1-.069.069l-2.07,2.07a.546.546,0,0,1-.387.158h0A.546.546,0,0,1-564.728-311.633Z",transform:"translate(569 319)",fill:"currentColor"})]})})})}),(0,y.jsxs)("div",{className:"",children:[(0,y.jsx)("p",{className:"fs-8 fw-semibold mb-0 text-gray-800",children:"UGC Rights"}),(0,y.jsx)("span",{className:"fs-9 text-gray-500",children:"Select collection and filter assets"})]})]})]})]}),(0,y.jsx)(v.Z,(0,n.Z)({},this.props)),(0,y.jsx)("label",{className:"text-gray-800 mb-2",children:"Select Platform"}),(0,y.jsxs)(p.Z.Item,{eventKey:"9",className:"pb-3",children:[(0,y.jsx)(p.Z.Header,{className:"w-100",children:(0,y.jsx)("span",{className:"fs-7 fw-medium",children:j(a)})}),(0,y.jsx)(p.Z.Body,{className:"border rounded-1 mt-1",children:(0,y.jsxs)(u.Z,{type:"radio",className:"flex-column w-100",name:"platform",defaultValue:"p-html",onChange:function(t){return e.embedCodeCallback(t)},children:[(0,y.jsx)(m.Z,{className:"p-0 card rounded-1 text-decoration-none cursor-pointer mb-2",variant:"outline-primary",id:"p-html",value:"p-html",children:(0,y.jsx)("div",{className:"card-body p-2",children:(0,y.jsx)("div",{className:"block-center text-center h-46px w-100",children:(0,y.jsx)("img",{className:"img-fluid",src:(0,g.F)("media/images/platform/html.svg"),alt:"html",height:31,width:120})})})}),(0,y.jsx)(m.Z,{className:"p-0 card rounded-1 text-decoration-none cursor-pointer mb-2",variant:"outline-primary",id:"p-wordpress",value:"p-wordpress",children:(0,y.jsx)("div",{className:"card-body p-2",children:(0,y.jsx)("div",{className:"block-center text-center h-46px w-100",children:(0,y.jsx)("img",{className:"img-fluid",src:(0,g.F)("media/images/platform/wordpress.svg"),alt:"wordpress",height:44,width:90})})})}),(0,y.jsx)(m.Z,{className:"p-0 card rounded-1 text-decoration-none cursor-pointer mb-2",variant:"outline-primary",id:"p-wix",value:"p-wix",children:(0,y.jsx)("div",{className:"card-body p-2",children:(0,y.jsx)("div",{className:"block-center text-center h-46px w-100",children:(0,y.jsx)("img",{className:"img-fluid",src:(0,g.F)("media/images/platform/wix.svg"),alt:"wix",height:30,width:75})})})}),(0,y.jsx)(m.Z,{className:"p-0 card rounded-1 text-decoration-none cursor-pointer mb-2",variant:"outline-primary",id:"p-squarespace",value:"p-squarespace",children:(0,y.jsx)("div",{className:"card-body p-2",children:(0,y.jsx)("div",{className:"block-center text-center h-46px w-100",children:(0,y.jsx)("img",{className:"img-fluid",src:(0,g.F)("media/images/platform/squarespace.svg"),alt:"wix",height:45,width:80})})})}),(0,y.jsx)(m.Z,{className:"p-0 card rounded-1 text-decoration-none cursor-pointer mb-2",variant:"outline-primary",id:"p-shopify",value:"p-shopify",children:(0,y.jsx)("div",{className:"card-body p-2",children:(0,y.jsx)("div",{className:"block-center text-center h-46px w-100",children:(0,y.jsx)("img",{className:"img-fluid",src:(0,g.F)("media/images/platform/shopify.svg"),alt:"wix",height:32,width:110})})})}),(0,y.jsx)(m.Z,{className:"p-0 card rounded-1 text-decoration-none cursor-pointer mb-2",variant:"outline-primary",id:"p-other",value:"p-other",children:(0,y.jsx)("div",{className:"card-body p-2",children:(0,y.jsx)("div",{className:"block-center text-center h-46px w-100",children:(0,y.jsx)("img",{className:"img-fluid",src:(0,g.F)("media/images/platform/other.svg"),alt:"other",height:40,width:90})})})})]})})]})]}),(0,y.jsx)("div",{className:"bg-white w-100 text-center flex-column d-flex pt-2",children:(0,y.jsx)("button",{type:"button",className:"btn border-0 text-hover-primary btn-sm text-decoration-underline text-muted p-1",onClick:i,children:"Reset Filters"})})]}),(0,y.jsx)(d.Z.Pane,{eventKey:"filter-assets_published",children:(0,y.jsx)(b.Z,(0,n.Z)({},this.props))})]})]})]})})}}]),s}(r.Component);t.default=w}}]);
//# sourceMappingURL=8063.075b5cf6.chunk.js.map