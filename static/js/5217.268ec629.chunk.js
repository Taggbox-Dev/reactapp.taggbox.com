"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[5217],{5217:function(e,s,n){n.r(s);var l=n(15671),i=n(43144),o=n(60136),t=n(29388),a=n(72791),c=n(47798),r=n(12576),d=n(56600),m=n(64802),p=n(22109),x=n(80184),h=function(e){(0,o.Z)(n,e);var s=(0,t.Z)(n);function n(){return(0,l.Z)(this,n),s.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.props,s=e.state,n=e.onChangeComment,l=e.onClicktnc,i=e.onClickClearFile,o=e.uppyPostEdit,t=e.uppy,a=e.onLogoClose,h=e.onLogoOpen,u=e.onClickToRemoveLogo,f=e.onFileOpen,j=e.onFileClose;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"p-lg-6 p-3",children:[(0,x.jsx)("h3",{className:"mb-2 fs-7",children:(0,x.jsxs)("span",{className:"fw-medium",children:["Brand Logo ",(0,x.jsx)("span",{className:"text-gray-500",children:"(Optional)"})]})}),(0,x.jsx)("div",{className:"mb-4 ugc_add_logo w-50",children:s.client_logo?(0,x.jsxs)("div",{className:"d-flex align-items-center border px-5 py-3 rounded-1",children:[(0,x.jsx)("div",{className:"me-3 me-xxl-4",children:(0,x.jsx)("img",{className:"img-fluid object-center-contain",src:s.client_logo,height:112,width:237,alt:"logo"})}),(0,x.jsx)("div",{className:"d-flex align-items-center flex-wrap",children:(0,x.jsxs)("div",{className:"d-flex flex-column align-items-center flex-nowrap mb-0",children:[(0,x.jsx)(c.Z,{placement:"top",overlay:(0,x.jsx)(r.Z,{children:"Edit"}),children:(0,x.jsx)("button",{type:"button",className:"btn btn-icon btn-active-light p-0 w-30px h-30px transition-none border-0 my-1",onClick:h,children:(0,x.jsx)("i",{className:"ri-edit-box-line icon-6"})})}),(0,x.jsx)(c.Z,{placement:"top",overlay:(0,x.jsx)(r.Z,{children:"Remove"}),children:(0,x.jsx)("button",{type:"button",className:"btn btn-icon btn-active-light p-0 w-30px h-30px transition-none border-0 my-1",onClick:u,children:(0,x.jsx)("i",{className:"ri-delete-bin-6-line icon-6"})})})]})})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"uppy-DragDrop-inner",onClick:h,children:[(0,x.jsxs)("div",{className:"uppy-DragDrop-label",children:["Drop here or ",(0,x.jsx)("span",{className:"uppy-DragDrop-browse",children:"browse"})]}),(0,x.jsx)("span",{className:"uppy-DragDrop-note"})]}),(0,x.jsx)("div",{className:"form-text mt-1",children:"Allowed file types: png, jpg, jpeg."})]})}),(0,x.jsx)("h3",{className:"mb-2 fs-7",children:(0,x.jsxs)("span",{className:"fw-medium",children:["Comment ",(0,x.jsx)("strong",{className:"text-danger",children:"*"})]})}),(0,x.jsxs)("div",{className:"mb-4",children:[(0,x.jsx)("textarea",{type:"text",className:"form-control form-control-lg textarea-min-row-3 ".concat(s.commentError?"is-invalid":""),rows:4,placeholder:"Add Comment",onChange:n,value:s.comment}),s.commentError?(0,x.jsx)("div",{className:"invalid-feedback",children:"Please enter text"}):null]}),(0,x.jsx)("h3",{className:"mb-2 fs-7",children:(0,x.jsxs)("span",{className:"fw-medium",children:["Terms and Conditions ",(0,x.jsx)("strong",{className:"text-danger",children:"*"})]})}),(0,x.jsxs)("div",{className:"mb-8",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center border rounded-1 p-1 ".concat(s.tncUrlError?"is-invalid":""),children:[(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"uppy-FileInput-container",onClick:f,children:[(0,x.jsx)("input",{className:"uppy-FileInput-input",type:"file",name:"files[]",accept:"application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document",style:{width:"0.1px",height:"0.1px",opacity:0,overflow:"hidden",position:"absolute",zIndex:"-1"}}),(0,x.jsx)("button",{className:"uppy-FileInput-btn",type:"button",children:"Choose files"})]})}),(0,x.jsx)("div",{className:"d-flex align-items-center overflow-hidden",children:s.tncName?(0,x.jsxs)("div",{className:"d-flex align-items-center px-2 overflow-hidden",children:[(0,x.jsx)("span",{className:"text-ellipsis",children:s.tncName}),(0,x.jsx)("button",{type:"button",className:"btn-close ms-2 d-flex flex-shrink-0",onClick:i})]}):null})]}),s.tncUrlError?(0,x.jsx)("div",{className:"invalid-feedback",children:"Please Add Terms and Conditions"}):null,(0,x.jsx)("div",{className:"d-flex w-100 justify-content-start mt-2",children:(0,x.jsxs)("button",{type:"button",className:"btn p-0 text-decoration-underline",onClick:function(){return(0,m.saveAs)((0,d.F)("media/downloads/Terms&ConditionsforuseofUGC.docx"),"Terms&ConditionsforuseofUGC.docx")},children:[(0,x.jsx)("span",{className:"text-right",children:"Use our predefined Content"}),(0,x.jsx)("i",{className:"ri-download-2-line ms-1"})]})})]}),(0,x.jsxs)("div",{className:"mb-4",children:[(0,x.jsxs)("label",{className:"form-check form-check-inline is-invalid",children:[(0,x.jsx)("input",{className:"form-check-input",type:"checkbox",name:"tandc",checked:s.tnc,onChange:l,style:{marginTop:3}}),(0,x.jsxs)("span",{className:"form-check-label fw-medium",children:["Accept our",(0,x.jsx)("a",{className:"ms-1 link-primary text-decoration-none fw-bolder",href:"https://taggbox.com/terms-of-service/",target:"_blank",children:" Terms & Conditions "}),"then click on Next Step."]})]}),s.tncError?(0,x.jsx)("div",{className:"invalid-feedback",children:"Please Select Terms and Conditions"}):null]})]}),s.logoModal?(0,x.jsx)(p.j6,{animateOpenClose:!0,proudlyDisplayPoweredByUppy:!1,inline:!1,showProgressDetails:!0,height:750,browserBackButtonClose:!0,showRemoveButtonAfterComplete:!1,uppy:t,open:!0,onRequestCloseModal:a,closeAfterFinish:!0,plugins:[]}):null,s.fileModal?(0,x.jsx)(p.j6,{animateOpenClose:!0,proudlyDisplayPoweredByUppy:!1,inline:!1,showProgressDetails:!0,height:750,browserBackButtonClose:!0,showRemoveButtonAfterComplete:!1,uppy:o,open:!0,onRequestCloseModal:j,closeAfterFinish:!0,plugins:[]}):null]})}}]),n}(a.Component);s.default=h}}]);
//# sourceMappingURL=5217.268ec629.chunk.js.map