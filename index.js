export const add = (num1) => {
    return (num2) => {
        if (!num2) {
            return num1;
        }
        return add(num1 + num2);
    };
}
export const sub = (num1) => {
    return (num2) => {
        if (!num2) {
            return num1;
        }
        return sub(num1 - num2);
    };
}
export const mul = (num1) => {
    return (num2) => {
        if (!num2) {
            return num1;
        }
        return mul(num1 * num2);
    };
}
export const div = (num1) => {
    return (num2) => {
        if (!num2) {
            return num1;
        }
        return div(num1 / num2);
    };
}
export const mod = (num1) => {
    return (num2) => {
        if (!num2) {
            return num1;
        }
        return mod(num1 % num2);
    };
}