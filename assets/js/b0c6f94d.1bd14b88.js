"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[42881],{23459:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var s=n(85893),a=n(11151),o=n(67294);const r={id:"create-multi-consent",title:"createMultiConsent"},c=void 0,i={id:"mutations/create-multi-consent",title:"createMultiConsent",description:"Create a multi consent, which represents a consent of several other consents,",source:"@site/docs/mutations/create-multi-consent.mdx",sourceDirName:"mutations",slug:"/mutations/create-multi-consent",permalink:"/mutations/create-multi-consent",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/create-multi-consent.mdx",tags:[],version:"current",frontMatter:{id:"create-multi-consent",title:"createMultiConsent"},sidebar:"schemaSidebar",previous:{title:"createMerchantPaymentLink",permalink:"/mutations/create-merchant-payment-link"},next:{title:"deleteSupportingDocument",permalink:"/mutations/delete-supporting-document"}},l={},d=()=>{const e={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,a.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>createMultiConsent.<b>input</b></code><Bullet></Bullet><code>CreateMultiConsentInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createmulticonsentinputcreatemulticonsentinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CreateMultiConsentPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"createmulticonsentpayload-",level:4}],h=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,a.a)()},[i,l]=(0,o.useState)(r);return(0,s.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Create a multi consent, which represents a consent of several other consents,\nexecuted in parallel or sequentially depending on the ",(0,s.jsx)(t.code,{children:"order"})," input value"]}),"\n",(0,s.jsxs)(t.p,{children:["This mutation is restricted to a User access token (",(0,s.jsx)(t.a,{href:"https://docs.swan.io/api/authentication",children:"Learn More"}),") and ask the user to consent to this request."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"createMultiConsent(\n  input: CreateMultiConsentInput!\n): CreateMultiConsentPayload\n"})}),"\n",(0,s.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.h4,{id:"createmulticonsentinputcreatemulticonsentinput--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["createMultiConsent.",(0,s.jsx)("b",{children:"input"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/inputs/create-multi-consent-input",children:(0,s.jsx)(t.code,{children:"CreateMultiConsentInput!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,s.jsxs)(t.h4,{id:"createmulticonsentpayload-",children:[(0,s.jsx)(t.a,{href:"/unions/create-multi-consent-payload",children:(0,s.jsx)(t.code,{children:"CreateMultiConsentPayload"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"union"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Payload of the ",(0,s.jsx)(t.code,{children:"createMultiConsent"})," mutation"]}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var s=n(67294);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);