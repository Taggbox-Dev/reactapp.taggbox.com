"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[3170],{63170:function(e,s,a){a.r(s);var n=a(15671),t=a(43144),l=a(60136),r=a(29388),i=a(72791),c=a(78687),d=a(23794),u=a(56600),x=a(72426),h=a.n(x),o=a(11087),m=a(80184),v=function(e){var s=e.heading,a=e.value;return(0,m.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,m.jsxs)("div",{className:"mb-lg-0 mb-3",children:[(0,m.jsx)("p",{className:"mb-lg-4 mb-2 text-gray-600 fs-7",children:s}),(0,m.jsx)("h6",{className:"text-gray-800",children:a})]})})},p=function(e){(0,l.Z)(a,e);var s=(0,r.Z)(a);function a(){var e;(0,n.Z)(this,a);for(var t=arguments.length,l=new Array(t),r=0;r<t;r++)l[r]=arguments[r];return(e=s.call.apply(s,[this].concat(l))).state={expiresAt:null,plan:"UGC Suite"},e}return(0,t.Z)(a,[{key:"componentDidMount",value:function(){var e=this.props.userData,s=this.state.expiresAt;if(e&&e.user&&e.UserPlan&&Object.keys(e.UserPlan).length>0&&null==s){var a=h()(new Date(1e3*e.UserPlan.expiresAt));this.setState({expiresAt:a.diff(h()(),"days"),plan:"UGC Suite ".concat(e.UserPlan.Plan.name)})}}},{key:"render",value:function(){var e=this.state,s=e.expiresAt,a=e.plan;return(0,m.jsxs)("div",{className:"container container-xs",children:[(0,m.jsx)("div",{className:"mt-5",children:(0,m.jsx)("h3",{className:"fs-6 text-gray-800",children:"Overview"})}),(0,m.jsx)("div",{className:"card mb-xxl-4 mb-3",children:(0,m.jsx)("div",{className:"card-body px-3 py-3 px-xxl-4 py-xxl-5 px-xl-3 py-xl-4",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)(v,{heading:"Current Plan",value:a}),(0,m.jsx)(v,{heading:"Status",value:s&&s>0?"Active":"In Active"}),(0,m.jsx)(v,{heading:"Days left on trial",value:"".concat(s||0," Days")}),(0,m.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,m.jsx)("div",{className:"text-lg-center mt-2 mt-lg-3",children:(0,m.jsxs)(o.rU,{to:"price",className:"btn btn-primary btn-lg",children:[(0,m.jsx)("span",{className:"svg-icon",children:(0,m.jsx)(d.Z,{src:(0,u.F)("media/icons/svg-icons/star-shine.svg"),height:20,width:20})}),"Upgrade now"]})})})]})})})]})}}]),a}(i.Component);s.default=(0,c.$j)((function(e){return{userData:e.authenticated.userData}}))(p)}}]);
//# sourceMappingURL=3170.9cf8479c.chunk.js.map