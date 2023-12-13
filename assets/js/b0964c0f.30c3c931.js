"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[20938],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>y});var d=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,d)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,d,o=function(e,t){if(null==e)return{};var a,d,o={},n=Object.keys(e);for(d=0;d<n.length;d++)a=n[d],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(d=0;d<n.length;d++)a=n[d],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=d.createContext({}),s=function(e){var t=d.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=s(e.components);return d.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return d.createElement(d.Fragment,{},t)}},m=d.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=o,y=u["".concat(c,".").concat(m)]||u[m]||p[m]||n;return a?d.createElement(y,r(r({ref:t},i),{},{components:a})):d.createElement(y,r({ref:t},i))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<n;s++)r[s]=a[s];return d.createElement.apply(null,r)}return d.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15495:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var d=a(83117),o=a(67294),n=a(3905);const r={id:"card-product",title:"CardProduct",hide_table_of_contents:!1},l=void 0,c={unversionedId:"objects/card-product",id:"objects/card-product",title:"CardProduct",description:"Card Product",source:"@site/docs/objects/card-product.mdx",sourceDirName:"objects",slug:"/objects/card-product",permalink:"/objects/card-product",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/card-product.mdx",tags:[],version:"current",frontMatter:{id:"card-product",title:"CardProduct",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CardProductUsedRejection",permalink:"/objects/card-product-used-rejection"},next:{title:"CardSettingsBackground",permalink:"/objects/card-settings-background"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CardProduct.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardproductbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardProduct.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardproductbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardProduct.<b>projectId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardproductbprojectidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardProduct.<b>status</b></code><Bullet /><code>CardProductStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-cardproductbstatusbcodecardproductstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardProduct.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardproductbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardProduct.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardproductbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardProduct.<b>applicableToPhysicalCards</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardproductbapplicabletophysicalcardsbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardProduct.<b>cardDesigns</b></code><Bullet /><code>[CardProductDesign!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cardproductbcarddesignsbcodecardproductdesign--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardProduct.<b>defaultCardProduct</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardproductbdefaultcardproductbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardProduct.<b>individualSpendingLimit</b></code><Bullet /><code>SpendingLimit!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cardproductbindividualspendinglimitbcodespendinglimit--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardProduct.<b>companySpendingLimit</b></code><Bullet /><code>SpendingLimit!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-cardproductbcompanyspendinglimitbcodespendinglimit--",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:i,Bullet:u,SpecifiedBy:p,Badge:m},g="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(g,(0,d.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Card Product"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type CardProduct {\n  id: ID!\n  name: String\n  projectId: ID!\n  status: CardProductStatus!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  applicableToPhysicalCards: Boolean!\n  cardDesigns: [CardProductDesign!]!\n  defaultCardProduct: Boolean!\n  individualSpendingLimit: SpendingLimit!\n  companySpendingLimit: SpendingLimit!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cardproductbidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CardProduct.",(0,n.kt)("b",null,"id"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cardproductbnamebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CardProduct.",(0,n.kt)("b",null,"name"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cardproductbprojectidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CardProduct.",(0,n.kt)("b",null,"projectId"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cardproductbstatusbcodecardproductstatus--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CardProduct.",(0,n.kt)("b",null,"status"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/enums/card-product-status"},(0,n.kt)("inlineCode",{parentName:"a"},"CardProductStatus!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cardproductbcreatedatbcodedatetime--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CardProduct.",(0,n.kt)("b",null,"createdAt"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cardproductbupdatedatbcodedatetime--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CardProduct.",(0,n.kt)("b",null,"updatedAt"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cardproductbapplicabletophysicalcardsbcodeboolean--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CardProduct.",(0,n.kt)("b",null,"applicableToPhysicalCards"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cardproductbcarddesignsbcodecardproductdesign--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CardProduct.",(0,n.kt)("b",null,"cardDesigns"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/objects/card-product-design"},(0,n.kt)("inlineCode",{parentName:"a"},"[CardProductDesign!]!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cardproductbdefaultcardproductbcodeboolean--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CardProduct.",(0,n.kt)("b",null,"defaultCardProduct"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cardproductbindividualspendinglimitbcodespendinglimit--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CardProduct.",(0,n.kt)("b",null,"individualSpendingLimit"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/objects/spending-limit"},(0,n.kt)("inlineCode",{parentName:"a"},"SpendingLimit!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-cardproductbcompanyspendinglimitbcodespendinglimit--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CardProduct.",(0,n.kt)("b",null,"companySpendingLimit"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/objects/spending-limit"},(0,n.kt)("inlineCode",{parentName:"a"},"SpendingLimit!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/objects/card"},(0,n.kt)("inlineCode",{parentName:"a"},"Card")),"  ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/objects/project-info"},(0,n.kt)("inlineCode",{parentName:"a"},"ProjectInfo")),"  ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);