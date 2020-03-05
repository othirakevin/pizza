



  function Calculate() {
    var f1 = document.getElementById("size");
    var field1 = parseInt(f1.options[f1.selectedIndex].value);
    var f2 = document.getElementById("toppings");
    var field2 = parseInt(f2.options[f2.selectedIndex].value);
    var f3 = document.getElementById("crust");
    var field3 = parseInt(f3.options[f3.selectedIndex].value);
    var f4 = document.getElementById("checkout");
    var field4 = parseInt(f4.options[f4.selectedIndex].value);

    var alertMessage = 'Thanks for the order ' + field1 + ' + ' + field2 + '+' +field3+ '+' +field4+ '. Your total is $' + (field1 * field2 + field3 + field4).toFixed(4);
    alert(alertMessage);
  }


  function Calculate() {
    var f1 = document.getElementById("productselection");
    var field1 = parseInt(f1.options[f1.selectedIndex].value);
    var f2 = document.getElementById("quantityselection");
    var field2 = parseInt(f2.options[f2.selectedIndex].value);
    var f3 = document.getElementById("shippingselection");
    var field3 = parseInt(f3.options[f3.selectedIndex].value);
    var f4 = document.getElementById("checkout");
    var field4 = parseInt(f4.options[f4.selectedIndex].value);
  
    var alertMessage = 'Thanks for the order ' + field1 + ' + ' + field2 + '+'+ field3+ '+' +field4+ '. Your total is Kshs' + (field1 + field2 + field3 +field4).toFixed(2);
    alert(alertMessage);
  }

