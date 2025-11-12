// LOOP TRONG JAVASCRIPT

// Vòng Lặp for
for (let i = 0; i < 5; i++) {
  console.log("số lần lặp :", i);
}

// Vòng lặp while
let i = 0;
while (i < 5) {
  console.log("số lần lặp:", i);
  i++;
}

// Vòng lặp do while

let a = 0;
do {
  console.log("số lần lặp:", a);
  a++;
} while (a < 5);

// Vòng lặp for of
const nums = ["20", "30", "40", "50", "60"];
for (const num of nums) {
  console.log("số sau khi lặp qua:", num);
}

//Vòng lặp for in
const value = {};
const user = { name: "Ninh", age: 23, address: "Đà Nẵng" };

for (const key in user) {
  value[key] = user[key];
  console.log(key, ":", value[key]);
}
