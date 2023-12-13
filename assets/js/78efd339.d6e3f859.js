"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[85647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>b,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=o(n),u=r,m=s["".concat(l,".").concat(u)]||s[u]||p[u]||d;return n?a.createElement(m,i(i({ref:t},b),{},{components:n})):a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,i=new Array(d);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:r,i[1]=c;for(var o=2;o<d;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23765:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>b});var a=n(83117),r=n(67294),d=n(3905);const i={id:"add-received-internal-direct-debit-b2-b-mandate",title:"addReceivedInternalDirectDebitB2bMandate",hide_table_of_contents:!1},c=void 0,l={unversionedId:"mutations/add-received-internal-direct-debit-b2-b-mandate",id:"mutations/add-received-internal-direct-debit-b2-b-mandate",title:"addReceivedInternalDirectDebitB2bMandate",description:"Allows to add a received internal direct debit mandate B2b.",source:"@site/docs/mutations/add-received-internal-direct-debit-b2-b-mandate.mdx",sourceDirName:"mutations",slug:"/mutations/add-received-internal-direct-debit-b2-b-mandate",permalink:"/mutations/add-received-internal-direct-debit-b2-b-mandate",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/add-received-internal-direct-debit-b2-b-mandate.mdx",tags:[],version:"current",frontMatter:{id:"add-received-internal-direct-debit-b2-b-mandate",title:"addReceivedInternalDirectDebitB2bMandate",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"addOrUpdateExternalAccountBalance",permalink:"/mutations/add-or-update-external-account-balance"},next:{title:"addReceivedSepaDirectDebitB2bMandate",permalink:"/mutations/add-received-sepa-direct-debit-b2-b-mandate"}},o={},b=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>addReceivedInternalDirectDebitB2bMandate.<b>input</b></code><Bullet /><code>AddReceivedInternalDirectDebitB2bMandateInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addreceivedinternaldirectdebitb2bmandatebinputbcodeaddreceivedinternaldirectdebitb2bmandateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AddReceivedInternalDirectDebitB2bMandatePayload</code> <Badge class="secondary" text="union"/>',id:"addreceivedinternaldirectdebitb2bmandatepayload-",level:4}],s=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:b,Bullet:s,SpecifiedBy:p,Badge:u},f="wrapper";function y(e){let{components:t,...n}=e;return(0,d.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Allows to add a received internal direct debit mandate B2b."),(0,d.kt)("p",null,(0,d.kt)("em",{parentName:"p"},"This mutation is restricted to an User access token (",(0,d.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request with the Swan app.")),(0,d.kt)("p",null,(0,d.kt)("em",{parentName:"p"},"The user must be able to initiate payments for this account.")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"addReceivedInternalDirectDebitB2bMandate(\n  input: AddReceivedInternalDirectDebitB2bMandateInput!\n): AddReceivedInternalDirectDebitB2bMandatePayload!\n")),(0,d.kt)("h3",{id:"arguments"},"Arguments"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addreceivedinternaldirectdebitb2bmandatebinputbcodeaddreceivedinternaldirectdebitb2bmandateinput--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"addReceivedInternalDirectDebitB2bMandate.",(0,d.kt)("b",null,"input"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/inputs/add-received-internal-direct-debit-b2-b-mandate-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AddReceivedInternalDirectDebitB2bMandateInput!"))," ",(0,d.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"type"},"Type"),(0,d.kt)("h4",{id:"addreceivedinternaldirectdebitb2bmandatepayload-"},(0,d.kt)("a",{parentName:"h4",href:"/unions/add-received-internal-direct-debit-b2-b-mandate-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddReceivedInternalDirectDebitB2bMandatePayload"))," ",(0,d.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Union type return by the addReceivedInternalDirectDebitB2bMandate mutation")))}y.isMDXComponent=!0}}]);