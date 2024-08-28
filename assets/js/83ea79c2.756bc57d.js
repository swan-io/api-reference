"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[89125],{48808:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>p,Bullet:()=>r,Details:()=>y,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>t,default:()=>x,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var o=d(74848),n=d(28453),l=d(96540);const s={id:"allow-sdd-payload",title:"AllowSddPayload"},t=void 0,i={id:"unions/allow-sdd-payload",title:"AllowSddPayload",description:"No description",source:"@site/docs/unions/allow-sdd-payload.mdx",sourceDirName:"unions",slug:"/unions/allow-sdd-payload",permalink:"/unions/allow-sdd-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/allow-sdd-payload.mdx",tags:[],version:"current",frontMatter:{id:"allow-sdd-payload",title:"AllowSddPayload"},sidebar:"schemaSidebar",previous:{title:"AddVirtualIbanEntryPayload",permalink:"/unions/add-virtual-iban-entry-payload"},next:{title:"AllowSddVirtualIbanEntryPayload",permalink:"/unions/allow-sdd-virtual-iban-entry-payload"}},c={},r=()=>{const e={span:"span",...(0,n.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const a={a:"a",...(0,n.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const a={span:"span",...(0,n.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:a,children:d,startOpen:s=!1})=>{const t={details:"details",summary:"summary",...(0,n.R)()},[i,c]=(0,l.useState)(s);return(0,o.jsxs)(t.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(t.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:a}),i&&d]})},h=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>AllowSddPayload.<b>AllowSddSuccessPayload</b></code> <Badge class="badge badge--secondary"></Badge>',id:"allowsddpayloadallowsddsuccesspayload-",level:4},{value:'<code>AllowSddPayload.<b>AccountNotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"allowsddpayloadaccountnotfoundrejection-",level:4},{value:'<code>AllowSddPayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"allowsddpayloadvalidationrejection-",level:4},{value:"Returned By",id:"returned-by",level:3}];function j(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"No description"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-graphql",children:"union AllowSddPayload = AllowSddSuccessPayload | AccountNotFoundRejection | ValidationRejection\n"})}),"\n",(0,o.jsx)(a.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,o.jsxs)(a.h4,{id:"allowsddpayloadallowsddsuccesspayload-",children:[(0,o.jsx)(a.a,{href:"/objects/allow-sdd-success-payload",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["AllowSddPayload.",(0,o.jsx)("b",{children:"AllowSddSuccessPayload"})]})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(a.h4,{id:"allowsddpayloadaccountnotfoundrejection-",children:[(0,o.jsx)(a.a,{href:"/objects/account-not-found-rejection",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["AllowSddPayload.",(0,o.jsx)("b",{children:"AccountNotFoundRejection"})]})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(a.p,{children:"Rejection returned if the account was not found or if the user does not have the rights to know that the card exists"}),"\n",(0,o.jsxs)(a.h4,{id:"allowsddpayloadvalidationrejection-",children:[(0,o.jsx)(a.a,{href:"/objects/validation-rejection",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["AllowSddPayload.",(0,o.jsx)("b",{children:"ValidationRejection"})]})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(a.p,{children:"Rejection returned if an input contains invalid data"}),"\n",(0,o.jsx)(a.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"/mutations/allow-sdd",children:(0,o.jsx)(a.code,{children:"allowSdd"})}),"  ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function x(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}},28453:(e,a,d)=>{d.d(a,{R:()=>s,x:()=>t});var o=d(96540);const n={},l=o.createContext(n);function s(e){const a=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(l.Provider,{value:a},e.children)}}}]);