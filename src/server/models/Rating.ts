import mongoose, { Schema, Document } from 'mongoose';
import { UserInterface } from './User';
import { CourseInterface } from './Course';

export interface RatingInterface extends Document {
    user: UserInterface['_id'];
    course: CourseInterface['_id'];
    content: string;
    star: number;
}

const RatingSchema: Schema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        course: {
            type: Schema.Types.ObjectId,
            ref: 'course',
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        star: {
            type: Number,
            required: true,
        },
    },
    { timestamps: { createdAt: 'created_at' } }
);

export default mongoose.model<RatingInterface>('ratings', RatingSchema);
