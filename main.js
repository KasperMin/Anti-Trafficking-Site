// - If you are at the footer When the first image switch happens it automatically jump up to the head //
$(document).ready(function() {
  let childCounterEl = $("#childCounter"), brideCounterEl = $("#brideCounter"), profitCounterEl = $("#profitCounter"), percentCounterEl = $("#percentCounter")
  let documentEl = $(document);
  let windowEl = $(window);

  let counter = 0, counter2 = 0, counter3 = 0, counter4 = 0;
  let scrollCountActivated = false, scrollCountActivated2 = false, scrollCountActivated3 = false, scrollCountActivated4 = false
  let interval, interval2, interval3, interval4;

  documentEl.on("scroll", function() {

    if (documentEl.scrollTop() > 100 & scrollCountActivated === false) {
      scrollCountActivated = true;
      function startCounter() {
        childCounterEl.html(counter);
        if (counter < 5250) {
          counter++;
        } else {
          clearInterval(interval)
        }
      }
      for (let i = 0; i < 50; i++) {
        interval = setInterval(startCounter, 1)
      }
    }; // END OF CHILD IF STATEMENT //

     if (documentEl.scrollTop() > 100 & scrollCountActivated2 === false) {
       scrollCountActivated2 = true;
       function startCounter() {
         brideCounterEl.html(counter2);
         if (counter2 < 10000) {
           counter2++;
         } else {
           clearInterval(interval2)
         }
        }
       for (let i = 0; i < 100; i++) {
         interval2 = setInterval(startCounter, 1)
       }
       }; // END OF BRIDE IF  STATEMENT //

       if (documentEl.scrollTop() > 100 & scrollCountActivated3 === false) {
         scrollCountActivated3 = true;
         function startCounter() {
           profitCounterEl.html(counter3);
           if (counter3 < 15) {
             counter3++;
           } else {
             clearInterval(interval3)
           }
         };
         interval3 = setInterval(startCounter,175)

       }; // END PROFIT IF STATEMENT //

       if (documentEl.scrollTop() > 100 & scrollCountActivated4 === false) {
         scrollCountActivated4 = true;
         function startCounter() {
           percentCounterEl.html(counter4);
           if (counter4 < 99) {
             counter4++;
           } else {
             clearInterval(interval4)
           }
         };
         interval4 = setInterval(startCounter,1)

       }; // END PERCENT IF STATEMENT //

    }); // END OF SCROLL FUNCITON //


  // PAGE AND ARROW CHANGE SUB MENU 2 //
  let subMenu2Container1 = $(".menuTwoContainer1"), subMenu2Container2 = $(".menuTwoContainer2"), subMenu2Container3 = $(".menuTwoContainer3");
  let subMenu2Container4 = $(".menuTwoContainer4"), subMenu2Container5 = $(".menuTwoContainer5"), subMenu2Container6 = $(".menuTwoContainer6");
  let subMenu2Container7 = $(".menuTwoContainer7"), subMenu2Container8 = $(".menuTwoContainer8")
  let arrowText1 = $(".arrowText1"), arrowText2 = $(".arrowText2"), arrowText3 = $(".arrowText3"), arrowText4 = $(".arrowText4")
  let arrowText5 = $(".arrowText5"), arrowText6 = $(".arrowText6"), arrowText7 = $(".arrowText7"), arrowText8 = $(".arrowText8");
  let arrow1 = $(".arrow1"), arrow2 = $(".arrow2"), arrow3 = $(".arrow3"), arrow4 = $(".arrow4"), arrow5 = $(".arrow5")
  let arrow6 = $(".arrow6"), arrow7 = $(".arrow7"), arrow8 = $(".arrow8");
  // let subMenu2Header1 = $(".subMenuType2Header1"); //


  subMenu2Container1.on("click", function() {
    window.location.href = "definition.html";
  });

  subMenu2Container2.on("click", function() {
    window.location.href = "slavery.html";
  });

  subMenu2Container3.on("click", function() {

  });

  // ARROW 1 //
  subMenu2Container1.on("mouseover", function() {
    arrow1.animate( {left: "20"} );
    arrow1.addClass("arrowActive")
    arrowText1.addClass("arrowTextActive")
  });

  subMenu2Container1.on("mouseleave", function() {
    arrow1.animate( {left: "0px"},)
    arrow1.removeClass("arrowActive")
    arrowText1.removeClass("arrowTextActive");

  });

  // ARROW 2 //
  subMenu2Container2.on("mouseover", function() {
    arrow2.animate( {left: "20"});
    arrow2.addClass("arrowActive");
    arrowText2.addClass("arrowTextActive");
  });

  subMenu2Container2.on("mouseleave", function () {
    arrow2.animate( {left: "0px"} );
    arrow2.removeClass("arrowActive");
    arrowText2.removeClass("arrowTextActive");
  });

  // ARROW 3 //
  subMenu2Container3.on("mouseover", function () {
    arrow3.animate( {left: "20"} );
    arrow3.addClass("arrowActive");
    arrowText3.addClass("arrowTextActive");
  });

  subMenu2Container3.on("mouseleave", function() {
    arrow3.animate( {left: "0"} );
    arrow3.removeClass("arrowActive");
    arrowText3.removeClass("arrowTextActive");
  });


  // ARROW 4 //
  subMenu2Container4.on("mouseover", function () {
    arrow4.animate( {left: "20px"} );
    arrow4.addClass("arrowActive");
    arrowText4.addClass("arrowTextActive");
  });

  subMenu2Container4.on("mouseleave", function() {
    arrow4.animate( {left: "0"} );
    arrow4.removeClass("arrowActive");
    arrowText4.removeClass("arrowTextActive");
  });

  // ARROW 5//
  subMenu2Container5.on("mouseover", function () {
    arrow5.animate( {left: "20px"} );
    arrow5.addClass("arrowActive");
    arrowText5.addClass("arrowTextActive");
  });

  subMenu2Container5.on("mouseleave", function() {
    arrow5.animate( {left: "0px"} );
    arrow5.removeClass("arrowActive");
    arrowText5.removeClass("arrowTextActive");
  });


  // ARROW 6 //
  subMenu2Container6.on("mouseover", function () {
    arrow6.animate( {left: "20"} );
    arrow6.addClass("arrowActive");
    arrowText6.addClass("arrowTextActive");
  });

  subMenu2Container6.on("mouseleave", function() {
    arrow6.animate( {left: "0"} );
    arrow6.removeClass("arrowActive");
    arrowText6.removeClass("arrowTextActive");
  });

  // ARROW 7 //
  subMenu2Container7.on("mouseover", function () {
    arrow7.animate( {left: "20"} );
    arrow7.addClass("arrowActive");
    arrowText7.addClass("arrowTextActive");
  });

  subMenu2Container7.on("mouseleave", function() {
    arrow7.animate( {left: "0"} );
    arrow7.removeClass("arrowActive");
    arrowText7.removeClass("arrowTextActive");
  });

  // ARROW 8 //
  subMenu2Container8.on("mouseover", function () {
    arrow8.animate( {left: "20"} );
    arrow8.addClass("arrowActive");
    arrowText8.addClass("arrowTextActive");
  });

  subMenu2Container8.on("mouseleave", function() {
    arrow8.animate( {left: "0px"} );
    arrow8.removeClass("arrowActive");
    arrowText8.removeClass("arrowTextActive");
  });



  // SLAVE PRICE ANIMATION //
  windowEl.scroll(function (event) {
    let scroll = windowEl.scrollTop();
    let priceBar1 = $(".priceBarAnimate1"),priceBar2 = $(".priceBarAnimate2");
    let priceBar3 = $(".priceBarAnimate3"), priceBar4 = $(".priceBarAnimate4");
    let priceBarText = $(".priceBarTextHide");

    if (scroll > 800 & scrollPriceActivated === false) {
      scrollPriceActivated = true;
      priceBar1.animate( {width: "180px"}, 2000);
      priceBarText.addClass("priceBarTextShow");
      priceBar2.animate( {width: "250px"}, 2000);
      priceBar3.animate( {width: "800px"}, 2000);
      priceBar4.animate( {width: "90px"}, 2000);
    }
  });


  // BUTTON ANIMATION //
  let menuOneButton1 = $(".menuOneButton1"), menuOneButton2 = $(".menuOneButton2"), menuOneButton3 = $(".menuOneButton3");
  let menuOneButton4 = $(".menuOneButton4"), menuOneButton5 = $(".menuOneButton5")
  let menuOneButtonAnimation1 = $(".menuOneButtonAnimation1"), menuOneButtonAnimation2 = $(".menuOneButtonAnimation2"), menuOneButtonAnimation3 = $(".menuOneButtonAnimation3")
  let menuOneButtonAnimation4 = $(".menuOneButtonAnimation4"), menuOneButtonAnimation5 = $(".menuOneButtonAnimation5"), menuOneButtonAnimation6 = $(".menuOneButtonAnimation6")
  let menuOneText1 = $(".menuOneText1"), menuOneText2 = $(".menuOneText2"), menuOneText3 = $(".menuOneText3")
  let menuOneText4 = $(".menuOneText4"), menuOneText5 = $(".menuOneText5")
  let menuOneButtonActive = false;

  menuOneButton1.on("mouseover", function() {
    if (menuOneButtonActive === false) {
      menuOneButtonActive = true;
      menuOneButtonAnimation1.animate( {width: "30px"});
      menuOneText1.animate( {left: "+=15px"})
    }
  });

  menuOneButton1.on("mouseleave", function() {
    if (menuOneButtonActive === true) {
      menuOneButtonActive = false;
      menuOneButtonAnimation1.animate( {width: "0px"} );
      menuOneText1.animate( {left: "-=15px"} );
    }
  });

  menuOneButton2.on("mouseover", function() {
    if (menuOneButtonActive === false) {
      menuOneButtonActive = true;
      menuOneButtonAnimation2.animate( {width: "30px"});
      menuOneText2.animate( {left: "+=15px"})
    }
  });

  menuOneButton2.on("mouseleave", function() {
    if (menuOneButtonActive === true) {
      menuOneButtonActive = false;
      menuOneButtonAnimation2.animate( {width: "0px"} );
      menuOneText2.animate( {left: "-=15px"} );
    }
  });

  menuOneButton3.on("mouseover", function() {
    if (menuOneButtonActive === false) {
      menuOneButtonActive = true;
      menuOneButtonAnimation3.animate( {width: "30px"} );
      menuOneText3.animate( {left: "+=15px"})
    }
  });

  menuOneButton3.on("mouseleave", function() {
    if (menuOneButtonActive === true) {
      menuOneButtonActive = false;
      menuOneButtonAnimation3.animate( {width: "0"} );
      menuOneText3.animate( {left: "-=15px"} );
    }
  });

  menuOneButton4.on("mouseover", function() {
    if (menuOneButtonActive === false) {
      menuOneButtonActive = true;
      menuOneButtonAnimation4.animate( {width: "30px"} );
      menuOneText4.animate( {left: "+=15px"} );
    }
  })

  menuOneButton4.on("mouseleave", function() {
    if (menuOneButtonActive === true) {
      menuOneButtonActive = false;
      menuOneButtonAnimation4.animate( {width: "0"});
      menuOneText4.animate( {left: "-=15px"});
    }
  })

  menuOneButton5.on("mouseover", function() {
    if (menuOneButtonActive === false) {
      menuOneButtonActive = true;
      menuOneButtonAnimation5.animate( {width: "30px"} );
      menuOneText5.animate( {left: "+=15px"} );
    }
  })

  menuOneButton5.on("mouseleave", function() {
    if (menuOneButtonActive === true) {
      menuOneButtonActive = false;
      menuOneButtonAnimation5.animate( {width: "0"});
      menuOneText5.animate( {left: "-=15px"});
    }
  })

  // SIDE MENU ANIMATION //
  let sideMenuImg1 = $(".sideMenuImg1"), sideMenuImg2 = $(".sideMenuImg2"), sideMenuImg3 = $(".sideMenuImg3"), sideMenuImg4 = $(".sideMenuImg4")
  let sideMenuImgText1 = $(".sideMenuImgText1"), sideMenuImgText2 = $(".sideMenuImgText2"), sideMenuImgText3 = $(".sideMenuImgText3"), sideMenuImgText4 = $(".sideMenuImgText4")

  sideMenuImg1.on("mouseover", function() {
    sideMenuImg1.animate( {width: "90%", height: "90%"}, "fast");
    // sideMenuImg1.addClass("sideMenuBorderShadow"); //
    sideMenuImgText1.addClass("sideMenuImgTextColor");

  });

  sideMenuImg1.on("mouseleave", function() {
    sideMenuImg1.animate( {width: "85%", height: "85%"}, "fast");
    // sideMenuImgImg1.removeClass("sideMenuImgTextColor"); //
    sideMenuImgText1.removeClass("sideMenuImgTextColor")
  })

  sideMenuImg2.on("mouseover", function() {
    sideMenuImg2.animate( {width: "90%", height: "90%"}, "fast");
    // sideMenuImg1.addClass("sideMenuBorderShadow"); //
    sideMenuImgText2.addClass("sideMenuImgTextColor");

  });

  sideMenuImg2.on("mouseleave", function() {
    sideMenuImg2.animate( {width: "85%", height: "85%"}, "fast");
    // sideMenuImgImg1.removeClass("sideMenuImgTextColor"); //
    sideMenuImgText2.removeClass("sideMenuImgTextColor")
  })

  sideMenuImg3.on("mouseover", function() {
    sideMenuImg3.animate( {width: "90%", height: "90%"}, "fast");
    // sideMenuImg1.addClass("sideMenuBorderShadow"); //
    sideMenuImgText3.addClass("sideMenuImgTextColor");

  });

  sideMenuImg3.on("mouseleave", function() {
    sideMenuImg3.animate( {width: "85%", height: "85%"}, "fast");
    // sideMenuImgImg1.removeClass("sideMenuImgTextColor"); //
    sideMenuImgText3.removeClass("sideMenuImgTextColor")
  })

  sideMenuImg4.on("mouseover", function() {
    sideMenuImg4.animate( {width: "90%", height: "90%"}, "fast");
    // sideMenuImg1.addClass("sideMenuBorderShadow"); //
    sideMenuImgText4.addClass("sideMenuImgTextColor");

  });

  sideMenuImg4.on("mouseleave", function() {
    sideMenuImg4.animate( {width: "85%", height: "85%"}, "fast");
    // sideMenuImgImg1.removeClass("sideMenuImgTextColor"); //
    sideMenuImgText4.removeClass("sideMenuImgTextColor")
  })

  // SOURCE ANIMATION //


}); // End of ready function //
let source = $(".source")
let sourceActive = false;

if (sourceActive === false) {
  sourceActive = true;

  source.on("mouseover", function() {
  let element = $("<div class='sourceNew'><em> <li>Kasper</li> <li>Kasper</li> </em> <div>").appendTo("body");
  element.css( "left", "25%");
  element.css( "bottom", "25%")
  element.animate( {width: "50%"});
  element.animate( {height: "50%"});

    $(window).scroll(function() {
      sourceActive = false;
      element.animate( {height: "-50%"});
      element.animate( {width: "-50%"});
    })
  })
}
