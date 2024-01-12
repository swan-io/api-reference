"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[25099],{36690:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>p,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var r=t(85893),a=t(11151),n=t(67294);const d={id:"card-filters-input",title:"CardFiltersInput"},c=void 0,i={id:"inputs/card-filters-input",title:"CardFiltersInput",description:"Filters that can be applied when listing cards",source:"@site/docs/inputs/card-filters-input.mdx",sourceDirName:"inputs",slug:"/inputs/card-filters-input",permalink:"/inputs/card-filters-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/card-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"card-filters-input",title:"CardFiltersInput"},sidebar:"schemaSidebar",previous:{title:"CardConfigWithGroupDeliveryInput",permalink:"/inputs/card-config-with-group-delivery-input"},next:{title:"CardOrderByInput",permalink:"/inputs/card-order-by-input"}},l={},o=()=>{const e={span:"span",...(0,a.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,a.a)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,a.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>CardFiltersInput.<b>status</b></code><Bullet></Bullet><code>CardStatus</code> <Badge class="badge badge--secondary"></Badge>',id:"cardfiltersinputstatuscardstatus-",level:4},{value:'<code>CardFiltersInput.<b>statuses</b></code><Bullet></Bullet><code>[CardStatus!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardfiltersinputstatusescardstatus--",level:4},{value:'<code>CardFiltersInput.<b>type</b></code><Bullet></Bullet><code>CardType</code> <Badge class="badge badge--secondary"></Badge>',id:"cardfiltersinputtypecardtype-",level:4},{value:'<code>CardFiltersInput.<b>types</b></code><Bullet></Bullet><code>[CardType!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardfiltersinputtypescardtype--",level:4},{value:'<code>CardFiltersInput.<b>search</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"cardfiltersinputsearchstring-",level:4},{value:'<code>CardFiltersInput.<b>accountId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"cardfiltersinputaccountidstring-",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:s,children:t,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,a.a)()},[i,l]=(0,n.useState)(d);return(0,r.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&t]})};function g(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Filters that can be applied when listing cards"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",children:"input CardFiltersInput {\n  status: CardStatus\n  statuses: [CardStatus!]\n  type: CardType\n  types: [CardType!]\n  search: String\n  accountId: String\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(s.h4,{id:"cardfiltersinputstatuscardstatus-",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["CardFiltersInput.",(0,r.jsx)("b",{children:"status"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(s.a,{href:"/enums/card-status",children:(0,r.jsx)(s.code,{children:"CardStatus"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"The status of the card."}),"\n",(0,r.jsxs)(s.p,{children:['@deprecated(reason: "use ',(0,r.jsx)(s.code,{children:"statuses"}),' instead")']}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"cardfiltersinputstatusescardstatus--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["CardFiltersInput.",(0,r.jsx)("b",{children:"statuses"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(s.a,{href:"/enums/card-status",children:(0,r.jsx)(s.code,{children:"[CardStatus!]"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Statuses of the card."}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"cardfiltersinputtypecardtype-",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["CardFiltersInput.",(0,r.jsx)("b",{children:"type"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(s.a,{href:"/enums/card-type",children:(0,r.jsx)(s.code,{children:"CardType"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Type of card"}),"\n",(0,r.jsxs)(s.p,{children:['@deprecated(reason: "use ',(0,r.jsx)(s.code,{children:"types"}),' instead")']}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"cardfiltersinputtypescardtype--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["CardFiltersInput.",(0,r.jsx)("b",{children:"types"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(s.a,{href:"/enums/card-type",children:(0,r.jsx)(s.code,{children:"[CardType!]"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Types of card"}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"cardfiltersinputsearchstring-",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["CardFiltersInput.",(0,r.jsx)("b",{children:"search"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(s.a,{href:"/scalars/string",children:(0,r.jsx)(s.code,{children:"String"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"String searched"}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"cardfiltersinputaccountidstring-",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["CardFiltersInput.",(0,r.jsx)("b",{children:"accountId"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(s.a,{href:"/scalars/string",children:(0,r.jsx)(s.code,{children:"String"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Account identifier"}),"\n",(0,r.jsx)(s.p,{children:"This filter is only available for User Access Token, for the moment"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/queries/cards",children:(0,r.jsx)(s.code,{children:"cards"})}),"  ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"query"})]})]})}function j(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>d});var r=t(67294);const a={},n=r.createContext(a);function d(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);