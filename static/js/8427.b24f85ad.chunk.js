"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[8427],{58427:function(e,t,i){i.r(t);var n=i(15671),o=i(43144),l=i(97326),s=i(60136),a=i(29388),r=i(72791),d=i(9085),c=i(99410),h=i(29795),m=i(29546),u=i(55353),x=i(74342),b=i(44533),C=i(3826),g=i(12576),p=i(2841),f=i(8663),j=i(5428),v=i(80184),y=r.lazy((function(){return i.e(3879).then(i.bind(i,13879))})),k=function(e){(0,s.Z)(i,e);var t=(0,a.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=t.call(this)).shareEmbedModal=function(t){return function(i){return e.setState({showModal:!0,id:t})}},e.shareEmbedCallback=function(t){e.setState({showModal:t})},e.codeCopy=function(t){e.setState({codeCopied:!0}),setTimeout((function(){e.setState({codeCopied:!1})}),1500),(0,p.U5)(t)},e.onClickToShare=function(t){return function(i){var n=(0,l.Z)(e),o=e.state.id;e.setState({isLoading:!0}),t&&String(t).length>0?(0,j.q)({htmlCode:document.querySelector(o||"#embedCode_").innerText,email:t,type:3}).then((function(e){d.Am.success("Tagbox widget code successfully sent."),n.setState({showModal:!1,isLoading:!1})})):d.Am.error("Please enter email id.")}},e.onChangeWidth=function(t){t.target.value&&parseInt(t.target.value)>0&&e.setState({width:t.target.value>100?100:t.target.value})},e.onChangeHeight=function(t){t.target.value&&parseInt(t.target.value)>0&&e.setState({height:t.target.value>100?100:t.target.value})},e.onClickToWidthSign=function(t){return function(i){e.setState({widthSign:t})}},e.onClickToHeightSign=function(t){return function(i){e.setState({heightSign:t})}},e.state={showModal:!1,codeCopied:!1,isLoading:!1,widthSign:"%",heightSign:"%",width:"100",height:"100",id:"#embedCode_"},e}return(0,o.Z)(i,[{key:"render",value:function(){var e=this,t=this.state,i=t.codeCopied,n=t.showModal,o=t.width,l=t.height,s=t.widthSign,a=t.heightSign,d=this.props,p=d.copyText,j=d.data;return(0,v.jsxs)("div",{className:"embed_code",children:[(0,v.jsx)("div",{className:"mb-5",children:(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col",children:(0,v.jsxs)(c.Z,{children:[(0,v.jsx)(c.Z.Text,{children:"Width"}),(0,v.jsx)(h.Z.Control,{type:"number",defaultValue:o,value:o,onChange:this.onChangeWidth}),(0,v.jsxs)(m.Z,{align:"end",variant:"outline-secondary",title:s,children:[(0,v.jsx)(u.Z.Item,{href:"#",onClick:this.onClickToWidthSign("%"),children:"Percent (%)"}),(0,v.jsx)(u.Z.Item,{href:"#",onClick:this.onClickToWidthSign("px"),children:"Pixel (PX)"}),(0,v.jsx)(u.Z.Item,{href:"#",onClick:this.onClickToWidthSign("vw"),children:"Viewport Width (VW)"})]})]})}),(0,v.jsx)("div",{className:"col",children:(0,v.jsxs)(c.Z,{children:[(0,v.jsx)(c.Z.Text,{children:"Height"}),(0,v.jsx)(h.Z.Control,{type:"number",defaultValue:l,value:l,onChange:this.onChangeHeight}),(0,v.jsxs)(m.Z,{align:"end",variant:"outline-secondary",title:a,children:[(0,v.jsx)(u.Z.Item,{href:"#",onClick:this.onClickToHeightSign("%"),children:"Percent (%)"}),(0,v.jsx)(u.Z.Item,{href:"#",onClick:this.onClickToHeightSign("px"),children:"Pixel (PX)"}),(0,v.jsx)(u.Z.Item,{href:"#",onClick:this.onClickToHeightSign("vw"),children:"Viewport Height (VH)"})]})]})})]})}),(0,v.jsx)("h5",{className:"mb-3 h6",children:p}),(0,v.jsx)("div",{className:"p-3 bg-light rounded-1 mb-5",children:(0,v.jsxs)(x.Z.Container,{id:"left-tabs-example",defaultActiveKey:"liteCodeEmbed_",children:[(0,v.jsxs)(b.Z,{variant:"underline",className:"mb-3 border-bottom",children:[(0,v.jsx)(b.Z.Item,{className:"me-4",children:(0,v.jsx)(b.Z.Link,{eventKey:"liteCodeEmbed_",className:"px-0 fw-semibold",children:"Lite Code"})}),(0,v.jsx)(b.Z.Item,{className:"",children:(0,v.jsx)(b.Z.Link,{eventKey:"iframeCodeEmbed_",className:"px-0 fw-semibold",children:"Iframe"})})]}),(0,v.jsxs)(x.Z.Content,{children:[(0,v.jsx)(x.Z.Pane,{eventKey:"liteCodeEmbed_",children:(0,v.jsxs)("div",{className:"mb-2 mb-xl-3 position-relative",children:[(0,v.jsxs)("code",{className:"form-control textarea-min-row-4 p-lg-4",id:"embedCode_",onClick:function(){e.codeCopy("embedCode_")},style:{wordBreak:"break-all"},children:['<div class="taggbox" data-widget-id="',j&&Object.keys(j).length>0?j.wallId:null,'" ugcSuite="1" style="width:',o,s,";height:",l,a,';"></div> <script src="',f.tM,'" type="text/javascript"><\/script>']}),(0,v.jsxs)("div",{className:"emebed_action position-absolute end-0 bottom-0 pe-2 pb-2",children:[(0,v.jsx)(C.Z,{placement:"top",overlay:(0,v.jsx)(g.Z,{children:i?"Code Copied":"Copy Code"}),children:(0,v.jsx)("button",{type:"button",className:"btn btn-link text-decoration-none text-gray-500 p-0 me-2",onClick:function(){e.codeCopy("embedCode_")},children:i?(0,v.jsx)("i",{className:"ri-check-line",style:{color:"#6AC259"}}):(0,v.jsx)("i",{className:"ri-file-copy-fill"})})}),(0,v.jsx)(C.Z,{placement:"top",overlay:(0,v.jsx)(g.Z,{children:"Share Code"}),children:(0,v.jsx)("button",{className:"btn btn-link text-decoration-none text-gray-500 p-0 GetShareCode",type:"button",onClick:this.shareEmbedModal("#embedCode_"),children:(0,v.jsx)("i",{className:"ri-mail-fill"})})})]})]})}),(0,v.jsx)(x.Z.Pane,{eventKey:"iframeCodeEmbed_",children:(0,v.jsxs)("div",{className:"mb-2 mb-xl-3 position-relative",children:[(0,v.jsxs)("code",{className:"form-control textarea-min-row-4 p-lg-4",id:"embedCodeIframe_",onClick:function(){e.codeCopy("embedCodeIframe_")},children:['<iframe src="',f.uG,j&&Object.keys(j).length>0?j.wallId:null,'" style="width:100%;height:600px;border:none;"></iframe>']}),(0,v.jsxs)("div",{className:"emebed_action position-absolute end-0 bottom-0 pe-2 pb-2",children:[(0,v.jsx)(C.Z,{placement:"top",overlay:(0,v.jsx)(g.Z,{children:i?"Code Copied":"Copy Code"}),children:(0,v.jsx)("button",{type:"button",className:"btn btn-link text-decoration-none text-gray-500 p-0 me-2",onClick:function(){e.codeCopy("embedCodeIframe_")},children:i?(0,v.jsx)("i",{className:"ri-check-line",style:{color:"#6AC259"}}):(0,v.jsx)("i",{className:"ri-file-copy-fill"})})}),(0,v.jsx)(C.Z,{placement:"top",overlay:(0,v.jsx)(g.Z,{children:"Share Code"}),children:(0,v.jsx)("button",{className:"btn btn-link text-decoration-none text-gray-500 p-0 GetShareCode",type:"button",onClick:this.shareEmbedModal("#embedCodeIframe_"),children:(0,v.jsx)("i",{className:"ri-mail-fill"})})})]})]})})]})]})}),(0,v.jsx)(r.Suspense,{fallback:(0,v.jsx)(v.Fragment,{}),children:n?(0,v.jsx)(y,{shareEmbedCallback:this.shareEmbedCallback,shareEmbedModal:n,onClickToShare:this.onClickToShare,isLoading:this.state.isLoading,text:"Share this embed code with your team. Enter the email Id to send the code directly to them",heading:"Send code by email"}):null})]})}}]),i}(r.Component);t.default=k},29546:function(e,t,i){i.d(t,{Z:function(){return g}});var n=i(1413),o=i(45987),l=i(72791),s=i(52007),a=i.n(s),r=i(55353),d=i(5107),c=i(20070),h=a().oneOf(["start","end"]),m=a().oneOfType([h,a().shape({sm:h}),a().shape({md:h}),a().shape({lg:h}),a().shape({xl:h}),a().shape({xxl:h}),a().object]),u=i(80184),x=["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","renderMenuOnMount","disabled","href","id","menuVariant","flip"],b={id:a().string,href:a().string,onClick:a().func,title:a().node.isRequired,disabled:a().bool,align:m,menuRole:a().string,renderMenuOnMount:a().bool,rootCloseEvent:a().string,menuVariant:a().oneOf(["dark"]),flip:a().bool,bsPrefix:a().string,variant:a().string,size:a().string},C=l.forwardRef((function(e,t){var i=e.title,l=e.children,s=e.bsPrefix,a=e.rootCloseEvent,h=e.variant,m=e.size,b=e.menuRole,C=e.renderMenuOnMount,g=e.disabled,p=e.href,f=e.id,j=e.menuVariant,v=e.flip,y=(0,o.Z)(e,x);return(0,u.jsxs)(r.Z,(0,n.Z)((0,n.Z)({ref:t},y),{},{children:[(0,u.jsx)(d.Z,{id:f,href:p,size:m,variant:h,disabled:g,childBsPrefix:s,children:i}),(0,u.jsx)(c.Z,{role:b,renderOnMount:C,rootCloseEvent:a,variant:j,flip:v,children:l})]}))}));C.displayName="DropdownButton",C.propTypes=b;var g=C}}]);
//# sourceMappingURL=8427.b24f85ad.chunk.js.map