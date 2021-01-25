import mongoose, { Schema, Document } from 'mongoose';

import { UserInterface } from './User';

interface ExperienceInterface {
    title: string;
    company: string;
    location?: string;
    from: Date;
    to?: Date;
    current: boolean;
    description: string;
}

interface EducationInterface {
    school: string;
    degree: string;
    fieldofstudy: string;
    from: Date;
    to?: Date;
    current?: boolean;
    description?: string;
}

interface SocialInterface {
    youtube?: string;
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
}

export interface ProfileInterface extends Document {
    user?: UserInterface['_id'];
    handle: string;
    company?: string;
    website?: string;
    location?: string;
    status: string;
    skills: string;
    bio?: string;
    githubusername?: string;
    experience: ExperienceInterface[];
    education: EducationInterface[];
    social?: SocialInterface;
    date?: Date;
}

const ProfileSchema: Schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    handle: {
        type: String,
        required: true,
        max: 40,
    },
    company: {
        type: String,
    },
    website: {
        type: String,
    },
    location: {
        type: String,
    },
    status: {
        type: String,
        required: true,
    },
    skills: {
        type: [String],
        required: true,
    },
    bio: {
        type: String,
    },
    githubusername: {
        type: String,
    },
    experience: [
        {
            title: {
                type: String,
                required: true,
            },
            company: {
                type: String,
                required: true,
            },
            location: {
                type: String,
            },
            from: {
                type: Date,
                required: true,
            },
            to: {
                type: Date,
            },
            current: {
                type: Boolean,
                default: false,
            },
            description: {
                type: String,
            },
        },
    ],
    education: [
        {
            school: {
                type: String,
                required: true,
            },
            degree: {
                type: String,
                required: true,
            },
            fieldofstudy: {
                type: String,
                required: true,
            },
            from: {
                type: Date,
                required: true,
            },
            to: {
                type: Date,
            },
            current: {
                type: Boolean,
                default: false,
            },
            description: {
                type: String,
            },
        },
    ],
    social: {
        youtube: {
            type: String,
        },
        twitter: {
            type: String,
        },
        facebook: {
            type: String,
        },
        linkedin: {
            type: String,
        },
        instagram: {
            type: String,
        },
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model<ProfileInterface>('profile', ProfileSchema);
