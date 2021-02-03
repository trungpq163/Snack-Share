// quoctrung163
export default {
    MONGODB_URI:
        process.env.MONGODB_URI ||
        process.env.MONGO_HOST ||
        'mongodb://' +
            (process.env.IP || 'localhost') +
            ':' +
            (process.env.MONGO_PORT || '27017') +
            '/snackdev' ||
        'mongodb+srv://quoctrung163:qtrung12345678@cluster0.k00qa.mongodb.net/snackdev?retryWrites=true&w=majority',
    SECRET_ORKEY: 'secret',
};
