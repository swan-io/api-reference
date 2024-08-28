"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[22890],{8533:(e,d,r)=>{r.r(d),r.d(d,{Badge:()=>p,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>g});var t=r(74848),s=r(28453),n=r(96540);const a={id:"add-cards-with-group-delivery-input",title:"AddCardsWithGroupDeliveryInput"},i=void 0,c={id:"inputs/add-cards-with-group-delivery-input",title:"AddCardsWithGroupDeliveryInput",description:"Input to add a new cards",source:"@site/docs/inputs/add-cards-with-group-delivery-input.mdx",sourceDirName:"inputs",slug:"/inputs/add-cards-with-group-delivery-input",permalink:"/inputs/add-cards-with-group-delivery-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/add-cards-with-group-delivery-input.mdx",tags:[],version:"current",frontMatter:{id:"add-cards-with-group-delivery-input",title:"AddCardsWithGroupDeliveryInput"},sidebar:"schemaSidebar",previous:{title:"AddCardsInput",permalink:"/inputs/add-cards-input"},next:{title:"AddDigitalCardInput",permalink:"/inputs/add-digital-card-input"}},l={},o=()=>{const e={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const d={a:"a",...(0,s.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const d={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(d.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:d,children:r,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,s.R)()},[c,l]=(0,n.useState)(a);return(0,t.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:d}),c&&r]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>AddCardsWithGroupDeliveryInput.<b>groupDeliveryAddress</b></code><Bullet></Bullet><code>CompleteAddressWithContactInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addcardswithgroupdeliveryinputgroupdeliveryaddresscompleteaddresswithcontactinput--",level:4},{value:'<code>AddCardsWithGroupDeliveryInput.<b>cards</b></code><Bullet></Bullet><code>[CardConfigWithGroupDeliveryInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addcardswithgroupdeliveryinputcardscardconfigwithgroupdeliveryinput--",level:4},{value:'<code>AddCardsWithGroupDeliveryInput.<b>consentRedirectUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addcardswithgroupdeliveryinputconsentredirecturlstring--",level:4},{value:'<code>AddCardsWithGroupDeliveryInput.<b>cardProductId</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"addcardswithgroupdeliveryinputcardproductidid-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const d={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.p,{children:"Input to add a new cards"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-graphql",children:"input AddCardsWithGroupDeliveryInput {\n  groupDeliveryAddress: CompleteAddressWithContactInput!\n  cards: [CardConfigWithGroupDeliveryInput!]!\n  consentRedirectUrl: String!\n  cardProductId: ID\n}\n"})}),"\n",(0,t.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(d.h4,{id:"addcardswithgroupdeliveryinputgroupdeliveryaddresscompleteaddresswithcontactinput--",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddCardsWithGroupDeliveryInput.",(0,t.jsx)("b",{children:"groupDeliveryAddress"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(d.a,{href:"/inputs/complete-address-with-contact-input",children:(0,t.jsx)(d.code,{children:"CompleteAddressWithContactInput!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(d.p,{children:"Address to deliver the printed physical cards"}),"\n",(0,t.jsxs)(d.h4,{id:"addcardswithgroupdeliveryinputcardscardconfigwithgroupdeliveryinput--",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddCardsWithGroupDeliveryInput.",(0,t.jsx)("b",{children:"cards"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(d.a,{href:"/inputs/card-config-with-group-delivery-input",children:(0,t.jsx)(d.code,{children:"[CardConfigWithGroupDeliveryInput!]!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(d.p,{children:"The configuration of all the cards you want to add"}),"\n",(0,t.jsxs)(d.h4,{id:"addcardswithgroupdeliveryinputconsentredirecturlstring--",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddCardsWithGroupDeliveryInput.",(0,t.jsx)("b",{children:"consentRedirectUrl"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(d.a,{href:"/scalars/string",children:(0,t.jsx)(d.code,{children:"String!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(d.p,{children:"URL the user is redirected to after consent has been given"}),"\n",(0,t.jsxs)(d.h4,{id:"addcardswithgroupdeliveryinputcardproductidid-",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddCardsWithGroupDeliveryInput.",(0,t.jsx)("b",{children:"cardProductId"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(d.a,{href:"/scalars/id",children:(0,t.jsx)(d.code,{children:"ID"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(d.p,{children:"The id of the card product to use to create the new cards."}),"\n",(0,t.jsx)(d.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.a,{href:"/mutations/add-cards-with-group-delivery",children:(0,t.jsx)(d.code,{children:"addCardsWithGroupDelivery"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function y(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,d,r)=>{r.d(d,{R:()=>a,x:()=>i});var t=r(96540);const s={},n=t.createContext(s);function a(e){const d=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(n.Provider,{value:d},e.children)}}}]);