import mongoose, { Schema, Document } from 'mongoose';

export interface CategoryInterface extends Document {
    length?: number;
    no: number;
    categoryName: string;
}

const CategorySchema: Schema = new Schema(
    {
        no: {
            type: Number,
            required: true,
        },
        categoryName: {
            type: String,
            required: true,
        },
    },
    { timestamps: { createdAt: 'created_at' } }
);

export default mongoose.model<CategoryInterface>('category', CategorySchema);
