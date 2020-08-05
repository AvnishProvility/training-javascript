function swap(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(b);
    console.log(a);
}
swap(10, 20);