"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[48769],{81724:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>u,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>b,assets:()=>s,contentTitle:()=>r,default:()=>v,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var d=t(85893),n=t(11151),i=t(67294);const c={id:"enable-received-direct-debit-mandate-payload",title:"EnableReceivedDirectDebitMandatePayload"},r=void 0,o={id:"unions/enable-received-direct-debit-mandate-payload",title:"EnableReceivedDirectDebitMandatePayload",description:"Union type return by the enableReceivedDirectDebitMandate mutation",source:"@site/docs/unions/enable-received-direct-debit-mandate-payload.mdx",sourceDirName:"unions",slug:"/unions/enable-received-direct-debit-mandate-payload",permalink:"/unions/enable-received-direct-debit-mandate-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/enable-received-direct-debit-mandate-payload.mdx",tags:[],version:"current",frontMatter:{id:"enable-received-direct-debit-mandate-payload",title:"EnableReceivedDirectDebitMandatePayload"},sidebar:"schemaSidebar",previous:{title:"DisableAccountMembershipPayload",permalink:"/unions/disable-account-membership-payload"},next:{title:"ExportDataPayload",permalink:"/unions/export-data-payload"}},s={},l=()=>{const e={span:"span",...(0,n.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const a={a:"a",...(0,n.a)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,n.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},h=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>EnableReceivedDirectDebitMandatePayload.<b>EnableReceivedDirectDebitMandateSuccessPayload</b></code> <Badge class="badge badge--secondary"></Badge>',id:"enablereceiveddirectdebitmandatepayloadenablereceiveddirectdebitmandatesuccesspayload-",level:4},{value:'<code>EnableReceivedDirectDebitMandatePayload.<b>ReceivedDirectDebitMandateNotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"enablereceiveddirectdebitmandatepayloadreceiveddirectdebitmandatenotfoundrejection-",level:4},{value:'<code>EnableReceivedDirectDebitMandatePayload.<b>ReceivedDirectDebitMandateCanceledRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"enablereceiveddirectdebitmandatepayloadreceiveddirectdebitmandatecanceledrejection-",level:4},{value:'<code>EnableReceivedDirectDebitMandatePayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"enablereceiveddirectdebitmandatepayloadforbiddenrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=({dataOpen:e,dataClose:a,children:t,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,n.a)()},[o,s]=(0,i.useState)(c);return(0,d.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(r.summary,{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&t]})};function m(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"Union type return by the enableReceivedDirectDebitMandate mutation"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"union EnableReceivedDirectDebitMandatePayload = EnableReceivedDirectDebitMandateSuccessPayload | ReceivedDirectDebitMandateNotFoundRejection | ReceivedDirectDebitMandateCanceledRejection | ForbiddenRejection\n"})}),"\n",(0,d.jsx)(a.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,d.jsxs)(a.h4,{id:"enablereceiveddirectdebitmandatepayloadenablereceiveddirectdebitmandatesuccesspayload-",children:[(0,d.jsx)(a.a,{href:"/objects/enable-received-direct-debit-mandate-success-payload",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["EnableReceivedDirectDebitMandatePayload.",(0,d.jsx)("b",{children:"EnableReceivedDirectDebitMandateSuccessPayload"})]})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Return type in case of a successful response of the enableReceivedDirectDebitMandate mutation"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"enablereceiveddirectdebitmandatepayloadreceiveddirectdebitmandatenotfoundrejection-",children:[(0,d.jsx)(a.a,{href:"/objects/received-direct-debit-mandate-not-found-rejection",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["EnableReceivedDirectDebitMandatePayload.",(0,d.jsx)("b",{children:"ReceivedDirectDebitMandateNotFoundRejection"})]})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Error returned if the received direct debit mandate was not found or if the user does not have the rights to receive information abo\nut the existence of the received direct debit mandate"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"enablereceiveddirectdebitmandatepayloadreceiveddirectdebitmandatecanceledrejection-",children:[(0,d.jsx)(a.a,{href:"/objects/received-direct-debit-mandate-canceled-rejection",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["EnableReceivedDirectDebitMandatePayload.",(0,d.jsx)("b",{children:"ReceivedDirectDebitMandateCanceledRejection"})]})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Received direct debit mandate is canceled and therefore can't be enabled/suspended or updated"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"enablereceiveddirectdebitmandatepayloadforbiddenrejection-",children:[(0,d.jsx)(a.a,{href:"/objects/forbidden-rejection",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["EnableReceivedDirectDebitMandatePayload.",(0,d.jsx)("b",{children:"ForbiddenRejection"})]})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsx)(a.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/mutations/enable-received-direct-debit-mandate",children:(0,d.jsx)(a.code,{children:"enableReceivedDirectDebitMandate"})}),"  ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]})]})}function v(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(m,{...e})}):m(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>r,a:()=>c});var d=t(67294);const n={},i=d.createContext(n);function c(e){const a=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),d.createElement(i.Provider,{value:a},e.children)}}}]);