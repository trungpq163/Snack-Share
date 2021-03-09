// quoctrung163
export default {
    MONGODB_URI:
        'mongodb+srv://quoctrung163:qtrung12345678@cluster0.k00qa.mongodb.net/snackdev?retryWrites=true&w=majority',
    SECRET_ORKEY: 'secret',
    CLOUDINARY_API_SECRET: 'JeOrJ7L52t-yH2Ue7JJoPRxqZAc',
    CLOUDINARY_API_KEY: '432447374361434',
    CLOUDINARY_CLOUD_NAME: 'snack-dev',
    STRIPE_PUBLISHABLE_KEY:
        'pk_test_51IR24mCdh8kNNNyZWuH8RHqQw6qzs0xshxGO90SCpBcdScRzi7GAvAcwsoWzFQU1P9fmqdjgHw2CCLZGbeCvSTbI00Dcw3z8Xx',
    STRIPE_SECRET_KEY:
        'sk_test_51IR24mCdh8kNNNyZihB4K9CyUZCWlKMwa4aiQecl92mgj8zgfpx5Hzr2l4xputI7MFl3IMh8HdntSZ2vCdj2pQd800684XvBsf',
    DOMAIN_NAME:
        process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development'
            ? 'http://localhost:8500'
            : 'https://snack-dev.herokuapp.com/',
    ENDPOINT_SECRET: 'whsec_zsJ85520HPkfejhtcbdLrUUvS2KJydXv',
};
