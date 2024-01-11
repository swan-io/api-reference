"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[16192],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>g});var n=o(67294);function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){c(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,c=function(e,t){if(null==e)return{};var o,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(c[o]=e[o]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(c[o]=e[o])}return c}var i=n.createContext({}),u=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,c=e.mdxType,l=e.originalType,i=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(o),m=c,g=p["".concat(i,".").concat(m)]||p[m]||s[m]||l;return o?n.createElement(g,r(r({ref:t},d),{},{components:o})):n.createElement(g,r({ref:t},d))}));function g(e,t){var o=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=o.length,r=new Array(l);r[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[p]="string"==typeof e?e:c,r[1]=a;for(var u=2;u<l;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},49976:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>u,contentTitle:()=>a,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=o(83117),c=o(67294),l=o(3905);const r={id:"supporting-document-collection",title:"SupportingDocumentCollection",hide_table_of_contents:!1},a=void 0,i={unversionedId:"objects/supporting-document-collection",id:"objects/supporting-document-collection",title:"SupportingDocumentCollection",description:"Collection of supporting documents used for compliance",source:"@site/docs/objects/supporting-document-collection.mdx",sourceDirName:"objects",slug:"/objects/supporting-document-collection",permalink:"/objects/supporting-document-collection",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/supporting-document-collection.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-collection",title:"SupportingDocumentCollection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentCollectionWaitingForDocumentStatusInfo",permalink:"/objects/supporting-document-collection-waiting-for-document-status-info"},next:{title:"SupportingDocumentNotFoundRejection",permalink:"/objects/supporting-document-not-found-rejection"}},u={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollection.<b>id</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollection.<b>statusInfo</b></code><Bullet /><code>SupportingDocumentCollectionStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionbstatusinfobcodesupportingdocumentcollectionstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollection.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollection.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollection.<b>supportingDocuments</b></code><Bullet /><code>[SupportingDocument]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionbsupportingdocumentsbcodesupportingdocument--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollection.<b>requiredSupportingDocumentPurposes</b></code><Bullet /><code>[SupportingDocumentPurpose!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionbrequiredsupportingdocumentpurposesbcodesupportingdocumentpurpose--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollection.<b>accountHolder</b></code><Bullet /><code>SupportingDocumentAccountHolder!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionbaccountholderbcodesupportingdocumentaccountholder--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollection.<b>onboarding</b></code><Bullet /><code>SupportingDocumentOnboarding!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionbonboardingbcodesupportingdocumentonboarding--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],p=()=>(0,l.kt)(c.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(c.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(c.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:d,Bullet:p,SpecifiedBy:s,Badge:m},b="wrapper";function y(e){let{components:t,...o}=e;return(0,l.kt)(b,(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Collection of supporting documents used for compliance"),(0,l.kt)("p",null,"Fetching SupportingDocument is restricted to Project access token"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportingDocumentCollection {\n  id: String!\n  statusInfo: SupportingDocumentCollectionStatusInfo!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  supportingDocuments: [SupportingDocument]!\n  requiredSupportingDocumentPurposes: [SupportingDocumentPurpose!]!\n  accountHolder: SupportingDocumentAccountHolder!\n  onboarding: SupportingDocumentOnboarding!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionbidbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollection.",(0,l.kt)("b",null,"id"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Unique identifier of the supporting document collection")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionbstatusinfobcodesupportingdocumentcollectionstatusinfo--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollection.",(0,l.kt)("b",null,"statusInfo"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/interfaces/supporting-document-collection-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusInfo!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Status of the supporting document collection")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionbcreatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollection.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Created date")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionbupdatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollection.",(0,l.kt)("b",null,"updatedAt"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Updated date")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionbsupportingdocumentsbcodesupportingdocument--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollection.",(0,l.kt)("b",null,"supportingDocuments"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/objects/supporting-document"},(0,l.kt)("inlineCode",{parentName:"a"},"[SupportingDocument]!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of supported documents contained in the supporting document collection")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionbrequiredsupportingdocumentpurposesbcodesupportingdocumentpurpose--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollection.",(0,l.kt)("b",null,"requiredSupportingDocumentPurposes"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/objects/supporting-document-purpose"},(0,l.kt)("inlineCode",{parentName:"a"},"[SupportingDocumentPurpose!]!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of required supporting document purposes for this supporting document collection")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionbaccountholderbcodesupportingdocumentaccountholder--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollection.",(0,l.kt)("b",null,"accountHolder"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/objects/supporting-document-account-holder"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentAccountHolder!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionbonboardingbcodesupportingdocumentonboarding--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollection.",(0,l.kt)("b",null,"onboarding"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/objects/supporting-document-onboarding"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentOnboarding!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/queries/supporting-document-collection"},(0,l.kt)("inlineCode",{parentName:"a"},"supportingDocumentCollection")),"  ",(0,l.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"})),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/objects/onboarding"},(0,l.kt)("inlineCode",{parentName:"a"},"Onboarding")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/objects/onboarding-info"},(0,l.kt)("inlineCode",{parentName:"a"},"OnboardingInfo")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/objects/request-supporting-document-collection-review-success-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"RequestSupportingDocumentCollectionReviewSuccessPayload")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/objects/supporting-document-collection-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionEdge")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/objects/supporting-document-collection-status-does-not-allow-deletion-rejection"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/objects/supporting-document-collection-status-does-not-allow-update-rejection"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);