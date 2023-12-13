"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[17463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),d=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(a.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,g=s["".concat(a,".").concat(m)]||s[m]||p[m]||c;return n?o.createElement(g,l(l({ref:t},u),{},{components:n})):o.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=m;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<c;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37197:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var o=n(83117),r=n(67294),c=n(3905);const l={id:"supporting-document-collection-not-found-rejection",title:"SupportingDocumentCollectionNotFoundRejection",hide_table_of_contents:!1},i=void 0,a={unversionedId:"objects/supporting-document-collection-not-found-rejection",id:"objects/supporting-document-collection-not-found-rejection",title:"SupportingDocumentCollectionNotFoundRejection",description:"Rejection returned if the supporting document collection was not found",source:"@site/docs/objects/supporting-document-collection-not-found-rejection.mdx",sourceDirName:"objects",slug:"/objects/supporting-document-collection-not-found-rejection",permalink:"/objects/supporting-document-collection-not-found-rejection",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/supporting-document-collection-not-found-rejection.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-collection-not-found-rejection",title:"SupportingDocumentCollectionNotFoundRejection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentCollectionEdge",permalink:"/objects/supporting-document-collection-edge"},next:{title:"SupportingDocumentCollectionPendingReviewStatusInfo",permalink:"/objects/supporting-document-collection-pending-review-status-info"}},d={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionNotFoundRejection.<b>id</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionnotfoundrejectionbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionNotFoundRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionnotfoundrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],s=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:u,Bullet:s,SpecifiedBy:p,Badge:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,c.kt)(f,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Rejection returned if the supporting document collection was not found"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportingDocumentCollectionNotFoundRejection implements Rejection {\n  id: String!\n  message: String!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionnotfoundrejectionbidbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionNotFoundRejection.",(0,c.kt)("b",null,"id"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionnotfoundrejectionbmessagebcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionNotFoundRejection.",(0,c.kt)("b",null,"message"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"rejection-"},(0,c.kt)("a",{parentName:"h4",href:"/interfaces/rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,c.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/unions/delete-supporting-document-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"DeleteSupportingDocumentPayload")),"  ",(0,c.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/unions/generate-supporting-document-upload-url-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"GenerateSupportingDocumentUploadUrlPayload")),"  ",(0,c.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/unions/request-supporting-document-collection-review-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"RequestSupportingDocumentCollectionReviewPayload")),"  ",(0,c.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/unions/update-supporting-document-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"UpdateSupportingDocumentPayload")),"  ",(0,c.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);