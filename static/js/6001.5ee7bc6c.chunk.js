"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[6001],{56001:function(e,t,n){n.r(t);var s=n(15671),l=n(43144),r=n(60136),i=n(29388),c=n(72791),a=n(72426),o=n.n(a),d=n(43360),m=n(80184),u=function(e){(0,r.Z)(n,e);var t=(0,i.Z)(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,l.Z)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.assets,s=t.feedsFilter,l=t.ugcStatusFilter,r=t.postTypeFilter,i=(t.textResetFilter,t.isCollection),c=n.filterBody,a=c.collection,u=c.dateRanges,b=(c.other,c.postTags),y=c.postType,k=c.socialFeed,g=c.text,j=c.ugcStatus,p=c.networks,x=c.notification,h=u&&Object.keys(u).length>0||y&&Object.keys(y).length>0||k&&Object.keys(k).length>0||j&&Object.keys(j).length>0||g&&""!=g||x&&""!=x||b&&Object.keys(b).length>0||p&&Object.keys(p).length>0||n.filterBody.assets&&Object.keys(n.filterBody.assets).length>0;return(0,m.jsx)(m.Fragment,{children:a&&Object.keys(a).length>0||u&&Object.keys(u).length>0||y&&Object.keys(y).length>0||k&&Object.keys(k).length>0||j&&Object.keys(j).length>0||g&&""!=g||x&&""!=x||b&&Object.keys(b).length>0||p&&Object.keys(p).length>0||n.filterBody.assets&&Object.keys(n.filterBody.assets).length>0?(0,m.jsx)("div",{className:"container-fluid",children:(0,m.jsxs)("div",{className:"tags-group d-flex align-items-center flex-wrap",children:[i&&a&&Object.keys(a).length>0&&!h?null:(0,m.jsx)("div",{className:"text-gray-700 fw-bold me-2 mt-2",children:"Filter By :"}),!i&&a&&Object.keys(a).length>0?Object.keys(a).map((function(t){return(0,m.jsxs)("div",{className:"block-center badge bg-secondary text-gray-800 rounded-pill border me-2 mt-2",children:[a[t],(0,m.jsx)(d.Z,{variant:"link",className:"text-decoration-none p-0 ms-1",onClick:function(n){return e.props.collectionsFilter(t,a[t])},children:(0,m.jsx)("i",{className:"ri-close-line icon-6"})})]})})):null,n.filterBody.assets&&Object.keys(n.filterBody.assets).length>0?Object.keys(n.filterBody.assets).map((function(t){return(0,m.jsxs)("div",{className:"block-center badge bg-secondary text-gray-800 rounded-pill border me-2 mt-2",children:[t,(0,m.jsx)(d.Z,{variant:"link",className:"text-decoration-none p-0 ms-1",onClick:function(n){return e.props.assetFilter(t)},children:(0,m.jsx)("i",{className:"ri-close-line icon-6"})})]})})):null,p&&Object.keys(p).length>0?Object.keys(p).map((function(t){return(0,m.jsxs)("div",{className:"block-center badge bg-secondary text-gray-800 rounded-pill border me-2 mt-2",children:[p[t],(0,m.jsx)(d.Z,{variant:"link",className:"text-decoration-none p-0 ms-1",onClick:function(n){return e.props.networkFilter(t,a[t])},children:(0,m.jsx)("i",{className:"ri-close-line icon-6"})})]})})):null,b&&Object.keys(b).length>0?Object.keys(b).map((function(t){return(0,m.jsxs)("div",{className:"block-center badge bg-secondary text-gray-800 rounded-pill border me-2 mt-2",children:[t,(0,m.jsx)(d.Z,{variant:"link",className:"text-decoration-none p-0 ms-1",onClick:function(n){return e.props.tagsFilter(t)},children:(0,m.jsx)("i",{className:"ri-close-line icon-6"})})]})})):null,u&&Object.keys(u).length>0?(0,m.jsxs)("div",{className:"block-center badge bg-secondary text-gray-800 rounded-pill border me-2 mt-2",children:[o()(u.startDate).format("DD-MMM-YYYY")," to ",o()(u.endDate).format("DD-MMM-YYYY"),(0,m.jsx)(d.Z,{variant:"link",className:"text-decoration-none p-0 ms-1",onClick:function(t){return e.props.resetDateFilter()},children:(0,m.jsx)("i",{className:"ri-close-line icon-6"})})]}):null,y&&Object.keys(y).length>0?Object.keys(y).map((function(e){return(0,m.jsxs)("div",{className:"block-center badge bg-secondary text-gray-800 rounded-pill border me-2 mt-2",children:["2,4"==e?"Image Only":"3,5"==e?"Video Only":"Post Type",(0,m.jsx)(d.Z,{variant:"link",className:"text-decoration-none p-0 ms-1",onClick:function(t){return r(e)},children:(0,m.jsx)("i",{className:"ri-close-line icon-6"})})]})})):null,k&&Object.keys(k).length>0?Object.keys(k).map((function(e){return(0,m.jsxs)("div",{className:"block-center badge bg-secondary text-gray-800 rounded-pill border me-2 mt-2",children:[k[e],(0,m.jsx)(d.Z,{variant:"link",className:"text-decoration-none p-0 ms-1",onClick:function(t){return s(e,k[e])},children:(0,m.jsx)("i",{className:"ri-close-line icon-6"})})]},e)})):null,j&&Object.keys(j).length>0?Object.keys(j).map((function(e){return(0,m.jsxs)("div",{className:"block-center badge bg-secondary text-gray-800 rounded-pill border me-2 mt-2",children:[1==e?"Pending Post":2==e?"Approved Post":3==e?"Rejected Post":4==e?"Expired Post":null,(0,m.jsx)(d.Z,{variant:"link",className:"text-decoration-none p-0 ms-1",onClick:function(t){return l(e)},children:(0,m.jsx)("i",{className:"ri-close-line icon-6"})})]})})):null,x&&""!=x?(0,m.jsxs)("div",{className:"block-center badge bg-secondary text-gray-800 rounded-pill border me-2 mt-2",children:["Notification",(0,m.jsx)(d.Z,{variant:"link",className:"text-decoration-none p-0 ms-1",onClick:function(t){return e.props.notificationFilter(null)},children:(0,m.jsx)("i",{className:"ri-close-line icon-6"})})]}):null,g&&""!=g?(0,m.jsxs)("div",{className:"block-center badge bg-secondary text-gray-800 rounded-pill border me-2 mt-2",children:[g,(0,m.jsx)(d.Z,{variant:"link",className:"text-decoration-none p-0 ms-1",onClick:this.props.textResetFilter,children:(0,m.jsx)("i",{className:"ri-close-line icon-6"})})]}):null,i&&a&&Object.keys(a).length>0&&!h?null:(0,m.jsx)("div",{className:"btn btn-primary rounded-pill btn-sm py-1 me-2 mt-2",onClick:this.props.resetFilter,style:{minWidth:70},children:"Reset"})]})}):null})}}]),n}(c.Component);t.default=u}}]);
//# sourceMappingURL=6001.5ee7bc6c.chunk.js.map