"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[55615],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(o),m=r,g=s["".concat(l,".").concat(m)]||s[m]||p[m]||a;return o?n.createElement(g,c(c({ref:t},u),{},{components:o})):n.createElement(g,c({ref:t},u))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:r,c[1]=i;for(var d=2;d<a;d++)c[d]=o[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},52014:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=o(83117),r=o(67294),a=o(3905);const c={id:"delete-supporting-document-payload",title:"DeleteSupportingDocumentPayload",hide_table_of_contents:!1},i=void 0,l={unversionedId:"unions/delete-supporting-document-payload",id:"unions/delete-supporting-document-payload",title:"DeleteSupportingDocumentPayload",description:"No description",source:"@site/docs/unions/delete-supporting-document-payload.mdx",sourceDirName:"unions",slug:"/unions/delete-supporting-document-payload",permalink:"/unions/delete-supporting-document-payload",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/delete-supporting-document-payload.mdx",tags:[],version:"current",frontMatter:{id:"delete-supporting-document-payload",title:"DeleteSupportingDocumentPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CreateMultiConsentPayload",permalink:"/unions/create-multi-consent-payload"},next:{title:"DenySddPayload",permalink:"/unions/deny-sdd-payload"}},d={},u=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>DeleteSupportingDocumentSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"deletesupportingdocumentsuccesspayload-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:'<code>InternalErrorRejection</code> <Badge class="secondary" text="object"/>',id:"internalerrorrejection-",level:4},{value:'<code>SupportingDocumentCollectionNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"supportingdocumentcollectionnotfoundrejection-",level:4},{value:'<code>SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection</code> <Badge class="secondary" text="object"/>',id:"supportingdocumentcollectionstatusdoesnotallowdeletionrejection-",level:4},{value:'<code>SupportingDocumentNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"supportingdocumentnotfoundrejection-",level:4},{value:'<code>SupportingDocumentStatusDoesNotAllowDeletionRejection</code> <Badge class="secondary" text="object"/>',id:"supportingdocumentstatusdoesnotallowdeletionrejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],s=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:u,Bullet:s,SpecifiedBy:p,Badge:m},y="wrapper";function b(e){let{components:t,...o}=e;return(0,a.kt)(y,(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"union DeleteSupportingDocumentPayload = DeleteSupportingDocumentSuccessPayload | ForbiddenRejection | InternalErrorRejection | SupportingDocumentCollectionNotFoundRejection | SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection | SupportingDocumentNotFoundRejection | SupportingDocumentStatusDoesNotAllowDeletionRejection | ValidationRejection\n")),(0,a.kt)("h3",{id:"possible-types"},"Possible types"),(0,a.kt)("h4",{id:"deletesupportingdocumentsuccesspayload-"},(0,a.kt)("a",{parentName:"h4",href:"/objects/delete-supporting-document-success-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"DeleteSupportingDocumentSuccessPayload"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"forbiddenrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/objects/forbidden-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"internalerrorrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/objects/internal-error-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"InternalErrorRejection"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned on unexpected server error")),(0,a.kt)("h4",{id:"supportingdocumentcollectionnotfoundrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/objects/supporting-document-collection-not-found-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionNotFoundRejection"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned if the supporting document collection was not found")),(0,a.kt)("h4",{id:"supportingdocumentcollectionstatusdoesnotallowdeletionrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/objects/supporting-document-collection-status-does-not-allow-deletion-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned if supporting document cannot be deleted because its supporting document collection status is not WaitingForDocument")),(0,a.kt)("h4",{id:"supportingdocumentnotfoundrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/objects/supporting-document-not-found-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentNotFoundRejection"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned if the supporting document was not found")),(0,a.kt)("h4",{id:"supportingdocumentstatusdoesnotallowdeletionrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/objects/supporting-document-status-does-not-allow-deletion-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentStatusDoesNotAllowDeletionRejection"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned if supporting document cannot be deleted because of its status")),(0,a.kt)("h4",{id:"validationrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/objects/validation-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,a.kt)("h3",{id:"returned-by"},"Returned by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/mutations/delete-supporting-document"},(0,a.kt)("inlineCode",{parentName:"a"},"deleteSupportingDocument")),"  ",(0,a.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);