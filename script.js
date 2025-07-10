const num = 10369;
const str = num.toString();
let res = "";

for (let i = 0; i < str.length; i++) {
  res += str[i] + " ";
}
console.log(res.trim());
