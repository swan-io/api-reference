"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[47280],{72530:(e,s,r)=>{r.r(s),r.d(s,{Badge:()=>h,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>x});var n=r(74848),t=r(28453),a=r(96540);const i={id:"users",title:"users"},c=void 0,d={id:"queries/users",title:"users",description:"Returns the list of user that joined the project",source:"@site/docs/queries/users.mdx",sourceDirName:"queries",slug:"/queries/users",permalink:"/queries/users",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/queries/users.mdx",tags:[],version:"current",frontMatter:{id:"users",title:"users"},sidebar:"schemaSidebar",previous:{title:"user",permalink:"/queries/user"},next:{title:"webhookEventLog",permalink:"/queries/webhook-event-log"}},l={},o=()=>{const e={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,t.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:s,children:r,startOpen:i=!1})=>{const c={details:"details",summary:"summary",...(0,t.R)()},[d,l]=(0,a.useState)(i);return(0,n.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&r]})},x=[{value:"Arguments",id:"arguments",level:3},{value:'<code>users.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"usersafterstring-",level:4},{value:'<code>users.<b>before</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"usersbeforestring-",level:4},{value:'<code>users.<b>filters</b></code><Bullet></Bullet><code>UserFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"usersfiltersuserfilterinput-",level:4},{value:'<code>users.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"usersfirstint--",level:4},{value:'<code>users.<b>search</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"userssearchstring-",level:4},{value:"Type",id:"type",level:3},{value:'<code>UserConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"userconnection-",level:4}];function j(e){const s={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Returns the list of user that joined the project\nThe search field allows to search in : id, phonNumber, firstName, allFirstNames, lastName"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.em,{children:["This query is restricted to a Project access token (",(0,n.jsx)(s.a,{href:"https://docs.swan.io/api/authentication",children:"Learn More"}),")"]})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"users(\n  after: String\n  before: String\n  filters: UserFilterInput\n  first: Int! = 50\n  search: String\n): UserConnection!\n"})}),"\n",(0,n.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(s.h4,{id:"usersafterstring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["users.",(0,n.jsx)("b",{children:"after"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.h4,{id:"usersbeforestring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["users.",(0,n.jsx)("b",{children:"before"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.h4,{id:"usersfiltersuserfilterinput-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["users.",(0,n.jsx)("b",{children:"filters"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/inputs/user-filter-input",children:(0,n.jsx)(s.code,{children:"UserFilterInput"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(s.h4,{id:"usersfirstint--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["users.",(0,n.jsx)("b",{children:"first"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/scalars/int",children:(0,n.jsx)(s.code,{children:"Int!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.h4,{id:"userssearchstring-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["users.",(0,n.jsx)("b",{children:"search"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/scalars/string",children:(0,n.jsx)(s.code,{children:"String"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.p,{children:['@deprecated(reason: "use the ',(0,n.jsx)(s.code,{children:"search"})," field in ",(0,n.jsx)(s.code,{children:"UserFilterInput"}),'")']}),"\n",(0,n.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(s.h4,{id:"userconnection-",children:[(0,n.jsx)(s.a,{href:"/objects/user-connection",children:(0,n.jsx)(s.code,{children:"UserConnection"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(s.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,n.jsx)(s.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]})]})}function f(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>c});var n=r(96540);const t={},a=n.createContext(t);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);