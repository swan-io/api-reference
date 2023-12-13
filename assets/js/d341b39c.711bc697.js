"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[19863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),m=d(n),y=a,p=m["".concat(i,".").concat(y)]||m[y]||u[y]||l;return n?o.createElement(p,c(c({ref:t},s),{},{components:n})):o.createElement(p,c({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=y;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[m]="string"==typeof e?e:a,c[1]=r;for(var d=2;d<l;d++)c[d]=n[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4903:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var o=n(83117),a=n(67294),l=n(3905);const c={id:"account-holder-company-info",title:"AccountHolderCompanyInfo",hide_table_of_contents:!1},r=void 0,i={unversionedId:"objects/account-holder-company-info",id:"objects/account-holder-company-info",title:"AccountHolderCompanyInfo",description:"No description",source:"@site/docs/objects/account-holder-company-info.mdx",sourceDirName:"objects",slug:"/objects/account-holder-company-info",permalink:"/objects/account-holder-company-info",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/account-holder-company-info.mdx",tags:[],version:"current",frontMatter:{id:"account-holder-company-info",title:"AccountHolderCompanyInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccountHolderCanceledStatusInfo",permalink:"/objects/account-holder-canceled-status-info"},next:{title:"AccountHolderConnection",permalink:"/objects/account-holder-connection"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderCompanyInfo.<b>type</b></code><Bullet /><code>AccountHolderType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountholdercompanyinfobtypebcodeaccountholdertype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderCompanyInfo.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountholdercompanyinfobnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderCompanyInfo.<b>registrationNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountholdercompanyinfobregistrationnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderCompanyInfo.<b>companyRegistrationDate</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountholdercompanyinfobcompanyregistrationdatebcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderCompanyInfo.<b>companyType</b></code><Bullet /><code>CompanyType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountholdercompanyinfobcompanytypebcodecompanytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderCompanyInfo.<b>businessActivity</b></code><Bullet /><code>BusinessActivity!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountholdercompanyinfobbusinessactivitybcodebusinessactivity--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderCompanyInfo.<b>businessActivityDescription</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountholdercompanyinfobbusinessactivitydescriptionbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderCompanyInfo.<b>monthlyPaymentVolume</b></code><Bullet /><code>MonthlyPaymentVolume!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountholdercompanyinfobmonthlypaymentvolumebcodemonthlypaymentvolume--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderCompanyInfo.<b>individualUltimateBeneficialOwners</b></code><Bullet /><code>[IndividualUltimateBeneficialOwner!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-accountholdercompanyinfobindividualultimatebeneficialownersbcodeindividualultimatebeneficialowner--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderCompanyInfo.<b>vatNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountholdercompanyinfobvatnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderCompanyInfo.<b>taxIdentificationNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountholdercompanyinfobtaxidentificationnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderCompanyInfo.<b>legalRepresentativePersonalAddress</b></code><Bullet /><code>AddressInformation</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-accountholdercompanyinfoblegalrepresentativepersonaladdressbcodeaddressinformation-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountHolderInfo</code> <Badge class="secondary" text="interface"/>',id:"accountholderinfo-",level:4}],m=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:s,Bullet:m,SpecifiedBy:u,Badge:y},f="wrapper";function h(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountHolderCompanyInfo implements AccountHolderInfo {\n  type: AccountHolderType!\n  name: String!\n  registrationNumber: String\n  companyRegistrationDate: Date\n  companyType: CompanyType\n  businessActivity: BusinessActivity!\n  businessActivityDescription: String!\n  monthlyPaymentVolume: MonthlyPaymentVolume!\n  individualUltimateBeneficialOwners: [IndividualUltimateBeneficialOwner!]!\n  vatNumber: String\n  taxIdentificationNumber: String\n  legalRepresentativePersonalAddress: AddressInformation\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholdercompanyinfobtypebcodeaccountholdertype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderCompanyInfo.",(0,l.kt)("b",null,"type"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/enums/account-holder-type"},(0,l.kt)("inlineCode",{parentName:"a"},"AccountHolderType!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Account holder type (always Company for type AccountHolderCompanyInfo)")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholdercompanyinfobnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderCompanyInfo.",(0,l.kt)("b",null,"name"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Name of the company.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholdercompanyinfobregistrationnumberbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderCompanyInfo.",(0,l.kt)("b",null,"registrationNumber"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Registration number of the company (SIRET, ...).")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholdercompanyinfobcompanyregistrationdatebcodedate-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderCompanyInfo.",(0,l.kt)("b",null,"companyRegistrationDate"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Registration date of the company.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholdercompanyinfobcompanytypebcodecompanytype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderCompanyInfo.",(0,l.kt)("b",null,"companyType"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/enums/company-type"},(0,l.kt)("inlineCode",{parentName:"a"},"CompanyType"))," ",(0,l.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Legal form of the company (SAS, SCI, SASU, ...).")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholdercompanyinfobbusinessactivitybcodebusinessactivity--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderCompanyInfo.",(0,l.kt)("b",null,"businessActivity"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/enums/business-activity"},(0,l.kt)("inlineCode",{parentName:"a"},"BusinessActivity!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Business activity.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholdercompanyinfobbusinessactivitydescriptionbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderCompanyInfo.",(0,l.kt)("b",null,"businessActivityDescription"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Business activity description.\nThis must be 1024 characters long maximum.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholdercompanyinfobmonthlypaymentvolumebcodemonthlypaymentvolume--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderCompanyInfo.",(0,l.kt)("b",null,"monthlyPaymentVolume"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/enums/monthly-payment-volume"},(0,l.kt)("inlineCode",{parentName:"a"},"MonthlyPaymentVolume!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Estimated monthly payment volume (euro).")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholdercompanyinfobindividualultimatebeneficialownersbcodeindividualultimatebeneficialowner--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderCompanyInfo.",(0,l.kt)("b",null,"individualUltimateBeneficialOwners"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/objects/individual-ultimate-beneficial-owner"},(0,l.kt)("inlineCode",{parentName:"a"},"[IndividualUltimateBeneficialOwner!]!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The ultimate beneficiary is defined as the natural person (s) who own or control, directly or indirectly, the reporting company.")),(0,l.kt)("p",null,"The ultimate beneficiary is :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"either the natural person (s) who hold, directly or indirectly, more than 25% of the capital or the rights of vote of the reporting company;"),(0,l.kt)("li",{parentName:"ul"},"either the natural person (s) who exercise, by other means, a power of control of the company;",(0,l.kt)("blockquote",{parentName:"li"}))),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholdercompanyinfobvatnumberbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderCompanyInfo.",(0,l.kt)("b",null,"vatNumber"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Unique number that identifies a taxable person (business) or non-taxable legal entity that is registered for VAT")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholdercompanyinfobtaxidentificationnumberbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderCompanyInfo.",(0,l.kt)("b",null,"taxIdentificationNumber"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tax Identification Number")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accountholdercompanyinfoblegalrepresentativepersonaladdressbcodeaddressinformation-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderCompanyInfo.",(0,l.kt)("b",null,"legalRepresentativePersonalAddress"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/objects/address-information"},(0,l.kt)("inlineCode",{parentName:"a"},"AddressInformation"))," ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Legal representative personal address")),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"accountholderinfo-"},(0,l.kt)("a",{parentName:"h4",href:"/interfaces/account-holder-info"},(0,l.kt)("inlineCode",{parentName:"a"},"AccountHolderInfo"))," ",(0,l.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Account holder types.")))}h.isMDXComponent=!0}}]);