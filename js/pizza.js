$(function(){
  $(".onclick").click(function(){
     $("#hidden1").slideToggle(200);
   });
  
   $(".onclick1").click(function(){
     $("#hidden2").slideToggle(200);
   });

   $(".onclick2").click(function(){
     $("#hidden3").slideToggle(200);
   });

   $(".onclick3").click(function(){
    $("#hidden4").slideToggle(200);
  });

  $(".onclick4").click(function(){
    $("#hidden5").slideToggle(200);
  });

  $(".onclick5").click(function(){
    $("#hidden6").slideToggle(200);
  });
   
    
    var price , crust_price, topping_price ;
    function Getpizza( name,size,crust,topping, total ){
      this.name = name;
      this.size = size;
      this.crust = crust;
      this.topping = topping;
      this.total = total;
    }

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
    });

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
   
     
      event.preventDefault();
     
     });

});