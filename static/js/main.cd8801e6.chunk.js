(this["webpackJsonpreact-frontend-dev-portfolio"]=this["webpackJsonpreact-frontend-dev-portfolio"]||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){e.exports=a(55)},41:function(e,t,a){},42:function(e,t,a){},53:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=53},55:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(14),r=a.n(i),c=(a(41),a(6)),l=a(7),o=a(9),m=a(8),d=a(23),u=a.n(d),p=(a(42),a(18)),h=a(26),f=a(28),E=a.n(f),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).titles=[],e.state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(p.a)(e)),e}return Object(l.a)(a,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e=document.body,t="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",t)}},{key:"render",value:function(){var e=this;if(this.props.sharedData){var t=this.props.sharedData.name;this.titles=this.props.sharedData.titles.map((function(e){return[e.toUpperCase(),1500]})).flat()}var a=s.a.memo((function(){return s.a.createElement(h.a,{className:"title-styles",steps:e.titles,loop:50})}),(function(e,t){return!0}));return s.a.createElement("header",{id:"home",style:{height:window.innerHeight-140,display:"block"}},s.a.createElement("div",{className:"row aligner",style:{height:"100%"}},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",null,s.a.createElement("span",{className:"iconify header-icon","data-icon":"line-md:coffee-half-empty-twotone-loop","data-inline":"false"}),s.a.createElement("br",null),s.a.createElement("h1",{className:"mb-0"},s.a.createElement(h.a,{steps:[t],wrapper:"p"})),s.a.createElement("div",{className:"title-container"},s.a.createElement(a,null)),s.a.createElement(E.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#a27bbc",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:s.a.createElement("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:s.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"})))))}}]),a}(n.Component),g=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo.social.map((function(e){return s.a.createElement("span",{key:e.name,className:"m-4"},s.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{className:e.class})))}));return s.a.createElement("footer",null,s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"social-links"},e),s.a.createElement("div",{className:"copyright py-4 text-center"},s.a.createElement("div",{className:"container"},s.a.createElement("small",null,"Copyright \xa9"," ",this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???")))))}}]),a}(n.Component),y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.sharedBasicInfo)this.props.sharedBasicInfo.image;if(this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.about,t=this.props.resumeBasicInfo.description_header,a=this.props.resumeBasicInfo.description;return s.a.createElement("section",{id:"about"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{style:{color:"black"}},s.a.createElement("span",null,e)),s.a.createElement("div",{className:"row center mx-auto mb-5"},s.a.createElement("div",{className:"col-md-8 center"},s.a.createElement("div",{className:"col-md-10"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",s.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",s.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),s.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},s.a.createElement("br",null),s.a.createElement("span",{className:"wave"},t," :) "),s.a.createElement("br",null),s.a.createElement("br",null),a)))))))}}]),a}(n.Component),b=a(22),N=(a(50),a(24)),w=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.resumeExperience&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.experience,t=this.props.resumeExperience.map((function(e,t){var a=e.technologies,n=e.mainTech.map((function(e,t){return s.a.createElement(N.a,{pill:!0,className:"main-badge mr-2 mb-2",key:t},e)})),i=a.map((function(e,t){return s.a.createElement(N.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:t},e)}));return s.a.createElement(b.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center",fontSize:"40px"},icon:s.a.createElement("i",{className:"devicon-csharp-plain"}),key:t},s.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},n),s.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),s.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),s.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},i))}));return s.a.createElement("section",{id:"resume",className:"pb-5"},s.a.createElement("div",{className:"col-md-12 mx-auto"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title",style:{color:"black"}},s.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e)))),s.a.createElement("div",{className:"col-md-8 mx-auto"},s.a.createElement(b.VerticalTimeline,null,t,s.a.createElement(b.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:s.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}]),a}(n.Component),k=a(58),j=a(29),x=a.n(j),O=a(30),I=a.n(O),S=a(31),B=a.n(S),D=(a(51),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.technologies,t=this.props.data.images,a=this.props.data.title,n=this.props.data.description,i=this.props.data.url;if(this.props.data.technologies){var r=e.map((function(e,t){return s.a.createElement("li",{className:"list-inline-item mx-3",key:t},s.a.createElement("span",null,s.a.createElement("div",{className:"text-center"},s.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},s.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name)))))}));if(this.props.data.images)var c=t.map((function(e,t){return s.a.createElement("div",{key:t,"data-src":e})}))}}return s.a.createElement(k.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),s.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},s.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},s.a.createElement("div",{className:"slider-tab"},s.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",s.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",s.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})),s.a.createElement(x.a,{cssModule:[I.a,B.a],animation:"scaleOutAnimation",className:"slider-image"},c)),s.a.createElement("div",{className:"col-md-10 mx-auto"},s.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},a,i?s.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"link-href"},s.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null),s.a.createElement("p",{className:"modal-description"},n),s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("ul",{className:"list-inline mx-auto"},r)))))}}]),a}(n.Component)),C=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={deps:{},detailsModalShow:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.projects,n=this.props.resumeProjects.map((function(t){return s.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:t.title,style:{cursor:"pointer"}},s.a.createElement("span",{className:"portfolio-item d-block"},s.a.createElement("div",{className:"foto",onClick:function(){return a=t,void e.setState({detailsModalShow:!0,deps:a});var a}},s.a.createElement("div",null,s.a.createElement("img",{src:a(53)(t.images[0]),alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),s.a.createElement("span",{className:"project-date"},t.startDate),s.a.createElement("br",null),s.a.createElement("p",{className:"project-title-settings mt-3"},t.title)))))}));return s.a.createElement("section",{id:"portfolio"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title",style:{color:"black"}},s.a.createElement("span",null,t)),s.a.createElement("div",{className:"col-md-12 mx-auto"},s.a.createElement("div",{className:"row mx-auto"},n)),s.a.createElement(D,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})))}}]),n}(n.Component),A=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,t=this.props.sharedSkills.icons.map((function(e,t){return s.a.createElement("li",{className:"list-inline-item mx-3",key:t},s.a.createElement("span",null,s.a.createElement("div",{className:"text-center skills-tile"},s.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},s.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return s.a.createElement("section",{id:"skills"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title"},s.a.createElement("span",{className:"text-white"},e))),s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},t))))}}]),a}(n.Component),_=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).state={foo:"bar",resumeData:{},sharedData:{}},n}return Object(l.a)(a,[{key:"swapCurrentlyActiveLanguage",value:function(e){var t=e===window.$primaryLanguageIconId?window.$secondaryLanguageIconId:window.$primaryLanguageIconId;document.getElementById(e).removeAttribute("filter","brightness(40%)"),document.getElementById(t).setAttribute("filter","brightness(40%)")}},{key:"componentDidMount",value:function(){this.loadSharedData(),this.loadResumeFromPath("res_primaryLanguage.json")}},{key:"loadResumeFromPath",value:function(e){u.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"loadSharedData",value:function(){u.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(v,{sharedData:this.state.sharedData.basic_info}),s.a.createElement(y,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),s.a.createElement(C,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(A,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(w,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(g,{sharedBasicInfo:this.state.sharedData.basic_info}))}}]),a}(n.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(54);window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",r.a.render(s.a.createElement(_,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");T?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.cd8801e6.chunk.js.map