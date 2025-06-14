const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route đăng ký tài khoản
router.get('/register', authController.getRegisterForm);
router.post('/register', authController.register);

// Route đăng nhập
router.get('/login', authController.getLoginForm);
router.post('/login', authController.login);

// Route quên mật khẩu (2 bước)
router.get('/forgot-password', authController.getForgotPasswordForm);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);

// Route đăng xuất
router.get('/logout', authController.logout);

// Route xác thực email
router.get('/verify-email', authController.verifyEmail);

// Route gửi lại email xác thực
router.post('/resend-verification', authController.resendVerification);

// Route hiển thị form đổi mật khẩu qua link token
router.get('/reset-password', authController.getResetPasswordForm);

module.exports = router; 