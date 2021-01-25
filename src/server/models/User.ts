import mongoose, { Schema, Document } from 'mongoose';

export interface UserInterface extends Document {
    // eslint-disable-next-line camelcase
    first_name?: string;
    // eslint-disable-next-line camelcase
    last_name?: string;
    email: string;
    password: string;
    role: string;
}

const UserSchema: Schema = new Schema(
    {
        first_name: {
            type: String,
            lowercase: true,
        },
        last_name: {
            type: String,
            lowercase: true,
        },
        email: {
            type: String,
            lowercase: true,
            trim: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            require: true,
        },
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

export default mongoose.model<UserInterface>('users', UserSchema);
