const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Sản phẩm không được để trống']
    },
    quantity: {
        type: Number,
        required: [true, 'Số lượng không được để trống'],
        min: [1, 'Số lượng tối thiểu là 1']
    },
    price: {
        type: Number,
        required: [true, 'Giá không được để trống']
    }
});

const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Người dùng không được để trống']
    },
    items: [CartItemSchema],
    totalPrice: {
        type: Number,
        default: 0
    },
    coupon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coupon'
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Phương thức tính tổng tiền giỏ hàng
CartSchema.methods.calculateTotalPrice = function() {
    let total = 0;
    if (this.items && this.items.length > 0) {
        total = this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }
    this.totalPrice = total;
    return total;
};

module.exports = mongoose.model('Cart', CartSchema); 