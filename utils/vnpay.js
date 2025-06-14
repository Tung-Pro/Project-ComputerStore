const { VNPay, ignoreLogger } = require('vnpay');
const tmnCode = process.env.TMN_CODE;
const secureSecret = process.env.SECURE_SECRET;

const vnpay = new VNPay({
    tmnCode: tmnCode,
    secureSecret: secureSecret,
    vnpayHost: 'https://sandbox.vnpayment.vn',
    testMode: true,
    hashAlgorithm: 'SHA512',
    enableLog: false,
    loggerFn: ignoreLogger,
});


module.exports = vnpay; 