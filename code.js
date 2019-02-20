$(document).ready( function(){
        $("#btnClick").on("click", onMouseClick);
				$("#divBox").on("mousemove", onMouseMove);
				$("#txtName").on("click", onClick);
				$("#txtName").on("mouseleave", onMouseLeave);
				$("._tblProducts tr>:nth-child(1)").on("mouseover", onMouseHover);
				$("._tblProducts tr>:nth-child(1)").on("mouseleave", onMouseLeave);
				
				
				$("table ._tblProducts, ._tblProducts th, ._tblProducts tr, ._tblProducts td").css("border", "1px solid black");
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
			function onMouseHover(e, element){
				//$(e.target).closest('tr').css("color", "red").css("font-weight", "800");
				$(e.target).closest('tr').toggleClass('rowColor');
			}
			function onMouseLeave(e){
				$(e.target).closest('tr').toggleClass("rowColor");
			}
