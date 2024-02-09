"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[25519],{92046:(e,s,d)=>{d.r(s),d.d(s,{Badge:()=>j,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>g,assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var a=d(85893),t=d(11151),n=d(67294);const r={id:"card-settings",title:"CardSettings"},c=void 0,l={id:"objects/card-settings",title:"CardSettings",description:"Card settings for a Project",source:"@site/docs/objects/card-settings.mdx",sourceDirName:"objects",slug:"/objects/card-settings",permalink:"/objects/card-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/card-settings.mdx",tags:[],version:"current",frontMatter:{id:"card-settings",title:"CardSettings"},sidebar:"schemaSidebar",previous:{title:"CardSettingsBackground",permalink:"/objects/card-settings-background"},next:{title:"CardTransaction",permalink:"/objects/card-transaction"}},o={},i=()=>{const e={span:"span",...(0,t.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const s={a:"a",...(0,t.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const s={span:"span",...(0,t.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>CardSettings.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardsettingsidid--",level:4},{value:'<code>CardSettings.<b>allowsApplePay</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardsettingsallowsapplepayboolean---",level:4},{value:'<code>CardSettings.<b>version</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardsettingsversionint--",level:4},{value:'<code>CardSettings.<b>cardProjectLogoSvgUrl</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"cardsettingscardprojectlogosvgurlstring-",level:4},{value:'<code>CardSettings.<b>cardProjectLogo300dpiUrl</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"cardsettingscardprojectlogo300dpiurlstring-",level:4},{value:'<code>CardSettings.<b>cardProjectLogo600dpiUrl</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"cardsettingscardprojectlogo600dpiurlstring-",level:4},{value:'<code>CardSettings.<b>zoomRatioProjectLogo</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"cardsettingszoomratioprojectlogoint-",level:4},{value:'<code>CardSettings.<b>cardDesignUrl</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"cardsettingscarddesignurlstring-",level:4},{value:'<code>CardSettings.<b>accentColor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardsettingsaccentcolorstring--",level:4},{value:'<code>CardSettings.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardsettingscreatedatdatetime--",level:4},{value:'<code>CardSettings.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardsettingsupdatedatdatetime--",level:4},{value:'<code>CardSettings.<b>status</b></code><Bullet></Bullet><code>ProjectCardStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardsettingsstatusprojectcardstatus--",level:4},{value:'<code>CardSettings.<b>cardBackground</b></code><Bullet></Bullet><code>CardSettingsBackground!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardsettingscardbackgroundcardsettingsbackground--",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:s,children:d,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,t.a)()},[l,o]=(0,n.useState)(r);return(0,a.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&d]})};function b(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Card settings for a Project"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type CardSettings {\n  id: ID!\n  allowsApplePay: Boolean! @deprecated\n  version: Int!\n  cardProjectLogoSvgUrl: String\n  cardProjectLogo300dpiUrl: String\n  cardProjectLogo600dpiUrl: String\n  zoomRatioProjectLogo: Int\n  cardDesignUrl: String\n  accentColor: String!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  status: ProjectCardStatus!\n  cardBackground: CardSettingsBackground!\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"cardsettingsidid--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CardSettings.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/scalars/id",children:(0,a.jsx)(s.code,{children:"ID!"})})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Unique identifier of a project card settings"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"cardsettingsallowsapplepayboolean---",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CardSettings.",(0,a.jsx)("b",{children:"allowsApplePay"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean!"})})," ",(0,a.jsx)(j,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.admonition,{title:"DEPRECATED",type:"warning",children:(0,a.jsx)(s.p,{children:"No longer supported"})}),"\n",(0,a.jsx)(s.p,{children:"Flag used to indicate if ApplePay is activated for the project"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"cardsettingsversionint--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CardSettings.",(0,a.jsx)("b",{children:"version"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/scalars/int",children:(0,a.jsx)(s.code,{children:"Int!"})})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Settings version"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"cardsettingscardprojectlogosvgurlstring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CardSettings.",(0,a.jsx)("b",{children:"cardProjectLogoSvgUrl"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Logo url svg"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"cardsettingscardprojectlogo300dpiurlstring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CardSettings.",(0,a.jsx)("b",{children:"cardProjectLogo300dpiUrl"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Logo url 300 dpi"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"cardsettingscardprojectlogo600dpiurlstring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CardSettings.",(0,a.jsx)("b",{children:"cardProjectLogo600dpiUrl"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Logo url 300 dpi"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"cardsettingszoomratioprojectlogoint-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CardSettings.",(0,a.jsx)("b",{children:"zoomRatioProjectLogo"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/scalars/int",children:(0,a.jsx)(s.code,{children:"Int"})})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Zoom level"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"cardsettingscarddesignurlstring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CardSettings.",(0,a.jsx)("b",{children:"cardDesignUrl"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Card Design URL"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"cardsettingsaccentcolorstring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CardSettings.",(0,a.jsx)("b",{children:"accentColor"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/scalars/string",children:(0,a.jsx)(s.code,{children:"String!"})})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Accent color"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"cardsettingscreatedatdatetime--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CardSettings.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/scalars/date-time",children:(0,a.jsx)(s.code,{children:"DateTime!"})})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Created date"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"cardsettingsupdatedatdatetime--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CardSettings.",(0,a.jsx)("b",{children:"updatedAt"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/scalars/date-time",children:(0,a.jsx)(s.code,{children:"DateTime!"})})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Updated date"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"cardsettingsstatusprojectcardstatus--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CardSettings.",(0,a.jsx)("b",{children:"status"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/enums/project-card-status",children:(0,a.jsx)(s.code,{children:"ProjectCardStatus!"})})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Status of the card settings"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"cardsettingscardbackgroundcardsettingsbackground--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CardSettings.",(0,a.jsx)("b",{children:"cardBackground"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/objects/card-settings-background",children:(0,a.jsx)(s.code,{children:"CardSettingsBackground!"})})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Card Background of the Card Settings"}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/objects/project-card-settings",children:(0,a.jsx)(s.code,{children:"ProjectCardSettings"})}),"  ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/objects/project-info",children:(0,a.jsx)(s.code,{children:"ProjectInfo"})}),"  ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},11151:(e,s,d)=>{d.d(s,{Z:()=>c,a:()=>r});var a=d(67294);const t={},n=a.createContext(t);function r(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);