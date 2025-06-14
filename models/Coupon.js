const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: [true, 'Mã khuyến mãi không được để trống'],
        unique: true,
        trim: true,
        uppercase: true
    },
    description: {
        type: String,
        required: [true, 'Mô tả không được để trống']
    },
    discountType: {
        type: String,
        enum: ['percentage', 'fixed'],
        required: [true, 'Loại giảm giá không được để trống']
    },
    discountValue: {
        type: Number,
        required: [true, 'Giá trị giảm giá không được để trống'],
        min: [1, 'Giá trị giảm giá phải lớn hơn 0']
    },
    minSpend: {
        type: Number,
        default: 0
    },
    maxDiscount: {
        type: Number,
        default: 0
    },
    startDate: {
        type: Date,
        required: [true, 'Ngày bắt đầu không được để trống']
    },
    endDate: {
        type: Date,
        required: [true, 'Ngày kết thúc không được để trống']
    },
    usageLimit: {
        type: Number,
        default: 0 // 0 = không giới hạn
    },
    usedCount: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

couponSchema.pre('save', function(next) {
    // Đảm bảo mã khuyến mãi luôn viết hoa
    this.code = this.code.toUpperCase();
    
    // Kiểm tra ngày kết thúc phải sau ngày bắt đầu
    if (this.endDate <= this.startDate) {
        return next(new Error('Ngày kết thúc phải sau ngày bắt đầu'));
    }
    
    next();
});

// Kiểm tra mã khuyến mãi có hợp lệ không
couponSchema.methods.isValid = function() {
    const now = new Date();
    return this.isActive && 
           now >= this.startDate && 
           now <= this.endDate && 
           (this.usageLimit === 0 || this.usedCount < this.usageLimit);
};

// Áp dụng giảm giá vào tổng tiền
couponSchema.methods.applyDiscount = function(total) {
    if (!this.isValid()) return total;
    
    // Kiểm tra tổng tiền tối thiểu
    if (total < this.minSpend) return total;
    
    let discount = 0;
    
    if (this.discountType === 'percentage') {
        discount = total * (this.discountValue / 100);
        // Áp dụng giảm giá tối đa nếu có
        if (this.maxDiscount > 0 && discount > this.maxDiscount) {
            discount = this.maxDiscount;
        }
    } else {
        discount = this.discountValue;
    }
    
    // Đảm bảo giảm giá không lớn hơn tổng tiền
    return Math.max(total - discount, 0);
};

module.exports = mongoose.model('Coupon', couponSchema); 