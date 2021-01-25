import mongoose, { Schema, Document } from 'mongoose';

export interface UserRoleInterface extends Document {
    no: number;
    name: string;
}

const UserRoleSchema: Schema = new Schema({
    no: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});

export default mongoose.model<UserRoleInterface>('userRole', UserRoleSchema);
