"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[27251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),i=s(n),g=l,p=i["".concat(d,".").concat(g)]||i[g]||m[g]||o;return n?a.createElement(p,c(c({ref:t},u),{},{components:n})):a.createElement(p,c({ref:t},u))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,c=new Array(o);c[0]=g;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[i]="string"==typeof e?e:l,c[1]=r;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},81186:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>i,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var a=n(83117),l=n(67294),o=n(3905);const c={id:"legal-document",title:"LegalDocument",hide_table_of_contents:!1},r=void 0,d={unversionedId:"objects/legal-document",id:"objects/legal-document",title:"LegalDocument",description:"No description",source:"@site/docs/objects/legal-document.mdx",sourceDirName:"objects",slug:"/objects/legal-document",permalink:"/objects/legal-document",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/legal-document.mdx",tags:[],version:"current",frontMatter:{id:"legal-document",title:"LegalDocument",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"LegalDocumentUpcomingStatusInfo",permalink:"/objects/legal-document-upcoming-status-info"},next:{title:"LegalRepresentativeAccountMembershipCannotBeDisabledRejection",permalink:"/objects/legal-representative-account-membership-cannot-be-disabled-rejection"}},s={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocument.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-legaldocumentbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocument.<b>type</b></code><Bullet /><code>LegalDocumentType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-legaldocumentbtypebcodelegaldocumenttype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocument.<b>statusInfo</b></code><Bullet /><code>LegalDocumentStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-legaldocumentbstatusinfobcodelegaldocumentstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocument.<b>language</b></code><Bullet /><code>AccountLanguage!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-legaldocumentblanguagebcodeaccountlanguage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocument.<b>url</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-legaldocumentburlbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],i=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:u,Bullet:i,SpecifiedBy:m,Badge:g},f="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type LegalDocument {\n  id: ID!\n  type: LegalDocumentType!\n  statusInfo: LegalDocumentStatusInfo!\n  language: AccountLanguage!\n  url: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LegalDocument.",(0,o.kt)("b",null,"id"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ID of the legal document")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentbtypebcodelegaldocumenttype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LegalDocument.",(0,o.kt)("b",null,"type"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/enums/legal-document-type"},(0,o.kt)("inlineCode",{parentName:"a"},"LegalDocumentType!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Type of the legal document")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentbstatusinfobcodelegaldocumentstatusinfo--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LegalDocument.",(0,o.kt)("b",null,"statusInfo"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/interfaces/legal-document-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"LegalDocumentStatusInfo!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Status of the Legal Document")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentblanguagebcodeaccountlanguage--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LegalDocument.",(0,o.kt)("b",null,"language"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/enums/account-language"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountLanguage!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Language of the Legal Document")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentburlbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LegalDocument.",(0,o.kt)("b",null,"url"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Url to download the Document")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/objects/legal-document-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"LegalDocumentEdge")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);