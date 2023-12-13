"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[42056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>r,kt:()=>v});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),c=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},r=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,r=s(e,["components","mdxType","originalType","parentName"]),f=c(n),p=a,v=f["".concat(d,".").concat(p)]||f[p]||u[p]||o;return n?i.createElement(v,l(l({ref:t},r),{},{components:n})):i.createElement(v,l({ref:t},r))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[f]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},69225:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>f,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>r});var i=n(83117),a=n(67294),o=n(3905);const l={id:"identification-level-status-info",title:"IdentificationLevelStatusInfo",hide_table_of_contents:!1},s=void 0,d={unversionedId:"unions/identification-level-status-info",id:"unions/identification-level-status-info",title:"IdentificationLevelStatusInfo",description:"Union representing all the possible statuses: not supported, not started, pending, valid, invalid, cancelled, expired",source:"@site/docs/unions/identification-level-status-info.mdx",sourceDirName:"unions",slug:"/unions/identification-level-status-info",permalink:"/unions/identification-level-status-info",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/identification-level-status-info.mdx",tags:[],version:"current",frontMatter:{id:"identification-level-status-info",title:"IdentificationLevelStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"IdentificationDocument",permalink:"/unions/identification-document"},next:{title:"InitiateCreditTransfersPayload",permalink:"/unions/initiate-credit-transfers-payload"}},c={},r=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>NotSupportedIdentificationLevelStatusInfo</code> <Badge class="secondary" text="object"/>',id:"notsupportedidentificationlevelstatusinfo-",level:4},{value:'<code>NotStartedIdentificationLevelStatusInfo</code> <Badge class="secondary" text="object"/>',id:"notstartedidentificationlevelstatusinfo-",level:4},{value:'<code>StartedIdentificationLevelStatusInfo</code> <Badge class="secondary" text="object"/>',id:"startedidentificationlevelstatusinfo-",level:4},{value:'<code>PendingIdentificationLevelStatusInfo</code> <Badge class="secondary" text="object"/>',id:"pendingidentificationlevelstatusinfo-",level:4},{value:'<code>ValidIdentificationLevelStatusInfo</code> <Badge class="secondary" text="object"/>',id:"valididentificationlevelstatusinfo-",level:4},{value:'<code>InvalidIdentificationLevelStatusInfo</code> <Badge class="secondary" text="object"/>',id:"invalididentificationlevelstatusinfo-",level:4},{value:'<code>CanceledIdentificationLevelStatusInfo</code> <Badge class="secondary" text="object"/>',id:"canceledidentificationlevelstatusinfo-",level:4},{value:'<code>ExpiredIdentificationLevelStatusInfo</code> <Badge class="secondary" text="object"/>',id:"expiredidentificationlevelstatusinfo-",level:4},{value:"Member of",id:"member-of",level:3}],f=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),v={toc:r,Bullet:f,SpecifiedBy:u,Badge:p},b="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,i.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Union representing all the possible statuses: not supported, not started, pending, valid, invalid, cancelled, expired\nEach variant contains its relevant data, for example invalid contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"reason")," field, expired contains an ",(0,o.kt)("inlineCode",{parentName:"p"},"expiredAt")," field, valid contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"documents")," field"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union IdentificationLevelStatusInfo = NotSupportedIdentificationLevelStatusInfo | NotStartedIdentificationLevelStatusInfo | StartedIdentificationLevelStatusInfo | PendingIdentificationLevelStatusInfo | ValidIdentificationLevelStatusInfo | InvalidIdentificationLevelStatusInfo | CanceledIdentificationLevelStatusInfo | ExpiredIdentificationLevelStatusInfo\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"notsupportedidentificationlevelstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/objects/not-supported-identification-level-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"NotSupportedIdentificationLevelStatusInfo"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Describes an identification level that's not supported for the process of the current identification")),(0,o.kt)("h4",{id:"notstartedidentificationlevelstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/objects/not-started-identification-level-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"NotStartedIdentificationLevelStatusInfo"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Describes an identification level that hasn't started for the process of the current identification")),(0,o.kt)("h4",{id:"startedidentificationlevelstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/objects/started-identification-level-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"StartedIdentificationLevelStatusInfo"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Describes an identification level that has started for the process of the current identification")),(0,o.kt)("h4",{id:"pendingidentificationlevelstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/objects/pending-identification-level-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PendingIdentificationLevelStatusInfo"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Describes an identification level that is pending for the process of the current identification, requiring an operation not related to the end-user to progress")),(0,o.kt)("h4",{id:"valididentificationlevelstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/objects/valid-identification-level-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"ValidIdentificationLevelStatusInfo"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Describes a valid identification level for the process associated to this identification, and identification documents can be accessed")),(0,o.kt)("h4",{id:"invalididentificationlevelstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/objects/invalid-identification-level-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"InvalidIdentificationLevelStatusInfo"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Describes an invalid identification level for the process associated to this identification, and the invalid reason can be accessed")),(0,o.kt)("h4",{id:"canceledidentificationlevelstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/objects/canceled-identification-level-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CanceledIdentificationLevelStatusInfo"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Describes an identification level for the process associated to this identification that has been cancelled by the end-user")),(0,o.kt)("h4",{id:"expiredidentificationlevelstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/objects/expired-identification-level-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"ExpiredIdentificationLevelStatusInfo"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Describes an identification level for the process associated to this identification that has expired and is no longer considered valid")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/objects/identification-level-statuses-info"},(0,o.kt)("inlineCode",{parentName:"a"},"IdentificationLevelStatusesInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);