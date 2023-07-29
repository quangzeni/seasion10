let n = +prompt("Nhập số Nguyên Bất Kỳ: ");
let soNguyen = 0;
if (n < 2) {
    console.log("so ", n, "khong la so nguyen to")
}
else if (n == 2) {
    console.log("th2 so ", n, " la so nguyen to")
}
else if (n > 2) {
    for (let i = 2; i < n; i++) {
        if (n % i !== 0) {
            console.log("so ", n, " la so nguyen to")
        }
        else if (n % i == 0) {
            console.log("so ", n, " khong la so nguyen to")
            break;
        }
    }

}