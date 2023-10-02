---
sidebar_position: 1
---

# `<Controller />`

## Giới thiệu về component `<Controller />`

`Controller` trong React Hook Form (RHF) là một component dùng để kết nối một trường dữ liệu (input, select, hoặc textarea) vào hệ thống quản lý biểu mẫu được tạo bởi `useForm()`. Nó giúp bạn quản lý giá trị, xác thực, và sự tương tác của trường dữ liệu một cách dễ dàng. `Controller` thường được sử dụng khi bạn muốn tạo một trường dữ liệu tùy chỉnh hoặc muốn kiểm soát cách dữ liệu được hiển thị và xử lý.

Dưới đây là một số công việc mà `Controller` thực hiện:

- **1.** **Kết nối trường dữ liệu vào hệ thống quản lý biểu mẫu** : `Controller` giúp bạn đăng ký (register) một trường dữ liệu vào hệ thống quản lý biểu mẫu thông qua hàm `register()` của hook `useForm()`. Điều này cho phép RHF theo dõi giá trị và trạng thái của trường dữ liệu.
- **2.** **Cung cấp giá trị và sự kiểm soát cho trường dữ liệu** : Bạn có thể truyền giá trị và các sự kiểm soát (như xác thực, kiểm tra kiểu dữ liệu) cho trường dữ liệu thông qua `Controller`.
- **3.** **Quản lý sự tương tác của trường dữ liệu** : `Controller` cung cấp các callback như `onChange`, `onBlur` để bạn có thể kiểm soát sự tương tác của người dùng với trường dữ liệu.
- **4.** **Tùy chỉnh cách hiển thị và xử lý trường dữ liệu** : Bạn có thể tạo các trường dữ liệu tùy chỉnh bằng cách render UI của trường dữ liệu và kiểm soát cách nó được hiển thị và xử lý dựa trên giá trị từ hệ thống quản lý biểu mẫu.

## Ví dụ

- Dưới đây là 2 ví dụ về sử dụng component `<Controller />`:

```tsx
<Controller
  control={control}
  name="firstName"
  render={({ field, fieldState: { error } }) => (
    <Input label="First name" {...field} errorMessage={error?.message} />
  )}
/>
```

```tsx
<Controller
  control={control}
  name="lastName"
  render={({ field, fieldState: { error } }) => (
    <Input
      label="Last name"
      {...field}
      onChange={(event) => field.onChange(event.target.value)} // Tùy chỉnh giá trị được gửi đến hook form
      errorMessage={error?.message}
    />
  )}
/>
```

:::note

Component `<Controller />` nhận vào một props **render** là một function, function này chứa thuộc tính **field** . Thuộc tính **field** này là một object chứa các phương thức, thuộc tính như: `name`, `value`, `ref`, `onChange`, `onBlur` để tương tác giá trị của trường với hook form.

:::
