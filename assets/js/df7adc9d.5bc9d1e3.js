"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[33032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},i="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),i=d(n),g=o,p=i["".concat(s,".").concat(g)]||i[g]||f[g]||c;return n?a.createElement(p,r(r({ref:t},u),{},{components:n})):a.createElement(p,r({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[i]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<c;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},11789:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>i,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(83117),o=n(67294),c=n(3905);const r={id:"canceled-funding-source-status-info",title:"CanceledFundingSourceStatusInfo",hide_table_of_contents:!1},l=void 0,s={unversionedId:"objects/canceled-funding-source-status-info",id:"objects/canceled-funding-source-status-info",title:"CanceledFundingSourceStatusInfo",description:"Funding Source Canceled status information",source:"@site/docs/objects/canceled-funding-source-status-info.mdx",sourceDirName:"objects",slug:"/objects/canceled-funding-source-status-info",permalink:"/objects/canceled-funding-source-status-info",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/canceled-funding-source-status-info.mdx",tags:[],version:"current",frontMatter:{id:"canceled-funding-source-status-info",title:"CanceledFundingSourceStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CancelVirtualIbanEntrySuccessPayload",permalink:"/objects/cancel-virtual-iban-entry-success-payload"},next:{title:"CanceledIdentificationLevelStatusInfo",permalink:"/objects/canceled-identification-level-status-info"}},d={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CanceledFundingSourceStatusInfo.<b>status</b></code><Bullet /><code>FundingSourceStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-canceledfundingsourcestatusinfobstatusbcodefundingsourcestatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CanceledFundingSourceStatusInfo.<b>enabledAt</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-canceledfundingsourcestatusinfobenabledatbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CanceledFundingSourceStatusInfo.<b>canceledAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-canceledfundingsourcestatusinfobcanceledatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CanceledFundingSourceStatusInfo.<b>reasonCode</b></code><Bullet /><code>CanceledFundingSourceReason!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-canceledfundingsourcestatusinfobreasoncodebcodecanceledfundingsourcereason--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FundingSourceStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"fundingsourcestatusinfo-",level:4}],i=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:u,Bullet:i,SpecifiedBy:f,Badge:g},m="wrapper";function b(e){let{components:t,...n}=e;return(0,c.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Funding Source Canceled status information"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type CanceledFundingSourceStatusInfo implements FundingSourceStatusInfo {\n  status: FundingSourceStatus!\n  enabledAt: Date\n  canceledAt: Date!\n  reasonCode: CanceledFundingSourceReason!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-canceledfundingsourcestatusinfobstatusbcodefundingsourcestatus--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CanceledFundingSourceStatusInfo.",(0,c.kt)("b",null,"status"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/enums/funding-source-status"},(0,c.kt)("inlineCode",{parentName:"a"},"FundingSourceStatus!"))," ",(0,c.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Funding Source Canceled status")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-canceledfundingsourcestatusinfobenabledatbcodedate-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CanceledFundingSourceStatusInfo.",(0,c.kt)("b",null,"enabledAt"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/scalars/date"},(0,c.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,c.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Date at which the funding source was enabled")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-canceledfundingsourcestatusinfobcanceledatbcodedate--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CanceledFundingSourceStatusInfo.",(0,c.kt)("b",null,"canceledAt"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/scalars/date"},(0,c.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,c.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Date at which the funding source was canceled")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-canceledfundingsourcestatusinfobreasoncodebcodecanceledfundingsourcereason--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CanceledFundingSourceStatusInfo.",(0,c.kt)("b",null,"reasonCode"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/enums/canceled-funding-source-reason"},(0,c.kt)("inlineCode",{parentName:"a"},"CanceledFundingSourceReason!"))," ",(0,c.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Reason code of the cancellation")),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"fundingsourcestatusinfo-"},(0,c.kt)("a",{parentName:"h4",href:"/interfaces/funding-source-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"FundingSourceStatusInfo"))," ",(0,c.kt)(g,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Funding Source status information")))}b.isMDXComponent=!0}}]);