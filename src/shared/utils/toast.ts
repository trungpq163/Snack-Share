import { toast } from 'react-toastify';

export const toastErrorNotify = (content: string) =>
    toast.error(`😞${content}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

export const toastSuccessNotify = (content: string) =>
    toast(`😆 ${content}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

export const toastEmojiNotify = (content: string, emoji: string) =>
    toast(`${emoji}${content}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
