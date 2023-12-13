"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[17817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,b=c["".concat(l,".").concat(m)]||c[m]||s[m]||r;return n?a.createElement(b,d(d({ref:t},p),{},{components:n})):a.createElement(b,d({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,d=new Array(r);d[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,d[1]=o;for(var u=2;u<r;u++)d[u]=n[u];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95530:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>c,SpecifiedBy:()=>s,assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var a=n(83117),i=n(67294),r=n(3905);const d={id:"update-individual-onboarding",title:"updateIndividualOnboarding",hide_table_of_contents:!1},o=void 0,l={unversionedId:"mutations/update-individual-onboarding",id:"mutations/update-individual-onboarding",title:"updateIndividualOnboarding",description:"Updates an individual onboarding.",source:"@site/docs/mutations/update-individual-onboarding.mdx",sourceDirName:"mutations",slug:"/mutations/update-individual-onboarding",permalink:"/mutations/update-individual-onboarding",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/update-individual-onboarding.mdx",tags:[],version:"current",frontMatter:{id:"update-individual-onboarding",title:"updateIndividualOnboarding",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"updateCompanyOnboarding",permalink:"/mutations/update-company-onboarding"},next:{title:"updateReceivedSepaDirectDebitB2bMandate",permalink:"/mutations/update-received-sepa-direct-debit-b2-b-mandate"}},u={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateIndividualOnboarding.<b>input</b></code><Bullet /><code>UpdateIndividualOnboardingInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateindividualonboardingbinputbcodeupdateindividualonboardinginput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateIndividualOnboardingPayload</code> <Badge class="secondary" text="union"/>',id:"updateindividualonboardingpayload-",level:4}],c=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:p,Bullet:c,SpecifiedBy:s,Badge:m},g="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Updates an individual onboarding."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This mutation is restricted to a Project access token (",(0,r.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn More"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"updateIndividualOnboarding(\n  input: UpdateIndividualOnboardingInput!\n): UpdateIndividualOnboardingPayload!\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateindividualonboardingbinputbcodeupdateindividualonboardinginput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"updateIndividualOnboarding.",(0,r.kt)("b",null,"input"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/inputs/update-individual-onboarding-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateIndividualOnboardingInput!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"updateindividualonboardingpayload-"},(0,r.kt)("a",{parentName:"h4",href:"/unions/update-individual-onboarding-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateIndividualOnboardingPayload"))," ",(0,r.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Possible result types for ",(0,r.kt)("inlineCode",{parentName:"p"},"updateIndividualOnboarding"))))}f.isMDXComponent=!0}}]);