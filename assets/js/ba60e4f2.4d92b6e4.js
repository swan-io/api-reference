"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[4143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(g,u(u({ref:t},c),{},{components:n})):r.createElement(g,u({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,u[1]=l;for(var i=2;i<a;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88029:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>u,metadata:()=>p,toc:()=>c});var r=n(83117),o=n(67294),a=n(3905);const u={id:"generate-supporting-document-upload-url",title:"generateSupportingDocumentUploadUrl",hide_table_of_contents:!1},l=void 0,p={unversionedId:"mutations/generate-supporting-document-upload-url",id:"mutations/generate-supporting-document-upload-url",title:"generateSupportingDocumentUploadUrl",description:"Generate and return a presigned URL to upload a unique file for the supporting document collection",source:"@site/docs/mutations/generate-supporting-document-upload-url.mdx",sourceDirName:"mutations",slug:"/mutations/generate-supporting-document-upload-url",permalink:"/mutations/generate-supporting-document-upload-url",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/generate-supporting-document-upload-url.mdx",tags:[],version:"current",frontMatter:{id:"generate-supporting-document-upload-url",title:"generateSupportingDocumentUploadUrl",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"generateCapitalDepositDocumentUploadUrl",permalink:"/mutations/generate-capital-deposit-document-upload-url"},next:{title:"grantConsentWithServerSignature",permalink:"/mutations/grant-consent-with-server-signature"}},i={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>generateSupportingDocumentUploadUrl.<b>input</b></code><Bullet /><code>GenerateSupportingDocumentUploadUrlInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-generatesupportingdocumentuploadurlbinputbcodegeneratesupportingdocumentuploadurlinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>GenerateSupportingDocumentUploadUrlPayload</code> <Badge class="secondary" text="union"/>',id:"generatesupportingdocumentuploadurlpayload-",level:4}],d=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:c,Bullet:d,SpecifiedBy:s,Badge:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Generate and return a presigned URL to upload a unique file for the supporting document collection"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This mutation is restricted to a Project access token (",(0,a.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn More"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"generateSupportingDocumentUploadUrl(\n  input: GenerateSupportingDocumentUploadUrlInput!\n): GenerateSupportingDocumentUploadUrlPayload!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-generatesupportingdocumentuploadurlbinputbcodegeneratesupportingdocumentuploadurlinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"generateSupportingDocumentUploadUrl.",(0,a.kt)("b",null,"input"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/inputs/generate-supporting-document-upload-url-input"},(0,a.kt)("inlineCode",{parentName:"a"},"GenerateSupportingDocumentUploadUrlInput!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"generatesupportingdocumentuploadurlpayload-"},(0,a.kt)("a",{parentName:"h4",href:"/unions/generate-supporting-document-upload-url-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"GenerateSupportingDocumentUploadUrlPayload"))," ",(0,a.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}y.isMDXComponent=!0}}]);