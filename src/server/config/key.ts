require('dotenv').config();

export default {
    MONGODB_URI: process.env.MONGODB_URI,
    SECRET_ORKEY: 'secret',
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    CLOUDINARY_API_KEY: '432447374361434',
    CLOUDINARY_CLOUD_NAME: 'snack-dev',
    STRIPE_PUBLISHABLE_KEY:
        'pk_test_51IR24mCdh8kNNNyZWuH8RHqQw6qzs0xshxGO90SCpBcdScRzi7GAvAcwsoWzFQU1P9fmqdjgHw2CCLZGbeCvSTbI00Dcw3z8Xx',
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    DOMAIN_NAME:
        process.env.NODE_ENV === 'production'
            ? 'https://snack-share.herokuapp.com'
            : 'http://localhost:8500',
    ENDPOINT_SECRET:
        process.env.NODE_ENV === 'production'
            ? 'whsec_V24YONf406QIbPO8CezXE66pv4Vz6Wb5'
            : 'whsec_zsJ85520HPkfejhtcbdLrUUvS2KJydXv',
};
