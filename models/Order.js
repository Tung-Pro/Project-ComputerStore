const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Sản phẩm không được để trống']
    },
    name: {
        type: String,
        required: [true, 'Tên sản phẩm không được để trống']
    },
    price: {
        type: Number,
        required: [true, 'Giá sản phẩm không được để trống']
    },
    quantity: {
        type: Number,
        required: [true, 'Số lượng không được để trống'],
        min: [1, 'Số lượng tối thiểu là 1']
    },
    image: {
        type: String,
        required: [true, 'Hình ảnh sản phẩm không được để trống']
    }
});

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Người dùng không được để trống']
    },
    items: [OrderItemSchema],
    shippingAddress: {
        fullName: {
            type: String,
            required: [true, 'Họ tên không được để trống']
        },
        phone: {
            type: String,
            required: [true, 'Số điện thoại không được để trống']
        },
        address: {
            type: String,
            required: [true, 'Địa chỉ không được để trống']
        },
        city: {
            type: String,
            required: [true, 'Thành phố không được để trống']
        },
        district: {
            type: String,
            required: [true, 'Quận/Huyện không được để trống']
        },
        ward: {
            type: String,
            required: [true, 'Phường/Xã không được để trống']
        },
        note: {
            type: String
        }
    },
    paymentMethod: {
        type: String,
        enum: ['cod', 'banking', 'vnpay'],
        default: 'cod'
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'paid', 'failed'],
        default: 'pending'
    },
    totalPrice: {
        type: Number,
        required: [true, 'Tổng tiền không được để trống']
    },
    discountPrice: {
        type: Number,
        default: 0
    },
    shippingFee: {
        type: Number,
        default: 0
    },
    finalPrice: {
        type: Number,
        required: [true, 'Tổng thanh toán không được để trống']
    },
    coupon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coupon'
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'shipping', 'delivered', 'cancelled'],
        default: 'pending'
    },
    orderCode: {
        type: String,
        unique: true
    },
    trackingCode: {
        type: String
    },
    adminNote: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Tạo mã đơn hàng duy nhất trước khi lưu
OrderSchema.pre('save', async function(next) {
    if (!this.orderCode) {
        const date = new Date();
        const timestamp = date.getTime().toString().slice(-6);
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        // Format: TP + năm + tháng + ngày + timestamp (6 chữ số) + random (3 chữ số)
        this.orderCode = 'TP' + 
                        date.getFullYear().toString().slice(-2) + 
                        (date.getMonth() + 1).toString().padStart(2, '0') + 
                        date.getDate().toString().padStart(2, '0') + 
                        timestamp + 
                        random;
    }
    next();
});

module.exports = mongoose.model('Order', OrderSchema); 