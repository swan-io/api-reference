"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[90768],{31746:(e,d,n)=>{n.r(d),n.d(d,{Badge:()=>p,Bullet:()=>l,Details:()=>j,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>b,frontMatter:()=>t,metadata:()=>r,toc:()=>h});var a=n(85893),s=n(11151),o=n(67294);const t={id:"suspend-card-product-payload",title:"SuspendCardProductPayload"},c=void 0,r={id:"unions/suspend-card-product-payload",title:"SuspendCardProductPayload",description:"No description",source:"@site/docs/unions/suspend-card-product-payload.mdx",sourceDirName:"unions",slug:"/unions/suspend-card-product-payload",permalink:"/unions/suspend-card-product-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/suspend-card-product-payload.mdx",tags:[],version:"current",frontMatter:{id:"suspend-card-product-payload",title:"SuspendCardProductPayload"},sidebar:"schemaSidebar",previous:{title:"SuspendAccountStatusReason",permalink:"/unions/suspend-account-status-reason"},next:{title:"SuspendPhysicalCardPayload",permalink:"/unions/suspend-physical-card-payload"}},i={},l=()=>{const e={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const d={a:"a",...(0,s.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const d={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d.span,{className:e.class,children:e.text})})},h=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>SuspendCardProductPayload.<b>SuspendCardProductSuccessPayload</b></code> <Badge class="badge badge--secondary"></Badge>',id:"suspendcardproductpayloadsuspendcardproductsuccesspayload-",level:4},{value:'<code>SuspendCardProductPayload.<b>CardProductNotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"suspendcardproductpayloadcardproductnotfoundrejection-",level:4},{value:'<code>SuspendCardProductPayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"suspendcardproductpayloadforbiddenrejection-",level:4},{value:'<code>SuspendCardProductPayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"suspendcardproductpayloadvalidationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],j=({dataOpen:e,dataClose:d,children:n,startOpen:t=!1})=>{const c={details:"details",summary:"summary",...(0,s.a)()},[r,i]=(0,o.useState)(t);return(0,a.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:d}),r&&n]})};function y(e){const d={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.p,{children:"No description"}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-graphql",children:"union SuspendCardProductPayload = SuspendCardProductSuccessPayload | CardProductNotFoundRejection | ForbiddenRejection | ValidationRejection\n"})}),"\n",(0,a.jsx)(d.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,a.jsxs)(d.h4,{id:"suspendcardproductpayloadsuspendcardproductsuccesspayload-",children:[(0,a.jsx)(d.a,{href:"/objects/suspend-card-product-success-payload",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SuspendCardProductPayload.",(0,a.jsx)("b",{children:"SuspendCardProductSuccessPayload"})]})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(d.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(d.h4,{id:"suspendcardproductpayloadcardproductnotfoundrejection-",children:[(0,a.jsx)(d.a,{href:"/objects/card-product-not-found-rejection",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SuspendCardProductPayload.",(0,a.jsx)("b",{children:"CardProductNotFoundRejection"})]})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(d.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(d.h4,{id:"suspendcardproductpayloadforbiddenrejection-",children:[(0,a.jsx)(d.a,{href:"/objects/forbidden-rejection",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SuspendCardProductPayload.",(0,a.jsx)("b",{children:"ForbiddenRejection"})]})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(d.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(d.h4,{id:"suspendcardproductpayloadvalidationrejection-",children:[(0,a.jsx)(d.a,{href:"/objects/validation-rejection",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SuspendCardProductPayload.",(0,a.jsx)("b",{children:"ValidationRejection"})]})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Rejection returned if an input contains invalid data"}),"\n"]}),"\n",(0,a.jsx)(d.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.a,{href:"/mutations/suspend-card-product",children:(0,a.jsx)(d.code,{children:"suspendCardProduct"})}),"  ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function b(e={}){const{wrapper:d}={...(0,s.a)(),...e.components};return d?(0,a.jsx)(d,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}},11151:(e,d,n)=>{n.d(d,{Z:()=>c,a:()=>t});var a=n(67294);const s={},o=a.createContext(s);function t(e){const d=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(o.Provider,{value:d},e.children)}}}]);