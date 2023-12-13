"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[56860],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),h=s(a),p=r,m=h["".concat(i,".").concat(p)]||h[p]||u[p]||l;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[h]="string"==typeof e?e:r,o[1]=d;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},36418:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>h,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(83117),r=a(67294),l=a(3905);const o={id:"individual-shareholder",title:"IndividualShareholder",hide_table_of_contents:!1},d=void 0,i={unversionedId:"objects/individual-shareholder",id:"objects/individual-shareholder",title:"IndividualShareholder",description:"Individual shareholder info.",source:"@site/docs/objects/individual-shareholder.mdx",sourceDirName:"objects",slug:"/objects/individual-shareholder",permalink:"/objects/individual-shareholder",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/individual-shareholder.mdx",tags:[],version:"current",frontMatter:{id:"individual-shareholder",title:"IndividualShareholder",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InAppProvisioningData",permalink:"/objects/in-app-provisioning-data"},next:{title:"IndividualUltimateBeneficialOwnerTypeHasCapital",permalink:"/objects/individual-ultimate-beneficial-owner-type-has-capital"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IndividualShareholder.<b>type</b></code><Bullet /><code>ShareholderType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-individualshareholderbtypebcodeshareholdertype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IndividualShareholder.<b>firstName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-individualshareholderbfirstnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IndividualShareholder.<b>lastName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-individualshareholderblastnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IndividualShareholder.<b>birthDate</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-individualshareholderbbirthdatebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IndividualShareholder.<b>nationality</b></code><Bullet /><code>CCA3!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-individualshareholderbnationalitybcodecca3--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],h=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:h,SpecifiedBy:u,Badge:p},y="wrapper";function f(e){let{components:t,...a}=e;return(0,l.kt)(y,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Individual shareholder info."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type IndividualShareholder {\n  type: ShareholderType!\n  firstName: String!\n  lastName: String!\n  birthDate: String!\n  nationality: CCA3!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualshareholderbtypebcodeshareholdertype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualShareholder.",(0,l.kt)("b",null,"type"))),(0,l.kt)(h,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/enums/shareholder-type"},(0,l.kt)("inlineCode",{parentName:"a"},"ShareholderType!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Whether the shareholder is an individual or a company.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualshareholderbfirstnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualShareholder.",(0,l.kt)("b",null,"firstName"))),(0,l.kt)(h,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"First name of the shareholder.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualshareholderblastnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualShareholder.",(0,l.kt)("b",null,"lastName"))),(0,l.kt)(h,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Last name of the shareholder.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualshareholderbbirthdatebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualShareholder.",(0,l.kt)("b",null,"birthDate"))),(0,l.kt)(h,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Birth date of the shareholder.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualshareholderbnationalitybcodecca3--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualShareholder.",(0,l.kt)("b",null,"nationality"))),(0,l.kt)(h,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/cca3"},(0,l.kt)("inlineCode",{parentName:"a"},"CCA3!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"CCA3 code for the country of nationality of the shareholder.")),(0,l.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/unions/shareholder-info"},(0,l.kt)("inlineCode",{parentName:"a"},"ShareholderInfo")),"  ",(0,l.kt)(p,{class:"secondary",text:"union",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);