"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[583],{4014:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var c=t(4848),r=t(8453);const i={sidebar_position:3},s="Watch",a={id:"watch",title:"Watch",description:"Gi\u1edbi thi\u1ec7u",source:"@site/docs/watch.md",sourceDirName:".",slug:"/watch",permalink:"/react-hook-form/watch",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"<Controller />",permalink:"/react-hook-form/components/Controller"},next:{title:"V\xed d\u1ee5",permalink:"/react-hook-form/example"}},o={},l=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"useWatch()",id:"usewatch",level:2}];function h(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"watch",children:"Watch"}),"\n",(0,c.jsx)(e.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["Trong c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng tr\u1ea3 v\u1ec1 t\u1eeb ",(0,c.jsx)(e.code,{children:"useForm()"}),", c\xf3 m\u1ed9t ph\u01b0\u01a1ng th\u1ee9c t\xean l\xe0 ",(0,c.jsx)(e.code,{children:"watch()"})," gi\xfap ch\xfang ta c\xf3 th\u1ec3 theo d\xf5i s\u1ef1 thay \u0111\u1ed5i c\u1ee7a c\xe1c tr\u01b0\u1eddng m\xe0 ta ch\u1ec9 \u0111\u1ecbnh."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"const { watch } = useForm();\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"C\xfa ph\xe1p:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"watch(fieldNames?: string | string[]) => unknown\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.admonition,{type:"tip",children:(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["Ph\u01b0\u01a1ng th\u1ee9c ",(0,c.jsx)(e.code,{children:"watch()"})," n\xe0y th\xedch h\u1ee3p cho vi\u1ec7c khi ta mu\u1ed1n tri\u1ec3n khai dependent field (tr\u01b0\u1eddng n\xe0y ph\u1ee5 thu\u1ed9c tr\u01b0\u1eddng kia)"]}),"\n"]})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"V\xed d\u1ee5:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"const {watch, setValue} = useForm()\n\nconst dateWatcher = watch('date'); // Gi\xe1 tr\u1ecb c\u1ee7a \"dateWatcher\" c\u0169ng l\xe0 gi\xe1 tr\u1ecb c\u1ee7a tr\u01b0\u1eddng date\n\nuseEffect(() => {\n  const calculateWeekValue = () => {...}\n  setValue('week', calculateWeekValue(dateWatcher))\n}, [dateWatcher, setValue])\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"usewatch",children:"useWatch()"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["Ta c\u0169ng c\xf3 th\u1ec3 theo d\xf5i s\u1ef1 thay \u0111\u1ed5i c\u1ee7a c\xe1c field do ta ch\u1ec9 \u0111\u1ecbnh \u1edf c\xe1c component kh\xe1c th\xf4ng qua hook ",(0,c.jsx)(e.code,{children:"useWatch()"})]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"C\xfa ph\xe1p:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"useWatch({\n  control: Control, // Li\xean k\u1ebft v\u1edbi useForm th\xf4ng qua thu\u1ed9c t\xednh n\xe0y\n  name: string, // T\xean c\u1ee7a field mu\u1ed1n theo d\xf5i s\u1ef1 thay \u0111\u1ed5i\n  defaultValue: string, // Gi\xe1 tr\u1ecb kh\u1edfi t\u1ea1o cho bi\u1ebfn theo d\xf5i s\u1ef1 thay \u0111\u1ed5i\n});\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"V\xed d\u1ee5:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:'import React from "react";\nimport { useForm, useWatch } from "react-hook-form";\n\ninterface FormInputs {\n  firstName: string;\n}\n\nfunction FirstNameWatched({ control }: { control: Control<FormInputs> }) {\n  const firstName = useWatch({\n    control,\n    name: "firstName", // without supply name will watch the entire form, or [\'firstName\', \'lastName\'] to watch both\n    defaultValue: "default", // default value before the render\n  });\n\n  return <p>Watch: {firstName}</p>; // only re-render at the custom hook level, when firstName changes\n}\n\nfunction App() {\n  const { register, control, handleSubmit } = useForm<FormInputs>();\n\n  const onSubmit = (data: FormInputs) => {\n    console.log(data);\n  };\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <label>First Name:</label>\n      <input {...register("firstName")} />\n      <input type="submit" />\n\n      <FirstNameWatched control={control} />\n    </form>\n  );\n}\n'})}),"\n"]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(h,{...n})}):h(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>a});var c=t(6540);const r={},i=c.createContext(r);function s(n){const e=c.useContext(i);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),c.createElement(i.Provider,{value:e},n.children)}}}]);