let purchasedArr = JSON.parse(localStorage.getItem("purchase"));
console.log(purchasedArr);
let person1 = JSON.parse(localStorage.getItem("user"));

let wallet = document.getElementById("balance");
wallet.innerText = person1.wallet;

let display_Purched_voucher = (data) => {
  let container = document.getElementById("purchased_vouchers");

  data?.forEach((ele) => {
    let div = document.createElement("div");
    div.setAttribute("class", "voucher");

    let image = document.createElement("img");
    image.src = ele.image;

    let name = document.createElement("h3");
    name.innerText = ele.name;

    let price = document.createElement("p");
    price.innerText = ele.price;
    div.append(image, name, price);
    container.append(div);
  });
};
display_Purched_voucher(purchasedArr);