var datastorage = JSON.parse(localStorage.getItem("pro")) || [];
displayTable(datastorage);
function displayTable(datastorage) {
  var array = [];
  document.querySelector("#inputdata").textContent = "";
  datastorage.map(function (elem, index) {
    var outter = document.createElement("div");
    outter.setAttribute("class", "dateandmonth");
    var date = document.createElement("strong");
    date.textContent = "Est. delivery:";
    var span = document.createElement("span");
    span.textContent = " Wednesday, December 22";
    outter.append(date, span);

    var main = document.createElement("div");
    main.setAttribute("id", "prolist");
    var div1 = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("class", "img");
    img.setAttribute("src", elem.image);
    div1.append(img);

    var div2 = document.createElement("div");
    div2.setAttribute("class", "mainbody");
    var p1 = document.createElement("p");
    p1.textContent = elem.brand;
    var h3 = document.createElement("h3");
    h3.setAttribute("class", "detail");
    h3.textContent = elem.name;

    var atag = document.createElement("a");
    atag.style.textDecoration = "none";
    atag.addEventListener("click", function () {
      if (p.style.color == "red") {
        p.style.color = "gray";
      } else {
        p.style.backgroundcolor = "red";
        p.style.color = "red";
      }
      addToW(index);
    });
    atag.setAttribute("href", "#");
    var p = document.createElement("button");
    p.setAttribute("class", "buttonforheart");
    p.innerHTML = ' <i class="fas fa-heart"></i>';
    var lab = document.createElement("span");
    lab.setAttribute("class", "heart");
    lab.textContent = "Add to Wishlist";
    div2.append(p1, h3, atag);
    atag.append(p, lab);

    // Ankit
    // var ordersummary=document.getElementById("ordersummary")
    //    var main = document.createElement("div");
    //    main.setAttribute("id", "prolist1");

    // var subtotal= document.createElement("div");
    // subtotal.setAttribute("class", "subtotal");
    // var  price1= document.createElement("div");
    // price1.setAttribute("class", "price1");
    // price1.textContent = "Subtotal";
    // var price2= document.createElement("div");
    // price2.setAttribute("class", " price2");
    // price2.textContent = "INR"+" "+elem.price;
    // subtotal.append( price1, price2);

    // var shipping= document.createElement("div");
    // shipping.setAttribute("class", "shipping");
    // var  shipping1= document.createElement("div");
    // shipping1.setAttribute("class", "shipping1");
    // shipping1.textContent = "shipping Fee:";
    // var shipping2= document.createElement("div");
    // shipping2.setAttribute("class", "shipping2");
    // shipping2.textContent = "Calculating at checkout";
    // shipping.append(shipping1,shipping2);

    // var etotal= document.createElement("div");
    // capacity.setAttribute("class", "etotal");
    // var etotal1= document.createElement("div");
    // etotal1.setAttribute("class", "etotal1");
    // etotal1.textContent = "Capacity:";
    // var etotal2= document.createElement("div");
    // sizediv.setAttribute("class", " etotal2");
    // etotal2.textContent = "INR"+" "+elem.price;
    // capacity.append(etotal2, etotal2);

    // main.append(subtotal,shipping,capacity);
    // // document.querySelector(".ordersummary").append(main);
    // ordersummary.append("main")
     // Ankit

    var div3 = document.createElement("div");
    div3.setAttribute("class", "div3ofproduct");
    var price = document.createElement("p");
    price.textContent = elem.price;
    price.setAttribute("class", "displayprice");
    var inputnum = document.createElement("input");
    inputnum.setAttribute("class", "countofproduct");
    inputnum.type = "number";
    var divfor = document.createElement("div");
    var bust = document.createElement("img");
    bust.setAttribute("class", "dustbinimg");
    bust.setAttribute(
      "src",
      "https://www.ubuy.co.in/skin/frontend/default/ubuycom-v1/images/trash.png"
    );
    var button = document.createElement("button");
    button.setAttribute("class", "removebtn");
    button.textContent = "Remove";
    button.addEventListener("click", function () {
      deleteItem(index);
    });
    var divforItem = document.createElement("div");
    divforItem.setAttribute("class", "itemlistOndisplay");
    divforItem.append(div1, div2, div3);
    divfor.append(bust, button);
    div3.append(price, inputnum, divfor);
    main.append(outter, divforItem);
    document.querySelector("#inputdata").append(main);
  });

  //   var tot =array.reduce(function(ac,av){

  //       return ac+av
  //     })
  //     var data=document.querySelector("#pricetotal");
  //     data.textContent=tot;
  //     console.log(tot)
  //     console.log(array)
}

function addToW(index) {
  console.log(datastorage[index]);
}
function deleteItem(index) {
  datastorage.splice(index, 1);
  localStorage.setItem("pro", JSON.stringify(datastorage));
  displayTable(datastorage);
}

// here ankit
function proceedToCheckout() {
  window.location.href = "checkout.html";
}
