# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# My test

## Bài test 1:

Em đã implement layout ở trang home.
Code được auto deploy lên firebase [Demo](https://layout-36b25.web.app/).

## Bài test 2:
Em làm và show UI bài test trên trang [Tote collection](https://layout-36b25.web.app/products)
File: src/pages/Products
### Phân tích dữ liệu
Theo bài test ta có tập dữ liệu mẫu em lưu ở thư mục mockup.
Sau khi xem xét các yếu tố đầu ra em cần convert lại data để lưu trữ sử dụng.
- Ưu tiên lưu mảng 1 chiều, vì đây là data của danh sách sản phẩm nên chỉ nên lưu một variant tiêu biểu để hiển thị (giá thấp nhất).
- Không lưu properties dư thừa

### Input search tìm kiếm
Theo yêu cầu thì tìm kiếm kết quả dữ diệu tương đối không phân biệt hoa thường.
