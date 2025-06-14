const mongoose = require('mongoose');

// Hàm kết nối đến cơ sở dữ liệu MongoDB
const connectDB = async () => {
  try {
    // Chuỗi kết nối, thay đổi URL tùy theo môi trường
    const connectionString = process.env.MONGO_URI;
    
    // Kết nối đến MongoDB
    const conn = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log(`✓ MongoDB đã kết nối: ${conn.connection.host}`);
  } catch (error) {
    console.error(`✗ Lỗi: ${error.message}`);
    process.exit(1); // Thoát với mã lỗi
  }
};

module.exports = connectDB;
