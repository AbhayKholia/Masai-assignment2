
let submitData = (e) => {
    e.preventDefault();
    let form = document.getElementById("data");
    let name = form.name.value;
    let email = form.email.value;
    let address = form.address.value;
    let amount = Number(form.amount.value);
    
    let person1 = new PersonData(name, email, address, amount);
  
    console.log(person1);
    localStorage.setItem("user", JSON.stringify(person1));
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("amount").value = "";
  };
  
  function PersonData(n, e, add, amt) {
    this.name = n;
    this.email = e;
    this.address = add;
    this.wallet = amt;
  };