"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[91238],{97187:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>l,Details:()=>j,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var a=n(85893),i=n(11151),r=n(67294);const s={id:"initiate-credit-transfers-payload",title:"InitiateCreditTransfersPayload"},d=void 0,o={id:"unions/initiate-credit-transfers-payload",title:"InitiateCreditTransfersPayload",description:"No description",source:"@site/docs/unions/initiate-credit-transfers-payload.mdx",sourceDirName:"unions",slug:"/unions/initiate-credit-transfers-payload",permalink:"/unions/initiate-credit-transfers-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/initiate-credit-transfers-payload.mdx",tags:[],version:"current",frontMatter:{id:"initiate-credit-transfers-payload",title:"InitiateCreditTransfersPayload"},sidebar:"schemaSidebar",previous:{title:"IdentificationLevelStatusInfo",permalink:"/unions/identification-level-status-info"},next:{title:"InitiateFundingRequestPayload",permalink:"/unions/initiate-funding-request-payload"}},c={},l=()=>{const e={span:"span",...(0,i.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,i.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const t={span:"span",...(0,i.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>InitiateCreditTransfersPayload.<b>InitiateCreditTransfersSuccessPayload</b></code> <Badge class="badge badge--secondary"></Badge>',id:"initiatecredittransferspayloadinitiatecredittransferssuccesspayload-",level:4},{value:'<code>InitiateCreditTransfersPayload.<b>AccountNotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"initiatecredittransferspayloadaccountnotfoundrejection-",level:4},{value:'<code>InitiateCreditTransfersPayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"initiatecredittransferspayloadforbiddenrejection-",level:4},{value:'<code>InitiateCreditTransfersPayload.<b>InternalErrorRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"initiatecredittransferspayloadinternalerrorrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],j=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const d={details:"details",summary:"summary",...(0,i.a)()},[o,c]=(0,r.useState)(s);return(0,a.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})};function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"union InitiateCreditTransfersPayload = InitiateCreditTransfersSuccessPayload | AccountNotFoundRejection | ForbiddenRejection | InternalErrorRejection\n"})}),"\n",(0,a.jsx)(t.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,a.jsxs)(t.h4,{id:"initiatecredittransferspayloadinitiatecredittransferssuccesspayload-",children:[(0,a.jsx)(t.a,{href:"/objects/initiate-credit-transfers-success-payload",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InitiateCreditTransfersPayload.",(0,a.jsx)("b",{children:"InitiateCreditTransfersSuccessPayload"})]})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"initiatecredittransferspayloadaccountnotfoundrejection-",children:[(0,a.jsx)(t.a,{href:"/objects/account-not-found-rejection",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InitiateCreditTransfersPayload.",(0,a.jsx)("b",{children:"AccountNotFoundRejection"})]})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Rejection returned if the account was not found or if the user does not have the rights to know that the card exists"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"initiatecredittransferspayloadforbiddenrejection-",children:[(0,a.jsx)(t.a,{href:"/objects/forbidden-rejection",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InitiateCreditTransfersPayload.",(0,a.jsx)("b",{children:"ForbiddenRejection"})]})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"initiatecredittransferspayloadinternalerrorrejection-",children:[(0,a.jsx)(t.a,{href:"/objects/internal-error-rejection",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InitiateCreditTransfersPayload.",(0,a.jsx)("b",{children:"InternalErrorRejection"})]})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Rejection returned on unexpected server error"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/mutations/initiate-credit-transfers",children:(0,a.jsx)(t.code,{children:"initiateCreditTransfers"})}),"  ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"mutation"})]})]})}function b(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>s});var a=n(67294);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);