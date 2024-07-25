"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[79233],{81526:(e,o,n)=>{n.r(o),n.d(o,{Badge:()=>j,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var c=n(85893),a=n(11151),t=n(67294);const s={id:"close-account-payload",title:"CloseAccountPayload"},d=void 0,l={id:"unions/close-account-payload",title:"CloseAccountPayload",description:"No description",source:"@site/docs/unions/close-account-payload.mdx",sourceDirName:"unions",slug:"/unions/close-account-payload",permalink:"/unions/close-account-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/close-account-payload.mdx",tags:[],version:"current",frontMatter:{id:"close-account-payload",title:"CloseAccountPayload"},sidebar:"schemaSidebar",previous:{title:"CardProductByIdResultPayload",permalink:"/unions/card-product-by-id-result-payload"},next:{title:"CloseAccountStatusReason",permalink:"/unions/close-account-status-reason"}},r={},i=()=>{const e={span:"span",...(0,a.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const o={a:"a",...(0,a.a)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const o={span:"span",...(0,a.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(o.span,{className:e.class,children:e.text})})},h=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>CloseAccountPayload.<b>CloseAccountSuccessPayload</b></code> <Badge class="badge badge--secondary"></Badge>',id:"closeaccountpayloadcloseaccountsuccesspayload-",level:4},{value:'<code>CloseAccountPayload.<b>AccountNotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"closeaccountpayloadaccountnotfoundrejection-",level:4},{value:'<code>CloseAccountPayload.<b>BadAccountStatusRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"closeaccountpayloadbadaccountstatusrejection-",level:4},{value:'<code>CloseAccountPayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"closeaccountpayloadforbiddenrejection-",level:4},{value:'<code>CloseAccountPayload.<b>InternalErrorRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"closeaccountpayloadinternalerrorrejection-",level:4},{value:'<code>CloseAccountPayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"closeaccountpayloadvalidationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],b=({dataOpen:e,dataClose:o,children:n,startOpen:s=!1})=>{const d={details:"details",summary:"summary",...(0,a.a)()},[l,r]=(0,t.useState)(s);return(0,c.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(d.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:o}),l&&n]})};function y(e){const o={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.p,{children:"No description"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-graphql",children:"union CloseAccountPayload = CloseAccountSuccessPayload | AccountNotFoundRejection | BadAccountStatusRejection | ForbiddenRejection | InternalErrorRejection | ValidationRejection\n"})}),"\n",(0,c.jsx)(o.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,c.jsxs)(o.h4,{id:"closeaccountpayloadcloseaccountsuccesspayload-",children:[(0,c.jsx)(o.a,{href:"/objects/close-account-success-payload",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CloseAccountPayload.",(0,c.jsx)("b",{children:"CloseAccountSuccessPayload"})]})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(o.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(o.h4,{id:"closeaccountpayloadaccountnotfoundrejection-",children:[(0,c.jsx)(o.a,{href:"/objects/account-not-found-rejection",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CloseAccountPayload.",(0,c.jsx)("b",{children:"AccountNotFoundRejection"})]})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(o.blockquote,{children:["\n",(0,c.jsx)(o.p,{children:"Rejection returned if the account was not found or if the user does not have the rights to know that the card exists"}),"\n"]}),"\n",(0,c.jsxs)(o.h4,{id:"closeaccountpayloadbadaccountstatusrejection-",children:[(0,c.jsx)(o.a,{href:"/objects/bad-account-status-rejection",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CloseAccountPayload.",(0,c.jsx)("b",{children:"BadAccountStatusRejection"})]})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(o.blockquote,{children:["\n",(0,c.jsx)(o.p,{children:"Rejection returned if the status account is not valid"}),"\n"]}),"\n",(0,c.jsxs)(o.h4,{id:"closeaccountpayloadforbiddenrejection-",children:[(0,c.jsx)(o.a,{href:"/objects/forbidden-rejection",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CloseAccountPayload.",(0,c.jsx)("b",{children:"ForbiddenRejection"})]})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(o.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(o.h4,{id:"closeaccountpayloadinternalerrorrejection-",children:[(0,c.jsx)(o.a,{href:"/objects/internal-error-rejection",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CloseAccountPayload.",(0,c.jsx)("b",{children:"InternalErrorRejection"})]})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(o.blockquote,{children:["\n",(0,c.jsx)(o.p,{children:"Rejection returned on unexpected server error"}),"\n"]}),"\n",(0,c.jsxs)(o.h4,{id:"closeaccountpayloadvalidationrejection-",children:[(0,c.jsx)(o.a,{href:"/objects/validation-rejection",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CloseAccountPayload.",(0,c.jsx)("b",{children:"ValidationRejection"})]})})," ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(o.blockquote,{children:["\n",(0,c.jsx)(o.p,{children:"Rejection returned if an input contains invalid data"}),"\n"]}),"\n",(0,c.jsx)(o.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,c.jsxs)(o.p,{children:[(0,c.jsx)(o.a,{href:"/mutations/close-account",children:(0,c.jsx)(o.code,{children:"closeAccount"})}),"  ",(0,c.jsx)(j,{class:"badge badge--secondary",text:"mutation"})]})]})}function p(e={}){const{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,c.jsx)(o,{...e,children:(0,c.jsx)(y,{...e})}):y(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>d,a:()=>s});var c=n(67294);const a={},t=c.createContext(a);function s(e){const o=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),c.createElement(t.Provider,{value:o},e.children)}}}]);