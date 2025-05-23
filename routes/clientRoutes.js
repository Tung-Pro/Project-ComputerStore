const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const { isAuthenticated } = require('../middlewares/auth');

// Route trang chủ
router.get('/', clientController.getHomePage);

// Route trang tất cả sản phẩm
router.get('/products', clientController.getAllProducts);

// Route tìm kiếm sản phẩm
router.get('/search', clientController.searchProducts);
router.get('/search/suggestions', clientController.getSearchSuggestions);

// Route hiển thị sản phẩm theo danh mục
router.get('/category/:slug', clientController.getProductsByCategory);

// Route trang chi tiết sản phẩm
router.get('/products/:slug', clientController.getProductDetail);

// Route gửi đánh giá sản phẩm
router.post('/products/review', isAuthenticated, clientController.submitReview);
router.post('/products/review/edit', isAuthenticated, clientController.editReview);

// Route giỏ hàng
router.get('/cart', clientController.getCart);
router.post('/cart/add', isAuthenticated, clientController.addToCart);
router.post('/cart/update', isAuthenticated, clientController.updateCartItem);
router.post('/cart/remove', isAuthenticated, clientController.removeCartItem);
router.post('/cart/apply-coupon', isAuthenticated, clientController.applyCoupon);

// Route thanh toán
router.get('/checkout', isAuthenticated, clientController.getCheckout);
router.post('/checkout', isAuthenticated, clientController.createOrder);
router.get('/checkout/success/:orderCode', isAuthenticated, clientController.getOrderSuccess);
router.get('/orders/:orderCode', isAuthenticated, clientController.getOrderDetail);
router.post('/orders/:orderCode/cancel', isAuthenticated, clientController.cancelOrder);

// VNPay routes
router.post('/vnpay-payment', isAuthenticated, clientController.createVnpayPayment);
router.get('/vnpay-return', isAuthenticated, clientController.vnpayReturn);
router.get('/orders/:orderCode/retry-vnpay-payment', isAuthenticated, clientController.retryVnpayPayment);

// Route trang tài khoản người dùng
router.get('/account', isAuthenticated, clientController.getAccountInfo);
router.get('/account/orders', isAuthenticated, clientController.getMyOrders);
router.get('/account/reviews', isAuthenticated, clientController.getMyReviews);
router.post('/account/update', isAuthenticated, clientController.updateProfile);

// Route đổi mật khẩu
router.post('/account/change-password', isAuthenticated, clientController.changePassword);

module.exports = router;
