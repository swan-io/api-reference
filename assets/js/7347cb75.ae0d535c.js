"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[38808],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||c;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var i=2;i<c;i++)r[i]=n[i];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42597:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(83117),a=n(67294),c=n(3905);const r={id:"close-account",title:"closeAccount",hide_table_of_contents:!1},l=void 0,s={unversionedId:"mutations/close-account",id:"mutations/close-account",title:"closeAccount",description:"Closes an account.",source:"@site/docs/mutations/close-account.mdx",sourceDirName:"mutations",slug:"/mutations/close-account",permalink:"/mutations/close-account",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/close-account.mdx",tags:[],version:"current",frontMatter:{id:"close-account",title:"closeAccount",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"cancelVirtualIbanEntry",permalink:"/mutations/cancel-virtual-iban-entry"},next:{title:"createCapitalDepositCase",permalink:"/mutations/create-capital-deposit-case"}},i={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>closeAccount.<b>input</b></code><Bullet /><code>CloseAccountInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-closeaccountbinputbcodecloseaccountinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CloseAccountPayload</code> <Badge class="secondary" text="union"/>',id:"closeaccountpayload-",level:4}],p=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:p,SpecifiedBy:d,Badge:m},y="wrapper";function g(e){let{components:t,...n}=e;return(0,c.kt)(y,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Closes an account."),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"This mutation is restricted to an User access token (",(0,c.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request with the Swan app.")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"The user must have a legal representative account membership for this account.")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"closeAccount(\n  input: CloseAccountInput!\n): CloseAccountPayload!\n")),(0,c.kt)("h3",{id:"arguments"},"Arguments"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-closeaccountbinputbcodecloseaccountinput--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"closeAccount.",(0,c.kt)("b",null,"input"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/inputs/close-account-input"},(0,c.kt)("inlineCode",{parentName:"a"},"CloseAccountInput!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"type"},"Type"),(0,c.kt)("h4",{id:"closeaccountpayload-"},(0,c.kt)("a",{parentName:"h4",href:"/unions/close-account-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"CloseAccountPayload"))," ",(0,c.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})),(0,c.kt)("blockquote",null))}g.isMDXComponent=!0}}]);