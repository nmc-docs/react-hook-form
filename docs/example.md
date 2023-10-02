---
sidebar_position: 3
---

# Ví dụ

## Tạo component `<Input />`

- Ta sẽ custom lại component `<Input />` của thư viện Chakra UI:

```tsx title="src/components/Input.tsx"
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps,
} from "@chakra-ui/react";
import React from "react";

interface IInputProps extends InputProps {
  label?: string;
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ label, errorMessage, ...otherProps }, ref) => {
    return (
      <FormControl isInvalid={!!errorMessage}>
        <FormLabel>{label}</FormLabel>
        <ChakraInput
          ref={ref}
          {...otherProps}
          sx={{ _disabled: { color: "grey" } }}
        />
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </FormControl>
    );
  }
);

export default Input;
```

## Tạo form

- Form chúng ta đơn giản gồm 2 trường: **firstName** và **lastName**

```tsx
import { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import Input from "src/components/Input";
import { z } from "zod";

interface IForm {
  firstName: string;
  lastName: string;
}

const FormValidationSchema = z.object({
  firstName: z.string().nonempty("Please enter your first name"),
  lastName: z.string().nonempty("Please enter your last name"),
});

const Home = () => {
  const {
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
    reset,
    control,
  } = useForm<IForm>({
    resolver: zodResolver(FormValidationSchema),
    shouldFocusError: false,
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmitForm: SubmitHandler<IForm> = async (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field, fieldState: { error } }) => (
          <Input label="First name" {...field} errorMessage={error?.message} />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        render={({ field, fieldState: { error } }) => (
          <Input
            label="Last name"
            {...field}
            onChange={(event) => field.onChange(event.target.value)}
            errorMessage={error?.message}
          />
        )}
      />
      <Button
        colorScheme="purple"
        onClick={handleSubmit(onSubmitForm)}
        isLoading={isSubmitting}
      >
        Submit
      </Button>
    </>
  );
};

export default Home;
```
