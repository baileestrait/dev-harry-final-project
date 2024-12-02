$(()=> {
  console.log('ready');
}

    let itemChoice = $("input[type=radio]:checked").val();
 console.log("itemChoice: ", itemChoice);
    
    if(itemChoice === "Cake") {
      $('.dropdown-toggle').dropdown();
      $("#inputSizeAmt")
      .empty()
      .append(`<option value="Choose Cookie Amount">Choose Cake Size</option>`)
      .append(`<option value="6">6 Inch Round Cake (Serves 10)</option>`)
      .append(`<option value="12">8 Inch Round Cake (Serves 24)</option>`)
      .append(`<option value="24">7x11 Inch Rectangle Cake (Serves 24)</option>`)
      .append(`<option value="48">9x13 Inch Rectangle Cake (Serves 38)</option>`)
      .append(`<option value="64">11x15 Inch Rectangle Cake (Serves 54)</option>`)
      .append(`<option value="100">12x18 Inch Rectangle Cake (Serves 72)</option>`);
    
    $("#inputFlavor")
      .empty()
      .append(`<option value="Choose Cookie Flavor">Choose Cake Flavor</option>`)
      .append(`<option value="YellowCake">Yellow Sponge</option>`)
      .append(`<option value="WhiteCake">White Wedding</option>`)
      .append(`<option value="StrawberryCake">Strawberry</option>`)
      .append(`<option value="ChocolateCake">Chocolate</option>`);
    
      $("#inputIcingFlavor")
      .empty()
      .append(`<option value="Choose Icing Flavor">Choose Icing Flavor</option>`)
      .append(`<option value="CC">Cream Cheese</option>`)
      .append(`<option value="SCC">Strawberry Cream Cheese</option>`)
      .append(`<option value="VB">Vanilla Buttercream</option>`)
      .append(`<option value="CB">Chocolate Buttercream</option>`);
      
      $("#inputIcingColor")
      .empty()
      .append(`<option value="Choose Icing Color">Choose Icing Color</option>`)
      .append(`<option value="White">White</option>`)
      .append(`<option value="Red">Red</option>`)
      .append(`<option value="Blue">Blue</option>`)
      .append(`<option value="Yellow">Yellow</option>`)
      .append(`<option value="Green">Green</option>`)
      .append(`<option value="Pink">Pink</option>`)
      .append(`<option value="Purple">Purple</option>`)
      .append(`<option value="Orange">Orange</option>`)
      .append(`<option value="Brown">Brown</option>`)
      .append(`<option value="Black">Black</option>`);
      
      $("#inputDesignColor")
      .empty()
      .append(`<option value="Choose Design Color">Choose Design Color</option>`)
      .append(`<option value="White">White</option>`)
      .append(`<option value="Red">Red</option>`)
      .append(`<option value="Blue">Blue</option>`)
      .append(`<option value="Yellow">Yellow</option>`)
      .append(`<option value="Green">Green</option>`)
      .append(`<option value="Pink">Pink</option>`)
      .append(`<option value="Purple">Purple</option>`)
      .append(`<option value="Orange">Orange</option>`)
      .append(`<option value="Brown">Brown</option>`)
      .append(`<option value="Black">Black</option>`);
      
     $("#inputMessageColor")
      .empty()
      .append(`<option value="Choose Message Color">Choose Message Color</option>`)
      .append(`<option value="White">White</option>`)
      .append(`<option value="Red">Red</option>`)
      .append(`<option value="Blue">Blue</option>`)
      .append(`<option value="Yellow">Yellow</option>`)
      .append(`<option value="Green">Green</option>`)
      .append(`<option value="Pink">Pink</option>`)
      .append(`<option value="Purple">Purple</option>`)
      .append(`<option value="Orange">Orange</option>`)
      .append(`<option value="Brown">Brown</option>`)
      .append(`<option value="Black">Black</option>`);
    }
  else if (itemChoice === "Cookies"){
    $('.dropdown-toggle').dropdown();
      $("#inputSizeAmt")
      .empty()
    .append(`<option value="Choose Cookie Amount">Choose Cookie Amount</option>`)
      .append(`<option value="6">6</option>`)
      .append(`<option value="12">12</option>`)
      .append(`<option value="24">24</option>`)
      .append(`<option value="48">48</option>`)
      .append(`<option value="64">64</option>`)
      .append(`<option value="100">100</option>`);
    
    $("#inputFlavor")
      .empty()
      .append(`<option value="Choose Cookie Flavor">Choose Cookie Flavor</option>`)
      .append(`<option value="Sugar">Sugar</option>`)
      .append(`<option value="Chocolate Chip">Chocolate Chip</option>`)
      .append(`<option value="Peanut Butter">Peanut Butter</option>`)
      .append(`<option value="Oatmeal Raisin">Oatmeal Raisin</option>`)
    .append(`<option value="White Chocolate MN">White Chocolate Macademia Nut</option>`)
    .append(`<option value="Snickerdoodle">Snickerdoodle</option>`);
    
  }
    
   if(itemChoice === "Cookies") {
     $("#inputIcingFlavor")
       .hide();
    $("#inputIcingColor")
      .hide();
    $("#subSectionDesign")
      .hide();
    $("#inputDesignColor")
      .hide();
    $("#subSectionMessage")
      .hide();
     $("#flowerCheck")
     .hide();
     $("#balloonCheck")
     .hide();
     $("#confettiCheck")
     .hide();
      $("#noDesignCheck")
     .hide();
    $("#inputMessage")
      .hide();
    $("#inputMessageColor")
      .hide();
   }
  else if (itemChoice === "Cake"){
    $("#inputIcingFlavor")
       .show();
    $("#inputIcingColor")
      .show();
    $("#subSectionDesign")
      .show();
    $("#inputDesignColor")
      .show();
     $("#flowerCheck")
     .show();
     $("#balloonCheck")
     .show();
     $("#confettiCheck")
     .show();
      $("#noDesignCheck")
     .show();
    $("#subSectionMessage")
      .show();
    $("#inputMessage")
      .show();
    $("#inputMessageColor")
      .show();
    
}
     

  })

    
});



$('#submitOrder').on('click', (event)=> {
   event.preventDefault();
  
  console.log("Customer First Name:", $('#inputFirstName').val());              

  console.log("Customer Last Name:", $('#inputLastName').val());

  console.log("Customer Phone Number:", $('#inputPhoneNumber').val());  
  
  console.log("Date Needed:", $('#inputDate').val());

  console.log("Customer Phone Number:", $('#inputPhoneNumber').val());
  
  
  
  if($('#cakeRadio').is(':checked')){
     console.log("Customer Wants:", $('#cakeRadio').val());
     console.log("Cake Size:", $('#inputSizeAmt').val());
     console.log("Cake Flavor:", $('#inputFlavor').val());
     console.log("Icing Flavor:", $('#inputIcingFlavor').val());
     console.log("Icing Color:", $('#inputIcingColor').val());
    
  let designChoice =
$("input[type=checkbox]:checked").val();
    console.log("Design Choice:", designChoice);
  
    console.log("Design Color:",
  $('#inputDesignColor').val());
  
  console.log("Message:",
  $('#inputMessage').val());
  
  console.log("Message Color:",
  $('#inputMessageColor').val());
    
  }
  
  if($('#cookieRadio').is(':checked')){
     console.log("Customer Wants:", $('#cookieRadio').val());
    console.log("Cookie Amount:", $('#inputSizeAmt').val());
    console.log("Cookie Flavor:", $('#inputFlavor').val());
    
  
}
  

});


// ALL INFO FOR SPECIFIC CUSTOMER NAME & NUMBER SHOULD BE IN JSON FORMAT THAT CAN BE ACCESSED LATER 

// couldn't figure this out???


// $('#rememberMeCheck').on('click', (event) => {
