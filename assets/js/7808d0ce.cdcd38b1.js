"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[9754],{31125:(e,d,r)=>{r.r(d),r.d(d,{Badge:()=>p,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>n,metadata:()=>s,toc:()=>b});var t=r(74848),a=r(28453),o=r(96540);const n={id:"card-product-by-id-result-payload",title:"CardProductByIdResultPayload"},c=void 0,s={id:"unions/card-product-by-id-result-payload",title:"CardProductByIdResultPayload",description:"No description",source:"@site/docs/unions/card-product-by-id-result-payload.mdx",sourceDirName:"unions",slug:"/unions/card-product-by-id-result-payload",permalink:"/unions/card-product-by-id-result-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/card-product-by-id-result-payload.mdx",tags:[],version:"current",frontMatter:{id:"card-product-by-id-result-payload",title:"CardProductByIdResultPayload"},sidebar:"schemaSidebar",previous:{title:"CardMerchant",permalink:"/unions/card-merchant"},next:{title:"CloseAccountPayload",permalink:"/unions/close-account-payload"}},l={},i=()=>{const e={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const d={a:"a",...(0,a.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const d={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(d.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:d,children:r,startOpen:n=!1})=>{const c={details:"details",summary:"summary",...(0,a.R)()},[s,l]=(0,o.useState)(n);return(0,t.jsxs)(c.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:s?e:d}),s&&r]})},b=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>CardProductByIdResultPayload.<b>CardProduct</b></code> <Badge class="badge badge--secondary"></Badge>',id:"cardproductbyidresultpayloadcardproduct-",level:4},{value:'<code>CardProductByIdResultPayload.<b>CardProductNotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"cardproductbyidresultpayloadcardproductnotfoundrejection-",level:4},{value:'<code>CardProductByIdResultPayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"cardproductbyidresultpayloadforbiddenrejection-",level:4},{value:"Returned By",id:"returned-by",level:3}];function h(e){const d={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.p,{children:"No description"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-graphql",children:"union CardProductByIdResultPayload = CardProduct | CardProductNotFoundRejection | ForbiddenRejection\n"})}),"\n",(0,t.jsx)(d.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,t.jsxs)(d.h4,{id:"cardproductbyidresultpayloadcardproduct-",children:[(0,t.jsx)(d.a,{href:"/objects/card-product",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardProductByIdResultPayload.",(0,t.jsx)("b",{children:"CardProduct"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(d.p,{children:"Card Product"}),"\n",(0,t.jsxs)(d.h4,{id:"cardproductbyidresultpayloadcardproductnotfoundrejection-",children:[(0,t.jsx)(d.a,{href:"/objects/card-product-not-found-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardProductByIdResultPayload.",(0,t.jsx)("b",{children:"CardProductNotFoundRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(d.h4,{id:"cardproductbyidresultpayloadforbiddenrejection-",children:[(0,t.jsx)(d.a,{href:"/objects/forbidden-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardProductByIdResultPayload.",(0,t.jsx)("b",{children:"ForbiddenRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(d.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.a,{href:"/queries/card-product-by-id",children:(0,t.jsx)(d.code,{children:"cardProductById"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"query"})]})]})}function j(e={}){const{wrapper:d}={...(0,a.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,d,r)=>{r.d(d,{R:()=>n,x:()=>c});var t=r(96540);const a={},o=t.createContext(a);function n(e){const d=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),t.createElement(o.Provider,{value:d},e.children)}}}]);