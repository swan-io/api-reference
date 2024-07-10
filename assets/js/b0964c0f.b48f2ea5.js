"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[20938],{7467:(e,d,a)=>{a.r(d),a.d(d,{Badge:()=>g,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>t,default:()=>j,frontMatter:()=>n,metadata:()=>l,toc:()=>b});var c=a(85893),s=a(11151),r=a(67294);const n={id:"card-product",title:"CardProduct"},t=void 0,l={id:"objects/card-product",title:"CardProduct",description:"Card Product",source:"@site/docs/objects/card-product.mdx",sourceDirName:"objects",slug:"/objects/card-product",permalink:"/objects/card-product",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/card-product.mdx",tags:[],version:"current",frontMatter:{id:"card-product",title:"CardProduct"},sidebar:"schemaSidebar",previous:{title:"CardProductUsedRejection",permalink:"/objects/card-product-used-rejection"},next:{title:"CardSensitiveInfoNoLongerAvailableRejection",permalink:"/objects/card-sensitive-info-no-longer-available-rejection"}},o={},i=()=>{const e={span:"span",...(0,s.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const d={a:"a",...(0,s.a)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const d={span:"span",...(0,s.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>CardProduct.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardproductidid--",level:4},{value:'<code>CardProduct.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"cardproductnamestring-",level:4},{value:'<code>CardProduct.<b>projectId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardproductprojectidid--",level:4},{value:'<code>CardProduct.<b>status</b></code><Bullet></Bullet><code>CardProductStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardproductstatuscardproductstatus--",level:4},{value:'<code>CardProduct.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardproductcreatedatdatetime--",level:4},{value:'<code>CardProduct.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardproductupdatedatdatetime--",level:4},{value:'<code>CardProduct.<b>applicableToPhysicalCards</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardproductapplicabletophysicalcardsboolean--",level:4},{value:'<code>CardProduct.<b>cardDesigns</b></code><Bullet></Bullet><code>[CardProductDesign!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardproductcarddesignscardproductdesign--",level:4},{value:'<code>CardProduct.<b>defaultCardProduct</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardproductdefaultcardproductboolean--",level:4},{value:'<code>CardProduct.<b>individualSpendingLimit</b></code><Bullet></Bullet><code>SpendingLimit!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardproductindividualspendinglimitspendinglimit--",level:4},{value:'<code>CardProduct.<b>companySpendingLimit</b></code><Bullet></Bullet><code>SpendingLimit!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardproductcompanyspendinglimitspendinglimit--",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:d,children:a,startOpen:n=!1})=>{const t={details:"details",summary:"summary",...(0,s.a)()},[l,o]=(0,r.useState)(n);return(0,c.jsxs)(t.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(t.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:d}),l&&a]})};function x(e){const d={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d.p,{children:"Card Product"}),"\n",(0,c.jsx)(d.pre,{children:(0,c.jsx)(d.code,{className:"language-graphql",children:"type CardProduct {\n  id: ID!\n  name: String\n  projectId: ID!\n  status: CardProductStatus!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  applicableToPhysicalCards: Boolean!\n  cardDesigns: [CardProductDesign!]!\n  defaultCardProduct: Boolean!\n  individualSpendingLimit: SpendingLimit!\n  companySpendingLimit: SpendingLimit!\n}\n"})}),"\n",(0,c.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(d.h4,{id:"cardproductidid--",children:[(0,c.jsx)(d.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CardProduct.",(0,c.jsx)("b",{children:"id"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(d.a,{href:"/scalars/id",children:(0,c.jsx)(d.code,{children:"ID!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(d.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(d.h4,{id:"cardproductnamestring-",children:[(0,c.jsx)(d.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CardProduct.",(0,c.jsx)("b",{children:"name"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(d.a,{href:"/scalars/string",children:(0,c.jsx)(d.code,{children:"String"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(d.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(d.h4,{id:"cardproductprojectidid--",children:[(0,c.jsx)(d.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CardProduct.",(0,c.jsx)("b",{children:"projectId"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(d.a,{href:"/scalars/id",children:(0,c.jsx)(d.code,{children:"ID!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(d.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(d.h4,{id:"cardproductstatuscardproductstatus--",children:[(0,c.jsx)(d.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CardProduct.",(0,c.jsx)("b",{children:"status"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(d.a,{href:"/enums/card-product-status",children:(0,c.jsx)(d.code,{children:"CardProductStatus!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsx)(d.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(d.h4,{id:"cardproductcreatedatdatetime--",children:[(0,c.jsx)(d.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CardProduct.",(0,c.jsx)("b",{children:"createdAt"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(d.a,{href:"/scalars/date-time",children:(0,c.jsx)(d.code,{children:"DateTime!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(d.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(d.h4,{id:"cardproductupdatedatdatetime--",children:[(0,c.jsx)(d.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CardProduct.",(0,c.jsx)("b",{children:"updatedAt"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(d.a,{href:"/scalars/date-time",children:(0,c.jsx)(d.code,{children:"DateTime!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(d.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(d.h4,{id:"cardproductapplicabletophysicalcardsboolean--",children:[(0,c.jsx)(d.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CardProduct.",(0,c.jsx)("b",{children:"applicableToPhysicalCards"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(d.a,{href:"/scalars/boolean",children:(0,c.jsx)(d.code,{children:"Boolean!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(d.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(d.h4,{id:"cardproductcarddesignscardproductdesign--",children:[(0,c.jsx)(d.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CardProduct.",(0,c.jsx)("b",{children:"cardDesigns"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(d.a,{href:"/objects/card-product-design",children:(0,c.jsx)(d.code,{children:"[CardProductDesign!]!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(d.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(d.h4,{id:"cardproductdefaultcardproductboolean--",children:[(0,c.jsx)(d.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CardProduct.",(0,c.jsx)("b",{children:"defaultCardProduct"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(d.a,{href:"/scalars/boolean",children:(0,c.jsx)(d.code,{children:"Boolean!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(d.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(d.h4,{id:"cardproductindividualspendinglimitspendinglimit--",children:[(0,c.jsx)(d.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CardProduct.",(0,c.jsx)("b",{children:"individualSpendingLimit"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(d.a,{href:"/objects/spending-limit",children:(0,c.jsx)(d.code,{children:"SpendingLimit!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(d.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(d.h4,{id:"cardproductcompanyspendinglimitspendinglimit--",children:[(0,c.jsx)(d.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CardProduct.",(0,c.jsx)("b",{children:"companySpendingLimit"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(d.a,{href:"/objects/spending-limit",children:(0,c.jsx)(d.code,{children:"SpendingLimit!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(d.blockquote,{children:"\n"}),"\n",(0,c.jsx)(d.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(d.p,{children:[(0,c.jsx)(d.a,{href:"/objects/card",children:(0,c.jsx)(d.code,{children:"Card"})}),"  ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(i,{}),(0,c.jsx)(d.a,{href:"/objects/project-info",children:(0,c.jsx)(d.code,{children:"ProjectInfo"})}),"  ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:d}={...(0,s.a)(),...e.components};return d?(0,c.jsx)(d,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},11151:(e,d,a)=>{a.d(d,{Z:()=>t,a:()=>n});var c=a(67294);const s={},r=c.createContext(s);function n(e){const d=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function t(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),c.createElement(r.Provider,{value:d},e.children)}}}]);