(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[1210],{81210:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var i=t(15671),o=t(43144),a=t(97326),s=t(60136),c=t(29388),l=t(72791),r=t(1413),d=t(45987),p=t(81694),v=t.n(p),u=t(10162),h=t(80184),f=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],m=l.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,o=e.striped,a=e.bordered,s=e.borderless,c=e.hover,l=e.size,p=e.variant,m=e.responsive,w=(0,d.Z)(e,f),x=(0,u.vE)(t,"table"),g=v()(i,x,p&&"".concat(x,"-").concat(p),l&&"".concat(x,"-").concat(l),o&&"".concat(x,"-").concat("string"===typeof o?"striped-".concat(o):"striped"),a&&"".concat(x,"-bordered"),s&&"".concat(x,"-borderless"),c&&"".concat(x,"-hover")),b=(0,h.jsx)("table",(0,r.Z)((0,r.Z)({},w),{},{className:g,ref:n}));if(m){var j="".concat(x,"-responsive");return"string"===typeof m&&(j="".concat(j,"-").concat(m)),(0,h.jsx)("div",{className:j,children:b})}return b})),w=t(25862),x=t(12576),g=t(72426),b=t.n(g),j=t(64802),y=t(18439),R=t(8663),N=t(63263),D=function(e){return N.Z.get("".concat(R.hI,"/").concat(e),{responseType:"arraybuffer",headers:{Accept:"application/pdf"}})},I=t(27487),k=l.lazy((function(){return t.e(1732).then(t.bind(t,61732))})),Z=l.lazy((function(){return t.e(4773).then(t.bind(t,54773))})),L=function(e){(0,s.Z)(t,e);var n=(0,c.Z)(t);function t(e){var o;return(0,i.Z)(this,t),(o=n.call(this,e)).state={viewInvoice:!1,viewInvoiceData:null,invoiceDownload:0,invoiceList:[],invoiceRequest:!0,invoiceDownloadRequest:!1,invoicePrintRequest:!1},o.viewInvoice=function(e){return function(n){o.setState({viewInvoice:!0,viewInvoiceData:e})}},o.viewInvoiceCallback=function(e){o.setState({viewInvoice:e,viewInvoiceData:null})},o.clickToInvoiceDownload=function(e){return function(n){o.setState({invoiceDownload:1});var t=(0,a.Z)(o);D(e).then((function(n){t.setState({invoiceDownload:2});var i=new Blob([n.data],{type:"application/pdf"});(0,j.saveAs)(i,"".concat(e,".pdf")),setTimeout((function(){t.setState({invoiceDownload:0})}),3e3)}))}},o.downloadInvoice=function(e){return function(n){o.setState({invoiceDownloadRequest:!0});var t=(0,a.Z)(o);D(e).then((function(n){var i=new Blob([n.data],{type:"application/pdf"});(0,j.saveAs)(i,"".concat(e,".pdf")),setTimeout((function(){t.setState({invoiceDownloadRequest:!1})}),3e3)}))}},o.printInvoice=function(e){return function(n){o.setState({invoicePrintRequest:!0});var t=(0,a.Z)(o);D(e).then((function(e){var n=new Blob([e.data],{type:"application/pdf"}),i=URL.createObjectURL(n);console.log("fileURL",i),window.open(i,"_blank"),setTimeout((function(){t.setState({invoicePrintRequest:!1})}),3e3)}))}},o.onLoadInvoice=function(){var e=(0,a.Z)(o);(new y.Z).get(R.oS).then((function(n){var t=n.data.response;e.setState({invoiceList:t,invoiceRequest:!1})}))},o}return(0,o.Z)(t,[{key:"componentDidMount",value:function(){this.onLoadInvoice()}},{key:"render",value:function(){var e=this,n=this.state,t=n.viewInvoice,i=n.invoiceDownload,o=n.invoiceList,a=n.invoiceRequest,s=n.viewInvoiceData,c=n.invoiceDownloadRequest,r=n.invoicePrintRequest;return console.log("invoiceList",o),(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("div",{className:"mt-xxl-3 mt-2",children:(0,h.jsx)("h3",{className:"fs-6 text-gray-800",children:"Invoice"})}),(0,h.jsx)("div",{className:"card mb-5",children:(0,h.jsx)("div",{className:"card-body p-lg-4 p-3",style:{minHeight:"calc(100vh - 400px)"},children:a?(0,h.jsx)(I.O,{}):o&&o.length>0?(0,h.jsxs)(m,{responsive:!0,className:"mb-0",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{className:"p-lg-4 p-sm-3 p-2",children:"Date"}),(0,h.jsx)("th",{className:"p-lg-4 p-sm-3 p-2",children:"Invoice Id"}),(0,h.jsx)("th",{className:"p-lg-4 p-sm-3 p-2",children:"Plan"}),(0,h.jsx)("th",{className:"p-lg-4 p-sm-3 p-2",children:"Amount"}),(0,h.jsx)("th",{className:"p-lg-4 p-sm-3 p-2",children:"Status"}),(0,h.jsx)("th",{className:"text-end p-lg-4 p-sm-3 p-2",align:"right",children:"Action"})]})}),(0,h.jsx)("tbody",{children:o.map((function(n,t){return(0,h.jsxs)("tr",{className:"align-middle",children:[(0,h.jsx)("td",{className:"p-lg-4 p-sm-3 p-2 text-nowrap",children:b()(n.invoiceDate).format("DD MMM YYYY")}),(0,h.jsx)("td",{className:"p-lg-4 p-sm-3 p-2 text-nowrap",children:n.invoiceId}),(0,h.jsx)("td",{className:"p-lg-4 p-sm-3 p-2 text-nowrap",children:n.plan}),(0,h.jsxs)("td",{className:"p-lg-4 p-sm-3 p-2 text-nowrap",children:[n.invoiceView.currencyValue,n.invoiceView.amountValue]}),(0,h.jsx)("td",{className:"p-lg-4 p-sm-3 p-2 text-nowrap",children:(0,h.jsx)("span",{className:"badge badge-light-success",children:"Paid"})}),(0,h.jsxs)("td",{className:"p-lg-4 p-sm-3 p-2 text-nowrap text-end",children:[(0,h.jsx)(w.Z,{placement:"top",overlay:(0,h.jsx)(x.Z,{children:"View"}),children:(0,h.jsx)("button",{type:"button",className:"btn btn-icon btn-active-light p-0 w-34px h-34px border-0 me-2",onClick:e.viewInvoice(n),children:(0,h.jsx)("span",{className:"svg-icon svg-icon-3 me-0",children:(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,h.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,h.jsx)("path",{id:"Path_5232","data-name":"Path 5232",d:"M21.87,11.5c-.64-1.11-4.16-6.68-10.14-6.5C6.2,5.14,3,10,2.13,11.5a1,1,0,0,0,0,1c.63,1.09,4,6.5,9.89,6.5h.25c5.53-.14,8.74-5,9.6-6.5A1,1,0,0,0,21.87,11.5ZM12.22,17c-4.31.1-7.12-3.59-8-5,1-1.61,3.61-4.9,7.61-5,4.29-.11,7.11,3.59,8,5-1.03,1.61-3.61,4.9-7.61,5Z",fill:"#545454"}),(0,h.jsx)("path",{id:"Path_5233","data-name":"Path 5233",d:"M12,8.5A3.5,3.5,0,1,0,15.5,12,3.5,3.5,0,0,0,12,8.5Zm0,5A1.5,1.5,0,1,1,13.5,12,1.5,1.5,0,0,1,12,13.5Z",fill:"#545454"})]})})})}),0===i?(0,h.jsx)(w.Z,{placement:"top",overlay:(0,h.jsx)(x.Z,{children:"Download"}),children:(0,h.jsx)("button",{type:"button",className:"btn btn-icon btn-active-light p-0 w-34px h-34px border-0",onClick:e.clickToInvoiceDownload(n.invoiceId),children:(0,h.jsx)("span",{className:"svg-icon svg-icon-3 me-0",children:(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,h.jsxs)("g",{id:"Download_6506","data-name":"Download 6506",transform:"translate(-23412 -236)",children:[(0,h.jsx)("rect",{id:"Rectangle_2094","data-name":"Rectangle 2094",width:"24",height:"24",transform:"translate(23412 236)",fill:"none"}),(0,h.jsx)("g",{id:"noun-download-4879420",transform:"translate(23332.367 197.581)",children:(0,h.jsx)("path",{id:"Path_6615","data-name":"Path 6615",d:"M84.068,44.107a.609.609,0,0,1,.9-.822l2.745,3v-9.4a.609.609,0,0,1,1.217,0v9.4l2.745-3a.609.609,0,0,1,.9.822l-3.8,4.154a.608.608,0,0,1-.9,0ZM97.45,45.512a.609.609,0,0,0-.609.609v5.552h-17.8V46.121a.609.609,0,0,0-1.218,0V52.28a.608.608,0,0,0,.609.609H97.45a.608.608,0,0,0,.609-.608v-6.16a.609.609,0,0,0-.609-.609Z",transform:"translate(3.814 4.128)",fill:"#545454",stroke:"#545454",strokeWidth:"0.8",fillRule:"evenodd"})})]})})})})}):1===i?(0,h.jsx)(w.Z,{placement:"top",overlay:(0,h.jsx)(x.Z,{children:"Downloading"}),children:(0,h.jsx)("button",{type:"button",className:"btn btn-icon btn-active-light p-0 w-34px h-34px border-0",children:(0,h.jsx)("div",{className:"spinner spinner-dark spinner-sm position-relative me-2"})})}):2===i?(0,h.jsx)(w.Z,{placement:"top",overlay:(0,h.jsx)(x.Z,{children:"Success"}),children:(0,h.jsx)("button",{type:"button",className:"btn btn-icon btn-active-light p-0 w-34px h-34px border-0",children:(0,h.jsx)("span",{className:"svg-icon svg-icon-3 me-0",children:(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",children:[(0,h.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,h.jsx)("path",{d:"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z",fill:"#6AC259"})]})})})}):null]})]},t)}))})]}):(0,h.jsx)(l.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(Z,{})})})}),s?(0,h.jsx)(l.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(k,{viewInvoiceCallback:this.viewInvoiceCallback,modalToggle:t,viewInvoiceData:s,clickToInvoiceDownload:this.downloadInvoice,printInvoice:this.printInvoice,invoiceDownloadRequest:c,invoicePrintRequest:r})}):null]})}}]),t}(l.Component)},64802:function(e,n,t){var i,o,a;o=[],i=function(){"use strict";function n(e,n){return"undefined"==typeof n?n={autoBom:!1}:"object"!=typeof n&&(console.warn("Deprecated: Expected third argument to be a object"),n={autoBom:!n}),n.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function i(e,n,t){var i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){l(i.response,n,t)},i.onerror=function(){console.error("could not download file")},i.send()}function o(e){var n=new XMLHttpRequest;n.open("HEAD",e,!1);try{n.send()}catch(e){}return 200<=n.status&&299>=n.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(i){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof t.g&&t.g.global===t.g?t.g:void 0,c=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,n,t){var c=s.URL||s.webkitURL,l=document.createElement("a");n=n||e.name||"download",l.download=n,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?a(l):o(l.href)?i(e,n,t):a(l,l.target="_blank")):(l.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(l.href)}),4e4),setTimeout((function(){a(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,t,s){if(t=t||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(n(e,s),t);else if(o(e))i(e,t,s);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){a(c)}))}}:function(e,n,t,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return i(e,n,t);var a="application/octet-stream"===e.type,l=/constructor/i.test(s.HTMLElement)||s.safari,r=/CriOS\/[\d]+/.test(navigator.userAgent);if((r||a&&l||c)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=r?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},d.readAsDataURL(e)}else{var p=s.URL||s.webkitURL,v=p.createObjectURL(e);o?o.location=v:location.href=v,o=null,setTimeout((function(){p.revokeObjectURL(v)}),4e4)}});s.saveAs=l.saveAs=l,e.exports=l},void 0===(a="function"===typeof i?i.apply(n,o):i)||(e.exports=a)}}]);
//# sourceMappingURL=1210.8be8cf4e.chunk.js.map