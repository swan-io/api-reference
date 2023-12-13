"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[45897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),i=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=i(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,y=p["".concat(u,".").concat(m)]||p[m]||s[m]||r;return n?o.createElement(y,c(c({ref:t},d),{},{components:n})):o.createElement(y,c({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var i=2;i<r;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16374:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var o=n(83117),a=n(67294),r=n(3905);const c={id:"account-country",title:"AccountCountry",hide_table_of_contents:!1},l=void 0,u={unversionedId:"enums/account-country",id:"enums/account-country",title:"AccountCountry",description:"Refers to the country of the account. It will determine the country code of the local IBAN of the account.",source:"@site/docs/enums/account-country.mdx",sourceDirName:"enums",slug:"/enums/account-country",permalink:"/enums/account-country",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/account-country.mdx",tags:[],version:"current",frontMatter:{id:"account-country",title:"AccountCountry",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ViewPhysicalCardPinInput",permalink:"/inputs/view-physical-card-pin-input"},next:{title:"AccountFundingLimitsReachedReason",permalink:"/enums/account-funding-limits-reached-reason"}},i={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AccountCountry.<b>FRA</b></code>",id:"code-style-fontweight-normal-accountcountrybfrabcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountCountry.<b>DEU</b></code>",id:"code-style-fontweight-normal-accountcountrybdeubcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountCountry.<b>ESP</b></code>",id:"code-style-fontweight-normal-accountcountrybespbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountCountry.<b>NLD</b></code>",id:"code-style-fontweight-normal-accountcountrybnldbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:p,SpecifiedBy:s,Badge:m},f="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Refers to the country of the account. It will determine the country code of the local IBAN of the account."),(0,r.kt)("p",null,"Available Account Country: CCA3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AccountCountry {\n  FRA\n  DEU\n  ESP\n  NLD\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountcountrybfrabcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountCountry.",(0,r.kt)("b",null,"FRA")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"French account with a French IBAN, starting with FR.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountcountrybdeubcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountCountry.",(0,r.kt)("b",null,"DEU")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"German account with a German IBAN, starting with DE.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountcountrybespbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountCountry.",(0,r.kt)("b",null,"ESP")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Spanish account with a Spanish IBAN, starting with ES.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountcountrybnldbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountCountry.",(0,r.kt)("b",null,"NLD")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Dutch account with a Dutch IBAN, starting with DU.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/objects/account"},(0,r.kt)("inlineCode",{parentName:"a"},"Account")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/inputs/onboard-company-account-holder-input"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardCompanyAccountHolderInput")),"  ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/inputs/onboard-individual-account-holder-input"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardIndividualAccountHolderInput")),"  ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/objects/onboarding"},(0,r.kt)("inlineCode",{parentName:"a"},"Onboarding")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/objects/onboarding-info"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardingInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/inputs/update-company-onboarding-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateCompanyOnboardingInput")),"  ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/inputs/update-individual-onboarding-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateIndividualOnboardingInput")),"  ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);