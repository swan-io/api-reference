"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[13148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91860:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(83117),r=n(67294),o=n(3905);const s={id:"transactions",title:"transactions",hide_table_of_contents:!1},i=void 0,l={unversionedId:"queries/transactions",id:"queries/transactions",title:"transactions",description:"A list of transactions of a project.",source:"@site/docs/queries/transactions.mdx",sourceDirName:"queries",slug:"/queries/transactions",permalink:"/queries/transactions",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/queries/transactions.mdx",tags:[],version:"current",frontMatter:{id:"transactions",title:"transactions",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"transaction",permalink:"/queries/transaction"},next:{title:"user",permalink:"/queries/user"}},c={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>transactions.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionsbafterbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>transactions.<b>filters</b></code><Bullet /><code>TransactionsFiltersInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-transactionsbfiltersbcodetransactionsfiltersinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>transactions.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionsbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>transactions.<b>orderBy</b></code><Bullet /><code>TransactionsOrderByInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-transactionsborderbybcodetransactionsorderbyinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>TransactionConnection</code> <Badge class="secondary" text="object"/>',id:"transactionconnection-",level:4}],u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:p,Badge:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A list of transactions of a project."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For a Project access token, this is all the transactions of the project (only available with project access token)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"transactions(\n  after: String\n  filters: TransactionsFiltersInput\n  first: Int! = 50\n  orderBy: TransactionsOrderByInput\n): TransactionConnection!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transactionsbafterbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"transactions.",(0,o.kt)("b",null,"after"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the list of elements needs to start after a element")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transactionsbfiltersbcodetransactionsfiltersinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"transactions.",(0,o.kt)("b",null,"filters"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/inputs/transactions-filters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionsFiltersInput"))," ",(0,o.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the list of elements needs to be filtered")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transactionsbfirstbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"transactions.",(0,o.kt)("b",null,"first"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"number of elements in the list (default value 50)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transactionsborderbybcodetransactionsorderbyinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"transactions.",(0,o.kt)("b",null,"orderBy"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/inputs/transactions-order-by-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionsOrderByInput"))," ",(0,o.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the list of elements needs to be sorted (default value UpdatedAt desc)")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"transactionconnection-"},(0,o.kt)("a",{parentName:"h4",href:"/objects/transaction-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionConnection"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please see the Connection interface")))}b.isMDXComponent=!0}}]);