// snackdev
export default {
    MONGODB_URI:
        process.env.MONGODB_URI ||
        process.env.MONGO_HOST ||
        'mongodb://' +
            (process.env.IP || 'localhost') +
            ':' +
            (process.env.MONGO_PORT || '27017') +
            '/quoctrung163',
    SECRET_ORKEY: 'secret',
};
