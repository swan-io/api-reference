"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[25519],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),g=s(a),u=o,m=g["".concat(c,".").concat(u)]||g[u]||p[u]||r;return a?n.createElement(m,l(l({ref:t},i),{},{components:a})):n.createElement(m,l({ref:t},i))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[g]="string"==typeof e?e:o,l[1]=d;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58767:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>g,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=a(83117),o=a(67294),r=a(3905);const l={id:"card-settings",title:"CardSettings",hide_table_of_contents:!1},d=void 0,c={unversionedId:"objects/card-settings",id:"objects/card-settings",title:"CardSettings",description:"Card settings for a Project",source:"@site/docs/objects/card-settings.mdx",sourceDirName:"objects",slug:"/objects/card-settings",permalink:"/objects/card-settings",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/card-settings.mdx",tags:[],version:"current",frontMatter:{id:"card-settings",title:"CardSettings",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CardSettingsBackground",permalink:"/objects/card-settings-background"},next:{title:"CardTransaction",permalink:"/objects/card-transaction"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CardSettings.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardsettingsbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardSettings.<b>allowsApplePay</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardsettingsballowsapplepaybcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardSettings.<b>version</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardsettingsbversionbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardSettings.<b>cardProjectLogoSvgUrl</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardsettingsbcardprojectlogosvgurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardSettings.<b>cardProjectLogo300dpiUrl</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardsettingsbcardprojectlogo300dpiurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardSettings.<b>cardProjectLogo600dpiUrl</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardsettingsbcardprojectlogo600dpiurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardSettings.<b>zoomRatioProjectLogo</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardsettingsbzoomratioprojectlogobcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardSettings.<b>cardDesignUrl</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardsettingsbcarddesignurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardSettings.<b>accentColor</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardsettingsbaccentcolorbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardSettings.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardsettingsbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardSettings.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardsettingsbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardSettings.<b>status</b></code><Bullet /><code>ProjectCardStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-cardsettingsbstatusbcodeprojectcardstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardSettings.<b>cardBackground</b></code><Bullet /><code>CardSettingsBackground!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cardsettingsbcardbackgroundbcodecardsettingsbackground--",level:4},{value:"Member of",id:"member-of",level:3}],g=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:i,Bullet:g,SpecifiedBy:p,Badge:u},k="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Card settings for a Project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type CardSettings {\n  id: ID!\n  allowsApplePay: Boolean!\n  version: Int!\n  cardProjectLogoSvgUrl: String\n  cardProjectLogo300dpiUrl: String\n  cardProjectLogo600dpiUrl: String\n  zoomRatioProjectLogo: Int\n  cardDesignUrl: String\n  accentColor: String!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  status: ProjectCardStatus!\n  cardBackground: CardSettingsBackground!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardsettingsbidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardSettings.",(0,r.kt)("b",null,"id"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unique identifier of a project card settings")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardsettingsballowsapplepaybcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardSettings.",(0,r.kt)("b",null,"allowsApplePay"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Flag used to indicate if ApplePay is activated for the project")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardsettingsbversionbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardSettings.",(0,r.kt)("b",null,"version"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Settings version")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardsettingsbcardprojectlogosvgurlbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardSettings.",(0,r.kt)("b",null,"cardProjectLogoSvgUrl"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Logo url svg")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardsettingsbcardprojectlogo300dpiurlbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardSettings.",(0,r.kt)("b",null,"cardProjectLogo300dpiUrl"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Logo url 300 dpi")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardsettingsbcardprojectlogo600dpiurlbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardSettings.",(0,r.kt)("b",null,"cardProjectLogo600dpiUrl"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Logo url 300 dpi")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardsettingsbzoomratioprojectlogobcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardSettings.",(0,r.kt)("b",null,"zoomRatioProjectLogo"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Zoom level")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardsettingsbcarddesignurlbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardSettings.",(0,r.kt)("b",null,"cardDesignUrl"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Card Design URL")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardsettingsbaccentcolorbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardSettings.",(0,r.kt)("b",null,"accentColor"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Accent color")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardsettingsbcreatedatbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardSettings.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Created date")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardsettingsbupdatedatbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardSettings.",(0,r.kt)("b",null,"updatedAt"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Updated date")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardsettingsbstatusbcodeprojectcardstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardSettings.",(0,r.kt)("b",null,"status"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/enums/project-card-status"},(0,r.kt)("inlineCode",{parentName:"a"},"ProjectCardStatus!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Status of the card settings")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardsettingsbcardbackgroundbcodecardsettingsbackground--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardSettings.",(0,r.kt)("b",null,"cardBackground"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/objects/card-settings-background"},(0,r.kt)("inlineCode",{parentName:"a"},"CardSettingsBackground!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Card Background of the Card Settings")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/objects/project-card-settings"},(0,r.kt)("inlineCode",{parentName:"a"},"ProjectCardSettings")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/objects/project-info"},(0,r.kt)("inlineCode",{parentName:"a"},"ProjectInfo")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);