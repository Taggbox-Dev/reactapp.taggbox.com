/*! For license information please see 4939.af03050d.chunk.js.LICENSE.txt */
(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[4939],{34939:function(e,t,a){"use strict";a.r(t);var n=a(15671),o=a(43144),s=a(97326),r=a(60136),i=a(29388),h=a(72791),c=a(9085),l=a(49174),d=a(47798),u=a(12576),p=a(32480),g=a(8663),m=a(5428),w=a(80184),x=h.lazy((function(){return a.e(3879).then(a.bind(a,13879))})),b=function(e){(0,r.Z)(a,e);var t=(0,i.Z)(a);function a(e){var o;return(0,n.Z)(this,a),(o=t.call(this,e)).shareEmbedModal=function(e){return o.setState({showModal:!0})},o.shareEmbedCallback=function(e){o.setState({showModal:e})},o.EditCampaignUrlModal=function(e){return o.setState({showModal:!0})},o.campaignUrlCallback=function(e){o.setState({showModal:e})},o.codeCopy=function(e){return function(t){o.setState({codeCopied:!0}),setTimeout((function(){o.setState({codeCopied:!1})}),1500),(0,p.U5)(e)}},o.onClickToShare=function(e){return function(t){var a=o.props.responseData,n=(0,s.Z)(o);o.setState({isLoading:!0}),e&&String(e).length>0?(0,m.q)({htmlCode:a.publishCode&&Object.keys(a.publishCode).length>0?"".concat(g.uG).concat(a.publishCode.wallId,"?ugcSuite=1&hashtag_campaign=true"):null,email:e,type:2}).then((function(e){c.Am.success("Taggbox widget code successfully sent."),n.setState({showModal:!1,isLoading:!1})})):c.Am.error("Please enter email id.")}},o.state={showModal:!1,genrateCode:!1,codeCopied:!1,shareLink:"",isLoading:!1},o}return(0,o.Z)(a,[{key:"render",value:function(){var e=this.state,t=(e.genrateCode,e.showModal),a=e.codeCopied,n=this.props.responseData,o="";if(n.publishCode&&Object.keys(n.publishCode).length>0){var s=n.publishCode.wallId,r=new Date/1e3|0;o=(0,l.encode)("".concat(n.publishCode.name,"---").concat(s,"&").concat(r))}return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"d-flex flex-column flex-shrink-0 emailcapaignPreview bg-light p-5",children:(0,w.jsxs)("div",{className:"",children:[(0,w.jsx)("h4",{className:"mb-2 fs-6",children:"Publish Hashtag Content Anywhere Your Audience Lies!"}),(0,w.jsx)("h5",{className:"mb-1 fs-7",children:"1. Social Share"}),(0,w.jsx)("p",{children:"Use this URL on your social networks to attract followers and encourage them to share their experiences. "}),(0,w.jsx)("div",{className:"hashtag_social_share d-flex align-items-center justify-content-start bg-white border rounded-1 px-3 py-2 mb-3",children:(0,w.jsxs)("div",{className:"hashtag_social_share_inner d-flex align-items-center",children:[(0,w.jsx)("button",{type:"button",className:"btn btn-icon rounded-circle h-30px w-30px p-1 mx-1","data-type":"facebook",onClick:function(e){return(0,p.MI)("https://www.facebook.com/sharer.php?u=".concat(g.LS,"share/hashtagcampaign/").concat(o),"sharer","toolbar=0,status=0,width=600,height=400")},children:(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"22",height:"22",children:[(0,w.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,w.jsx)("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z",fill:"rgba(255,255,255,1)"})]})}),(0,w.jsx)("button",{type:"button",className:"btn btn-icon rounded-circle h-30px w-30px p-1 mx-1","data-type":"twitter",onClick:function(e){return(0,p.MI)("http://twitter.com/share?url=".concat(g.LS,"share/hashtagcampaign/").concat(o),"sharer","toolbar=0,status=0,width=600,height=400")},children:(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"22",height:"22",children:[(0,w.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,w.jsx)("path",{d:"M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z",fill:"rgba(255,255,255,1)"})]})}),(0,w.jsx)("button",{type:"button",className:"btn btn-icon rounded-circle h-30px w-30px p-1 mx-1","data-type":"linkedin",onClick:function(e){return(0,p.MI)("https://www.linkedin.com/shareArticle?mini=true&url=".concat(g.LS,"share/hashtagcampaign/").concat(o),"sharer","toolbar=0,status=0,width=600,height=400")},children:(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"22",height:"22",children:[(0,w.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,w.jsx)("path",{d:"M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z",fill:"rgba(255,255,255,1)"})]})}),(0,w.jsx)("button",{type:"button",className:"btn btn-icon rounded-circle h-30px w-30px p-1 mx-1 share-hashtag-campaign-url","data-type":"envelope",onClick:this.shareEmbedModal,children:(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"16",viewBox:"0 0 23.932 18.029",children:(0,w.jsx)("path",{id:"Path_11348","data-name":"Path 11348",d:"M19687.609,19186.5a1.975,1.975,0,0,1-1.934-2v-14.027a1.97,1.97,0,0,1,1.934-2h20.063a1.97,1.97,0,0,1,1.936,2v14.027a1.976,1.976,0,0,1-1.936,2Zm1.365-2h17.332l-6.32-6.627-1.746,1.4a.948.948,0,0,1-1.207,0l-1.736-1.4Zm12.549-7.879,6.125,6.426v-11.393Zm-13.889,6.426,6.123-6.426-6.123-4.967Zm10.006-5.832,8.316-6.742h-16.631Z",transform:"translate(-19685.676 -19168.475)",fill:"rgba(255,255,255,1)"})})})]})}),(0,w.jsx)("h5",{className:"mb-1 fs-7",children:"2. Emails"}),(0,w.jsx)("p",{children:"Add hashtag content to your emailers and make them more personalized. Prompt your subscribers to share more content as well with your campaign.  "}),(0,w.jsx)("h5",{className:"mb-1 fs-7",children:"3. SMS/WhatsApp"}),(0,w.jsx)("p",{children:"Incorporate hashtag campaign URL in SMS or WhatsApp marketing to grab user attention and invite them to participate. "}),(0,w.jsxs)("div",{className:"position-relative",children:[(0,w.jsx)("textarea",{className:"form-control textarea-min-row-9 p-lg-4",id:"hashtagUrlMsgCode_",onClick:this.codeCopy("hashtagUrlMsgCode_"),children:"Thank you for trusting us. We love our customers, and your confidence in us means a lot to us. We hope we served you well, and we\u2019d love your feedback. Click on the link below and tell us what you think! Share pictures, videos, or text, and we\u2019d love to feature you on our socials.  ".concat(n.publishCode&&Object.keys(n.publishCode).length>0?"".concat(g.uG).concat(n.publishCode.wallId,"?ugcSuite=1"):null)}),(0,w.jsx)("div",{className:"emebed_action position-absolute pe-2 pb-2",style:{right:5,bottom:5},children:(0,w.jsx)(d.Z,{placement:"top",overlay:(0,w.jsx)(u.Z,{children:a?"Code Copied":"Copy Code"}),children:(0,w.jsx)("button",{type:"button",className:"btn text-gray-500 p-0 me-2",onClick:this.codeCopy("hashtagUrlMsgCode_"),children:a?(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",children:[(0,w.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,w.jsx)("path",{d:"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z",fill:"#6AC259"})]}):(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 18.17 18.17",children:(0,w.jsx)("path",{id:"Path_2","data-name":"Path 2",d:"M-932.08-463.83a2.92,2.92,0,0,1-2.92-2.92v-9.086a2.924,2.924,0,0,1,1.947-2.752v9.567a3.245,3.245,0,0,0,3.245,3.244h9.567a2.924,2.924,0,0,1-2.753,1.947Zm3.245-3.244a2.92,2.92,0,0,1-2.92-2.921v-9.085a2.92,2.92,0,0,1,2.92-2.92h9.086a2.92,2.92,0,0,1,2.92,2.92V-470a2.92,2.92,0,0,1-2.92,2.921Z",transform:"translate(935 482)",fill:"currentColor"})})})})})]})]})}),(0,w.jsx)(h.Suspense,{fallback:(0,w.jsx)(w.Fragment,{}),children:t?(0,w.jsx)(x,{shareEmbedCallback:this.shareEmbedCallback,shareEmbedModal:t,onClickToShare:this.onClickToShare,isLoading:this.state.isLoading}):null})]})}}]),a}(h.Component);t.default=b},49174:function(e,t,a){var n;e=a.nmd(e),function(o){var s=t,r=(e&&e.exports,"object"==typeof a.g&&a.g);r.global!==r&&r.window;var i=function(e){this.message=e};(i.prototype=new Error).name="InvalidCharacterError";var h=function(e){throw new i(e)},c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=/[\t\n\f\r ]/g,d={encode:function(e){e=String(e),/[^\0-\xFF]/.test(e)&&h("The string to be encoded contains characters outside of the Latin1 range.");for(var t,a,n,o,s=e.length%3,r="",i=-1,l=e.length-s;++i<l;)t=e.charCodeAt(i)<<16,a=e.charCodeAt(++i)<<8,n=e.charCodeAt(++i),r+=c.charAt((o=t+a+n)>>18&63)+c.charAt(o>>12&63)+c.charAt(o>>6&63)+c.charAt(63&o);return 2==s?(t=e.charCodeAt(i)<<8,a=e.charCodeAt(++i),r+=c.charAt((o=t+a)>>10)+c.charAt(o>>4&63)+c.charAt(o<<2&63)+"="):1==s&&(o=e.charCodeAt(i),r+=c.charAt(o>>2)+c.charAt(o<<4&63)+"=="),r},decode:function(e){var t=(e=String(e).replace(l,"")).length;t%4==0&&(t=(e=e.replace(/==?$/,"")).length),(t%4==1||/[^+a-zA-Z0-9/]/.test(e))&&h("Invalid character: the string to be decoded is not correctly encoded.");for(var a,n,o=0,s="",r=-1;++r<t;)n=c.indexOf(e.charAt(r)),a=o%4?64*a+n:n,o++%4&&(s+=String.fromCharCode(255&a>>(-2*o&6)));return s},version:"1.0.0"};void 0===(n=function(){return d}.call(t,a,t,e))||(e.exports=n)}()}}]);
//# sourceMappingURL=4939.af03050d.chunk.js.map