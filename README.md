# 🧑‍🎓 ĐỒ ÁN TỐT NGHIỆP: XÂY DỰNG WEBSITE BÁN MÁY TÍNH
> **Nguyễn Văn Tùng – MSV: 521100184**  
> Trường Đại học Phương Đông – PDU
> Khoa Công nghệ Thông tin & Truyền thông

![Giao diện](public/images/demo/reponsive-layout.png)

---

## 🚀 Giới thiệu

**Xây dựng website bán máy tính** là một đồ án ứng dụng web hiện đại hỗ trợ quản lý cửa hàng máy tính một cách hiệu quả. Hệ thống được xây dựng nhằm mục tiêu:

- Tối ưu hóa quy trình quản lý sản phẩm, đơn hàng và khách hàng
- Tăng trải nghiệm người dùng với giao diện thân thiện
- Đảm bảo tính bảo mật và tích hợp các công nghệ thanh toán thông minh

---

## 🧰 Công nghệ sử dụng

<div align="center">

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Mongoose-F04D35?style=for-the-badge&logo=mongoose&logoColor=white" />
<img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black" />
<img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white" />
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />

</div>


---

## 📚 Mục lục

- [Giới thiệu](#-giới-thiệu)
- [Công nghệ sử dụng](#-công-nghệ-sử-dụng)
- [Tính năng chính](#-tính-năng-chính)
- [Kiến trúc hệ thống](#-kiến-trúc-hệ-thống)
- [Hướng dẫn cài đặt](#-hướng-dẫn-cài-đặt)
  - [Yêu cầu hệ thống](#-yêu-cầu-hệ-thống)
  - [Các bước thực hiện](#-các-bước-thực-hiện)
- [Cấu hình môi trường](#-cấu-hình-môi-trường)
- [Tài khoản mẫu](#-tài-khoản-mẫu)
- [Thư mục bổ sung](#-thư-mục-bổ-sung)
  - [Documents/](#-documents)
  - [Backup-Database/](#-backup-database)
- [Giao diện website](#-giao-diện-website)
  - [Giao diện xác thực](#-giao-diện-xác-thực) 
  - [Giao diện người dùng](#-giao-diện-người-dùng)
  - [Giao diện quản trị](#-giao-diện-quản-trị)
- [Đóng góp](#-đóng-góp)
- [Giấy phép](#-giấy-phép)

---

## 🧩 Tính năng chính

- ✅ Quản lý người dùng, danh mục sản phẩm & sản phẩm, đánh giá, đơn hàng và khuyến mãi
- 🔐 Xác thực & phân quyền người dùng (Admin, Customer)
- 📧 Gửi email tự động khi có đơn hàng hoặc sự kiện
- 📊 Giao diện quản trị dashboard trực quan
- 📱 Thiết kế responsive, tương thích mọi thiết bị
- 💳 Hỗ trợ thanh toán: COD, QR Code và VNPAY

---

## 🏗 Kiến trúc hệ thống

- **Frontend**: EJS Template + Bootstrap Framework + HTML/CSS/JS 
- **Backend**: MVC, RESTful API với Node.js và Express.js Framework
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT), bcrypt
- **Email Service**: Nodemailer

---

## ⚙ Hướng dẫn cài đặt

### ✅ Yêu cầu hệ thống

- Node.js (>= 14.x)
- npm (>= 6.x)
- MongoDB (cài local hoặc dùng MongoDB Atlas)

### ▶ Các bước thực hiện

#### Bước 1: Clone project
```bash
git clone https://github.com/Tung-Pro/Project-ComputerStore
```
```bash
cd Project-ComputerStore
```
#### Bước 2: Cài đặt dependencies
```bash
npm install
```
#### Bước 3: Tạo file .env từ file mẫu .env.example [xem hướng dẫn cấu hình bên dưới](#-cấu-hình-môi-trường)
```bash
cp .env.example .env
```
#### Bước 4: Khởi chạy ứng dụng
```bash
npm run start
```

## 🛠 Cấu hình môi trường

Tạo file `.env` tại thư mục gốc dự án với nội dung mẫu:

```env
# Database config
PORT=3000
MONGO_URI=mongodb://localhost:27017/computer-store
# Session config
SESSION_SECRET=your_session_secret
# Mail config
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_email_password
# VNPay config
TMN_CODE=your_vnpay_TmnCode
SECURE_SECRET=your_vnpay_HashSecret
```

🔐 Đảm bảo bảo mật file `.env` và không commit lên GitHub.

---

## 🔑 Tài khoản mẫu

| Vai trò     | Email             | Mật khẩu |
|-------------|-------------------|----------|
| Admin       | admin@gmail.com   | admin@123|
| Khách hàng  | test@gmail.com    | test@123 |

---

## 📁 Thư mục bổ sung

### 📚 Documents/
Thư mục này chứa các tài liệu liên quan đến đồ án như:

- Báo cáo thuyết minh (.docx/.pdf)
- Slide thuyết trình (.pptx)
- Sơ đồ Activity Diagram, Use Case Diagram, Sequence Diagram, Class Diagram, Deployment Diagram,... (.drawio)

👉 Đây là phần tài liệu hỗ trợ cho việc bảo vệ đồ án, trình bày kiến trúc và phân tích hệ thống.

### 🗄 Backup-Database/
Thư mục này chứa các tệp `.json` dùng để backup và khôi phục dữ liệu MongoDB bao gồm:

- `computer-store.users.json` – danh sách người dùng
- `computer-store.products.json` – danh sách sản phẩm
- `computer-store.orders.json` – danh sách đơn hàng
- `computer-store.carts.json` – danh sách giỏ hàng
- `computer-store.categories.json` – danh mục sản phẩm
- `computer-store.coupons.json` – danh sách mã giảm giá
- `computer-store.reviews.json` – danh sách đánh giá

👉 Có thể sử dụng lệnh `mongoimport` để phục hồi dữ liệu trong quá trình chạy thử dự án.

---

## 🌐 Giao diện website

### 🧑‍✈ Giao diện xác thực

| Trang đăng ký | Trang đăng nhập |
|---------------|-----------------|
| ![Trang đăng ký](public/images/demo/register.png) | ![Trang đăng nhập](public/images/demo/login.png) |

### 🧑‍💻 Giao diện người dùng

| Trang chủ | Trang danh sách sản phẩm |
|---------------------|--------------------------|
| ![Trang chủ](public/images/demo/home.png) | ![Danh sách sản phẩm](public/images/demo/product-list.png) |
| Trang danh mục sản phẩm | Trang tìm kiếm & lọc sản phẩm|
| ![Danh mục sản phẩm](public/images/demo/category.png) | ![Tìm kiếm & lọc](public/images/demo/search-filter.png) |
| Trang chi tiết sản phẩm và đánh giá sản phẩm | Trang giỏ hàng |
| ![Chi tiết sản phẩm](public/images/demo/product-detail.png) | ![Giỏ hàng](public/images/demo/cart.png) |
| Trang thanh toán | Trang xác nhận đơn hàng |
| ![Thanh toán](public/images/demo/checkout.png) | ![Xác nhận đơn hàng](public/images/demo/order-confirm.png) |
| Trang quản lý tài khoản | Trang quản lý lịch sử đơn hàng |
| ![Quản lý tài khoản](public/images/demo/account.png) | ![Lịch sử đơn hàng](public/images/demo/order-history.png) | 
| Trang quản lý lịch sử đánh giá |
| ![Lịch sử đánh giá](public/images/demo/review-history.png) |

### 🧑‍🔧 Giao diện quản trị

| Trang tổng quan | Trang quản lý người dùng |
|-----------------|-------------------------|
| ![Tổng quan](public/images/demo/admin-dashboard.png) | ![Quản lý người dùng](public/images/demo/admin-users.png) |
| Trang quản lý danh mục | Trang quản lý sản phẩm |
| ![Quản lý danh mục](public/images/demo/admin-categories.png) | ![Quản lý sản phẩm](public/images/demo/admin-products.png) |
| Trang quản lý mã khuyến mãi | Trang quản lý đánh giá |
| ![Quản lý mã khuyến mãi](public/images/demo/admin-coupons.png) | ![Quản lý đánh giá](public/images/demo/admin-reviews.png) |
| Trang quản lý đơn hàng |  |
| ![Quản lý đơn hàng](public/images/demo/admin-orders.png) |  |

---

## 🤝 Đóng góp

Chào mừng mọi đóng góp nhằm cải thiện dự án!
Vui lòng fork repo và tạo pull request sau khi hoàn thiện.

---

## 📄 Giấy phép

Dự án này được cấp phép theo [MIT License](./LICENSE). Vui lòng tham khảo file LICENSE để biết thêm chi tiết.

Copyright © Designed & Developed by [Nguyễn Văn Tùng](https://www.facebook.com/vtungpro) – MSV: 521100184
