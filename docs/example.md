---
sidebar_position: 4
---

# Ví dụ

## Tạo component

### Component `<Input />`

```tsx
import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

type TInputProps = TextFieldProps & {};

const Input: React.FC<TInputProps> = ({ sx, ...otherProps }) => {
  return (
    <TextField
      {...otherProps}
      size="small"
      fullWidth
      sx={{ "& .MuiFormHelperText-root": { marginLeft: "3px" }, ...sx }}
    />
  );
};
export default Input;
```

### Component `<Dropdown />`

```tsx
import React from "react";
import { MenuItem, TextField, TextFieldProps, styled } from "@mui/material";

interface IDropdownOption {
  label: string;
  value: string;
}
type TDropdownProps = TextFieldProps & {
  options: IDropdownOption[];
};

const StyledTextField = styled(TextField)({
  "& .MuiFormHelperText-root": {
    marginLeft: "3px",
  },
});

const Dropdown: React.FC<TDropdownProps> = ({ options, ...otherProps }) => {
  return (
    <StyledTextField size="small" fullWidth select {...otherProps}>
      {options.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </StyledTextField>
  );
};

export default Dropdown;
```

### Component `<RadioSelect />`

```tsx
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from "@mui/material";
import React from "react";

interface IRadioSelectOption {
  label: string;
  value: string;
}
type TRadioSelectProps = RadioGroupProps & {
  label: string;
  options: IRadioSelectOption[];
  errorMessage?: string;
};

const RadioSelect: React.FC<TRadioSelectProps> = ({
  sx,
  label,
  options,
  errorMessage,
  ...otherProps
}) => {
  return (
    <FormControl sx={sx} fullWidth error={!!errorMessage}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row {...otherProps}>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
      {errorMessage && (
        <FormHelperText error sx={{ marginLeft: "3px" }}>
          {errorMessage}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default RadioSelect;
```

### Component `<DatePicker />`

```tsx
import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  DatePicker as MUIDatePicker,
  DatePickerProps,
} from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

type TDatePickerProps = DatePickerProps<Dayjs> & {
  errorMessage?: string;
};

const DatePicker: React.FC<TDatePickerProps> = ({
  sx,
  errorMessage,
  ...otherProps
}) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <MUIDatePicker
      {...otherProps}
      slotProps={{
        textField: {
          error: !!errorMessage,
          helperText: errorMessage,
          fullWidth: true,
          size: "small",
          sx: {
            "& .MuiFormHelperText-root": { marginLeft: "3px" },
            ...sx,
          },
        },
      }}
    />
  </LocalizationProvider>
);

export default DatePicker;
```

## Tạo form

```tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Button } from "@mui/material";
import { z } from "zod";
import dayjs from "dayjs";

import RadioSelect from "src/components/RadioSelect";
import Input from "src/components/Input";
import Dropdown from "src/components/Dropdown";
import DatePicker from "src/components/DatePicker";

interface IForm {
  fullName: string;
  company: string;
  gender: string;
  dob: string;
  password: string;
  confirmPassword: string;
}

const FormValidationSchema = z
  .object({
    fullName: z
      .string({ coerce: true })
      .nonempty("Please enter your full name"),
    company: z.string().nonempty("Please select your company"),
    gender: z.string().nonempty("Please select your gender"),
    dob: z.string().nonempty("Please select your date of birth"),
    password: z.string().nonempty("Please enter your password"),
    confirmPassword: z.string().nonempty("Please enter your password again"),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

const Home = () => {
  const { handleSubmit, control } = useForm<IForm>({
    resolver: zodResolver(FormValidationSchema),
    shouldFocusError: false,
    defaultValues: {
      fullName: "",
      company: "",
      gender: "",
      dob: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmitForm: SubmitHandler<IForm> = async (data) => {
    console.log(data);
  };

  return (
    <>
      <Controller
        control={control}
        name="fullName"
        render={({ field: { ref, ...otherFields }, fieldState: { error } }) => (
          <Input
            label="Full name"
            {...otherFields}
            error={!!error?.message}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="company"
        render={({ field: { ref, ...otherFields }, fieldState: { error } }) => (
          <Dropdown
            label="Your company"
            options={[
              { label: "Google", value: "Google" },
              { label: "Microsoft", value: "Microsoft" },
              { label: "Meta", value: "Meta" },
              { label: "Amazon", value: "Amazon" },
            ]}
            {...otherFields}
            error={!!error?.message}
            helperText={error?.message}
            sx={{ mt: 2 }}
          />
        )}
      />
      <Controller
        control={control}
        name="gender"
        render={({ field: { ref, ...otherFields }, fieldState: { error } }) => (
          <RadioSelect
            label="Gender"
            options={[
              { label: "Nam", value: "male" },
              { label: "Nữ", value: "female" },
              { label: "Khác", value: "other" },
            ]}
            {...otherFields}
            errorMessage={error?.message}
            sx={{ mt: 2 }}
          />
        )}
      />
      <Controller
        control={control}
        name="dob"
        render={({ field, fieldState: { error } }) => (
          <DatePicker
            label="Your date of birth"
            format="DD/MM/YYYY"
            value={dayjs(field.value)}
            onChange={(value) => field.onChange(value?.toISOString())}
            errorMessage={error?.message}
            sx={{ mt: 2 }}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { ref, ...otherFields }, fieldState: { error } }) => (
          <Input
            label="Password"
            {...otherFields}
            error={!!error?.message}
            helperText={error?.message}
            type="password"
            sx={{ mt: 2 }}
          />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { ref, ...otherFields }, fieldState: { error } }) => (
          <Input
            label="Confirm password"
            {...otherFields}
            error={!!error?.message}
            helperText={error?.message}
            type="password"
            sx={{ mt: 2 }}
          />
        )}
      />
      <Button
        variant="contained"
        sx={{ mt: 2, textTransform: "none" }}
        onClick={handleSubmit(onSubmitForm)}
      >
        Submit form
      </Button>
    </>
  );
};

export default Home;
```

## Kết quả

- Link demo: https://stackblitz.com/edit/react-hook-form-example-7kjwps
