async function square(a, b) {
    return a * b;
}
square(a = 1, b = 3).then((result) => {
    console.log(result);
    return result
}).then((res) => {
    console.log(1 + res);
    return res
}).then((re) => {
    console.log(re * 3);
    return re
});

async function friend(n1) {
    return (n1);
}
friend(n1 = "Olivia").then((text) => {
    console.log(text);
    return text
}).then((message) => {
    console.log("My friend name is " + message);
    return message
}).then((years) => {
    console.log(`${years} is 28 years old`);
    return years
});

async function number(a) {
    return (a * a);
}
number(a = 90).then((sum) => {
    console.log(sum);
    return sum
}).then((sum1) => {
    console.log("a*a = " + sum1);
    return sum1
}).then((sum2) => {
    console.log("a*a*a = " + sum2 * sum2);
    return sum2
});