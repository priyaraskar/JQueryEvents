$(document).ready( function(){
        $("#btnClick").on("click", onMouseClick);
				$("#divBox").on("mousemove", onMouseMove);
				$("#txtName").on("click", onClick);
				$("#txtName").on("mouseleave", onMouseLeave);
      });

      function onMouseClick() {
        alert("You clicked on Click Button.");
      }
			function onMouseMove(e){
				$("#lblCoordinates").text("X : " + e.pageX + ", Y : " + e.pageY);
			}
			function onClick(){
				$("#lblTooltip").text("Enter your name.");
			}
			function onMouseLeave(){
				$("#lblTooltip").text("");
			}
