

$(document).ready(function() {
  $(".click0").click(function(){
     $("#hidden1").slideToggle(200);
   });
  
   $(document).ready(function(){
   $(".click1").click(function(){
     $("#hidden2").slideToggle(200);
   });
  });
  
  $(document).ready(function(){
   $(".click2").click(function(){
     $("#hidden3").slideToggle(200);
   });
  });
  
  
   $(document).ready(function(){
     $("#project1").mouseenter(function(){
       $("#overlay1").show(); 
      }).mouseleave(function(){
       $("#overlay1").hide();
    });
   });
  
     $("#project2").mouseenter(function(){
         $("#overlay2").show();
     }).mouseleave(function(){
         $("#overlay2").hide();
     });
  });
  
    $("#project3").mouseenter(function(){
         $("#overlay3").show();
     }).mouseleave(function(){
         $("#overlay3").hide();
     });
  
     $("#project4").mouseenter(function(){
         $("#overlay4").show();
     }).mouseleave(function(){
         $("#overlay4").hide();
     });
   
     $("#project5").mouseenter(function(){
         $("#overlay5").show();
     }).mouseleave(function(){
         $("#overlay5").hide();
     });
  
     $("#project6").mouseenter(function(){
         $("#overlay6").show();
     }).mouseleave(function(){
         $("#overlay6").hide();
     });
  
  
     $("#project7").mouseenter(function(){
         $("#overlay7").show();
     }).mouseleave(function(){
         $("#overlay7").hide();
     });
  
    $("#project8").mouseenter(function(){
      $("#overlay8").show();
    }).mouseleave(function(){
      $("#overlay8").hide();
    });  
    
    var price , crust_price, topping_price ;
    function Getpizza( name,size,crust,topping, total ){
      this.name = name;
      this.size = size;
      this.crust = crust;
      this.topping = topping;
      this.total = total;
    }

$(document).ready(function(){
  $("button.proceed").click(function(){
    $("button.proceed").hide();
    $("div.choice").show();
  });
  $("button.proceed").click(function(event){
     let pname = $(".name option:selected").val();
     let psize = $("#size option:selected").val();
     let pcrust = $("#crust option:selected").val();
     let ptopping = [];
     $.each($("input[name='toppings']:checked"), function(){
         ptopping.push($(this).val());
     });
     console.log(ptopping.join(", "));
     
  $("button#final-order").click(function(){
    let person = $("input#name").val();
    let phone = $("input#phone").val();
    let location = $("input#location").val();
    if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){

      $("#delivery-message").append(person+" We have recieved your order and it will be delivered to "+location);
    }
    else {
      alert("Please fill in the details for delivery!");
    }
  });

  $("button.proceed").click(function(event){
   let mname = $(".name option:selected").val();
   let msize = $("#size option:selected").val();
   let mtopping = $("#topping option:selected").val();

   $("#pizzaname").append("Pizza Name - "+mname);
   $("#pizzasize").append("Pizza size - "+msize);
   $("#pizzatopping").append("Pizza Toppings - "+mtopping);
   switch(msize){
     case "mega":
        price = 1200;
        console.log(price);
      break;
    case "large":
       price = 1000;
       console.log(price);
     break;
     case "medium":
       price = 800;
       console.log(price);
     break;
     case "small":
       price = 500;
       console.log(price);
     default:
       console.log("error");
   }

   switch(mtopping){
    case "smoked-sausage":
      topping_price = 100;
    break;
    case "vienna-sausage":
      topping_price = 100;
    break;
    case "bacon":
      topping_price = 80;
    break;
    case "cheese":
      topping_price = 60;
    break;
    default:
      console.log("No price");
 }

   let mtotal = price + crust_price + topping_price;
   console.log(mtotal);
   $("#pizzatotal").append("Your Total is:  sh. "+mtotal);

     var newOrder = new Getpizza(mname, msize,mtopping,mtotal);
  console.log(newOrder);
  $(".name option:selected").val("");
  $("#size option:selected").val("");
  $("#crust option:selected").val("");
  $("#topping option:selected").val("");


   event.preventDefault()
};