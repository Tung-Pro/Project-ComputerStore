const nodemailer = require('nodemailer');
const user=process.env.SMTP_USER;
const pass=process.env.SMTP_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: user,
    pass: pass
  }
});

transporter.verify()
  .then(() => {
    console.log("✓ SMTP kết nối thành công với tài khoản:", user);
  })
  .catch(error => {
    console.error("✗ Lỗi kết nối SMTP:", error);
  });

module.exports = transporter; 