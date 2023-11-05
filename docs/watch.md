---
sidebar_position: 3
---

# Watch

## Giới thiệu

- Trong các đối tượng trả về từ `useForm()`, có một phương thức tên là `watch()` giúp chúng ta có thể theo dõi sự thay đổi của các trường mà ta chỉ định.

  ```ts
  const { watch } = useForm();
  ```

- Cú pháp:

  ```ts
  watch(fieldNames?: string | string[]) => unknown
  ```

:::tip

- Phương thức `watch()` này thích hợp cho việc khi ta muốn triển khai dependent field (trường này phụ thuộc trường kia)

:::

- Ví dụ:

  ```tsx
  const {watch, setValue} = useForm()

  const dateWatcher = watch('date'); // Giá trị của "dateWatcher" cũng là giá trị của trường date

  useEffect(() => {
    const calculateWeekValue = () => {...}
    setValue('week', calculateWeekValue(dateWatcher))
  }, [dateWatcher, setValue])
  ```

## useWatch()

- Ta cũng có thể theo dõi sự thay đổi của các field do ta chỉ định ở các component khác thông qua hook `useWatch()`
- Cú pháp:

  ```ts
  useWatch({
    control: Control, // Liên kết với useForm thông qua thuộc tính này
    name: string, // Tên của field muốn theo dõi sự thay đổi
    defaultValue: string, // Giá trị khởi tạo cho biến theo dõi sự thay đổi
  });
  ```

- Ví dụ:

  ```tsx
  import React from "react";
  import { useForm, useWatch } from "react-hook-form";

  interface FormInputs {
    firstName: string;
  }

  function FirstNameWatched({ control }: { control: Control<FormInputs> }) {
    const firstName = useWatch({
      control,
      name: "firstName", // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
      defaultValue: "default", // default value before the render
    });

    return <p>Watch: {firstName}</p>; // only re-render at the custom hook level, when firstName changes
  }

  function App() {
    const { register, control, handleSubmit } = useForm<FormInputs>();

    const onSubmit = (data: FormInputs) => {
      console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name:</label>
        <input {...register("firstName")} />
        <input type="submit" />

        <FirstNameWatched control={control} />
      </form>
    );
  }
  ```
