var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i< coll.length; i++){
  coll[i].addEventListener("click" function(){
    this.classlist.toogle("active");
    var content = this.nextElementSibling;
    if (content.style.display == "block"){
      content.style.display = "none";
    }
    else{
      content.style.display ="block";
    }
  });
}

$(".sum").change(function() { 
   var total = 0; 
   $.each($(".sum"), function() { ;
       total += parseFloat($(this).val()); 
   });
   $("#cost").val(total) 
});




body:{
	allign: center;
	}
  if (isset($_POST['email']))  {
  
  //comment needed
  $admin_email = "1dhawinkels@tawacollege.school.nz";
  $email = $_POST['email'];
  $subject = $_POST['Daniel Hawinkels Pizza Hut form'];
  $comment = $_POST['This is the results'];
  $body = "First name: ".$Firstname/n;
  $body  .= "Last name: ".$Lastname/n;
  $body  .= "Address: ".$Address/n;
  $body  .= "Phone number: ".$Phonenumber/n;
  $body  .= "Pizza 1: ".$Pizza1/n;
  $body  .= "Pizza 2: ".$Pizza2/n;
  $body  .= "Pizza 3: ".$Pizza3;
  
  //comment needed
  mail($admin_email, "$subject", $body,$email);
  
  //comment needed
  echo "Thank you for contacting us!";
  }
  
