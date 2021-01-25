import mongoose, { Schema, Document } from 'mongoose';
import { CourseInterface } from './Course';

export interface LectureInterface extends Document {
    no?: number;
    title: string;
    videoLink: string;
    course?: CourseInterface['_id'];
}

const LectureSchema: Schema = new Schema(
    {
        no: {
            type: Number,
            required: false,
        },
        title: {
            type: String,
            required: true,
        },
        videoLink: {
            type: String,
            required: true,
        },
        course: {
            type: Schema.Types.ObjectId,
            ref: 'Course',
        },
    },
    { timestamps: { updatedAt: 'created_at' } }
);

export default mongoose.model<LectureInterface>('lectures', LectureSchema);
