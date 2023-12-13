"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[46791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=l(n),f=a,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||r;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:a,o[1]=u;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},54014:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>c,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>u,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(83117),a=n(67294),r=n(3905);const o={id:"initiate-funding-request",title:"initiateFundingRequest",hide_table_of_contents:!1},u=void 0,s={unversionedId:"mutations/initiate-funding-request",id:"mutations/initiate-funding-request",title:"initiateFundingRequest",description:"Initiate a funding request.",source:"@site/docs/mutations/initiate-funding-request.mdx",sourceDirName:"mutations",slug:"/mutations/initiate-funding-request",permalink:"/mutations/initiate-funding-request",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/initiate-funding-request.mdx",tags:[],version:"current",frontMatter:{id:"initiate-funding-request",title:"initiateFundingRequest",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"initiateCreditTransfers",permalink:"/mutations/initiate-credit-transfers"},next:{title:"initiateInternationalCreditTransfer",permalink:"/mutations/initiate-international-credit-transfer"}},l={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>initiateFundingRequest.<b>input</b></code><Bullet /><code>InitiateFundingRequestInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-initiatefundingrequestbinputbcodeinitiatefundingrequestinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>InitiateFundingRequestPayload</code> <Badge class="secondary" text="union"/>',id:"initiatefundingrequestpayload-",level:4}],c=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:c,SpecifiedBy:p,Badge:f},g="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Initiate a funding request.\nThis mutation is restricted to an User access token (",(0,r.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request.\nThe user must have an account membership for this account with the attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"canInitiateCreditTransfer=true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"initiateFundingRequest(\n  input: InitiateFundingRequestInput!\n): InitiateFundingRequestPayload\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-initiatefundingrequestbinputbcodeinitiatefundingrequestinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"initiateFundingRequest.",(0,r.kt)("b",null,"input"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/inputs/initiate-funding-request-input"},(0,r.kt)("inlineCode",{parentName:"a"},"InitiateFundingRequestInput!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"initiatefundingrequestpayload-"},(0,r.kt)("a",{parentName:"h4",href:"/unions/initiate-funding-request-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"InitiateFundingRequestPayload"))," ",(0,r.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Initiate A Funding Request Payload")))}y.isMDXComponent=!0}}]);