"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[52819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(o,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(g,d(d({ref:t},c),{},{components:n})):a.createElement(g,d({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,d=new Array(l);d[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,d[1]=i;for(var s=2;s<l;s++)d[s]=n[s];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24055:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var a=n(83117),r=n(67294),l=n(3905);const d={id:"add-single-use-virtual-card-input",title:"AddSingleUseVirtualCardInput",hide_table_of_contents:!1},i=void 0,o={unversionedId:"inputs/add-single-use-virtual-card-input",id:"inputs/add-single-use-virtual-card-input",title:"AddSingleUseVirtualCardInput",description:"Inputs to add a new card",source:"@site/docs/inputs/add-single-use-virtual-card-input.mdx",sourceDirName:"inputs",slug:"/inputs/add-single-use-virtual-card-input",permalink:"/inputs/add-single-use-virtual-card-input",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/add-single-use-virtual-card-input.mdx",tags:[],version:"current",frontMatter:{id:"add-single-use-virtual-card-input",title:"AddSingleUseVirtualCardInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddSepaDirectDebitPaymentMandateInput",permalink:"/inputs/add-sepa-direct-debit-payment-mandate-input"},next:{title:"AddSingleUseVirtualCardsInput",permalink:"/inputs/add-single-use-virtual-cards-input"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddSingleUseVirtualCardInput.<b>accountMembershipId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addsingleusevirtualcardinputbaccountmembershipidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddSingleUseVirtualCardInput.<b>spendingLimit</b></code><Bullet /><code>SpendingLimitInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addsingleusevirtualcardinputbspendinglimitbcodespendinglimitinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddSingleUseVirtualCardInput.<b>consentRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addsingleusevirtualcardinputbconsentredirecturlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddSingleUseVirtualCardInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addsingleusevirtualcardinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddSingleUseVirtualCardInput.<b>viewCardNumber</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addsingleusevirtualcardinputbviewcardnumberbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddSingleUseVirtualCardInput.<b>cardProductId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addsingleusevirtualcardinputbcardproductidbcodeid-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:c,Bullet:u,SpecifiedBy:p,Badge:m},b="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(b,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Inputs to add a new card"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddSingleUseVirtualCardInput {\n  accountMembershipId: ID!\n  spendingLimit: SpendingLimitInput!\n  consentRedirectUrl: String!\n  name: String\n  viewCardNumber: Boolean\n  cardProductId: ID\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-addsingleusevirtualcardinputbaccountmembershipidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AddSingleUseVirtualCardInput.",(0,l.kt)("b",null,"accountMembershipId"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Unique identifier of a given account membership")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-addsingleusevirtualcardinputbspendinglimitbcodespendinglimitinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AddSingleUseVirtualCardInput.",(0,l.kt)("b",null,"spendingLimit"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/inputs/spending-limit-input"},(0,l.kt)("inlineCode",{parentName:"a"},"SpendingLimitInput!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Spending limit")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-addsingleusevirtualcardinputbconsentredirecturlbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AddSingleUseVirtualCardInput.",(0,l.kt)("b",null,"consentRedirectUrl"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"URL the user is redirected to after consent has been given")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-addsingleusevirtualcardinputbnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AddSingleUseVirtualCardInput.",(0,l.kt)("b",null,"name"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Card name")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-addsingleusevirtualcardinputbviewcardnumberbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AddSingleUseVirtualCardInput.",(0,l.kt)("b",null,"viewCardNumber"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"true")," to show the card confidential information in the same request")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-addsingleusevirtualcardinputbcardproductidbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AddSingleUseVirtualCardInput.",(0,l.kt)("b",null,"cardProductId"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The id of the card product to use to create the new card.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/mutations/add-single-use-virtual-card"},(0,l.kt)("inlineCode",{parentName:"a"},"addSingleUseVirtualCard")),"  ",(0,l.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);