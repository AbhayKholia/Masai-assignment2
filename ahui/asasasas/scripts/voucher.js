let person1 = JSON.parse(localStorage.getItem("user")); // getting user data that has been stored through index.html;
//console.log(person1.wallet)
let wallet = document.getElementById("wallet_balance");
//let avaliable_balance = person1.wallet;
//console.log(avaliable_balance);
//wallet.innerText = avaliable_balance;
wallet.innerText = person1.wallet;


//fetching data through APi by using fetch tool through async await 

let fetchData = async () => {
  try {
    let res = await fetch(
      "https://masai-vouchers-api.herokuapp.com/api/vouchers"
    );
    let data = await res.json();
    console.log(data);
    displayData(data[0].vouchers);
  } catch (error) {
    console.log(error);
  }
};

fetchData();

let displayData = (data) => {
  let box = document.getElementById("voucher_list");

  data.forEach((ele) => {
    let div = document.createElement("div");
    div.setAttribute("class", "voucher");

    let image = document.createElement("img");
    image.src = ele.image;

    let name = document.createElement("h3");
    name.innerText = ele.name;

    let price = document.createElement("p");
    price.innerText = ele.price;

    let btn = document.createElement("button");
    btn.setAttribute("class", "buy_voucher");
    btn.innerText = "Buy Voucher";
    btn.addEventListener("click", () => {
      buyVoucher(ele);
    });

    div.append(image, name, price, btn);
    box.append(div);
  });
};

let voucherArr = JSON.parse(localStorage.getItem("purchase")) || [];

let buyVoucher = (ele) => {
  let x = Number(ele.price);

  if (person1.wallet >= x) {
    alert("Hurray! purchase successful");

    voucherArr.push(ele);
    localStorage.setItem("purchase", JSON.stringify(voucherArr));
    person1.wallet = person1.wallet - x;
    //console.log(avaliable_balance);
    wallet.innerText = person1.wallet;

    localStorage.setItem("user", JSON.stringify(person1));
    console.log(person1)
   

  } else {
    alert("Sorry! insufficient balance");
  }
};
  // person1 = JSON.parse.apply(localStorage.getItem("user"));
//wallet.innerText = person1.wallet;