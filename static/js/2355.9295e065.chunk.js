"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[2355],{82355:function(e,s,t){t.r(s);var l=t(4942),a=t(1413),i=t(15671),n=t(43144),c=t(60136),o=t(29388),r=t(72791),d=t(78687),h=t(42195),p=t.n(h),m=t(25862),x=t(12576),g=t(55353),v=t(94194),u=t(94111),j=t(80184),b=function(e){(0,c.Z)(t,e);var s=(0,o.Z)(t);function t(){var e;(0,i.Z)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(e=s.call.apply(s,[this].concat(n))).state={isRequest:!1},e.onClickUploaded=function(s){var t=e.props,l=t.collection,i=t.uploadedData;if(i&&i.length>0){e.setState({isRequest:!0});var n=[];i.map((function(e){n.push({content:e.content,postFile:e.postFile,copyrights:e.copyrights?1:0,mediaHeight:e.mediaHeight,mediaWidth:e.mediaWidth,tags:e.addTags})}));var c=l&&l.value?{collection:l.value}:{},o=(0,a.Z)({assets:n},c);e.props.createAssets(o,e.onCallBack)}},e.onCallBack=function(){var s=e.props,t=s.editMediaHandleCallback,l=s.history;e.setState({isRequest:!1}),t(!1),l("/assets")},e}return(0,n.Z)(t,[{key:"render",value:function(){var e=this.props,s=e.uploadedData,t=e.selected,a=e.onClickTORemovePost,i=e.onClickTOCheckPost,n=(e.updateStatus,e.updateStatusC),c=e.updateStatusTag,o=e.updateStatusCopy,r=e.captionStatus,d=e.tagsStatus,h=e.copyrightStatus,u=e.onChangeCaption,b=e.onChangeTags,f=e.onChangeCopyRight,w=e.captionText,y=e.tagstext,N=e.copyrightValue,k=e.onClickToAllCheck,C=e.checkAll,z=e.onCaptionSingle,M=e.onAddTagSingle,H=e.onCopyRightSingle,A=e.onAddTagSubmit,S=e.onSubmitCaption,T=e.onResetCaption,Z=e.onAddTagReset,B=this.state.isRequest;return(0,j.jsxs)("div",{className:"d-flex align-items-start flex-column flex-lg-row w-100",children:[(0,j.jsx)("div",{className:"innerModalAside flex-shrink-0 p-3",children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body",children:[(0,j.jsx)(p(),{children:(0,j.jsxs)("div",{className:"innerModalAsideWrapper p-xxl-1",children:[(0,j.jsxs)("div",{className:"d-flex align-items-center justify-content-between border-bottom pb-3 mb-4 d-lg-none",children:[(0,j.jsx)("h1",{className:"text-dark font-weight-bold mr-4 fs-6 mb-0",children:"Edit Image"}),(0,j.jsx)("div",{className:"d-flex align-items-start",children:(0,j.jsx)("button",{type:"button",className:"btn-close text-light",onClick:this.modalToggle})})]}),(0,j.jsxs)("label",{className:"form-check flex-grow-1 justify-content-between border-bottom pb-3 mb-3",children:[(0,j.jsxs)("span",{className:"form-check-label ps-0 me-1",children:["Select All (",t,")"]}),(0,j.jsx)("input",{className:"form-check-input",type:"checkbox",name:"",value:C,onClick:k})]}),(0,j.jsxs)("div",{className:"border-bottom pb-3 mb-3",children:[(0,j.jsxs)("div",{className:"form-check form-switch justify-content-between mb-2",children:[(0,j.jsxs)("label",{className:"form-check-label ps-0",htmlFor:"mediaCaption",children:["Caption",(0,j.jsx)(m.Z,{placement:"top",overlay:(0,j.jsx)(x.Z,{children:"Add a caption to all selected assets."}),children:(0,j.jsx)("span",{className:"svg-icon svg-icon-6 ms-1",children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,j.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,j.jsx)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z",fill:"currentColor"})]})})})]}),(0,j.jsx)("input",{className:"form-check-input",type:"checkbox",id:"mediaCaption",value:r,onClick:n})]}),(0,j.jsx)("textarea",{type:"text",className:"form-control textarea-min-row-4",placeholder:"Add your caption here...",rows:6,onChange:u,value:w})]}),(0,j.jsxs)("div",{className:"border-bottom pb-3 mb-3",children:[(0,j.jsxs)("div",{className:"form-check form-switch justify-content-between mb-2",children:[(0,j.jsxs)("label",{className:"form-check-label ps-0",htmlFor:"addTag",children:["Add Tag",(0,j.jsx)(m.Z,{placement:"top",overlay:(0,j.jsx)(x.Z,{children:"Select assets and add a tag to categorize your visuals."}),children:(0,j.jsx)("span",{className:"svg-icon svg-icon-6 ms-1",children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,j.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,j.jsx)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z",fill:"currentColor"})]})})})]}),(0,j.jsx)("input",{className:"form-check-input",type:"checkbox",value:d,id:"addTag",onClick:c})]}),(0,j.jsx)("input",{type:"text",className:"form-control",placeholder:"Add tag here..",onChange:b,value:y})]}),(0,j.jsxs)("div",{className:"pb-3 mb-3",children:[(0,j.jsxs)("div",{className:"form-check form-switch justify-content-between mb-2",children:[(0,j.jsxs)("label",{className:"form-check-label ps-0",htmlFor:"mediaCopyright",children:["Copyright",(0,j.jsx)(m.Z,{placement:"top",overlay:(0,j.jsx)(x.Z,{children:"Get copyright for your content and avoid any legal issues in the future."}),children:(0,j.jsx)("span",{className:"svg-icon svg-icon-6 ms-1",children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,j.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,j.jsx)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z",fill:"currentColor"})]})})})]}),(0,j.jsx)("input",{className:"form-check-input",type:"checkbox",value:h,id:"mediaCopyright",onClick:o})]}),(0,j.jsxs)("div",{className:"d-flex align-items-center pt-1",children:[(0,j.jsxs)("div",{className:"form-check me-3",children:[(0,j.jsx)("input",{className:"form-check-input",type:"radio",name:"copyright",value:1==N?"yes":"",id:"copyrightYes",onClick:f(!0)}),(0,j.jsx)("label",{className:"form-check-label text-muted",htmlFor:"copyrightYes",children:"Yes"})]}),(0,j.jsxs)("div",{className:"form-check",children:[(0,j.jsx)("input",{className:"form-check-input",type:"radio",name:"copyright",value:0==N?"no":"",id:"copyrightNo",onClick:f(!1)}),(0,j.jsx)("label",{className:"form-check-label text-muted",htmlFor:"copyrightNo",children:"No"})]})]})]})]})}),(0,j.jsx)("div",{className:"innerAsideActions p-xxl-1",children:(0,j.jsxs)("button",{className:"btn btn-primary w-100 ".concat(B?"spinner":""),onClick:this.onClickUploaded,children:["Upload Assets (",t,")"]})})]})})}),(0,j.jsx)("div",{className:"innerModalWrap d-flex flex-grow-1 w-100 flex-column py-3",children:(0,j.jsx)("div",{className:"container-fluid",children:s?(0,j.jsx)("div",{className:"row gx-2",children:s.map((function(e,s){return(0,j.jsx)("div",{className:"uploadedAssetsGrid",children:(0,j.jsx)("div",{className:"card card-custom mb-2",children:(0,j.jsxs)("div",{className:"card-body d-flex flex-column p-2",children:[(0,j.jsxs)("div",{className:"d-flex align-items-center justify-content-between pb-2",children:[(0,j.jsx)("div",{className:"d-flex align-items-start",children:(0,j.jsx)("label",{className:"form-check me-2",children:(0,j.jsx)("input",{className:"form-check-input",type:"checkbox",name:"",value:"phone",checked:e.checked,onClick:i(s)})})}),(0,j.jsx)("div",{className:"d-flex align-items-start",children:(0,j.jsx)("button",{type:"button",className:"btn btn-icon h-20px w-20px",onClick:a(s),children:(0,j.jsx)("span",{className:"svg-icon me-0",children:(0,j.jsx)("svg",{className:"h-12px w-12px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:(0,j.jsx)("path",{d:"M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z",fill:"currentColor"})})})})})]}),(0,j.jsxs)("div",{className:"d-flex align-items-center flex-column cursor-pointer",children:[(0,j.jsx)(v.default,{mediaType:2,postFile:e.postFile,socialNetwork:0,textContent:e.content,rating:4,mediaHeight:466,mediaWidth:878}),(0,j.jsxs)("div",{className:"w-100 pt-2",children:[(0,j.jsxs)(g.Z,{className:"position-relative",id:"tag".concat(s),children:[(0,j.jsxs)(g.Z.Toggle,{variant:"btn",className:"d-flex input-group p-0 arrow_disabled mb-2",children:[(0,j.jsx)("input",(0,l.Z)({className:"form-control form-control-sm fs-10 d-flex overflow-hidden",style:{minHeight:30},placeholder:"Enter Tags...","aria-label":"Enter Tags...","aria-describedby":"enterTags",readOnly:!0,value:e.addTags},"value","tag1, tag22, tagg4, tagg45, tagg, tagg43, tagg")),(0,j.jsx)("button",{type:"button",className:"input-group-text svg-icon svg-icon-7 me-0 px-2 text-gray-800",id:"enterTags",children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,j.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,j.jsx)("path",{d:"M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z",fill:"currentColor"})]})})]}),(0,j.jsxs)(g.Z.Menu,{className:"popover p-2 bg-light position-absolute start-0 top-0 w-100 rounded-1 box-shadow",children:[(0,j.jsxs)("div",{className:"d-flex align-items-center justify-content-between mb-2",children:[(0,j.jsx)("div",{className:"fs-9 fw-semibold text-gray-800",children:"Add Tags"}),(0,j.jsx)(m.Z,{placement:"top",overlay:(0,j.jsx)(x.Z,{children:"Reset"}),children:(0,j.jsx)("button",{type:"button",className:"btn btn-sm btn-icon btn-active-light btn-active-color-primary p-0 h-24px w-24px",onClick:Z(s),children:(0,j.jsx)("span",{className:"svg-icon svg-icon-7 me-0",children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,j.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,j.jsx)("path",{d:"M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z",fill:"currentColor"})]})})})})]}),(0,j.jsxs)("div",{className:"d-flex w-100 flex-wrap",children:[(0,j.jsxs)("div",{className:"badge bg-secondary rounded-pill text-gray-800 border me-1 mb-1 px-2 d-flex align-items-center",style:{top:0,maxWidth:"100%"},children:[(0,j.jsx)("span",{className:"text-break",style:{whiteSpace:"normal"},children:"Flat"}),(0,j.jsx)("span",{className:"svg-icon svg-icon-7 me-0",children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,j.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,j.jsx)("path",{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"})]})})]}),(0,j.jsxs)("div",{className:"badge bg-secondary rounded-pill text-gray-800 border me-1 mb-1 px-2 d-flex align-items-center",style:{top:0,maxWidth:"100%"},children:[(0,j.jsx)("span",{className:"text-break",style:{whiteSpace:"normal"},children:"Flat"}),(0,j.jsx)("span",{className:"svg-icon svg-icon-7 me-0",children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,j.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,j.jsx)("path",{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"})]})})]}),(0,j.jsxs)("div",{className:"badge bg-secondary rounded-pill text-gray-800 border me-1 mb-1 px-2 d-flex align-items-center",style:{top:0,maxWidth:"100%"},children:[(0,j.jsx)("span",{className:"text-break",style:{whiteSpace:"normal"},children:"Flat"}),(0,j.jsx)("span",{className:"svg-icon svg-icon-7 me-0",children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,j.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,j.jsx)("path",{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"})]})})]}),(0,j.jsxs)("div",{className:"badge bg-secondary rounded-pill text-gray-800 border me-1 mb-1 px-2 d-flex align-items-center",style:{top:0,maxWidth:"100%"},children:[(0,j.jsx)("span",{className:"text-break",style:{whiteSpace:"normal"},children:"Flat"}),(0,j.jsx)("span",{className:"svg-icon svg-icon-7 me-0",children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,j.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,j.jsx)("path",{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"})]})})]}),(0,j.jsxs)("div",{className:"badge bg-secondary rounded-pill text-gray-800 border me-1 mb-1 px-2 d-flex align-items-center",style:{top:0,maxWidth:"100%"},children:[(0,j.jsx)("span",{className:"text-break",style:{whiteSpace:"normal"},children:"Flat"}),(0,j.jsx)("span",{className:"svg-icon svg-icon-7 me-0",children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,j.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,j.jsx)("path",{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"})]})})]}),(0,j.jsxs)("div",{className:"badge bg-secondary rounded-pill text-gray-800 border me-1 mb-1 px-2 d-flex align-items-center",style:{top:0,maxWidth:"100%"},children:[(0,j.jsx)("span",{className:"text-break",style:{whiteSpace:"normal"},children:"Flat"}),(0,j.jsx)("span",{className:"svg-icon svg-icon-7 me-0",children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,j.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,j.jsx)("path",{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"})]})})]})]}),(0,j.jsxs)("div",{className:"dropdown",children:[(0,j.jsx)("input",{className:"form-control form-control-sm fs-10 d-flex overflow-hidden",style:{minHeight:30},placeholder:"Enter Tags...",autocomplete:"off",onChange:M(s)}),(0,j.jsx)("div",{className:"dropdown-menu p-2 w-100 show",children:(0,j.jsx)(p(),{children:(0,j.jsxs)("div",{className:"list-autocomplete w-100",style:{maxHeight:150},children:[(0,j.jsx)("button",{type:"button",className:"dropdown-item fs-9 py-1 px-2 text-ellipsis d-block",children:"01 - Alpha  Barbuda"}),(0,j.jsx)("button",{type:"button",className:"dropdown-item fs-9 py-1 px-2 text-ellipsis d-block",children:"02 - Charlie Alpha"}),(0,j.jsx)("button",{type:"button",className:"dropdown-item fs-9 py-1 px-2 text-ellipsis d-block",children:"03 - Bravo Alpha"}),(0,j.jsx)("button",{type:"button",className:"dropdown-item fs-9 py-1 px-2 text-ellipsis d-block",children:"04 - Delta"}),(0,j.jsx)("button",{type:"button",className:"dropdown-item fs-9 py-1 px-2 text-ellipsis d-block",children:"01 - Alpha  Barbuda"}),(0,j.jsx)("button",{type:"button",className:"dropdown-item fs-9 py-1 px-2 text-ellipsis d-block",children:"02 - Charlie Alpha"}),(0,j.jsx)("button",{type:"button",className:"dropdown-item fs-9 py-1 px-2 text-ellipsis d-block",children:"03 - Bravo Alpha"}),(0,j.jsx)("button",{type:"button",className:"dropdown-item fs-9 py-1 px-2 text-ellipsis d-block",children:"04 - Delta"})]})})})]}),(0,j.jsx)("div",{className:"w-100 d-flex justify-content-end pt-2",children:(0,j.jsx)("button",{type:"submit",className:"btn btn-xs btn-primary",onClick:A(s),children:"Done"})})]})]}),(0,j.jsxs)(g.Z,{className:"position-relative",id:"caption".concat(s),children:[(0,j.jsxs)(g.Z.Toggle,{variant:"btn",className:"d-flex input-group p-0 arrow_disabled",children:[(0,j.jsx)("input",{type:"text",className:"form-control form-control-sm fs-10",style:{minHeight:30},placeholder:"Enter Caption...","aria-label":"Enter Caption...","aria-describedby":"mediaCaption",readOnly:!0,value:e.caption}),(0,j.jsx)("button",{type:"button",className:"input-group-text svg-icon svg-icon-7 me-0 px-2 text-gray-800",id:"mediaCaption",children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,j.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,j.jsx)("path",{d:"M16.757 3l-2 2H5v14h14V9.243l2-2V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12.757zm3.728-.9L21.9 3.516l-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z",fill:"currentColor"})]})})]}),(0,j.jsxs)(g.Z.Menu,{className:"popover p-2 bg-light position-absolute start-0 top-0 w-100 rounded-1 box-shadow",children:[(0,j.jsxs)("div",{className:"d-flex align-items-center justify-content-between mb-2",children:[(0,j.jsx)("div",{className:"fs-9 fw-semibold text-gray-800",children:"Add Caption"}),(0,j.jsx)(m.Z,{placement:"top",overlay:(0,j.jsx)(x.Z,{children:"Reset"}),children:(0,j.jsx)("button",{type:"button",className:"btn btn-sm btn-icon btn-active-light btn-active-color-primary p-0 h-24px w-24px",onClick:T(s),children:(0,j.jsx)("span",{className:"svg-icon svg-icon-7 me-0",children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,j.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,j.jsx)("path",{d:"M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z",fill:"currentColor"})]})})})})]}),(0,j.jsx)("textarea",{className:"form-control form-control-sm textarea-min-row-4",onChange:z(s),children:e.caption}),(0,j.jsx)("div",{className:"w-100 d-flex justify-content-end pt-2",children:(0,j.jsx)("button",{type:"submit",className:"btn btn-xs btn-primary",onClick:S(s),children:"Done"})})]})]}),(0,j.jsxs)("div",{className:"d-flex flex-wrap justify-content-between pt-2",children:[(0,j.jsx)("label",{className:"text-gray-800 fs-9 pe-2",children:"Copyright"}),(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[(0,j.jsxs)("div",{className:"form-check me-3",children:[(0,j.jsx)("input",{className:"form-check-input",type:"radio",id:"copyrightPostYes",checked:1==e.copyright,onClick:H(s,!0)}),(0,j.jsx)("label",{className:"form-check-label fs-9",htmlFor:"copyrightPostYes",children:"Yes"})]}),(0,j.jsxs)("div",{className:"form-check",children:[(0,j.jsx)("input",{className:"form-check-input",type:"radio",id:"copyrightPostNo",checked:0==e.copyright,onClick:H(s,!1)}),(0,j.jsx)("label",{className:"form-check-label fs-9",htmlFor:"copyrightPostNo",children:"No"})]})]})]})]})]})]})})},e.postId)}))}):null})})]})}}]),t}(r.Component);s.default=(0,d.$j)((function(e){return{}}),(function(e){return{createAssets:function(s,t){return e((0,u.uv)(s,t))}}}))(b)}}]);
//# sourceMappingURL=2355.9295e065.chunk.js.map