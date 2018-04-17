// - If you are at the footer When the first image switch happens it automatically jump up to the head //
$(document).ready(function() {
  let cambodiaCounterEl = $("#cambodiaCounter");
  let documentEl = $(document);
  let windowEl = $(window);

  let counter = 0
  let scrollCountActivated = false;
  let scrollParaActivated = false;
  let scrollPriceActivated = false;
  let breakActivated = false;
  let interval;

  documentEl.on("scroll", function() {
    if (documentEl.scrollTop() > 100 & scrollCountActivated === false) {
      scrollCountActivated = true;

      function startCounter() {
        cambodiaCounterEl.html(counter);
        if (counter < 15000) {
          counter++;
        } else {
          clearInterval(interval)
        }
      } // END OF START COUNTER FUNCTION //

      for (let i = 0; i < 100; i++) {
        interval = setInterval(startCounter, 1)
      }


     }; // END OF IF SCROLL STATEMENT //

  }); // END OF SCROLL FUNCITON //

  /*
  windowEl.scroll(function (event) {
    let scroll = windowEl.scrollTop();
    let paraBoxElement = $("#paraBoxDarkAnimate");

    if (scroll > 450 & scrollParaActivated === false) {
      scrollParaActivated = true;
      paraBoxElement.animate({width: '90%', opacity: '0.9'}, "slow");
      document.getElementById("paraBoxTextContainerAnimate").id = "show";
      document.getElementById("paraBoxButtonBoxAnimate").id = "show";
    }
  });
  */

  // PAGE AND ARROW CHANGE SUB MENU 2 //
  let subMenu2Container1 = $(".menuTwoContainer1");
  let subMenu2Container2 = $(".menuTwoContainer2");
  let subMenu2Container3 = $(".menuTwoContainer3");
  let arrowText1 = $(".arrowText1");
  let arrowText2 = $(".arrowText2");
  let arrowText3 = $(".arrowText3");
  let arrow1 = $(".arrow1");
  let arrow2 = $(".arrow2");
  let arrow3 = $(".arrow3");

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
    arrow1.animate( {left: "-60px"} );
    arrow1.addClass("arrowActive")
    arrowText1.addClass("arrowTextActive")
  });

  subMenu2Container1.on("mouseleave", function() {
    arrow1.animate( {left: "-72px"},)
    arrow1.removeClass("arrowActive")
    arrowText1.removeClass("arrowTextActive");

  });

  // ARROW 2 //
  subMenu2Container2.on("mouseover", function() {
    arrow2.animate( {left: "-60px"});
    arrow2.addClass("arrowActive");
    arrowText2.addClass("arrowTextActive");
  });

  subMenu2Container2.on("mouseleave", function () {
    arrow2.animate( {left: "-72px"} );
    arrow2.removeClass("arrowActive");
    arrowText2.removeClass("arrowTextActive");
  });

  // ARROW 3 //
  subMenu2Container3.on("mouseover", function () {
    arrow3.animate( {left: "-60px"} );
    arrow3.addClass("arrowActive");
    arrowText3.addClass("arrowTextActive");
  });

  subMenu2Container3.on("mouseleave", function() {
    arrow3.animate( {left: "-72"} );
    arrow3.removeClass("arrowActive");
    arrowText3.removeClass("arrowTextActive");
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




// PIE CHART //

window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	theme: "dark2",
	exportFileName: "Doughnut Chart",
	exportEnabled: true,
	animationEnabled: true,
	title:{
		text: "Total Revenue Stream"
	},
	legend:{
		cursor: "pointer",
		itemclick: explodePie
	},
	data: [{
		type: "doughnut",
		innerRadius: 90,
		showInLegend: true,
		toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
		indexLabel: "{name} - #percent%",
		dataPoints: [
			{ y: 450, name: "Food" },
			{ y: 120, name: "Insurance" },
			{ y: 300, name: "Travelling" },
			{ y: 800, name: "Housing" },
			{ y: 150, name: "Education" },
			{ y: 150, name: "Shopping"},
			{ y: 250, name: "Others" }
		]
	}]
});
chart.render();
function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();
}

}
