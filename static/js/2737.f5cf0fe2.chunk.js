"use strict";(self.webpackChunkugc_suite_build=self.webpackChunkugc_suite_build||[]).push([[2737],{62737:function(e,t,s){s.r(t);var n=s(15671),a=s(43144),o=s(97326),i=s(60136),l=s(29388),m=s(1413),r=s(72791),c=s(9085),d=s(28949),h=s(92719),p=s(67839),u=(s(42195),s(56600)),g=s(22460),_=s(80426),f=s(41342),S=s(49339),x=s(13062),b=s(27064),j=s(8903),k=s(79098),y=s(9299),T=s(22141),v=s(53446),C=s(71801),D=s(57420),F=s(77616),I=s(72305),N=s(80184),Z=r.lazy((function(){return s.e(8059).then(s.bind(s,18059))})),U=r.lazy((function(){return s.e(6459).then(s.bind(s,96459))})),P=r.lazy((function(){return s.e(7685).then(s.bind(s,87685))})),w=r.lazy((function(){return s.e(4559).then(s.bind(s,84559))})),O=function(e){var t=e.themeName,s=e.templateFormData,n=e.onClickToPopUp;switch(t){case 20:default:return(0,N.jsx)(x.Z,(0,m.Z)((0,m.Z)({themeId:t},s),{},{onClickToPopUp:n}));case 4:return(0,N.jsx)(S.Z,(0,m.Z)((0,m.Z)({themeId:t},s),{},{onClickToPopUp:n}));case 47:return(0,N.jsx)(b.Z,(0,m.Z)((0,m.Z)({themeId:t},s),{},{onClickToPopUp:n}));case 21:return(0,N.jsx)(j.Z,(0,m.Z)((0,m.Z)({themeId:t},s),{},{onClickToPopUp:n}));case 44:return(0,N.jsx)(k.Z,(0,m.Z)((0,m.Z)({themeId:t},s),{},{onClickToPopUp:n}));case 50:return(0,N.jsx)(y.Z,(0,m.Z)((0,m.Z)({themeId:t},s),{},{onClickToPopUp:n}));case 58:return(0,N.jsx)(T.Z,(0,m.Z)((0,m.Z)({themeId:t},s),{},{onClickToPopUp:n}))}},A=function(e){(0,i.Z)(s,e);var t=(0,l.Z)(s);function s(e){var a;return(0,n.Z)(this,s),(a=t.call(this,e)).onChooseTheme=function(e,t){return function(s){a.setState({selectedTheme:e,selectedThemeData:t})}},a.onTextTemplateName=function(e){a.setState({templateName:e.target.value,tempError:!1})},a.tempFormData=function(e){a.setState({templateFormData:e})},a.onClickSaveChanges=function(e){var t=a.state,s=t.templateFormData,n=t.templateName,i=t.selectedThemeData,l=a.props,m=l.templateId,r=l.onSiteSetting;if(s&&Object.keys(s).length>0&&String(n).length>0){var d=(0,o.Z)(a),h={network:r.network,filter:r.filter,moderation:r.moderation,onsite_qr_code_btn_text:r.onsite_qr_code_btn_text,onsite_btn_color:s.onSiteUpload.bgColor,onsite_btn_txt_color:s.onSiteUpload.textColor,onsite_link_font_btn:r.onsite_link_font_btn,onsite_css_font_btn:r.onsite_css_font_btn,onsite_font_varient_btn:r.onsite_font_varient_btn,btn_fontSize:s.onSiteUpload.fontSize,onsite_qr_code_status:s.onSiteUpload.qrCodeStatus,onsite_popup_title:r.onsite_popup_title,onsite_popup_btn_txt:s.onSiteUpload.buttonText,onsite_popup_sub_heading:r.onsite_popup_sub_heading,onsite_term_url:r.onsite_term_url,onsiteImgBack:r.onsiteImgBack,onsite_logo:r.onsite_logo,Onsite_logoImageValue:r.Onsite_logoImageValue,onsite_bg_color_wg:r.onsite_bg_color_wg,onsiteBackImage:r.onsiteBackImage,onsite_bg_image_wg:r.onsite_bg_image_wg,Onsite_backImageValue:r.Onsite_backImageValue,onsite_succ_msg:r.onsite_succ_msg,onsite_thank_txt_color:r.onsite_thank_txt_color,onsite_link_font_msg:r.onsite_link_font_msg,onsite_css_font_msg:r.onsite_css_font_msg,onsite_font_varient_msg:r.onsite_font_varient_msg,onsite_thank_fontSize:r.onsite_thank_fontSize,onsite_status:s.onSiteUpload.buttonStatus,btn_radius:s.onSiteUpload.borderRadius},p={action:2,id:m,name:n,theme:i.themeId,cssStatus:s.customCss.cssStatus?1:0,css:s.customCss.css,backgroundColor:s.background.status?s.background.color:"",transparent:s.background.transparent?1:0,backgroundImage:s.background.image?s.background.image:"",backgroundImageId:0,link_font:s.cardStyle.fontFamily?s.cardStyle.fontFamily.family:"",css_font:s.cardStyle.fontFamily?s.cardStyle.fontFamily.family:"",font_varient:s.cardStyle.fontVarient&&Object.keys(s.cardStyle.fontVarient).length>0?s.cardStyle.fontVarient.value:"",fontColor:s.cardStyle.textColor,cardColor:s.cardStyle.cardColor,postText:0,postAuthor:s.advanced.author?1:0,postTime:s.advanced.time?1:0,postFeatured:s.themeSettings.postPopUp?1:0,minimumPostWidth:s.themeSettings.minPostWitdh,padding:s.themeSettings.postPadding,scrollDelay:s.themeSettings.scrollSpeed,slideDelay:s.themeSettings.timePerSlide,numberOfPosts:s.themeSettings.numberOfPosts,trimcontent:s.themeSettings.trimContent?1:0,playFullVideo:1,randomizePost:s.themeSettings.suffleAssets?1:0,hideUrls:s.themeSettings.hideUrls?1:0,fitRow:s.themeSettings.bestFit?1:0,roundEdge:5,cardType:1,socialAction:s.cardStyle.socialActions?1:0,timeForPopup:s.themeSettings.popUpduration,authorColor:s.cardStyle.authorColor,iconType:s.cardStyle.iconType?1:505,iconColor:s.cardStyle.socialIconColor,fontSize:parseInt(s.cardStyle.fontSize),shareOption:s.cardStyle.shareOptions?1:0,hideContent:s.advanced.hideContent?1:0,numberOfCoumn:s.themeSettings.columns&&Object.keys(s.themeSettings.columns).length>0?s.themeSettings.columns.value:0,slideDuration:0,slidePost:0,autoPlay:0,popupSlideShow:0,customUrl:s.themeSettings.popUpUrl&&String(s.themeSettings.popUpUrl).length>0?s.themeSettings.popUpUrl:"",showHideOldPost:8==s.themeSettings.hideOldAssets.range?s.themeSettings.hideOldAssets.showHideOldPost:0,showHideOlderPost:s.themeSettings.hideOldAssets.range?s.themeSettings.hideOldAssets.range:0,loadMoreStatus:s.themeSettings.showmore?1:0,autoScrollStatus:s.themeSettings.autoLoad?1:0,hidePosts:s.themeSettings.hideOldAssets.status?1:0,onsite_settings:JSON.stringify(h)};a.setState({isRequesting:!0,tempError:!1}),(0,C.Mn)(p).then((function(e){d.setState({isRequesting:!1,tempError:!1}),c.Am.success("Template has been successfully updated."),d.props.history("/template")})).catch((function(e){c.Am.error("some error occurred")}))}else 0==String(n).length&&a.setState({tempError:!0}),c.Am.error("Please check all required fields.")},a.onClickToPopUp=function(e){return function(t){a.setState({popupData:e})}},a.onClosePopUp=function(e){return a.setState({popupData:null})},a.state={templateName:e.defaultTheme&&e.defaultTheme.themeDefaultOption?e.defaultTheme.themeDefaultOption.name:"",selectedTheme:e.defaultTheme?{name:e.defaultTheme.name,themeId:e.defaultTheme.themeId}:{},selectedThemeData:e.defaultTheme?e.defaultTheme:null,templateFormData:null,isRequesting:!1,tempError:!1},a}return(0,a.Z)(s,[{key:"render",value:function(){var e=this,t=this.props,s=t.themeList,n=t.fonts,a=(t.activeTheme,t.onSiteSetting),o=this.state,i=o.selectedTheme,l=o.selectedThemeData,m=o.templateName,c=o.templateFormData,S=(o.currentTheme,o.isRequesting),x=o.tempError,b=o.popupData;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(v.Z,{fonts:n}),(0,N.jsx)("div",{className:"innerAside flex-shrink-0",children:(0,N.jsx)("div",{className:"card mb-4",children:(0,N.jsxs)("div",{className:"card-body p-0",children:[(0,N.jsxs)("div",{className:"p-3",children:[(0,N.jsxs)("div",{className:"pb-3",children:[(0,N.jsxs)("label",{className:"text-gray-800 mb-2",children:["Template Name ",(0,N.jsx)("strong",{className:"text-danger",children:"*"})]}),(0,N.jsxs)("div",{className:"",children:[(0,N.jsx)("input",{type:"text",name:"templateName",className:"form-control form-control-sm ".concat(x?"is-invalid":""),placeholder:"Enter Template name...",onChange:this.onTextTemplateName,value:m}),x?(0,N.jsx)("div",{className:"invalid-feedback",children:"Please provide template name"}):null]})]}),(0,N.jsxs)("div",{className:"template_aside_inner",children:[(0,N.jsx)(d.Z,{defaultActiveKey:"1",children:(0,N.jsxs)(d.Z.Item,{eventKey:"1",className:"pb-3",children:[(0,N.jsx)(d.Z.Header,{className:"w-100",children:(0,N.jsx)("span",{className:"fs-9 fw-medium",children:i&&i.name?i.name:"Choose Theme"})}),(0,N.jsx)(d.Z.Body,{className:"border rounded-1 mt-1",children:(0,N.jsx)(h.Z,{type:"radio",className:"flex-column w-100",name:"themeName",children:s.map((function(t,s){return(0,N.jsx)(p.Z,{id:"theme-".concat(t.themeId),className:"p-0 card rounded-1 text-decoration-none cursor-pointer mb-2 ".concat(t.themeId==i.themeId?"active":""),onClick:e.onChooseTheme({name:t.name,themeId:t.themeId},t),value:t.themeId,children:(0,N.jsx)("div",{className:"card-body p-2",children:(0,N.jsxs)("div",{className:"d-flex align-items-center",children:[(0,N.jsx)("div",{className:"symbol symbol-40 flex-shrink-0 me-2 text-gray-400",children:(0,N.jsx)("img",{className:"img-fluid",src:(0,u.F)("media/images/themes/".concat(t.themeId,".png")),height:"40",width:"40",alt:t.name})}),(0,N.jsxs)("div",{className:"overflow-hidden",children:[(0,N.jsx)("p",{className:"fs-8 fw-semibold mb-1 text-gray-dark text-ellipsis text-start",children:t.name}),(0,N.jsx)("p",{className:"fs-9 fw-semibold mb-0 text-gray-600 text-ellipsis text-start",children:1==t.product_type?"Widget":2==t.product_type?"Display":""})]})]})})},"theme_".concat(t.themeId))}))})})]})}),i&&Object.keys(i).length>0?(0,N.jsx)(N.Fragment,{children:4==i.themeId?(0,N.jsx)(r.Suspense,{fallback:(0,N.jsx)(N.Fragment,{}),children:(0,N.jsx)(U,{selectedThemeData:l,tempFormData:this.tempFormData,fonts:n,selectedTheme:i,onSiteSetting:a})}):21==i.themeId?(0,N.jsx)(r.Suspense,{fallback:(0,N.jsx)(N.Fragment,{}),children:(0,N.jsx)(_.Z,{selectedThemeData:l,tempFormData:this.tempFormData,fonts:n,selectedTheme:i,onSiteSetting:a})}):20==i.themeId?(0,N.jsx)(r.Suspense,{fallback:(0,N.jsx)(N.Fragment,{}),children:(0,N.jsx)(Z,{selectedThemeData:l,tempFormData:this.tempFormData,fonts:n,selectedTheme:i,onSiteSetting:a})}):44==i.themeId?(0,N.jsx)(r.Suspense,{fallback:(0,N.jsx)(N.Fragment,{}),children:(0,N.jsx)(f.Z,{selectedThemeData:l,tempFormData:this.tempFormData,fonts:n,selectedTheme:i,onSiteSetting:a})}):50==i.themeId?(0,N.jsx)(r.Suspense,{fallback:(0,N.jsx)(N.Fragment,{}),children:(0,N.jsx)(w,{selectedThemeData:l,tempFormData:this.tempFormData,fonts:n,selectedTheme:i,onSiteSetting:a})}):47==i.themeId?(0,N.jsx)(r.Suspense,{fallback:(0,N.jsx)(N.Fragment,{}),children:(0,N.jsx)(P,{selectedThemeData:l,tempFormData:this.tempFormData,fonts:n,selectedTheme:i,onSiteSetting:a})}):58==i.themeId?(0,N.jsx)(r.Suspense,{fallback:(0,N.jsx)(N.Fragment,{}),children:(0,N.jsx)(g.Z,{selectedThemeData:l,tempFormData:this.tempFormData,fonts:n,selectedTheme:i,onSiteSetting:a})}):null}):null]})]}),(0,N.jsx)("div",{className:"bg-white pt-2 w-100 p-3 rounded-2",children:(0,N.jsx)("button",{type:"button",className:"btn btn-primary w-100 ".concat(S?"spinner disabled":""),onClick:i?this.onClickSaveChanges:null,children:"Update Changes"})})]})})}),(0,N.jsx)("div",{className:"d-flex flex-column overflow-hidden w-100",children:(0,N.jsx)("div",{className:"card",children:(0,N.jsx)("div",{className:"card-body content_wrapper",children:(0,N.jsxs)("div",{className:"tb_app_container",children:[c&&Object.keys(c).length>0&&i&&Object.keys(i).length>0?(0,N.jsxs)("div",{className:"tb_app_wrapper",children:[[4,20,47,50].includes(i.themeId)?(0,N.jsx)(D.Z,{templateFormData:this.state.templateFormData}):null,(0,N.jsx)(O,{themeName:i.themeId,templateFormData:this.state.templateFormData,onClickToPopUp:this.onClickToPopUp}),[21,44,58].includes(i.themeId)?(0,N.jsx)(F.Z,{templateFormData:this.state.templateFormData}):null]},i.themeId):null,b?(0,N.jsx)(I.Z,{data:b,onClosePopUp:this.onClosePopUp}):null]})})})})]})}}]),s}(r.Component);t.default=(0,r.memo)(A)}}]);
//# sourceMappingURL=2737.f5cf0fe2.chunk.js.map