export const strValidator = (...strings: (string | null | undefined)[]): boolean => {
    return strings.every(str => str != null && str.trim() !== '');
};

export const urlValidator = ( url : string ) : boolean => {
    const urlRegex = /^http(s)*:\/\/(\w+\.)+\w+(\/\w+)*(\/)*$/;
    return urlRegex.test(url);
}

export const arrayValidator = <T>(array: T[] | undefined | null): boolean => {
    return Array.isArray(array) && array.length > 0;
};