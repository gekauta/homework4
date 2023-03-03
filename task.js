function calc() {
    const index = prompt("Калькулятор: 1) сложение, 2) вычитание, 3) умножение, 4) деление");
    const a = prompt("a");
    const b = prompt("b");
    const result = {
        1 : +a + +b,
        2 : a - b,
        3 : a * b,
        4 : a / b
    }[index];
    return result == +result && result || "Wrong operation";
}
alert(calc());