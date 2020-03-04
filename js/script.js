

// Page 1 Script
function getFormValue(){
			var name = document.getElementById('name').value;
			var phone = document.getElementById('phone').value;
			var text = document.getElementById('text').value;

			alert('Name: '+name + '\nPhone: '+phone + '\nText: '+text )
		}

// Page 2 Script
	function addHeader(){
		document.getElementById('header').style.display = "block";
	}
	function deleteHeader(){
		document.getElementById('header').style.display = "none";
	}
	function addFooter(){
		document.getElementById('footer').style.display = "block";
	}
	function deleteFooter(){
		document.getElementById('footer').style.display = "none";
	}



// Page 3 Script
function addToCart(i){
		price = new Array(20,20,25,30)
		total = document.getElementById("price").innerHTML

		btn_add= "add-"+i
		btn_rem= "rem-"+i
		document.getElementById(btn_add).style.display = "none"
		document.getElementById(btn_rem).style.display = "inline";

		// Cart Details
		prod_id= "prod-"+i
		product_name = document.getElementById(prod_id).innerHTML
		cart = document.getElementById("cart")

		var node = document.createElement("LI")
		node.setAttribute("id", prod_id+"-cart");
		node.innerHTML = product_name  
		cart.appendChild(node);

		// Total Price Calcul
		total = parseInt(total) + price[i-1]
		document.getElementById("price").innerHTML=total
	}
	function removeFromCart(i){
		price = new Array(20,20,25,30)
		total = document.getElementById("price").innerHTML

		btn_add= "add-"+i
		btn_rem= "rem-"+i
		document.getElementById(btn_rem).style.display = "none"
		document.getElementById(btn_add).style.display = "inline";


		// Cart Details
		prod_id= "prod-"+i
		product_name = document.getElementById(prod_id).innerHTML
		cart = document.getElementById("cart")

		var node = document.getElementById(prod_id+"-cart")
		node.parentNode.removeChild(node);

		// Total Price Calcul
		total = parseInt(total) - price[i-1]
		document.getElementById("price").innerHTML=total
	}
	function checkout(){
		total = document.getElementById("price").innerHTML

		for (i = 1; i < 5; i++) {
			btn_add= "add-"+i
			btn_rem= "rem-"+i
			document.getElementById(btn_rem).style.display = "none"
			document.getElementById(btn_add).style.display = "inline";
		}

		document.getElementById("price").innerHTML=0
		alert("Your order has been confirmed for a total of "+total+" €")
	}