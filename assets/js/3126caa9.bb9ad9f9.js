"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[20426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,c=function(e,t){if(null==e)return{};var n,o,c={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=c,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:c,a[1]=l;for(var i=2;i<r;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12517:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(83117),c=n(67294),r=n(3905);const a={id:"close-account-input",title:"CloseAccountInput",hide_table_of_contents:!1},l=void 0,s={unversionedId:"inputs/close-account-input",id:"inputs/close-account-input",title:"CloseAccountInput",description:"No description",source:"@site/docs/inputs/close-account-input.mdx",sourceDirName:"inputs",slug:"/inputs/close-account-input",permalink:"/inputs/close-account-input",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/close-account-input.mdx",tags:[],version:"current",frontMatter:{id:"close-account-input",title:"CloseAccountInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CheckPaymentMethodInput",permalink:"/inputs/check-payment-method-input"},next:{title:"CompleteAddressInput",permalink:"/inputs/complete-address-input"}},i={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CloseAccountInput.<b>accountId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-closeaccountinputbaccountidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CloseAccountInput.<b>reason</b></code><Bullet /><code>PartnerCloseAccountReasonInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-closeaccountinputbreasonbcodepartnercloseaccountreasoninput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CloseAccountInput.<b>consentRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-closeaccountinputbconsentredirecturlbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,r.kt)(c.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(c.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(c.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:d,SpecifiedBy:p,Badge:m},y="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input CloseAccountInput {\n  accountId: ID!\n  reason: PartnerCloseAccountReasonInput!\n  consentRedirectUrl: String!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-closeaccountinputbaccountidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CloseAccountInput.",(0,r.kt)("b",null,"accountId"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-closeaccountinputbreasonbcodepartnercloseaccountreasoninput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CloseAccountInput.",(0,r.kt)("b",null,"reason"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/inputs/partner-close-account-reason-input"},(0,r.kt)("inlineCode",{parentName:"a"},"PartnerCloseAccountReasonInput!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-closeaccountinputbconsentredirecturlbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CloseAccountInput.",(0,r.kt)("b",null,"consentRedirectUrl"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"URL the user is redirected to after consent has been given")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mutations/close-account"},(0,r.kt)("inlineCode",{parentName:"a"},"closeAccount")),"  ",(0,r.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);