"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[8066],{13053:(e,o,n)=>{n.r(o),n.d(o,{Badge:()=>p,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>y});var a=n(74848),d=n(28453),c=n(96540);const r={id:"onboard-company-account-holder-payload",title:"OnboardCompanyAccountHolderPayload"},t=void 0,s={id:"unions/onboard-company-account-holder-payload",title:"OnboardCompanyAccountHolderPayload",description:"No description",source:"@site/docs/unions/onboard-company-account-holder-payload.mdx",sourceDirName:"unions",slug:"/unions/onboard-company-account-holder-payload",permalink:"/unions/onboard-company-account-holder-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/onboard-company-account-holder-payload.mdx",tags:[],version:"current",frontMatter:{id:"onboard-company-account-holder-payload",title:"OnboardCompanyAccountHolderPayload"},sidebar:"schemaSidebar",previous:{title:"InternationalCreditTransferDebtor",permalink:"/unions/international-credit-transfer-debtor"},next:{title:"OnboardIndividualAccountHolderPayload",permalink:"/unions/onboard-individual-account-holder-payload"}},l={},i=()=>{const e={span:"span",...(0,d.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const o={a:"a",...(0,d.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const o={span:"span",...(0,d.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:o,children:n,startOpen:r=!1})=>{const t={details:"details",summary:"summary",...(0,d.R)()},[s,l]=(0,c.useState)(r);return(0,a.jsxs)(t.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(t.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:s?e:o}),s&&n]})},y=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>OnboardCompanyAccountHolderPayload.<b>OnboardCompanyAccountHolderSuccessPayload</b></code> <Badge class="badge badge--secondary"></Badge>',id:"onboardcompanyaccountholderpayloadonboardcompanyaccountholdersuccesspayload-",level:4},{value:'<code>OnboardCompanyAccountHolderPayload.<b>BadRequestRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"onboardcompanyaccountholderpayloadbadrequestrejection-",level:4},{value:'<code>OnboardCompanyAccountHolderPayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"onboardcompanyaccountholderpayloadforbiddenrejection-",level:4},{value:'<code>OnboardCompanyAccountHolderPayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"onboardcompanyaccountholderpayloadvalidationrejection-",level:4},{value:"Returned By",id:"returned-by",level:3}];function h(e){const o={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"No description"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-graphql",children:"union OnboardCompanyAccountHolderPayload = OnboardCompanyAccountHolderSuccessPayload | BadRequestRejection | ForbiddenRejection | ValidationRejection\n"})}),"\n",(0,a.jsx)(o.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,a.jsxs)(o.h4,{id:"onboardcompanyaccountholderpayloadonboardcompanyaccountholdersuccesspayload-",children:[(0,a.jsx)(o.a,{href:"/objects/onboard-company-account-holder-success-payload",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardCompanyAccountHolderPayload.",(0,a.jsx)("b",{children:"OnboardCompanyAccountHolderSuccessPayload"})]})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(o.h4,{id:"onboardcompanyaccountholderpayloadbadrequestrejection-",children:[(0,a.jsx)(o.a,{href:"/objects/bad-request-rejection",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardCompanyAccountHolderPayload.",(0,a.jsx)("b",{children:"BadRequestRejection"})]})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(o.h4,{id:"onboardcompanyaccountholderpayloadforbiddenrejection-",children:[(0,a.jsx)(o.a,{href:"/objects/forbidden-rejection",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardCompanyAccountHolderPayload.",(0,a.jsx)("b",{children:"ForbiddenRejection"})]})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(o.h4,{id:"onboardcompanyaccountholderpayloadvalidationrejection-",children:[(0,a.jsx)(o.a,{href:"/objects/validation-rejection",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["OnboardCompanyAccountHolderPayload.",(0,a.jsx)("b",{children:"ValidationRejection"})]})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(o.p,{children:"Rejection returned if an input contains invalid data"}),"\n",(0,a.jsx)(o.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/mutations/onboard-company-account-holder",children:(0,a.jsx)(o.code,{children:"onboardCompanyAccountHolder"})}),"  ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function m(e={}){const{wrapper:o}={...(0,d.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>t});var a=n(96540);const d={},c=a.createContext(d);function r(e){const o=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),a.createElement(c.Provider,{value:o},e.children)}}}]);