import mongoose, { Schema, Document } from 'mongoose';
import { UserInterface } from './User';
import { CourseInterface } from './Course';

export interface EnrollmentInterface extends Document {
    no?: number;
    student?: UserInterface['_id'];
    course?: CourseInterface['_id'];
    approved?: boolean;
}

const EnrollmentSchema: Schema = new Schema(
    {
        no: {
            type: Number,
            default: 1,
            required: false,
        },
        student: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        course: {
            type: Schema.Types.ObjectId,
            ref: 'Course',
            required: true,
        },
        approved: {
            type: Boolean,
            default: true,
            required: false,
        },
    },
    { timestamps: { createdAt: 'created_at' } }
);

export default mongoose.model<EnrollmentInterface>('enrollments', EnrollmentSchema);
