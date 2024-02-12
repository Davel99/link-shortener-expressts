export const strValidator = (...strings: (string | null | undefined)[]): boolean => {
    return strings.every(str => str != null && str.trim() !== '');
};
