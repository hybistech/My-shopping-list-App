// Variable declarations
var button = document.getElementById("btnEnter");
var input = document.getElementById("itemInput");
var listBody = document.querySelector("#listBody");
var clrButton = document.getElementById("clear");


//User Input length
	function inputLength() {
		return input.value.length;
	}


//New items to the list
	function createItem(){	
			var item = document.createElement("li");
			item.appendChild(document.createTextNode(input.value));
			listBody.appendChild(item);
			input.value = "";
			};


	function eventAfterClick(){
		if (inputLength() > 0) {
			createItem()
			};
	}

	function eventOnKeyPress(){
		if (inputLength() > 0 && event.keyCode === 13) {
			createItem()
		}
	}

	// function clearItems(){
	// 		HT
	// }

	
	button.addEventListener("click",eventAfterClick);

	input.addEventListener("keypress",eventOnKeyPress);

	// clrButton.addEventListener("click", clearItems);