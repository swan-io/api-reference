"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[20911],{99962:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var s=n(85893),a=n(11151),i=n(67294);const r={id:"statement-filters-input",title:"StatementFiltersInput"},d=void 0,l={id:"inputs/statement-filters-input",title:"StatementFiltersInput",description:"Filter that can be given to give the statement in a specific data range",source:"@site/docs/inputs/statement-filters-input.mdx",sourceDirName:"inputs",slug:"/inputs/statement-filters-input",permalink:"/inputs/statement-filters-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/statement-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"statement-filters-input",title:"StatementFiltersInput"},sidebar:"schemaSidebar",previous:{title:"StartUserCreationInput",permalink:"/inputs/start-user-creation-input"},next:{title:"SupportingDocumentCollectionFilterInput",permalink:"/inputs/supporting-document-collection-filter-input"}},o={},c=()=>{const e={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,a.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>StatementFiltersInput.<b>isAfterUpdatedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"statementfiltersinputisafterupdatedatdatetime-",level:4},{value:'<code>StatementFiltersInput.<b>isBeforeUpdatedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"statementfiltersinputisbeforeupdatedatdatetime-",level:4},{value:'<code>StatementFiltersInput.<b>period</b></code><Bullet></Bullet><code>StatementPeriod</code> <Badge class="badge badge--secondary"></Badge>',id:"statementfiltersinputperiodstatementperiod-",level:4}],h=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const d={details:"details",summary:"summary",...(0,a.a)()},[l,o]=(0,i.useState)(r);return(0,s.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(d.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})};function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Filter that can be given to give the statement in a specific data range"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input StatementFiltersInput {\n  isAfterUpdatedAt: DateTime\n  isBeforeUpdatedAt: DateTime\n  period: StatementPeriod\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"statementfiltersinputisafterupdatedatdatetime-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatementFiltersInput.",(0,s.jsx)("b",{children:"isAfterUpdatedAt"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/scalars/date-time",children:(0,s.jsx)(t.code,{children:"DateTime"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"To filter after an updatedAt value"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"statementfiltersinputisbeforeupdatedatdatetime-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatementFiltersInput.",(0,s.jsx)("b",{children:"isBeforeUpdatedAt"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/scalars/date-time",children:(0,s.jsx)(t.code,{children:"DateTime"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"To filter before an updatedAt value"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"statementfiltersinputperiodstatementperiod-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatementFiltersInput.",(0,s.jsx)("b",{children:"period"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/enums/statement-period",children:(0,s.jsx)(t.code,{children:"StatementPeriod"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"To filter on a specific period of statement (either custom or monthly)"}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var s=n(67294);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);