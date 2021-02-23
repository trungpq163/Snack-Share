import { v2 as cloudinary } from 'cloudinary';
import keys from './key';

cloudinary.config({
    cloud_name: keys.CLOUDINARY_CLOUD_NAME,
    api_key: keys.CLOUDINARY_API_KEY,
    api_secret: keys.CLOUDINARY_API_SECRET,
});

export default cloudinary;
