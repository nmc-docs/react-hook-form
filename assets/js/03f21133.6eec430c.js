"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[17],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>s});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),u=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(m.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,m=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=u(n),g=a,s=d["".concat(m,".").concat(g)]||d[g]||p[g]||l;return n?r.createElement(s,i(i({ref:e},c),{},{components:n})):r.createElement(s,i({ref:e},c))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3965:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1},i="useForm()",o={unversionedId:"hook/useForm",id:"hook/useForm",title:"useForm()",description:"Props",source:"@site/docs/hook/useForm.md",sourceDirName:"hook",slug:"/hook/useForm",permalink:"/react-hook-form/hook/useForm",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hook",permalink:"/react-hook-form/category/hook"},next:{title:"Component",permalink:"/react-hook-form/category/component"}},m={},u=[{value:"Props",id:"props",level:2},{value:"Returns",id:"returns",level:2}],c={toc:u},d="wrapper";function p(t){let{components:e,...l}=t;return(0,a.kt)(d,(0,r.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useform"},"useForm()"),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const form = useForm<T>({\n  defaultValues: T | () => Promise<T>,\n  resolver: Resolver,\n  shouldFocusError: boolean\n})\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Props"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"defaultValues")),(0,a.kt)("td",{parentName:"tr",align:null},"Thi\u1ebft l\u1eadp gi\xe1 tr\u1ecb ban \u0111\u1ea7u cho form, n\xf3 c\xf3 th\u1ec3 l\xe0 m\u1ed9t object, ho\u1eb7c m\u1ed9t async function (g\u1ecdi gi\xe1 tr\u1ecb t\u1eeb API)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"resolver")),(0,a.kt)("td",{parentName:"tr",align:null},"Cho ph\xe9p t\xf9y ch\u1ec9nh quy tr\xecnh validate form b\u1eb1ng c\xe1ch cung c\u1ea5p m\u1ed9t h\xe0m validate ri\xeang. \u0110i\u1ec1u n\xe0y h\u1eefu \xedch khi mu\u1ed1n validate form b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng c\xe1c th\u01b0 vi\u1ec7n x\xe1c th\u1ef1c b\xean ngo\xe0i nh\u01b0 ",(0,a.kt)("inlineCode",{parentName:"td"},"zod"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"shouldFocusError")),(0,a.kt)("td",{parentName:"tr",align:null},"-\xa0Khi \u0111\u1eb7t gi\xe1 tr\u1ecb l\xe0 ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", t\u1ef1 \u0111\u1ed9ng focus \u0111\u1ebfn tr\u01b0\u1eddng \u0111\u1ea7u ti\xean khi c\xf3 l\u1ed7i x\u1ea3y ra trong bi\u1ec3u m\u1eabu.",(0,a.kt)("br",null),"-\xa0Gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh l\xe0 ",(0,a.kt)("inlineCode",{parentName:"td"},"true"))))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const {\n  handleSubmit,\n  setValue,\n  setError,\n  formState: {\n    errors,\n    isSubmitSuccessful,\n    isSubmitting,\n    defaultValues,\n    isDirty,\n    isValid,\n    dirtyFields,\n    submitCount,\n  },\n  reset,\n  resetField,\n  getValues,\n  control,\n  getFieldState,\n} = useForm();\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1696259020089",src:n(7991).Z,title:"S\u01a1 \u0111\u1ed3 bi\u1ec3u di\u1ec5n c\xe1c ph\u01b0\u01a1ng th\u1ee9c, thu\u1ed9c t\xednh tr\u1ea3 v\u1ec1 t\u1eeb useForm()",width:"3200",height:"1800"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Return props/methods"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"handleSubmit()")),(0,a.kt)("td",{parentName:"tr",align:null},"H\xe0m \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 x\u1eed l\xfd vi\u1ec7c g\u1eedi bi\u1ec3u m\u1eabu. B\u1ea1n s\u1ebd g\u1ecdi h\xe0m n\xe0y \u0111\u1ec3 submit form. H\xe0m n\xe0y s\u1ebd t\u1ef1 \u0111\u1ed9ng x\xe1c th\u1ef1c v\xe0 x\u1eed l\xfd bi\u1ec3u m\u1eabu v\xe0 c\xf3 th\u1ec3 truy\u1ec1n m\u1ed9t h\xe0m callback \u0111\u1ec3 th\u1ef1c hi\u1ec7n c\xe1c t\xe1c v\u1ee5 sau khi bi\u1ec3u m\u1eabu \u0111\u01b0\u1ee3c g\u1eedi th\xe0nh c\xf4ng.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"setValue()")),(0,a.kt)("td",{parentName:"tr",align:null},"Thi\u1ebft l\u1eadp gi\xe1 tr\u1ecb cho m\u1ed9t tr\u01b0\u1eddng d\u1eef li\u1ec7u c\u1ee5 th\u1ec3 trong form. C\xf3 t\xf9y ch\u1ecdn ",(0,a.kt)("inlineCode",{parentName:"td"},"shouldVaidate")," \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh li\u1ec7u c\xf3 validate lu\xf4n tr\u01b0\u1eddng \u0111\xf3 khi \u0111\u01b0\u1ee3c set value m\u1edbi hay kh\xf4ng")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"setError()")),(0,a.kt)("td",{parentName:"tr",align:null},"\u0110\u1eb7t l\u1ed7i cho m\u1ed9t tr\u01b0\u1eddng d\u1eef li\u1ec7u c\u1ee5 th\u1ec3.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"reset()")),(0,a.kt)("td",{parentName:"tr",align:null},"-\xa0N\u1ebfu kh\xf4ng truy\u1ec1n tham s\u1ed1 v\xe0o trong h\xe0m n\xe0y, n\xf3 s\u1ebd \u0111\u1eb7t l\u1ea1i gi\xe1 tr\u1ecb c\u1ee7a t\u1ea5t c\u1ea3 c\xe1c tr\u01b0\u1eddng d\u1eef li\u1ec7u trong form v\u1ec1 gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh \u0111\u01b0\u1ee3c x\xe1c \u0111\u1ecbnh b\u1edfi ",(0,a.kt)("inlineCode",{parentName:"td"},"defaultValues"),".",(0,a.kt)("br",null),"-\xa0N\u1ebfu truy\u1ec1n tham s\u1ed1 l\xe0 object th\xec n\xf3 s\u1ebd thi\u1ebft l\u1eadp l\u1ea1i gi\xe1 tr\u1ecb ",(0,a.kt)("inlineCode",{parentName:"td"},"defaultValues")," cho form \u0111\u1ed3ng th\u1eddi reset t\u1ea5t c\u1ea3 c\xe1c tr\u01b0\u1eddng d\u1eef li\u1ec7u trong form v\u1ec1 gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh n\xe0y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"resetField()")),(0,a.kt)("td",{parentName:"tr",align:null},"H\xe0m n\xe0y cho ph\xe9p b\u1ea1n \u0111\u1eb7t l\u1ea1i gi\xe1 tr\u1ecb c\u1ee7a m\u1ed9t tr\u01b0\u1eddng d\u1eef li\u1ec7u c\u1ee5 th\u1ec3 trong form v\u1ec1 gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getValues()")),(0,a.kt)("td",{parentName:"tr",align:null},"H\xe0m n\xe0y cho ph\xe9p b\u1ea1n truy c\u1eadp c\xe1c gi\xe1 tr\u1ecb hi\u1ec7n t\u1ea1i c\u1ee7a t\u1ea5t c\u1ea3 c\xe1c tr\u01b0\u1eddng d\u1eef li\u1ec7u trong form. Ta c\xf3 th\u1ec3 truy\u1ec1n tham s\u1ed1 l\xe0 t\xean tr\u01b0\u1eddng ho\u1eb7c m\u1ed9t m\u1ea3ng ch\u1ee9a t\xean c\xe1c tr\u01b0\u1eddng mu\u1ed1n l\u1ea5y gi\xe1 tr\u1ecb.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getFieldState()")),(0,a.kt)("td",{parentName:"tr",align:null},"L\u1ea5y tr\u1ea1ng th\xe1i c\u1ee7a m\u1ed9t tr\u01b0\u1eddng trong form, c\xe1c tr\u1ea1ng th\xe1i nh\u01b0:",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"error")," : L\u1ed7i c\u1ee7a tr\u01b0\u1eddng hi\u1ec7n t\u1ea1i",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"invalid")," : Tr\u01b0\u1eddng hi\u1ec7n c\xf3 l\u1ed7i hay kh\xf4ng",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"isDirty")," : Gi\xe1 tr\u1ecb c\u1ee7a tr\u01b0\u1eddng hi\u1ec7n t\u1ea1i c\xf3 \u0111ang kh\xe1c so v\u1edbi gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh ban \u0111\u1ea7u hay kh\xf4ng")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"control")),(0,a.kt)("td",{parentName:"tr",align:null},"L\xe0 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng ch\u1ee9a c\xe1c h\xe0m v\xe0 tr\u1ea1ng th\xe1i li\xean quan \u0111\u1ebfn qu\u1ea3n l\xfd c\xe1c tr\u01b0\u1eddng d\u1eef li\u1ec7u.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"errors")),(0,a.kt)("td",{parentName:"tr",align:null},"M\u1ed9t object ch\u1ee9a t\u1ea5t c\u1ea3 c\xe1c l\u1ed7i c\u1ee7a c\xe1c tr\u01b0\u1eddng d\u1eef li\u1ec7u trong form. M\u1ed7i key trong object l\xe0 t\xean c\u1ee7a tr\u01b0\u1eddng d\u1eef li\u1ec7u v\xe0 gi\xe1 tr\u1ecb l\xe0 th\xf4ng b\xe1o l\u1ed7i (n\u1ebfu c\xf3).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"isSubmitSuccessful")),(0,a.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," n\u1ebfu bi\u1ec3u m\u1eabu \u0111\u01b0\u1ee3c g\u1eedi th\xe0nh c\xf4ng.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"isSubmitting")),(0,a.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," n\u1ebfu bi\u1ec3u m\u1eabu \u0111ang \u0111\u01b0\u1ee3c g\u1eedi \u0111i. N\xf3i c\xe1ch kh\xe1c l\xe0 h\xe0m submit ch\u01b0a th\u1ef1c hi\u1ec7n xong")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"isDirty")),(0,a.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," n\u1ebfu form \u0111\xe3 b\u1ecb thay \u0111\u1ed5i (c\xf3 gi\xe1 tr\u1ecb kh\xe1c so v\u1edbi ",(0,a.kt)("inlineCode",{parentName:"td"},"defaultValues"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"isValid")),(0,a.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," n\u1ebfu form kh\xf4ng c\xf3 l\u1ed7i n\xe0o")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"submitCount")),(0,a.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 m\u1ed9t number l\xe0 s\u1ed1 l\u1ea7n \u0111\xe3 submit form")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"defaultValues")),(0,a.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 m\u1ed9t object ch\u1ee9a c\xe1c gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh c\u1ee7a c\xe1c tr\u01b0\u1eddng d\u1eef li\u1ec7u trong form")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"dirtyFields")),(0,a.kt)("td",{parentName:"tr",align:null},"L\u1ea5y tr\u1ea1ng th\xe1i thay \u0111\u1ed5i so v\u1edbi gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh c\u1ee7a c\xe1c tr\u01b0\u1eddng trong form")))))}p.isMDXComponent=!0},7991:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1696259020089-b1788aefacbb2f7eecd5861f3b893e92.png"}}]);