const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Sản phẩm không được để trống']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Người dùng không được để trống']
    },
    rating: {
        type: Number,
        required: [true, 'Điểm đánh giá không được để trống'],
        min: [1, 'Điểm đánh giá tối thiểu là 1'],
        max: [5, 'Điểm đánh giá tối đa là 5']
    },
    comment: {
        type: String,
        required: [true, 'Nội dung đánh giá không được để trống'],
        trim: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Review', ReviewSchema); 