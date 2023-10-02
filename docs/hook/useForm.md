---
sidebar_position: 1
---

# useForm()

## Props

```ts
const form = useForm<T>({
  defaultValues: T | () => Promise<T>,
  resolver: Resolver,
  shouldFocusError: boolean
})
```

| Props              | Description                                                                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `defaultValues`    | Thiết lập giá trị ban đầu cho form, nó có thể là một object, hoặc một async function (gọi giá trị từ API)                                                                                  |
| `resolver`         | Cho phép tùy chỉnh quy trình validate form bằng cách cung cấp một hàm validate riêng. Điều này hữu ích khi muốn validate form bằng cách sử dụng các thư viện xác thực bên ngoài như `zod`. |
| `shouldFocusError` | - Khi đặt giá trị là `true`, tự động focus đến trường đầu tiên khi có lỗi xảy ra trong biểu mẫu.<br />- Giá trị mặc định là `true`                                                         |

## Returns

```ts
const {
  handleSubmit,
  setValue,
  setError,
  formState: {
    errors,
    isSubmitSuccessful,
    isSubmitting,
    defaultValues,
    isDirty,
    isValid,
    dirtyFields,
    submitCount,
  },
  reset,
  resetField,
  getValues,
  control,
  getFieldState,
} = useForm();
```

![1696259020089](image/useForm/1696259020089.png "Sơ đồ biểu diễn các phương thức, thuộc tính trả về từ useForm()")

| Return props/methods | Description                                                                                                                                                                                                                                                                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `handleSubmit()`     | Hàm được sử dụng để xử lý việc gửi biểu mẫu. Bạn sẽ gọi hàm này để submit form. Hàm này sẽ tự động xác thực và xử lý biểu mẫu và có thể truyền một hàm callback để thực hiện các tác vụ sau khi biểu mẫu được gửi thành công.                                                                                                                 |
| `setValue()`         | Thiết lập giá trị cho một trường dữ liệu cụ thể trong form. Có tùy chọn `shouldVaidate` để chỉ định liệu có validate luôn trường đó khi được set value mới hay không                                                                                                                                                                          |
| `setError()`         | Đặt lỗi cho một trường dữ liệu cụ thể.                                                                                                                                                                                                                                                                                                        |
| `reset()`            | - Nếu không truyền tham số vào trong hàm này, nó sẽ đặt lại giá trị của tất cả các trường dữ liệu trong form về giá trị mặc định được xác định bởi `defaultValues`.<br />- Nếu truyền tham số là object thì nó sẽ thiết lập lại giá trị `defaultValues` cho form đồng thời reset tất cả các trường dữ liệu trong form về giá trị mặc định này |
| `resetField()`       | Hàm này cho phép bạn đặt lại giá trị của một trường dữ liệu cụ thể trong form về giá trị mặc định.                                                                                                                                                                                                                                            |
| `getValues()`        | Hàm này cho phép bạn truy cập các giá trị hiện tại của tất cả các trường dữ liệu trong form. Ta có thể truyền tham số là tên trường hoặc một mảng chứa tên các trường muốn lấy giá trị.                                                                                                                                                       |
| `getFieldState()`    | Lấy trạng thái của một trường trong form, các trạng thái như:<br />**error** : Lỗi của trường hiện tại<br />**invalid** : Trường hiện có lỗi hay không<br />**isDirty** : Giá trị của trường hiện tại có đang khác so với giá trị mặc định ban đầu hay không                                                                                  |
| `control`            | Là một đối tượng chứa các hàm và trạng thái liên quan đến quản lý các trường dữ liệu.                                                                                                                                                                                                                                                         |
| `errors`             | Một object chứa tất cả các lỗi của các trường dữ liệu trong form. Mỗi key trong object là tên của trường dữ liệu và giá trị là thông báo lỗi (nếu có).                                                                                                                                                                                        |
| `isSubmitSuccessful` | Trả về `true` nếu biểu mẫu được gửi thành công.                                                                                                                                                                                                                                                                                               |
| `isSubmitting`       | Trả về `true` nếu biểu mẫu đang được gửi đi. Nói cách khác là hàm submit chưa thực hiện xong                                                                                                                                                                                                                                                  |
| `isDirty`            | Trả về `true` nếu form đã bị thay đổi (có giá trị khác so với `defaultValues`)                                                                                                                                                                                                                                                                |
| `isValid`            | Trả về `true` nếu form không có lỗi nào                                                                                                                                                                                                                                                                                                       |
| `submitCount`        | Trả về một number là số lần đã submit form                                                                                                                                                                                                                                                                                                    |
| `defaultValues`      | Trả về một object chứa các giá trị mặc định của các trường dữ liệu trong form                                                                                                                                                                                                                                                                 |
| `dirtyFields`        | Lấy trạng thái thay đổi so với giá trị mặc định của các trường trong form                                                                                                                                                                                                                                                                     |
