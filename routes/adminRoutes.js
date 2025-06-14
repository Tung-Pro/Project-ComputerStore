const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAuthenticated, isAdmin } = require('../middlewares/auth');

// Áp dụng middleware cho tất cả routes /admin
router.use(isAuthenticated, isAdmin);

// Dashboard
router.get('/dashboard', adminController.showDashboard);

// Quản lý người dùng
router.get('/users', adminController.getUsers);
router.get('/users/add', adminController.getAddUserForm);
router.post('/users/add', adminController.addUser);
router.get('/users/edit/:id', adminController.getEditUserForm);
router.post('/users/edit/:id', adminController.updateUser);
router.post('/users/delete/:id', adminController.deleteUser);

// Quản lý danh mục sản phẩm
router.get('/categories', adminController.getCategories);
router.get('/categories/add', adminController.getAddCategoryForm);
router.post('/categories/add', adminController.addCategory);
router.get('/categories/edit/:id', adminController.getEditCategoryForm);
router.post('/categories/edit/:id', adminController.updateCategory);
router.post('/categories/delete/:id', adminController.deleteCategory);

// Quản lý sản phẩm
router.get('/products', adminController.getProducts);
router.get('/products/add', adminController.getAddProductForm);
router.post('/products/add', adminController.addProduct);
router.get('/products/edit/:id', adminController.getEditProductForm);
router.post('/products/edit/:id', adminController.updateProduct);
router.post('/products/delete/:id', adminController.deleteProduct);

// Routes quản lý mã khuyến mãi
router.get('/coupons', adminController.getCoupons);
router.get('/coupons/add', adminController.getAddCouponForm);
router.post('/coupons/add', adminController.addCoupon);
router.get('/coupons/edit/:id', adminController.getEditCouponForm);
router.post('/coupons/edit/:id', adminController.updateCoupon);
router.post('/coupons/delete/:id', adminController.deleteCoupon);

// Routes quản lý đánh giá
router.get('/reviews', adminController.getReviews);
router.put('/reviews/approve/:reviewId', adminController.approveReview);
router.put('/reviews/reject/:reviewId', adminController.rejectReview);
router.delete('/reviews/delete/:reviewId', adminController.deleteReview);

// Quản lý đơn hàng 
router.get('/orders', adminController.getOrdersList);
router.get('/orders/detail/:id', adminController.getOrderDetail);
router.get('/orders/edit/:id', adminController.getEditOrder);
router.post('/orders/edit/:id', adminController.updateOrder);

module.exports = router; 