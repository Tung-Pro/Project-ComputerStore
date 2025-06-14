// Kiểm tra xem người dùng đã đăng nhập chưa
exports.isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    res.redirect('/auth/login?redirect=localhost:9000' + req.originalUrl);
};

// Kiểm tra xem người dùng có quyền admin không
exports.isAdmin = (req, res, next) => {
    if (req.session.user && req.session.user.role === 'admin') {
        return next();
    }
    res.status(403).render('404', {
        title: 'Không có quyền truy cập',
        message: 'Bạn không có quyền truy cập trang này',
        user: req.session.user
    });
}; 