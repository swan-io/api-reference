"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[76074],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=d(n),p=o,y=s["".concat(c,".").concat(p)]||s[p]||m[p]||i;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:o,l[1]=a;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94793:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>s,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>a,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(83117),o=n(67294),i=n(3905);const l={id:"identity-document-type",title:"IdentityDocumentType",hide_table_of_contents:!1},a=void 0,c={unversionedId:"enums/identity-document-type",id:"enums/identity-document-type",title:"IdentityDocumentType",description:"The type of the identity document",source:"@site/docs/enums/identity-document-type.mdx",sourceDirName:"enums",slug:"/enums/identity-document-type",permalink:"/enums/identity-document-type",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/identity-document-type.mdx",tags:[],version:"current",frontMatter:{id:"identity-document-type",title:"IdentityDocumentType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"IdentificationsOrderByField",permalink:"/enums/identifications-order-by-field"},next:{title:"IndividualUltimateBeneficialOwnerTypeEnum",permalink:"/enums/individual-ultimate-beneficial-owner-type-enum"}},d={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>IdentityDocumentType.<b>IdCard</b></code>",id:"code-style-fontweight-normal-identitydocumenttypebidcardbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IdentityDocumentType.<b>Passport</b></code>",id:"code-style-fontweight-normal-identitydocumenttypebpassportbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IdentityDocumentType.<b>ResidencePermit</b></code>",id:"code-style-fontweight-normal-identitydocumenttypebresidencepermitbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IdentityDocumentType.<b>DriversLicense</b></code>",id:"code-style-fontweight-normal-identitydocumenttypebdriverslicensebcode",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:u,Bullet:s,SpecifiedBy:m,Badge:p},f="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The type of the identity document"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum IdentityDocumentType {\n  IdCard\n  Passport\n  ResidencePermit\n  DriversLicense\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-identitydocumenttypebidcardbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IdentityDocumentType.",(0,i.kt)("b",null,"IdCard")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-identitydocumenttypebpassportbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IdentityDocumentType.",(0,i.kt)("b",null,"Passport")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-identitydocumenttypebresidencepermitbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IdentityDocumentType.",(0,i.kt)("b",null,"ResidencePermit")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-identitydocumenttypebdriverslicensebcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IdentityDocumentType.",(0,i.kt)("b",null,"DriversLicense")))),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/objects/identification"},(0,i.kt)("inlineCode",{parentName:"a"},"Identification")),"  ",(0,i.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);