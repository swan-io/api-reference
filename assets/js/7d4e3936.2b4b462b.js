"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[94197],{89226:(e,n,d)=>{d.r(n),d.d(n,{Badge:()=>b,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>r,default:()=>j,frontMatter:()=>s,metadata:()=>t,toc:()=>h});var a=d(85893),o=d(11151),c=d(67294);const s={id:"onboarding",title:"Onboarding"},r=void 0,t={id:"objects/onboarding",title:"Onboarding",description:"Information provided during the onboarding process of an individual or a company",source:"@site/docs/objects/onboarding.mdx",sourceDirName:"objects",slug:"/objects/onboarding",permalink:"/objects/onboarding",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/onboarding.mdx",tags:[],version:"current",frontMatter:{id:"onboarding",title:"Onboarding"},sidebar:"schemaSidebar",previous:{title:"OnboardingValidStatusInfo",permalink:"/objects/onboarding-valid-status-info"},next:{title:"OperationNotAllowedRejection",permalink:"/objects/operation-not-allowed-rejection"}},i={},l=()=>{const e={span:"span",...(0,o.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,o.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const n={span:"span",...(0,o.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>Onboarding.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onboardingidstring--",level:4},{value:'<code>Onboarding.<b>accountName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"onboardingaccountnamestring-",level:4},{value:'<code>Onboarding.<b>accountCountry</b></code><Bullet></Bullet><code>AccountCountry!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onboardingaccountcountryaccountcountry--",level:4},{value:'<code>Onboarding.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onboardingcreatedatdatetime--",level:4},{value:'<code>Onboarding.<b>email</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"onboardingemailstring-",level:4},{value:'<code>Onboarding.<b>finalizedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"onboardingfinalizedatdatetime-",level:4},{value:'<code>Onboarding.<b>language</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"onboardinglanguagestring-",level:4},{value:'<code>Onboarding.<b>info</b></code><Bullet></Bullet><code>OnboardingAccountHolderInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onboardinginfoonboardingaccountholderinfo--",level:4},{value:'<code>Onboarding.<b>accountHolder</b></code><Bullet></Bullet><code>AccountHolder</code> <Badge class="badge badge--secondary"></Badge>',id:"onboardingaccountholderaccountholder-",level:4},{value:'<code>Onboarding.<b>onboardingUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onboardingonboardingurlstring--",level:4},{value:'<code>Onboarding.<b>onboardingState</b></code><Bullet></Bullet><code>OnboardingState!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onboardingonboardingstateonboardingstate--",level:4},{value:'<code>Onboarding.<b>redirectUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onboardingredirecturlstring---",level:4},{value:'<code>Onboarding.<b>oAuthRedirectParameters</b></code><Bullet></Bullet><code>OAuthRedirectParameters</code> <Badge class="badge badge--secondary"></Badge>',id:"onboardingoauthredirectparametersoauthredirectparameters-",level:4},{value:'<code>Onboarding.<b>statusInfo</b></code><Bullet></Bullet><code>OnboardingStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onboardingstatusinfoonboardingstatusinfo--",level:4},{value:'<code>Onboarding.<b>tcuUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onboardingtcuurlstring--",level:4},{value:'<code>Onboarding.<b>supportingDocumentCollection</b></code><Bullet></Bullet><code>SupportingDocumentCollection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onboardingsupportingdocumentcollectionsupportingdocumentcollection--",level:4},{value:'<code>Onboarding.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onboardingupdatedatdatetime--",level:4},{value:'<code>Onboarding.<b>account</b></code><Bullet></Bullet><code>Account</code> <Badge class="badge badge--secondary"></Badge>',id:"onboardingaccountaccount-",level:4},{value:'<code>Onboarding.<b>legalRepresentativeAcceptedIdentificationLevels</b></code><Bullet></Bullet><code>[IdentificationLevel]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onboardinglegalrepresentativeacceptedidentificationlevelsidentificationlevel--",level:4},{value:'<code>Onboarding.<b>legalRepresentativeRecommendedIdentificationLevel</b></code><Bullet></Bullet><code>IdentificationLevel!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onboardinglegalrepresentativerecommendedidentificationlevelidentificationlevel--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:n,children:d,startOpen:s=!1})=>{const r={details:"details",summary:"summary",...(0,o.a)()},[t,i]=(0,c.useState)(s);return(0,a.jsxs)(r.details,{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:t?e:n}),t&&d]})};function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Information provided during the onboarding process of an individual or a company"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type Onboarding {\n  id: String!\n  accountName: String\n  accountCountry: AccountCountry!\n  createdAt: DateTime!\n  email: String\n  finalizedAt: DateTime\n  language: String\n  info: OnboardingAccountHolderInfo!\n  accountHolder: AccountHolder\n  onboardingUrl: String!\n  onboardingState: OnboardingState!\n  redirectUrl: String! @deprecated\n  oAuthRedirectParameters: OAuthRedirectParameters\n  statusInfo: OnboardingStatusInfo!\n  tcuUrl: String!\n  supportingDocumentCollection: SupportingDocumentCollection!\n  updatedAt: DateTime!\n  account: Account\n  legalRepresentativeAcceptedIdentificationLevels: [IdentificationLevel]!\n  legalRepresentativeRecommendedIdentificationLevel: IdentificationLevel!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingidstring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Unique identifier of an onboarding"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingaccountnamestring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"accountName"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Account name"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingaccountcountryaccountcountry--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"accountCountry"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/enums/account-country",children:(0,a.jsx)(n.code,{children:"AccountCountry!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Account Country"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingcreatedatdatetime--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/date-time",children:(0,a.jsx)(n.code,{children:"DateTime!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Creation date"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingemailstring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"email"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Email"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingfinalizedatdatetime-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"finalizedAt"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/date-time",children:(0,a.jsx)(n.code,{children:"DateTime"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Finalization date"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardinglanguagestring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"language"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Language of the onboarding process. This consists of a 2-3 letter base language tag representing the language, optionally followed by additional subtags separated by '-'. The most common extra information is the country or region variant (like 'en-US' or 'fr-CA') or the type of alphabet to use (like 'sr-Latn'). Other variants like the type of orthography ('de-DE-1996') are usually not used in the context of this header. ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language",children:"Learn More"})]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardinginfoonboardingaccountholderinfo--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"info"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/interfaces/onboarding-account-holder-info",children:(0,a.jsx)(n.code,{children:"OnboardingAccountHolderInfo!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Information regarding the Individual or the company to onboard"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingaccountholderaccountholder-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"accountHolder"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/account-holder",children:(0,a.jsx)(n.code,{children:"AccountHolder"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Account holder created at the end of the onboarding process"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingonboardingurlstring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"onboardingUrl"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Redirect the legal representative of a new account holder to this URL to start the onboarding process"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingonboardingstateonboardingstate--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"onboardingState"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/enums/onboarding-state",children:(0,a.jsx)(n.code,{children:"OnboardingState!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Current computed state of onboarding"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingredirecturlstring---",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"redirectUrl"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(b,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.admonition,{title:"DEPRECATED",type:"warning",children:(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"redirectUrl"})," field on oauthRedirectParameters parameters instead."]})}),"\n",(0,a.jsxs)(n.p,{children:["URL used to redirect the user at the end of the onboarding process. If ",(0,a.jsx)(n.code,{children:"null"})," the user is redirected to the white label web banking."]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingoauthredirectparametersoauthredirectparameters-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"oAuthRedirectParameters"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/oauth-redirect-parameters",children:(0,a.jsx)(n.code,{children:"OAuthRedirectParameters"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Extra parameters provided by partner"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingstatusinfoonboardingstatusinfo--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"statusInfo"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/interfaces/onboarding-status-info",children:(0,a.jsx)(n.code,{children:"OnboardingStatusInfo!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Status (valid/invalid/finalized) and details of errors on fields"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingtcuurlstring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"tcuUrl"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Swan TCU URL"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingsupportingdocumentcollectionsupportingdocumentcollection--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"supportingDocumentCollection"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/supporting-document-collection",children:(0,a.jsx)(n.code,{children:"SupportingDocumentCollection!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"List of supporting document collection owned by the account holder."}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingupdatedatdatetime--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"updatedAt"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/date-time",children:(0,a.jsx)(n.code,{children:"DateTime!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Creation date"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardingaccountaccount-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"account"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/account",children:(0,a.jsx)(n.code,{children:"Account"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Account opened after the onboarding finalization"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardinglegalrepresentativeacceptedidentificationlevelsidentificationlevel--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"legalRepresentativeAcceptedIdentificationLevels"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/enums/identification-level",children:(0,a.jsx)(n.code,{children:"[IdentificationLevel]!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"List of accepted identification level for the legal representative"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"onboardinglegalrepresentativerecommendedidentificationlevelidentificationlevel--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Onboarding.",(0,a.jsx)("b",{children:"legalRepresentativeRecommendedIdentificationLevel"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/enums/identification-level",children:(0,a.jsx)(n.code,{children:"IdentificationLevel!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Recommended identification level for the legal representative"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/queries/onboarding",children:(0,a.jsx)(n.code,{children:"onboarding"})}),"  ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/objects/account-holder",children:(0,a.jsx)(n.code,{children:"AccountHolder"})}),"  ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/capital-deposit-case",children:(0,a.jsx)(n.code,{children:"CapitalDepositCase"})}),"  ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/finalize-onboarding-success-payload",children:(0,a.jsx)(n.code,{children:"FinalizeOnboardingSuccessPayload"})}),"  ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/onboard-company-account-holder-success-payload",children:(0,a.jsx)(n.code,{children:"OnboardCompanyAccountHolderSuccessPayload"})}),"  ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/onboard-individual-account-holder-success-payload",children:(0,a.jsx)(n.code,{children:"OnboardIndividualAccountHolderSuccessPayload"})}),"  ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/onboarding-edge",children:(0,a.jsx)(n.code,{children:"OnboardingEdge"})}),"  ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/onboarding-not-completed-rejection",children:(0,a.jsx)(n.code,{children:"OnboardingNotCompletedRejection"})}),"  ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/objects/shareholder",children:(0,a.jsx)(n.code,{children:"Shareholder"})}),"  ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},11151:(e,n,d)=>{d.d(n,{Z:()=>r,a:()=>s});var a=d(67294);const o={},c=a.createContext(o);function s(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);