import toast from 'react-hot-toast';

export const toastErrorNotify = (content: string) =>
    toast.error(content, {
        style: {
            padding: '16px',
        },
        duration: 6000,
    });

export const toastSuccessNotify = (content: string) =>
    toast.success(content, {
        style: {
            padding: '16px',
        },
        duration: 6000,
    });

export const toastEmojiNotify = (content: string, emoji: string) =>
    toast(content, {
        style: {
            padding: '16px',
        },
        icon: emoji,
        duration: 6000,
    });
