"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[55616],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=o.createContext({}),p=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},c=function(t){var e=p(t.components);return o.createElement(i.Provider,{value:e},t.children)},l="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),l=p(n),m=r,f=l["".concat(i,".").concat(m)]||l[m]||d[m]||a;return n?o.createElement(f,u(u({ref:e},c),{},{components:n})):o.createElement(f,u({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,u=new Array(a);u[0]=m;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[l]="string"==typeof t?t:r,u[1]=s;for(var p=2;p<a;p++)u[p]=n[p];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96644:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>m,Bullet:()=>l,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var o=n(83117),r=n(67294),a=n(3905);const u={id:"supporting-document-not-uploaded-status-info",title:"SupportingDocumentNotUploadedStatusInfo",hide_table_of_contents:!1},s=void 0,i={unversionedId:"objects/supporting-document-not-uploaded-status-info",id:"objects/supporting-document-not-uploaded-status-info",title:"SupportingDocumentNotUploadedStatusInfo",description:"Supporting document with NotUploaded status.",source:"@site/docs/objects/supporting-document-not-uploaded-status-info.mdx",sourceDirName:"objects",slug:"/objects/supporting-document-not-uploaded-status-info",permalink:"/objects/supporting-document-not-uploaded-status-info",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/supporting-document-not-uploaded-status-info.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-not-uploaded-status-info",title:"SupportingDocumentNotUploadedStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentNotFoundRejection",permalink:"/objects/supporting-document-not-found-rejection"},next:{title:"SupportingDocumentPostField",permalink:"/objects/supporting-document-post-field"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentNotUploadedStatusInfo.<b>status</b></code><Bullet /><code>SupportingDocumentStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supportingdocumentnotuploadedstatusinfobstatusbcodesupportingdocumentstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>SupportingDocumentStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"supportingdocumentstatusinfo-",level:4}],l=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=t=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),m=t=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+t.class},t.text)),f={toc:c,Bullet:l,SpecifiedBy:d,Badge:m},g="wrapper";function y(t){let{components:e,...n}=t;return(0,a.kt)(g,(0,o.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Supporting document with NotUploaded status."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportingDocumentNotUploadedStatusInfo implements SupportingDocumentStatusInfo {\n  status: SupportingDocumentStatus!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentnotuploadedstatusinfobstatusbcodesupportingdocumentstatus--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentNotUploadedStatusInfo.",(0,a.kt)("b",null,"status"))),(0,a.kt)(l,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/enums/supporting-document-status"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatus!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When the document has not been updated on time.")),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"supportingdocumentstatusinfo-"},(0,a.kt)("a",{parentName:"h4",href:"/interfaces/supporting-document-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusInfo"))," ",(0,a.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}y.isMDXComponent=!0}}]);