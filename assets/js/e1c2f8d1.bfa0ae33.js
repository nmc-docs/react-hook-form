"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,g=u["".concat(c,".").concat(d)]||u[d]||s[d]||l;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const l={sidebar_position:1},i="<Controller />",a={unversionedId:"components/Controller",id:"components/Controller",title:"<Controller />",description:"Gi\u1edbi thi\u1ec7u v\u1ec1 component ``",source:"@site/docs/components/Controller.md",sourceDirName:"components",slug:"/components/Controller",permalink:"/react-hook-form/components/Controller",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Component",permalink:"/react-hook-form/category/component"},next:{title:"V\xed d\u1ee5",permalink:"/react-hook-form/example"}},c={},p=[{value:"Gi\u1edbi thi\u1ec7u v\u1ec1 component <code>&lt;Controller /&gt;</code>",id:"gi\u1edbi-thi\u1ec7u-v\u1ec1-component-controller-",level:2},{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}],m={toc:p},u="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"controller-"},(0,o.kt)("inlineCode",{parentName:"h1"},"<Controller />")),(0,o.kt)("h2",{id:"gi\u1edbi-thi\u1ec7u-v\u1ec1-component-controller-"},"Gi\u1edbi thi\u1ec7u v\u1ec1 component ",(0,o.kt)("inlineCode",{parentName:"h2"},"<Controller />")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," trong React Hook Form (RHF) l\xe0 m\u1ed9t component d\xf9ng \u0111\u1ec3 k\u1ebft n\u1ed1i m\u1ed9t tr\u01b0\u1eddng d\u1eef li\u1ec7u (input, select, ho\u1eb7c textarea) v\xe0o h\u1ec7 th\u1ed1ng qu\u1ea3n l\xfd bi\u1ec3u m\u1eabu \u0111\u01b0\u1ee3c t\u1ea1o b\u1edfi ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm()"),". N\xf3 gi\xfap b\u1ea1n qu\u1ea3n l\xfd gi\xe1 tr\u1ecb, x\xe1c th\u1ef1c, v\xe0 s\u1ef1 t\u01b0\u01a1ng t\xe1c c\u1ee7a tr\u01b0\u1eddng d\u1eef li\u1ec7u m\u1ed9t c\xe1ch d\u1ec5 d\xe0ng. ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," th\u01b0\u1eddng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng khi b\u1ea1n mu\u1ed1n t\u1ea1o m\u1ed9t tr\u01b0\u1eddng d\u1eef li\u1ec7u t\xf9y ch\u1ec9nh ho\u1eb7c mu\u1ed1n ki\u1ec3m so\xe1t c\xe1ch d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb v\xe0 x\u1eed l\xfd."),(0,o.kt)("p",null,"D\u01b0\u1edbi \u0111\xe2y l\xe0 m\u1ed9t s\u1ed1 c\xf4ng vi\u1ec7c m\xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," th\u1ef1c hi\u1ec7n:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"1.")," ",(0,o.kt)("strong",{parentName:"li"},"K\u1ebft n\u1ed1i tr\u01b0\u1eddng d\u1eef li\u1ec7u v\xe0o h\u1ec7 th\u1ed1ng qu\u1ea3n l\xfd bi\u1ec3u m\u1eabu")," : ",(0,o.kt)("inlineCode",{parentName:"li"},"Controller")," gi\xfap b\u1ea1n \u0111\u0103ng k\xfd (register) m\u1ed9t tr\u01b0\u1eddng d\u1eef li\u1ec7u v\xe0o h\u1ec7 th\u1ed1ng qu\u1ea3n l\xfd bi\u1ec3u m\u1eabu th\xf4ng qua h\xe0m ",(0,o.kt)("inlineCode",{parentName:"li"},"register()")," c\u1ee7a hook ",(0,o.kt)("inlineCode",{parentName:"li"},"useForm()"),". \u0110i\u1ec1u n\xe0y cho ph\xe9p RHF theo d\xf5i gi\xe1 tr\u1ecb v\xe0 tr\u1ea1ng th\xe1i c\u1ee7a tr\u01b0\u1eddng d\u1eef li\u1ec7u."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"2.")," ",(0,o.kt)("strong",{parentName:"li"},"Cung c\u1ea5p gi\xe1 tr\u1ecb v\xe0 s\u1ef1 ki\u1ec3m so\xe1t cho tr\u01b0\u1eddng d\u1eef li\u1ec7u")," : B\u1ea1n c\xf3 th\u1ec3 truy\u1ec1n gi\xe1 tr\u1ecb v\xe0 c\xe1c s\u1ef1 ki\u1ec3m so\xe1t (nh\u01b0 x\xe1c th\u1ef1c, ki\u1ec3m tra ki\u1ec3u d\u1eef li\u1ec7u) cho tr\u01b0\u1eddng d\u1eef li\u1ec7u th\xf4ng qua ",(0,o.kt)("inlineCode",{parentName:"li"},"Controller"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"3.")," ",(0,o.kt)("strong",{parentName:"li"},"Qu\u1ea3n l\xfd s\u1ef1 t\u01b0\u01a1ng t\xe1c c\u1ee7a tr\u01b0\u1eddng d\u1eef li\u1ec7u")," : ",(0,o.kt)("inlineCode",{parentName:"li"},"Controller")," cung c\u1ea5p c\xe1c callback nh\u01b0 ",(0,o.kt)("inlineCode",{parentName:"li"},"onChange"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"onBlur")," \u0111\u1ec3 b\u1ea1n c\xf3 th\u1ec3 ki\u1ec3m so\xe1t s\u1ef1 t\u01b0\u01a1ng t\xe1c c\u1ee7a ng\u01b0\u1eddi d\xf9ng v\u1edbi tr\u01b0\u1eddng d\u1eef li\u1ec7u."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"4.")," ",(0,o.kt)("strong",{parentName:"li"},"T\xf9y ch\u1ec9nh c\xe1ch hi\u1ec3n th\u1ecb v\xe0 x\u1eed l\xfd tr\u01b0\u1eddng d\u1eef li\u1ec7u")," : B\u1ea1n c\xf3 th\u1ec3 t\u1ea1o c\xe1c tr\u01b0\u1eddng d\u1eef li\u1ec7u t\xf9y ch\u1ec9nh b\u1eb1ng c\xe1ch render UI c\u1ee7a tr\u01b0\u1eddng d\u1eef li\u1ec7u v\xe0 ki\u1ec3m so\xe1t c\xe1ch n\xf3 \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb v\xe0 x\u1eed l\xfd d\u1ef1a tr\xean gi\xe1 tr\u1ecb t\u1eeb h\u1ec7 th\u1ed1ng qu\u1ea3n l\xfd bi\u1ec3u m\u1eabu.")),(0,o.kt)("h2",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"D\u01b0\u1edbi \u0111\xe2y l\xe0 2 v\xed d\u1ee5 v\u1ec1 s\u1eed d\u1ee5ng component ",(0,o.kt)("inlineCode",{parentName:"li"},"<Controller />"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<Controller\n  control={control}\n  name="firstName"\n  render={({ field, fieldState: { error } }) => (\n    <Input label="First name" {...field} errorMessage={error?.message} />\n  )}\n/>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<Controller\n  control={control}\n  name="lastName"\n  render={({ field, fieldState: { error } }) => (\n    <Input\n      label="Last name"\n      {...field}\n      onChange={(event) => field.onChange(event.target.value)} // T\xf9y ch\u1ec9nh gi\xe1 tr\u1ecb \u0111\u01b0\u1ee3c g\u1eedi \u0111\u1ebfn hook form\n      errorMessage={error?.message}\n    />\n  )}\n/>\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Component ",(0,o.kt)("inlineCode",{parentName:"p"},"<Controller />")," nh\u1eadn v\xe0o m\u1ed9t props ",(0,o.kt)("strong",{parentName:"p"},"render")," l\xe0 m\u1ed9t function, function n\xe0y ch\u1ee9a thu\u1ed9c t\xednh ",(0,o.kt)("strong",{parentName:"p"},"field")," . Thu\u1ed9c t\xednh ",(0,o.kt)("strong",{parentName:"p"},"field")," n\xe0y l\xe0 m\u1ed9t object ch\u1ee9a c\xe1c ph\u01b0\u01a1ng th\u1ee9c, thu\u1ed9c t\xednh nh\u01b0: ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ref"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onChange"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onBlur")," \u0111\u1ec3 t\u01b0\u01a1ng t\xe1c gi\xe1 tr\u1ecb c\u1ee7a tr\u01b0\u1eddng v\u1edbi hook form.")))}s.isMDXComponent=!0}}]);