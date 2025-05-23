# 🧑‍🎓 ĐỒ ÁN TỐT NGHIỆP: Xây dựng website bán máy tính
> **Nguyễn Văn Tùng - 521100184**  
> Trường Đại học Phương Đông – PDU
> Khoa Công nghệ Thông tin & Truyền thông

![Giao diện](https://github.com/user-attachments/assets/5989380f-1b31-462f-99e6-c69aecbb3e6d)

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
- [Tính năng chính](#-tính-năng-chính)
- [Kiến trúc hệ thống](#-kiến-trúc-hệ-thốn)
- [Hướng dẫn cài đặt](#-hướng-dẫn-cài-đặt)
- [Cấu hình môi trường](#-cấu-hình-môi-trường)
- [Tài khoản mẫu](#-tài-khoản-mẫu)
- [Đóng góp](#-đóng-góp)
- [Giấy phép](#-giấy-phép)
- [Giao diện website](#-giao-diện-website)

---

## 🧩 Tính năng chính

- ✅ Quản lý người dùng, danh mục sản phẩm & sản phẩm, đánh giá, đơn hàng, khuyến mãi
- 🔐 Xác thực & phân quyền người dùng (Admin, Customer)
- 📧 Gửi email tự động khi có đơn hàng hoặc sự kiện
- 📊 Giao diện quản trị dashboard trực quan
- 📱 Thiết kế responsive, tương thích mọi thiết bị
- 💳 Hỗ trợ thanh toán: COD, QR Code, VNPAY

---

## 🏗️ Kiến trúc hệ thống

- **Frontend**: EJS Template + Bootstrap Framework + HTML/CSS/JS 
- **Backend**: MVC, RESTful API với Node.js và Express.js Framework
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT), bcrypt
- **Email Service**: Nodemailer

---

## ⚙️ Hướng dẫn cài đặt

### ✅ Yêu cầu hệ thống

- Node.js (>= 14.x)
- npm (>= 6.x)
- MongoDB (cài local hoặc dùng MongoDB Atlas)

### ⬇️ Các bước thực hiện

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
#### Bước 3: Tạo file .env [xem hướng dẫn bên dưới](#-cấu-hình-môi-trường)
```bash
touch .env
```
#### Bước 4: Khởi chạy ứng dụng
```bash
npm run start
```

## 🛠️ Cấu hình môi trường

Tạo file `.env` tại thư mục gốc dự án với nội dung mẫu:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/computerstore
SESSION_SECRET=your_session_secret
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_email_password
TMN_CODE=your_vnpay_TmnCode
SECURE_SECRET=your_vnp_HashSecret
```

🔐 Đảm bảo bảo mật file `.env` và không commit lên GitHub.

---

## 🔑 Tài khoản mẫu

| Vai trò     | Email             | Mật khẩu |
|-------------|-------------------|----------|
| Admin       | admin@gmail.com   | admin@123|
| Khách hàng  | test@gmail.com    | test@123 |

---

## 🤝 Đóng góp

Chào mừng mọi đóng góp nhằm cải thiện dự án!
Vui lòng fork repo và tạo pull request sau khi hoàn thiện.

---

## 📄 Giấy phép

Copyright © Designed & Developed by Nguyễn Văn Tùng - MSV: 521100184

## 🌐 Giao diện website

| Giao diện trang chủ | Giao diện trang quản trị |
|---------------------|--------------------------|
| ![Giao diện website](https://github.com/user-attachments/assets/07f2b70a-a3fc-4c20-91d7-92fa25bed15d) | ![Giao diện quản trị](https://github.com/user-attachments/assets/af4333ec-9489-404b-a277-3668a2522fcb) |


