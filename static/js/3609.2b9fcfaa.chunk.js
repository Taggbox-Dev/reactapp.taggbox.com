"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[3609],{73609:function(e,t,n){n.r(t);var o=n(1413),l=n(15671),s=n(43144),i=n(97326),a=n(60136),c=n(29388),r=n(72791),u=n(9085),p=n(21830),d=n.n(p),h=n(78687),g=n(46305),m=n(32002),f=n(93255),y=n(80184),S=r.lazy((function(){return n.e(8923).then(n.bind(n,38923))})),A=r.lazy((function(){return n.e(3566).then(n.bind(n,53566))})),C=r.lazy((function(){return n.e(6106).then(n.bind(n,86106))})),v=r.lazy((function(){return n.e(2835).then(n.bind(n,32835))})),k=r.lazy((function(){return n.e(1013).then(n.bind(n,61013))})),b=r.lazy((function(){return n.e(4464).then(n.bind(n,74464))})),w=r.lazy((function(){return Promise.all([n.e(2956),n.e(8063)]).then(n.bind(n,48063))})),j=function(e){var t={};return e&&String(e).length>0&&String(e).split(",").map((function(e){t[e]=!0})),t},L=function(e){var t=[];return e&&String(e).length>0&&String(e).split(",").map((function(e){t.push(e)})),t},D=function(e){var t={};return e&&String(e).length>0&&(String(e).includes("1")?t[1]=!0:String(e).includes("2")&&(t[2]=!0),String(e).includes("3")&&(t[3]=!0)),t},R=function(e){var t={};return e&&String(e).length>0&&(String(e).includes("2,4")?t["2,4"]=!0:String(e).includes("3,5")&&(t["3,5"]=!0),String(e).includes("1")&&(t[1]=!0)),t},F=function(e,t,n,o,l,s,i,a){var c={};return e&&(c.assetsType=!0),t&&(c.collection=!0),n&&(c.connection=!0),o&&(c.source=!0),l&&(c.tags=!0),s&&(c.ugcrights=!0),i&&(c.sentiment=!0),a&&(c.recommend=!0),c},O=function(e){(0,a.Z)(n,e);var t=(0,c.Z)(n);function n(e){var s;(0,l.Z)(this,n),(s=t.call(this,e)).timeout=0,s.onClickToDelete=function(e){return function(t){d().fire({title:"Are you sure?",text:"You want to delete this",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!"}).then((function(t){if(t.isConfirmed){var n=(0,i.Z)(s);(0,m.bD)(e).then((function(e){n.onLoadPublish(),u.Am.success("Your widget has been deleted.")}))}}))}},s.onTagApply=function(e){var t=s.state.tagApply;t.push(e),s.setState({tagApply:t})},s.onTagRemove=function(e){return function(t){var n=s.state.tagApply;n.splice(e,1),s.setState({tagApply:n})}},s.conditionApply=function(e){return function(t){s.setState({condition:e})}},s.filterApply=function(e){return function(t){var n=s.state.chooseFilter,l={};n[e]?(delete n[e],"collection"==e&&(l={selectedCollection:{}}),"source"==e&&(l={selectedNetwork:{}}),"assetsType"==e&&(l={assetsApply:{}}),"tags"==e&&(l={tagApply:[]}),"ugcrights"==e&&(l={ugcRigths:{}}),"connection"==e&&(l={selectedConnection:{}}),"recommend"==e&&(l={recommendApply:{}}),"sentiment"==e&&(l={sentimentApply:{}}),s.setState((0,o.Z)({chooseFilter:n,activeKey:""},l))):(n[e]=!0,s.setState({chooseFilter:n,activeKey:e}))}},s.onSelectActive=function(e){return function(t){s.setState({activeKey:s.state.activeKey==e?"":e,accordionKey:""})}},s.onSelectAccordionActive=function(e){s.setState({accordionKey:e,activeKey:""})},s.shareEmbedModal=function(e){return s.setState({showGenratedCode:!0})},s.genratedCodeCallback=function(e){s.setState({showGenratedCode:e,accordionKey:""})},s.renderSwitch=function(e){var t=s.state.responseData;switch(e){case"p-html":default:return(0,y.jsx)(S,{data:t});case"p-wordpress":return(0,y.jsx)(A,{data:t});case"p-wix":return(0,y.jsx)(C,{data:t});case"p-squarespace":return(0,y.jsx)(v,{data:t});case"p-shopify":return(0,y.jsx)(k,{data:t});case"p-other":return(0,y.jsx)(b,{data:t})}},s.onSelectTemplate=function(e){return s.setState({selectedTemplate:e,accordionKey:""})},s.onRecommendationApply=function(e){return function(t){var n=s.state.recommendApply;n[e]?(delete n[e],s.setState({recommendApply:n})):(n[e]=!0,s.setState({recommendApply:n}))}},s.onLanguage=function(e){var t=s.state.languageApply;t=e,s.setState({languageApply:t,accordionKey:""})},s.onPopularPost=function(e){var t=s.state.popularPosts;t=e,s.setState({popularPosts:t,accordionKey:""})},s.onSelectAllRecommendationApply=function(e){var t=s.state.recommendApply;t&&Object.keys(t).length>=3?s.setState({recommendApply:{}}):s.setState({recommendApply:{1:!0,2:!0,3:!0}})},s.onSentimentApply=function(e){return function(t){var n=s.state.sentimentApply;n[e]?(delete n[e],s.setState({sentimentApply:n})):(n[e]=!0,s.setState({sentimentApply:n}))}},s.onSelectAllSentimentApply=function(e){var t=s.state.sentimentApply;t&&Object.keys(t).length>=3?s.setState({sentimentApply:{}}):s.setState({sentimentApply:{1:!0,2:!0,3:!0}})},s.onUgcRigths=function(e){return function(t){var n=s.state.ugcRigths;n[e]?(delete n[e],s.setState({ugcRigths:n})):(n[e]=!0,s.setState({ugcRigths:n}))}},s.onSelectAllUgcRigths=function(e){var t=s.state.ugcRigths;t&&Object.keys(t).length>=3?s.setState({ugcRigths:{}}):s.setState({ugcRigths:{1:!0,2:!0,3:!0}})},s.onconnectionApply=function(e){return function(t){var n=s.state.selectedConnection;n[e]?(delete n[e],s.setState({selectedConnection:n})):(n[e]=!0,s.setState({selectedConnection:n}))}},s.onConnectionSelectAll=function(e){var t=s.state,n=t.selectedConnection,o=t.feedData;if(n&&Object.keys(n).length>=o.length)s.setState({selectedConnection:{}});else{var l={};o.map((function(e){l[e.feedId]=!0})),s.setState({selectedConnection:l})}},s.onConnectionSearchFilter=function(e){var t=e.target.value;s.timeout&&clearTimeout(s.timeout),s.timeout=setTimeout((function(){s.setState({textConnectionSearch:t?String(t).toLowerCase():t},(function(){return s.onLoadConnectionFilterData()}))}),1e3)},s.onLoadConnectionFilterData=function(){var e=s.props.feedData,t=s.state.textConnectionSearch,n=e.filter((function(e){return String(e.name).toLowerCase().includes(t)}));s.setState({feedData:n})},s.onAssetsApply=function(e){return function(t){var n=s.state.assetsApply;n[e]?(delete n[e],s.setState({assetsApply:n})):(n[e]=!0,s.setState({assetsApply:n}))}},s.onSelectAllAssetsApply=function(e){var t=s.state.assetsApply;t&&Object.keys(t).length>=3?s.setState({assetsApply:{}}):s.setState({assetsApply:{1:!0,"2,4":!0,"3,5":!0}})},s.onNetworkApply=function(e){return function(t){var n=s.state.selectedNetwork;n[e]?(delete n[e],s.setState({selectedNetwork:n})):(n[e]=!0,s.setState({selectedNetwork:n}))}},s.onClickSelectAll=function(e){var t=s.state.selectedNetwork;if(t&&Object.keys(t).length>=e.length)s.setState({selectedNetwork:{}});else{var n={};e.map((function(e){n[e.id]=!0})),n=e.hasOwnProperty(2)?(0,o.Z)({18:!0},n):n,s.setState({selectedNetwork:n})}},s.onSearchFilter=function(e){var t=e.target.value;s.timeout&&clearTimeout(s.timeout),s.timeout=setTimeout((function(){s.setState({textSearch:t?String(t).toLowerCase():t},(function(){return s.onLoadFilterData()}))}),1e3)},s.onLoadFilterData=function(){var e=s.props.networks,t=s.state.textSearch,n=e.filter((function(e){return String(e.name).toLowerCase().includes(t)}));s.setState({networkData:n})},s.onLoadCollectionList=function(){var e=(0,i.Z)(s),t=s.props.collectionData;t&&Object.keys(t).length>0&&t.collectionList.length>0?e.setState({collectionList:t.collectionList,collectionCompleteList:t.collectionList,assetsCount:t.assetsCount}):(0,g.M1)().then((function(t){var n=t.data.responseData;n&&Object.keys(n).length>0&&e.setState({collectionList:n.collection,collectionCompleteList:n.collection})})).catch((function(e){}))},s.onCollectionApply=function(e){return function(t){var n=s.state.selectedCollection;n[e]?(delete n[e],s.setState({selectedCollection:n})):(n[e]=!0,s.setState({selectedCollection:n}))}},s.onCollectionSelectAll=function(e){var t=s.state,n=t.selectedCollection,o=t.collectionList;if(n&&Object.keys(n).length>=o.length)s.setState({selectedCollection:{}});else{var l={};o.map((function(e){l[e.id]=!0})),s.setState({selectedCollection:l})}},s.onCollectionSearchFilter=function(e){var t=e.target.value;s.timeout&&clearTimeout(s.timeout),s.timeout=setTimeout((function(){s.setState({collectionSearch:t?String(t).toLowerCase():t},(function(){return s.onLoadCollectionFilterData()}))}),1e3)},s.onLoadCollectionFilterData=function(){var e=s.state,t=e.collectionSearch,n=e.collectionCompleteList.filter((function(e){return String(e.name).toLowerCase().includes(t)}));s.setState({collectionList:n})},s.onChangeName=function(e){s.setState({publishCodeName:e.target.value})},s.onRequestPublish=function(e){var t=s.state,n=t.id,o=t.selectedTemplate,l=t.selectedCollection,a=t.selectedConnection,c=t.selectedNetwork,r=t.condition,p=t.showGenratedCode,d=t.ugcRigths,h=t.assetsApply,g=t.publishCodeName,f=t.tagApply,y=t.recommendApply,S=t.sentimentApply,A=t.languageApply,C=t.popularPosts,v=(0,i.Z)(s),k=[],b="",w=[],j=[],L=[],D=[],R=[],F=[],O=[],P="",T=null;if(d&&Object.keys(d).length>0&&Object.keys(d).map((function(e){R.push(e)})),o&&Object.keys(o).length>0&&o.id&&(b=o.id),c&&Object.keys(c).length>0&&Object.keys(c).map((function(e){D.push(e)})),l&&Object.keys(l).length>0&&Object.keys(l).map((function(e){k.push(e)})),y&&Object.keys(y).length>0&&Object.keys(y).map((function(e){F.push(e)})),S&&Object.keys(S).length>0&&Object.keys(S).map((function(e){O.push(e)})),a&&Object.keys(a).length>0&&Object.keys(a).map((function(e){w.push(e)})),h&&Object.keys(h).length>0&&Object.keys(h).map((function(e){j.push(e)})),f&&f.length>0&&(L=f),A&&Object.keys(A).length>0&&(P=A.value),C&&Object.keys(C).length>0&&(T=C.value),o&&Object.keys(o).length>0&&o.id&&(k.length>0||w.length>0||L.length>0||j.length>0||R.length>0||D.length>0||O.length>0||F.length>0)&&g&&String(g).trim().length>0){var x={id:n,name:g,template:b,collection:k.join(","),source:w.join(","),assets_type:j.join(","),tags:L.join(","),ugc_status:R.join(","),publish_type:1,campaign_type:"",recommend:F.join(","),sentiment:O.join(","),screen_type:"",platform:p||"",language:""!=P?P:"default",popularPosts:null!=T?T:0,network:D.join(","),filterType:String(r).toUpperCase()};s.setState({isUpdating:!0}),(0,m.S5)(x).then((function(e){var t=e.data,n=t.status,o=(t.response_code,t.response_message);"success"==n?(u.Am.success("Publish widget successfully updated."),v.setState({isUpdating:!1},(function(){return s.props.reloadIframe()}))):v.setState({isUpdating:!1},(function(){return u.Am.error(o)}))})).catch((function(e){var t=e.response.data;v.setState({isUpdating:!1},(function(){return u.Am.error(t.message)}))}))}else o?g&&String(g).trim().length>0?u.Am.error("Please select filter.",{autoClose:3e3}):u.Am.error("Please enter valid Widget name.",{autoClose:3e3}):u.Am.error("Please select template.",{autoClose:3e3})},s.onResetFilter=function(e){var t=(0,i.Z)(s).state,n=(0,i.Z)(s);t.chooseFilter&&Object.keys(t.chooseFilter).length>0?d().fire({title:"Are you sure?",text:"Your changes have not been saved. Do you want to save before you leave the page?",icon:"warning",showCancelButton:!0,confirmButtonText:"Discard Changes"}).then((function(e){e.isConfirmed&&n.props.history("/web-embed")})):n.props.history("/web-embed")};var a=e.item,c=e.templeteList,r=e.languages,p={};if(c&&c.length>0){var h=c.filter((function(e){return e.id==a.template}));p=h&&h.length>0?h[0]:{id:a.template}}else p={id:a.template};return s.state={showGenratedCode:a.platform?a.platform:"p-html",chooseFilter:F(a.assets_type,a.collection,a.source,a.network,a.tags,a.ugc_status,a.sentiment,a.recommend,a.language,a.popularPosts),collectionApply:[],sourceApply:{},assetsApply:R(a.assets_type),tagApply:L(a.tags),ugcRigths:{},selectedTemplate:p,condition:String(a.filterType).toLowerCase(),networkData:[],feedData:[],recommendApply:D(a.recommend),sentimentApply:D(a.sentiment),selectedNetwork:j(a.network),selectedConnection:j(a.source),textSearch:"",textConnectionSearch:"",collectionList:[],collectionCompleteList:[],selectedCollection:j(a.collection),collectionSearch:"",genrateCode:!1,publishList:[],responseData:a,activeFilter:null,selectedWebEmbed:null,publishCodeName:a.name?a.name:"Untitled-1",id:a.id,isUpdating:!1,languageApply:r.filter((function(e){return e.value==a.language}))[0],popularPosts:f.VI.filter((function(e){return e.value==a.popularPosts}))[0],accordionKey:""},s}return(0,s.Z)(n,[{key:"componentWillMount",value:function(){this.onLoadCollectionList()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.networks,n=e.feedData;this.setState({networkData:t,feedData:n.feeds})}},{key:"componentWillReceiveProps",value:function(e){var t=e.networks,n=e.feedData;this.setState({networkData:t,feedData:n.feeds})}},{key:"render",value:function(){var e=this.state,t=e.showGenratedCode,n=(e.chooseFilter,e.genrateCode,e.responseData,e.activeFilter),o=this.props,l=(o.networks,o.history);return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(w,{genratedCodeCallback:this.genratedCodeCallback,genratedCodeModal:t,filterApply:this.filterApply,state:this.state,onSelectTemplate:this.onSelectTemplate,onSelectAllUgcRigths:this.onSelectAllUgcRigths,onUgcRigths:this.onUgcRigths,onTagRemove:this.onTagRemove,onTagApply:this.onTagApply,onAssetsApply:this.onAssetsApply,onconnectionApply:this.onconnectionApply,onSelectAllAssetsApply:this.onSelectAllAssetsApply,onNetworkApply:this.onNetworkApply,onClickSelectAll:this.onClickSelectAll,onSearchFilter:this.onSearchFilter,onCollectionSearchFilter:this.onCollectionSearchFilter,onCollectionSelectAll:this.onCollectionSelectAll,onCollectionApply:this.onCollectionApply,conditionApply:this.conditionApply,onConnectionSearchFilter:this.onConnectionSearchFilter,onConnectionSelectAll:this.onConnectionSelectAll,onClickToDelete:this.onClickToDelete,onResetFilter:this.onResetFilter,activeFilter:n,history:l,onChangeName:this.onChangeName,onUpdateReponseData:this.onUpdateReponseData,onLoadPublish:this.onLoadPublish,onSelectActive:this.onSelectActive,onRequestPublish:this.onRequestPublish,isPublishEdit:!0,onRecommendationApply:this.onRecommendationApply,onSelectAllRecommendationApply:this.onSelectAllRecommendationApply,onSentimentApply:this.onSentimentApply,onSelectAllSentimentApply:this.onSelectAllSentimentApply,onLanguage:this.onLanguage,onPopularPost:this.onPopularPost,onSelectAccordionActive:this.onSelectAccordionActive})})}}]),n}(r.Component);t.default=(0,h.$j)((function(e){return{networks:e.networks.networkData,feedData:e.feedData.filterList,collectionData:e.collection,templeteList:e.templates.templeteList,languages:e.jsons.languages}}))(O)}}]);
//# sourceMappingURL=3609.2b9fcfaa.chunk.js.map