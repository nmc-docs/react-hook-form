"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[402],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>f});var o=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=o.createContext({}),p=function(e){var n=o.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},m=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=t,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||a;return r?o.createElement(f,l(l({ref:n},m),{},{components:r})):o.createElement(f,l({ref:n},m))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:t,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5555:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(7462),t=(r(7294),r(3905));const a={sidebar_position:4},l="V\xed d\u1ee5",i={unversionedId:"example",id:"example",title:"V\xed d\u1ee5",description:"T\u1ea1o component",source:"@site/docs/example.md",sourceDirName:".",slug:"/example",permalink:"/react-hook-form/example",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Watch",permalink:"/react-hook-form/watch"}},s={},p=[{value:"T\u1ea1o component",id:"t\u1ea1o-component",level:2},{value:"Component <code>&lt;Input /&gt;</code>",id:"component-input-",level:3},{value:"Component <code>&lt;Dropdown /&gt;</code>",id:"component-dropdown-",level:3},{value:"Component <code>&lt;RadioSelect /&gt;</code>",id:"component-radioselect-",level:3},{value:"Component <code>&lt;DatePicker /&gt;</code>",id:"component-datepicker-",level:3},{value:"T\u1ea1o form",id:"t\u1ea1o-form",level:2}],m={toc:p},d="wrapper";function c(e){let{components:n,...r}=e;return(0,t.kt)(d,(0,o.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5"),(0,t.kt)("h2",{id:"t\u1ea1o-component"},"T\u1ea1o component"),(0,t.kt)("h3",{id:"component-input-"},"Component ",(0,t.kt)("inlineCode",{parentName:"h3"},"<Input />")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { TextField, TextFieldProps } from "@mui/material";\n\ntype TInputProps = TextFieldProps & {};\n\nconst Input: React.FC<TInputProps> = ({ sx, ...otherProps }) => {\n  return (\n    <TextField\n      {...otherProps}\n      size="small"\n      fullWidth\n      sx={{ "& .MuiFormHelperText-root": { marginLeft: "3px" }, ...sx }}\n    />\n  );\n};\nexport default Input;\n')),(0,t.kt)("h3",{id:"component-dropdown-"},"Component ",(0,t.kt)("inlineCode",{parentName:"h3"},"<Dropdown />")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { MenuItem, TextField, TextFieldProps, styled } from "@mui/material";\n\ninterface IDropdownOption {\n  label: string;\n  value: string;\n}\ntype TDropdownProps = TextFieldProps & {\n  options: IDropdownOption[];\n};\n\nconst StyledTextField = styled(TextField)({\n  "& .MuiFormHelperText-root": {\n    marginLeft: "3px",\n  },\n});\n\nconst Dropdown: React.FC<TDropdownProps> = ({ options, ...otherProps }) => {\n  return (\n    <StyledTextField size="small" fullWidth select {...otherProps}>\n      {options.map((option, index) => (\n        <MenuItem key={index} value={option.value}>\n          {option.label}\n        </MenuItem>\n      ))}\n    </StyledTextField>\n  );\n};\n\nexport default Dropdown;\n')),(0,t.kt)("h3",{id:"component-radioselect-"},"Component ",(0,t.kt)("inlineCode",{parentName:"h3"},"<RadioSelect />")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  FormControl,\n  FormControlLabel,\n  FormHelperText,\n  FormLabel,\n  Radio,\n  RadioGroup,\n  RadioGroupProps,\n} from "@mui/material";\nimport React from "react";\n\ninterface IRadioSelectOption {\n  label: string;\n  value: string;\n}\ntype TRadioSelectProps = RadioGroupProps & {\n  label: string;\n  options: IRadioSelectOption[];\n  errorMessage?: string;\n};\n\nconst RadioSelect: React.FC<TRadioSelectProps> = ({\n  sx,\n  label,\n  options,\n  errorMessage,\n  ...otherProps\n}) => {\n  return (\n    <FormControl sx={sx} fullWidth error={!!errorMessage}>\n      <FormLabel>{label}</FormLabel>\n      <RadioGroup row {...otherProps}>\n        {options.map((option, index) => (\n          <FormControlLabel\n            key={index}\n            value={option.value}\n            control={<Radio />}\n            label={option.label}\n          />\n        ))}\n      </RadioGroup>\n      {errorMessage && (\n        <FormHelperText error sx={{ marginLeft: "3px" }}>\n          {errorMessage}\n        </FormHelperText>\n      )}\n    </FormControl>\n  );\n};\n\nexport default RadioSelect;\n')),(0,t.kt)("h3",{id:"component-datepicker-"},"Component ",(0,t.kt)("inlineCode",{parentName:"h3"},"<DatePicker />")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";\nimport { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";\nimport {\n  DatePicker as MUIDatePicker,\n  DatePickerProps,\n} from "@mui/x-date-pickers/DatePicker";\nimport { Dayjs } from "dayjs";\n\ntype TDatePickerProps = DatePickerProps<Dayjs> & {\n  errorMessage?: string;\n};\n\nconst DatePicker: React.FC<TDatePickerProps> = ({\n  sx,\n  errorMessage,\n  ...otherProps\n}) => (\n  <LocalizationProvider dateAdapter={AdapterDayjs}>\n    <MUIDatePicker\n      {...otherProps}\n      slotProps={{\n        textField: {\n          error: !!errorMessage,\n          helperText: errorMessage,\n          fullWidth: true,\n          size: "small",\n          sx: {\n            "& .MuiFormHelperText-root": { marginLeft: "3px" },\n            ...sx,\n          },\n        },\n      }}\n    />\n  </LocalizationProvider>\n);\n\nexport default DatePicker;\n')),(0,t.kt)("h2",{id:"t\u1ea1o-form"},"T\u1ea1o form"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx"},'import { zodResolver } from "@hookform/resolvers/zod";\nimport { SubmitHandler, useForm, Controller } from "react-hook-form";\nimport { Button } from "@mui/material";\nimport { z } from "zod";\nimport dayjs from "dayjs";\n\nimport RadioSelect from "src/components/RadioSelect";\nimport Input from "src/components/Input";\nimport Dropdown from "src/components/Dropdown";\nimport DatePicker from "src/components/DatePicker";\n\ninterface IForm {\n  fullName: string;\n  company: string;\n  gender: string;\n  dob: string;\n  password: string;\n  confirmPassword: string;\n}\n\nconst FormValidationSchema = z\n  .object({\n    fullName: z\n      .string({ coerce: true })\n      .nonempty("Please enter your full name"),\n    company: z.string().nonempty("Please select your company"),\n    gender: z.string().nonempty("Please select your gender"),\n    dob: z.string().nonempty("Please select your date of birth"),\n    password: z.string().nonempty("Please enter your password"),\n    confirmPassword: z.string().nonempty("Please enter your password again"),\n  })\n  .refine((data) => data.confirmPassword === data.password, {\n    message: "Password do not match",\n    path: ["confirmPassword"],\n  });\n\nconst Home = () => {\n  const { handleSubmit, control } = useForm<IForm>({\n    resolver: zodResolver(FormValidationSchema),\n    shouldFocusError: false,\n    defaultValues: {\n      fullName: "",\n      company: "",\n      gender: "",\n      dob: "",\n      password: "",\n      confirmPassword: "",\n    },\n  });\n\n  const onSubmitForm: SubmitHandler<IForm> = async (data) => {\n    console.log(data);\n  };\n\n  return (\n    <>\n      <Controller\n        control={control}\n        name="fullName"\n        render={({ field: { ref, ...otherFields }, fieldState: { error } }) => (\n          <Input\n            label="Full name"\n            {...otherFields}\n            error={!!error?.message}\n            helperText={error?.message}\n          />\n        )}\n      />\n      <Controller\n        control={control}\n        name="company"\n        render={({ field: { ref, ...otherFields }, fieldState: { error } }) => (\n          <Dropdown\n            label="Your company"\n            options={[\n              { label: "Google", value: "Google" },\n              { label: "Microsoft", value: "Microsoft" },\n              { label: "Meta", value: "Meta" },\n              { label: "Amazon", value: "Amazon" },\n            ]}\n            {...otherFields}\n            error={!!error?.message}\n            helperText={error?.message}\n            sx={{ mt: 2 }}\n          />\n        )}\n      />\n      <Controller\n        control={control}\n        name="gender"\n        render={({ field: { ref, ...otherFields }, fieldState: { error } }) => (\n          <RadioSelect\n            label="Gender"\n            options={[\n              { label: "Nam", value: "male" },\n              { label: "N\u1eef", value: "female" },\n              { label: "Kh\xe1c", value: "other" },\n            ]}\n            {...otherFields}\n            errorMessage={error?.message}\n            sx={{ mt: 2 }}\n          />\n        )}\n      />\n      <Controller\n        control={control}\n        name="dob"\n        render={({ field, fieldState: { error } }) => (\n          <DatePicker\n            label="Your date of birth"\n            format="DD/MM/YYYY"\n            value={dayjs(field.value)}\n            onChange={(value) => field.onChange(value?.toISOString())}\n            errorMessage={error?.message}\n            sx={{ mt: 2 }}\n          />\n        )}\n      />\n      <Controller\n        control={control}\n        name="password"\n        render={({ field: { ref, ...otherFields }, fieldState: { error } }) => (\n          <Input\n            label="Password"\n            {...otherFields}\n            error={!!error?.message}\n            helperText={error?.message}\n            type="password"\n            sx={{ mt: 2 }}\n          />\n        )}\n      />\n      <Controller\n        control={control}\n        name="confirmPassword"\n        render={({ field: { ref, ...otherFields }, fieldState: { error } }) => (\n          <Input\n            label="Confirm password"\n            {...otherFields}\n            error={!!error?.message}\n            helperText={error?.message}\n            type="password"\n            sx={{ mt: 2 }}\n          />\n        )}\n      />\n      <Button\n        variant="contained"\n        sx={{ mt: 2, textTransform: "none" }}\n        onClick={handleSubmit(onSubmitForm)}\n      >\n        Submit form\n      </Button>\n    </>\n  );\n};\n\nexport default Home;\n')))}c.isMDXComponent=!0}}]);