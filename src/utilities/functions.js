export const add = (num1, num2) => {
    [num1, num2] = [Number(num1), Number(num2)]
    return num1 + num2;
}