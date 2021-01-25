import mongoose, { Schema, Document } from 'mongoose';

import { UserInterface } from './User';
import { CategoryInterface } from './Category';

export interface CourseInterface extends Document {
    courseName: string;
    courseDescription: string;
    instructor?: UserInterface['_id'];
    category?: CategoryInterface['_id'];
}

const CourseSchema: Schema = new Schema(
    {
        courseName: {
            type: String,
            required: true,
        },
        courseDescription: {
            type: String,
            required: true,
        },
        instructor: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        },
    },
    { timestamps: { createdAt: 'created_at' } }
);

export default mongoose.model<CourseInterface>('courses', CourseSchema);
