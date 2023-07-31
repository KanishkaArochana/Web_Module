function x(){
  if(document.log.fname.value==''){
    alert("Input is empty!");
  }

  if(document.log.lname.value==''){
    alert("Input is empty!");
  }

  if(document.log.number.value.length<=10){
    alert("Shoud be 10 number!");
  }

  if ((!document.log.gen[0].checked) && (!document.log.gen[1].checked)) {
    alert("Select Gender");
}

if ((document.log.c.selectedIndex == 0)) {
  alert("Not Selected the Country");
}


  // if((!document.log.pw.value)===document.log.cpw.value){
  //   alert("Incurrect Passworad!");
  // }

  


}
