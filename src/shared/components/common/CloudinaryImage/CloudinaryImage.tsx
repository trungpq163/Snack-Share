import * as React from 'react';
import { Image, CloudinaryContext } from 'cloudinary-react';

interface Props {
    url: string;
}

const CloudinaryImage = ({ url }: Props) => {
    return (
        <CloudinaryContext cloudName="snack-dev">
            <Image publicId={url} />
        </CloudinaryContext>
    );
};

export default CloudinaryImage;
