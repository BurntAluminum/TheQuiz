
var c=0;
var java=0;
var ruby=0;
var php=0;
var design=0;

$(document).ready(function() {
  $("form#codequiz").submit(function(event) {
    event.preventDefault();
    var Q1= $("input:radio[name=Q1]:checked").val();
    var Q2= $("input:radio[name=Q2]:checked").val();
    var Q3= $("input:radio[name=Q3]:checked").val();
    var Q4= $("input:radio[name=Q4]:checked").val();
    var Q5= $("input:radio[name=Q5]:checked").val();
  console.log(Q1+" "+Q2+" "+Q3+" "+Q4+" "+Q5)
  $(".resultc").hide();
  $(".resultdesign").hide();
  $(".resultjava").hide();
  $(".resultruby").hide();
  $("resultphp").hide();

  if(Q1==="1") {
    c+=2;
  }else if(Q1==="2") {
    c+=2;
    ruby+=1;
    php+=1;
  }else if(Q1==="3") {
    c+=1;
    ruby+=1;
  }else if(Q1==="4") {
    c+=1;
    php+=2;
    design+=1;
  }

  if(Q2==="1") {
    design+=2;
    java+=1;
  }else if(Q2==="2") {
    c+=2;
    java+=1;
    ruby+=1;
  }else if(Q2==="3") {
    ruby+=2;
    php+=1;
  }else if(Q2==="4") {
    java+=2;
  }

  if(Q3==="1") {
    design+=1;
    java+=2;
    ruby+=2;
  }else if(Q3==="2") {
    c+=2;
    java+=2;
    php+=1;
    ruby+=1;
  }else if(Q3==="3") {
    c+=1;
    design+=1;
    java+=1;
    php+=1;
    ruby+1;
  }

  if(Q4==="1") {
  }
  else if (Q4==="2") {
  }
  else if (Q4==="3") {
  }
  else if (Q4==="4") {
    c+=1;
    design+=1;
    java+=1;
    php+=1;
    ruby+=1;
  }

  if (Q5==="1") {
    design+=2;
    java+=2;
    php+=1;
    ruby+=1;
  }
  else if (Q5==="2") {
    c+=2;
    java+=1;
    ruby+=1;
  }
  else if (Q5==="3") {
    java+=2;
  }
  else if (Q5==="4") {
    php+=2;
    ruby+=2;
    c+=1;
  }
  console.log(design+" "+ c +" "+java+" "+php+" "+ruby)

  if((c >= design) && (c >= java) && (c >= ruby) && (c >= php)) {
    $(".resultc").show();
  }

  else if((design >= c) && (design >= java) && (c >= ruby) && (design >= php)) {
    $(".resultdesign").show();
  }

  else if((java >= design) && (java >= c) && (java >= ruby) && (java >= php)) {
    $(".resultjava").show();
  }

  else if ((ruby >= design) && (ruby >= c) && (ruby >= java) && (ruby >= php)) {
    $(".resultruby").toggle();
  }

  else if ((php >= design) && (php >= c) && (php >= java) && (php >= ruby)) {
    $(".resultphp").show();
  }
  c= 0;
  java=0;
  design=0;
  php=0;
  ruby=0;



})

})
