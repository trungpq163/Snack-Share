export default (str: string) => {
    if (str.includes('twitter')) {
        return 'twitter';
    }

    if (str.includes('facebook')) {
        return 'facebook';
    }

    if (str.includes('linkedin')) {
        return 'linkedin';
    }

    if (str.includes('youtube')) {
        return 'youtube';
    }
};
