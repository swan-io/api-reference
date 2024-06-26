"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[61862],{77741:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>p,assets:()=>r,contentTitle:()=>d,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>j});var o=t(85893),c=t(11151),s=t(67294);const a={id:"accept-consent-payload",title:"AcceptConsentPayload"},d=void 0,l={id:"unions/accept-consent-payload",title:"AcceptConsentPayload",description:"No description",source:"@site/docs/unions/accept-consent-payload.mdx",sourceDirName:"unions",slug:"/unions/accept-consent-payload",permalink:"/unions/accept-consent-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/accept-consent-payload.mdx",tags:[],version:"current",frontMatter:{id:"accept-consent-payload",title:"AcceptConsentPayload"},sidebar:"schemaSidebar",previous:{title:"WebhookSubscriptionStatus",permalink:"/enums/webhook-subscription-status"},next:{title:"ActivatePhysicalCardPayload",permalink:"/unions/activate-physical-card-payload"}},r={},i=()=>{const e={span:"span",...(0,c.a)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,c.a)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,c.a)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},j=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>AcceptConsentPayload.<b>AcceptConsentSuccessPayload</b></code> <Badge class="badge badge--secondary"></Badge>',id:"acceptconsentpayloadacceptconsentsuccesspayload-",level:4},{value:'<code>AcceptConsentPayload.<b>ConsentNotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"acceptconsentpayloadconsentnotfoundrejection-",level:4},{value:'<code>AcceptConsentPayload.<b>OperationNotAllowedRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"acceptconsentpayloadoperationnotallowedrejection-",level:4},{value:'<code>AcceptConsentPayload.<b>UserNotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"acceptconsentpayloadusernotfoundrejection-",level:4},{value:'<code>AcceptConsentPayload.<b>AcceptConsentNotAllowedForConsentPurposeRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"acceptconsentpayloadacceptconsentnotallowedforconsentpurposerejection-",level:4},{value:'<code>AcceptConsentPayload.<b>NotAllowedUserStatusRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"acceptconsentpayloadnotalloweduserstatusrejection-",level:4},{value:'<code>AcceptConsentPayload.<b>NotReachableConsentStatusRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"acceptconsentpayloadnotreachableconsentstatusrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],h=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const d={details:"details",summary:"summary",...(0,c.a)()},[l,r]=(0,s.useState)(a);return(0,o.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(d.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})};function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"No description"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"union AcceptConsentPayload = AcceptConsentSuccessPayload | ConsentNotFoundRejection | OperationNotAllowedRejection | UserNotFoundRejection | AcceptConsentNotAllowedForConsentPurposeRejection | NotAllowedUserStatusRejection | NotReachableConsentStatusRejection\n"})}),"\n",(0,o.jsx)(n.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,o.jsxs)(n.h4,{id:"acceptconsentpayloadacceptconsentsuccesspayload-",children:[(0,o.jsx)(n.a,{href:"/objects/accept-consent-success-payload",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["AcceptConsentPayload.",(0,o.jsx)("b",{children:"AcceptConsentSuccessPayload"})]})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"acceptconsentpayloadconsentnotfoundrejection-",children:[(0,o.jsx)(n.a,{href:"/objects/consent-not-found-rejection",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["AcceptConsentPayload.",(0,o.jsx)("b",{children:"ConsentNotFoundRejection"})]})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Rejection returned if a consent was not found"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"acceptconsentpayloadoperationnotallowedrejection-",children:[(0,o.jsx)(n.a,{href:"/objects/operation-not-allowed-rejection",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["AcceptConsentPayload.",(0,o.jsx)("b",{children:"OperationNotAllowedRejection"})]})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"acceptconsentpayloadusernotfoundrejection-",children:[(0,o.jsx)(n.a,{href:"/objects/user-not-found-rejection",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["AcceptConsentPayload.",(0,o.jsx)("b",{children:"UserNotFoundRejection"})]})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"acceptconsentpayloadacceptconsentnotallowedforconsentpurposerejection-",children:[(0,o.jsx)(n.a,{href:"/objects/accept-consent-not-allowed-for-consent-purpose-rejection",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["AcceptConsentPayload.",(0,o.jsx)("b",{children:"AcceptConsentNotAllowedForConsentPurposeRejection"})]})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Rejection returned when the Consent purpose is not allowed"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"acceptconsentpayloadnotalloweduserstatusrejection-",children:[(0,o.jsx)(n.a,{href:"/objects/not-allowed-user-status-rejection",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["AcceptConsentPayload.",(0,o.jsx)("b",{children:"NotAllowedUserStatusRejection"})]})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Rejection returned when the User status is not allowed"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"acceptconsentpayloadnotreachableconsentstatusrejection-",children:[(0,o.jsx)(n.a,{href:"/objects/not-reachable-consent-status-rejection",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["AcceptConsentPayload.",(0,o.jsx)("b",{children:"NotReachableConsentStatusRejection"})]})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Rejection returned when consent status couldn't change"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/mutations/accept-consent",children:(0,o.jsx)(n.code,{children:"acceptConsent"})}),"  ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]})]})}function y(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>a});var o=t(67294);const c={},s=o.createContext(c);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);