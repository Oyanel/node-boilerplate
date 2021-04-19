import { isAlphanumeric, isHash } from "validator";

export const validateUsername = (username: string) => {
    return isAlphanumeric(username);
};

export const validatePassword = (password: string) => {
    return isHash(password, "sha512");
};
