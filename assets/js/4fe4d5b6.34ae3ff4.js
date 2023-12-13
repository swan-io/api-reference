"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[54334],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var o=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,o,n=function(t,e){if(null==t)return{};var a,o,n={},s=Object.keys(t);for(o=0;o<s.length;o++)a=s[o],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)a=s[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var r=o.createContext({}),c=function(t){var e=o.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return o.createElement(r.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var a=t.components,n=t.mdxType,s=t.originalType,r=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(a),f=n,m=d["".concat(r,".").concat(f)]||d[f]||u[f]||s;return a?o.createElement(m,i(i({ref:e},p),{},{components:a})):o.createElement(m,i({ref:e},p))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=a.length,i=new Array(s);i[0]=f;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=t,l[d]="string"==typeof t?t:n,i[1]=l;for(var c=2;c<s;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}f.displayName="MDXCreateElement"},85184:(t,e,a)=>{a.r(e),a.d(e,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=a(83117),n=a(67294),s=a(3905);const i={id:"capital-deposit-document-uploaded-status-info",title:"CapitalDepositDocumentUploadedStatusInfo",hide_table_of_contents:!1},l=void 0,r={unversionedId:"objects/capital-deposit-document-uploaded-status-info",id:"objects/capital-deposit-document-uploaded-status-info",title:"CapitalDepositDocumentUploadedStatusInfo",description:"Capital Deposit Document with Uploaded status",source:"@site/docs/objects/capital-deposit-document-uploaded-status-info.mdx",sourceDirName:"objects",slug:"/objects/capital-deposit-document-uploaded-status-info",permalink:"/objects/capital-deposit-document-uploaded-status-info",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/capital-deposit-document-uploaded-status-info.mdx",tags:[],version:"current",frontMatter:{id:"capital-deposit-document-uploaded-status-info",title:"CapitalDepositDocumentUploadedStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CapitalDepositDocumentRefusedStatusInfo",permalink:"/objects/capital-deposit-document-refused-status-info"},next:{title:"CapitalDepositDocumentValidatedStatusInfo",permalink:"/objects/capital-deposit-document-validated-status-info"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositDocumentUploadedStatusInfo.<b>status</b></code><Bullet /><code>CapitalDepositDocumentStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-capitaldepositdocumentuploadedstatusinfobstatusbcodecapitaldepositdocumentstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>CapitalDepositDocumentStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"capitaldepositdocumentstatusinfo-",level:4}],d=()=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=t=>(0,s.kt)(n.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),f=t=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+t.class},t.text)),m={toc:p,Bullet:d,SpecifiedBy:u,Badge:f},y="wrapper";function b(t){let{components:e,...a}=t;return(0,s.kt)(y,(0,o.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Capital Deposit Document with Uploaded status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type CapitalDepositDocumentUploadedStatusInfo implements CapitalDepositDocumentStatusInfo {\n  status: CapitalDepositDocumentStatus!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositdocumentuploadedstatusinfobstatusbcodecapitaldepositdocumentstatus--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositDocumentUploadedStatusInfo.",(0,s.kt)("b",null,"status"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/enums/capital-deposit-document-status"},(0,s.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocumentStatus!"))," ",(0,s.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Uploaded")),(0,s.kt)("h3",{id:"interfaces"},"Interfaces"),(0,s.kt)("h4",{id:"capitaldepositdocumentstatusinfo-"},(0,s.kt)("a",{parentName:"h4",href:"/interfaces/capital-deposit-document-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocumentStatusInfo"))," ",(0,s.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Status info of the document.")))}b.isMDXComponent=!0}}]);