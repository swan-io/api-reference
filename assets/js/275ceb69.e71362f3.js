"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[66612],{17699:(e,a,o)=>{o.r(a),o.d(a,{Badge:()=>p,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>l,toc:()=>y});var t=o(74848),n=o(28453),d=o(96540);const c={id:"update-account-holder-payload",title:"UpdateAccountHolderPayload"},s=void 0,l={id:"unions/update-account-holder-payload",title:"UpdateAccountHolderPayload",description:"No description",source:"@site/docs/unions/update-account-holder-payload.mdx",sourceDirName:"unions",slug:"/unions/update-account-holder-payload",permalink:"/unions/update-account-holder-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/update-account-holder-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-account-holder-payload",title:"UpdateAccountHolderPayload"},sidebar:"schemaSidebar",previous:{title:"SuspendReceivedDirectDebitMandatePayload",permalink:"/unions/suspend-received-direct-debit-mandate-payload"},next:{title:"UpdateAccountMembershipPayload",permalink:"/unions/update-account-membership-payload"}},r={},i=()=>{const e={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const a={a:"a",...(0,n.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const a={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:a,children:o,startOpen:c=!1})=>{const s={details:"details",summary:"summary",...(0,n.R)()},[l,r]=(0,d.useState)(c);return(0,t.jsxs)(s.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(s.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&o]})},y=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>UpdateAccountHolderPayload.<b>UpdateAccountHolderSuccessPayload</b></code> <Badge class="badge badge--secondary"></Badge>',id:"updateaccountholderpayloadupdateaccountholdersuccesspayload-",level:4},{value:'<code>UpdateAccountHolderPayload.<b>AccountHolderNotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"updateaccountholderpayloadaccountholdernotfoundrejection-",level:4},{value:'<code>UpdateAccountHolderPayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"updateaccountholderpayloadvalidationrejection-",level:4},{value:"Returned By",id:"returned-by",level:3}];function j(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"No description"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"union UpdateAccountHolderPayload = UpdateAccountHolderSuccessPayload | AccountHolderNotFoundRejection | ValidationRejection\n"})}),"\n",(0,t.jsx)(a.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,t.jsxs)(a.h4,{id:"updateaccountholderpayloadupdateaccountholdersuccesspayload-",children:[(0,t.jsx)(a.a,{href:"/objects/update-account-holder-success-payload",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateAccountHolderPayload.",(0,t.jsx)("b",{children:"UpdateAccountHolderSuccessPayload"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.h4,{id:"updateaccountholderpayloadaccountholdernotfoundrejection-",children:[(0,t.jsx)(a.a,{href:"/objects/account-holder-not-found-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateAccountHolderPayload.",(0,t.jsx)("b",{children:"AccountHolderNotFoundRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Rejection returned when the Account Holder was not found"}),"\n",(0,t.jsxs)(a.h4,{id:"updateaccountholderpayloadvalidationrejection-",children:[(0,t.jsx)(a.a,{href:"/objects/validation-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateAccountHolderPayload.",(0,t.jsx)("b",{children:"ValidationRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.p,{children:"Rejection returned if an input contains invalid data"}),"\n",(0,t.jsx)(a.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/mutations/update-account-holder",children:(0,t.jsx)(a.code,{children:"updateAccountHolder"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function b(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},28453:(e,a,o)=>{o.d(a,{R:()=>c,x:()=>s});var t=o(96540);const n={},d=t.createContext(n);function c(e){const a=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(d.Provider,{value:a},e.children)}}}]);