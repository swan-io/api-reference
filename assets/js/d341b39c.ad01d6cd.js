"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[17956],{32993:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>u,Bullet:()=>r,Details:()=>m,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>y});var a=o(74848),c=o(28453),t=o(96540);const s={id:"account-holder-company-info",title:"AccountHolderCompanyInfo"},d=void 0,l={id:"objects/account-holder-company-info",title:"AccountHolderCompanyInfo",description:"No description",source:"@site/docs/objects/account-holder-company-info.mdx",sourceDirName:"objects",slug:"/objects/account-holder-company-info",permalink:"/objects/account-holder-company-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/account-holder-company-info.mdx",tags:[],version:"current",frontMatter:{id:"account-holder-company-info",title:"AccountHolderCompanyInfo"},sidebar:"schemaSidebar",previous:{title:"AccountHolderCanceledStatusInfo",permalink:"/objects/account-holder-canceled-status-info"},next:{title:"AccountHolderConnection",permalink:"/objects/account-holder-connection"}},i={},r=()=>{const e={span:"span",...(0,c.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,c.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,c.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:n,children:o,startOpen:s=!1})=>{const d={details:"details",summary:"summary",...(0,c.R)()},[l,i]=(0,t.useState)(s);return(0,a.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&o]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>AccountHolderCompanyInfo.<b>type</b></code><Bullet></Bullet><code>AccountHolderType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholdercompanyinfotypeaccountholdertype--",level:4},{value:'<code>AccountHolderCompanyInfo.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholdercompanyinfonamestring--",level:4},{value:'<code>AccountHolderCompanyInfo.<b>registrationNumber</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholdercompanyinforegistrationnumberstring-",level:4},{value:'<code>AccountHolderCompanyInfo.<b>companyRegistrationDate</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholdercompanyinfocompanyregistrationdatedate-",level:4},{value:'<code>AccountHolderCompanyInfo.<b>companyType</b></code><Bullet></Bullet><code>CompanyType</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholdercompanyinfocompanytypecompanytype-",level:4},{value:'<code>AccountHolderCompanyInfo.<b>businessActivity</b></code><Bullet></Bullet><code>BusinessActivity!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholdercompanyinfobusinessactivitybusinessactivity--",level:4},{value:'<code>AccountHolderCompanyInfo.<b>businessActivityDescription</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholdercompanyinfobusinessactivitydescriptionstring--",level:4},{value:'<code>AccountHolderCompanyInfo.<b>monthlyPaymentVolume</b></code><Bullet></Bullet><code>MonthlyPaymentVolume!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholdercompanyinfomonthlypaymentvolumemonthlypaymentvolume--",level:4},{value:'<code>AccountHolderCompanyInfo.<b>individualUltimateBeneficialOwners</b></code><Bullet></Bullet><code>[IndividualUltimateBeneficialOwner!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountholdercompanyinfoindividualultimatebeneficialownersindividualultimatebeneficialowner--",level:4},{value:'<code>AccountHolderCompanyInfo.<b>vatNumber</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholdercompanyinfovatnumberstring-",level:4},{value:'<code>AccountHolderCompanyInfo.<b>taxIdentificationNumber</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholdercompanyinfotaxidentificationnumberstring-",level:4},{value:'<code>AccountHolderCompanyInfo.<b>legalRepresentativePersonalAddress</b></code><Bullet></Bullet><code>AddressInformation</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholdercompanyinfolegalrepresentativepersonaladdressaddressinformation-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountHolderInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"accountholderinfo-",level:4}];function p(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type AccountHolderCompanyInfo implements AccountHolderInfo {\n  type: AccountHolderType!\n  name: String!\n  registrationNumber: String\n  companyRegistrationDate: Date\n  companyType: CompanyType\n  businessActivity: BusinessActivity!\n  businessActivityDescription: String!\n  monthlyPaymentVolume: MonthlyPaymentVolume!\n  individualUltimateBeneficialOwners: [IndividualUltimateBeneficialOwner!]!\n  vatNumber: String\n  taxIdentificationNumber: String\n  legalRepresentativePersonalAddress: AddressInformation\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"accountholdercompanyinfotypeaccountholdertype--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolderCompanyInfo.",(0,a.jsx)("b",{children:"type"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/enums/account-holder-type",children:(0,a.jsx)(n.code,{children:"AccountHolderType!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(n.p,{children:"Account holder type (always Company for type AccountHolderCompanyInfo)"}),"\n",(0,a.jsxs)(n.h4,{id:"accountholdercompanyinfonamestring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolderCompanyInfo.",(0,a.jsx)("b",{children:"name"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.p,{children:"Name of the company."}),"\n",(0,a.jsxs)(n.h4,{id:"accountholdercompanyinforegistrationnumberstring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolderCompanyInfo.",(0,a.jsx)("b",{children:"registrationNumber"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.p,{children:"Registration number of the company (SIRET, ...)."}),"\n",(0,a.jsxs)(n.h4,{id:"accountholdercompanyinfocompanyregistrationdatedate-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolderCompanyInfo.",(0,a.jsx)("b",{children:"companyRegistrationDate"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/scalars/date",children:(0,a.jsx)(n.code,{children:"Date"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.p,{children:"Registration date of the company."}),"\n",(0,a.jsxs)(n.h4,{id:"accountholdercompanyinfocompanytypecompanytype-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolderCompanyInfo.",(0,a.jsx)("b",{children:"companyType"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/enums/company-type",children:(0,a.jsx)(n.code,{children:"CompanyType"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(n.p,{children:"Legal form of the company (SAS, SCI, SASU, ...)."}),"\n",(0,a.jsxs)(n.h4,{id:"accountholdercompanyinfobusinessactivitybusinessactivity--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolderCompanyInfo.",(0,a.jsx)("b",{children:"businessActivity"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/enums/business-activity",children:(0,a.jsx)(n.code,{children:"BusinessActivity!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(n.p,{children:"Business activity."}),"\n",(0,a.jsxs)(n.h4,{id:"accountholdercompanyinfobusinessactivitydescriptionstring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolderCompanyInfo.",(0,a.jsx)("b",{children:"businessActivityDescription"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.p,{children:"Business activity description.\nThis must be 1024 characters long maximum."}),"\n",(0,a.jsxs)(n.h4,{id:"accountholdercompanyinfomonthlypaymentvolumemonthlypaymentvolume--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolderCompanyInfo.",(0,a.jsx)("b",{children:"monthlyPaymentVolume"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/enums/monthly-payment-volume",children:(0,a.jsx)(n.code,{children:"MonthlyPaymentVolume!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(n.p,{children:"Estimated monthly payment volume (euro)."}),"\n",(0,a.jsxs)(n.h4,{id:"accountholdercompanyinfoindividualultimatebeneficialownersindividualultimatebeneficialowner--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolderCompanyInfo.",(0,a.jsx)("b",{children:"individualUltimateBeneficialOwners"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/objects/individual-ultimate-beneficial-owner",children:(0,a.jsx)(n.code,{children:"[IndividualUltimateBeneficialOwner!]!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(n.p,{children:"The ultimate beneficiary is defined as the natural person (s) who own or control, directly or indirectly, the reporting company."}),"\n",(0,a.jsx)(n.p,{children:"The ultimate beneficiary is :"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"either the natural person (s) who hold, directly or indirectly, more than 25% of the capital or the rights of vote of the reporting company;"}),"\n",(0,a.jsx)(n.li,{children:"either the natural person (s) who exercise, by other means, a power of control of the company;"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"accountholdercompanyinfovatnumberstring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolderCompanyInfo.",(0,a.jsx)("b",{children:"vatNumber"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.p,{children:"Unique number that identifies a taxable person (business) or non-taxable legal entity that is registered for VAT"}),"\n",(0,a.jsxs)(n.h4,{id:"accountholdercompanyinfotaxidentificationnumberstring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolderCompanyInfo.",(0,a.jsx)("b",{children:"taxIdentificationNumber"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.p,{children:"Tax Identification Number"}),"\n",(0,a.jsxs)(n.h4,{id:"accountholdercompanyinfolegalrepresentativepersonaladdressaddressinformation-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountHolderCompanyInfo.",(0,a.jsx)("b",{children:"legalRepresentativePersonalAddress"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/objects/address-information",children:(0,a.jsx)(n.code,{children:"AddressInformation"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(n.p,{children:"Legal representative personal address"}),"\n",(0,a.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(n.h4,{id:"accountholderinfo-",children:[(0,a.jsx)(n.a,{href:"/interfaces/account-holder-info",children:(0,a.jsx)(n.code,{children:"AccountHolderInfo"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsx)(n.p,{children:"Account holder types."})]})}function g(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>d});var a=o(96540);const c={},t=a.createContext(c);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);