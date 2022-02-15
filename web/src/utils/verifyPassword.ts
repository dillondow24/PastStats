export const verifyPassword = (password: string) => {
    if (password.length < 8) {
        throw new Error('Password must be at least 8 characters long.');
    }
    if (!password.match(/[a-z]/)) {
        throw new Error('Password must contain at least one lowercase letter.');
    }
    if (!password.match(/[A-Z]/)) {
        throw new Error('Password must contain at least one uppercase letter.');
    }
    if (!password.match(/[0-9]/)) {
        throw new Error('Password must contain at least one number.');
    }
    if (!password.match(/[^a-zA-Z0-9]/)) {
        throw new Error('Password must contain at least one special character.');
    }
}