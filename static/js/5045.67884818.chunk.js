"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[5045],{65045:function(t,e,s){s.r(e);var n=s(15671),o=s(43144),i=s(97326),a=s(60136),l=s(29388),c=s(72791),u=s(320),r=s(46305),p=s(80184),f=function(t){(0,a.Z)(s,t);var e=(0,l.Z)(s);function s(){var t;(0,n.Z)(this,s);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(t=e.call.apply(e,[this].concat(a))).state={postType:null,options:[]},t.changeFeedsFilters=function(e){t.props.analyticsStatus;t.setState({postType:e}),t.props.updateCollectionList(e)},t.onLoadCollectionList=function(){var e=(0,i.Z)(t);t.setState({collectionListRequest:!0}),(0,r.M1)().then((function(t){var s=t.data.responseData;if(s&&Object.keys(s).length>0){var n=[];s.collection.forEach((function(t){n.push({value:t.id,label:t.name})})),e.setState({options:n})}else e.setState({collectionListRequest:!1})})).catch((function(t){e.setState({collectionListRequest:!1})}))},t}return(0,o.Z)(s,[{key:"componentDidMount",value:function(){this.onLoadCollectionList()}},{key:"render",value:function(){var t=this.state,e=t.options,s=t.postType,n=this.props.isMulti;return(0,p.jsx)("div",{className:"form-select-multi",children:(0,p.jsx)(u.Z,{id:"postype",value:s,isMulti:!!n,classNamePrefix:"form-select-multi",onChange:this.changeFeedsFilters,options:e})})}}]),s}(c.Component);e.default=f}}]);
//# sourceMappingURL=5045.67884818.chunk.js.map