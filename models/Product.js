const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Tên sản phẩm không được để trống'],
        trim: true
    },
    shortDescription: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Giá sản phẩm không được để trống'],
        min: [0, 'Giá sản phẩm không được âm']
    },
    discountPrice: {
        type: Number,
        default: 0,
        min: [0, 'Giá khuyến mãi không được âm'],
        validate: {
            validator: function(value) {
                if (!value) return true; // Cho phép giá trị null hoặc 0
                return value <= this.price;
            },
            message: 'Giá khuyến mãi không được lớn hơn giá sản phẩm'
        }
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Danh mục sản phẩm không được để trống']
    },
    mainImage: {
        type: String,
        required: [true, 'Ảnh chính sản phẩm không được để trống']
    },
    images: [String],
    quantity: {
        type: Number,
        required: [true, 'Số lượng sản phẩm không được để trống'],
        min: [0, 'Số lượng không được âm'],
        default: 0
    },
    specifications: {
        type: Object,
        default: {}
    },
    slug: {
        type: String,
        required: [true, 'Slug không được để trống'],
        unique: true,
        trim: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema); 