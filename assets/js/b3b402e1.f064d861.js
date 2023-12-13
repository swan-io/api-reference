"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[44688],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},d=Object.keys(e);for(o=0;o<d.length;o++)t=d[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(o=0;o<d.length;o++)t=d[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,d=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(t),f=a,b=s["".concat(l,".").concat(f)]||s[f]||m[f]||d;return t?o.createElement(b,r(r({ref:n},u),{},{components:t})):o.createElement(b,r({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var d=t.length,r=new Array(d);r[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[s]="string"==typeof e?e:a,r[1]=i;for(var c=2;c<d;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},84456:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=t(83117),a=t(67294),d=t(3905);const r={id:"onboarding-individual-account-holder-info",title:"OnboardingIndividualAccountHolderInfo",hide_table_of_contents:!1},i=void 0,l={unversionedId:"objects/onboarding-individual-account-holder-info",id:"objects/onboarding-individual-account-holder-info",title:"OnboardingIndividualAccountHolderInfo",description:"Individual Account Holder Information",source:"@site/docs/objects/onboarding-individual-account-holder-info.mdx",sourceDirName:"objects",slug:"/objects/onboarding-individual-account-holder-info",permalink:"/objects/onboarding-individual-account-holder-info",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/onboarding-individual-account-holder-info.mdx",tags:[],version:"current",frontMatter:{id:"onboarding-individual-account-holder-info",title:"OnboardingIndividualAccountHolderInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OnboardingFinalizedStatusInfo",permalink:"/objects/onboarding-finalized-status-info"},next:{title:"OnboardingInfo",permalink:"/objects/onboarding-info"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingIndividualAccountHolderInfo.<b>type</b></code><Bullet /><code>AccountHolderType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardingindividualaccountholderinfobtypebcodeaccountholdertype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingIndividualAccountHolderInfo.<b>employmentStatus</b></code><Bullet /><code>EmploymentStatus</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardingindividualaccountholderinfobemploymentstatusbcodeemploymentstatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingIndividualAccountHolderInfo.<b>monthlyIncome</b></code><Bullet /><code>MonthlyIncome</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardingindividualaccountholderinfobmonthlyincomebcodemonthlyincome-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingIndividualAccountHolderInfo.<b>residencyAddress</b></code><Bullet /><code>AddressInfo</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-onboardingindividualaccountholderinfobresidencyaddressbcodeaddressinfo-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingIndividualAccountHolderInfo.<b>taxIdentificationNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardingindividualaccountholderinfobtaxidentificationnumberbcodestring-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>OnboardingAccountHolderInfo</code> <Badge class="secondary" text="interface"/>',id:"onboardingaccountholderinfo-",level:4}],s=()=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,d.kt)(a.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:u,Bullet:s,SpecifiedBy:m,Badge:f},p="wrapper";function y(e){let{components:n,...t}=e;return(0,d.kt)(p,(0,o.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Individual Account Holder Information"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type OnboardingIndividualAccountHolderInfo implements OnboardingAccountHolderInfo {\n  type: AccountHolderType!\n  employmentStatus: EmploymentStatus\n  monthlyIncome: MonthlyIncome\n  residencyAddress: AddressInfo\n  taxIdentificationNumber: String\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-onboardingindividualaccountholderinfobtypebcodeaccountholdertype--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OnboardingIndividualAccountHolderInfo.",(0,d.kt)("b",null,"type"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/enums/account-holder-type"},(0,d.kt)("inlineCode",{parentName:"a"},"AccountHolderType!"))," ",(0,d.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Account holder type (always Individual for type OnboardingIndividualAccountHolderInfo)")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-onboardingindividualaccountholderinfobemploymentstatusbcodeemploymentstatus-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OnboardingIndividualAccountHolderInfo.",(0,d.kt)("b",null,"employmentStatus"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/enums/employment-status"},(0,d.kt)("inlineCode",{parentName:"a"},"EmploymentStatus"))," ",(0,d.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"employment status of the individual account holder")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-onboardingindividualaccountholderinfobmonthlyincomebcodemonthlyincome-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OnboardingIndividualAccountHolderInfo.",(0,d.kt)("b",null,"monthlyIncome"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/enums/monthly-income"},(0,d.kt)("inlineCode",{parentName:"a"},"MonthlyIncome"))," ",(0,d.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"monthly income of the individual account holder")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-onboardingindividualaccountholderinfobresidencyaddressbcodeaddressinfo-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OnboardingIndividualAccountHolderInfo.",(0,d.kt)("b",null,"residencyAddress"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/objects/address-info"},(0,d.kt)("inlineCode",{parentName:"a"},"AddressInfo"))," ",(0,d.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"residency address of the individual account holder (must be in a European country)")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-onboardingindividualaccountholderinfobtaxidentificationnumberbcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OnboardingIndividualAccountHolderInfo.",(0,d.kt)("b",null,"taxIdentificationNumber"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Tax Identification Number")),(0,d.kt)("h3",{id:"interfaces"},"Interfaces"),(0,d.kt)("h4",{id:"onboardingaccountholderinfo-"},(0,d.kt)("a",{parentName:"h4",href:"/interfaces/onboarding-account-holder-info"},(0,d.kt)("inlineCode",{parentName:"a"},"OnboardingAccountHolderInfo"))," ",(0,d.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The onboarding could be for an Individual or a company")))}y.isMDXComponent=!0}}]);