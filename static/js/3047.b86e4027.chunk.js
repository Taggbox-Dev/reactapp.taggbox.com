"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[3047],{43047:function(e,t,a){a.r(t);var o=a(15671),i=a(43144),n=a(60136),s=a(29388),d=a(72791),r=a(50732),l=a(22109),u=a(90031),c=a(6697),p=a(9630),m=a(53841),g=a(48545),h=a(80184),b="https://test.taggbox.com",f=new r.ZP({id:"editA",debug:!0,autoProceed:!0,restrictions:{maxFileSize:5e6,maxNumberOfFiles:500,minNumberOfFiles:1,allowedFileTypes:["image/*"]}});f.use(u.ZP,{target:"#a",params:{auth:{key:"0701d3d7f8d94e92a65a9cba388b1d96"},steps:{resize:{robot:"/image/resize",width:500,resize_strategy:"fit",background:"none"},store:{robot:"/wasabi/store",bucket_region:"us-west-1",bucket:"cloud.taggbox.com",key:"47ABVORKG52UYE1KB28S",secret:"pcaTfeokaz28geAAns08H3yaGbOVz6ILgTptu19v",path:"onsiteupload/images/${file.id}"}}},waitForEncoding:!0}),f.use(p.Z,{target:r.ZP.Dashboard,companionUrl:b}),f.use(c.Z,{target:r.ZP.Dashboard,companionUrl:b}),f.use(m.Z,{target:r.ZP.Dashboard,companionUrl:b}),f.use(g.Z,{target:r.ZP.Dashboard,companionUrl:b});var y=function(e){(0,n.Z)(a,e);var t=(0,s.Z)(a);function a(){var e;(0,o.Z)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={postfile:"",postId:null,mediaWidth:null,mediaHeight:null},e}return(0,i.Z)(a,[{key:"componentWillUnmount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;f.on("transloadit:result",(function(t,a){console.log("client_logo",a,a.name,"https://cloud.taggbox.com/onsiteupload/images/".concat(a.id),e.props),e.setState({postId:a.id,postFile:"https://cloud.taggbox.com/onsiteupload/images/".concat(a.id),mediaHeight:a.meta.height,mediaWidth:a.meta.width},(function(){setTimeout((function(){e.props.onUploadedData({checked:!1,postFile:e.state.postFile,postId:e.state.postId,addTags:"",caption:"",copyright:!1,content:"",mediaHeight:e.state.mediaHeight,mediaWidth:e.state.mediaWidth}),f.cancelAll()}),300)}))}))}},{key:"render",value:function(){var e=this;return(0,h.jsx)("div",{className:"card mb-3",children:(0,h.jsx)("div",{className:"card-body text-decoration-none",children:(0,h.jsx)(l.A,{onClick:function(){return e.uploadNextStep("editUploadedMedia")},proudlyDisplayPoweredByUppy:!1,hideUploadButton:!0,showProgressDetails:!0,disableThumbnailGenerator:!1,height:"100%",width:"100%",theme:"light",showRemoveButtonAfterComplete:!1,uppy:f,plugins:["Webcam","Instagram","GoogleDrive","Dropbox"]})})})}}]),a}(d.Component);t.default=y}}]);
//# sourceMappingURL=3047.b86e4027.chunk.js.map