$(document).ready(function() {
	$(".joinForm").hide();
	$(document).on("click", ".join", joinPotLuck);
	$(document).on("click", ".add", addInfo);

	var potLuckFood = $("#food");
	var potLuckId= $("#potLuckId");
	var flag = 0;

	function joinPotLuck(event){
		$(".potLuck-container").hide();
		$(".potLuck-FoodContainer").hide();
		$(".fooInfo").hide();
		$(".hostPotForm").hide();
		$(".inviteForm").hide();


		console.log("inside joinPotLuck");
		$(".joinForm").show();
		event.preventDefault();

	}

	function addInfo(event){
		var radioValue;
		event.preventDefault();

            radioValue = $("input[name='attending']:checked").val();
            console.log(radioValue);

	    console.log("---radio value---"+radioValue);
	    console.log("inside create potluck(2)");
	    upsertPotLuckFood({
	      attending: radioValue,
	      food: potLuckFood.val().trim(),
	      PotLuckId: potLuckId.val().trim()
	    });

	}

	var bodyContainer = $(".body-container");
	

	function upsertPotLuckFood(foodData){
		
		console.log(" inside upsertPotLuckFood");
		$.post("/potLuckFood/potLuck/food", foodData)
		.done(function(results) {

			if((results.data) === "your potluckId is invalid"){

				var alertDiv = $("<div>");
				alertDiv.addClass("alert alert-danger invalid");
				alertDiv.text("Your potluckId is invalid");
					   
				bodyContainer.append(alertDiv);
				$(".invalid").show().delay(3000).fadeOut();
			}

			console.log("done");
			$(".joinForm").hide();
			potLuckFood.val("");
			potLuckId.val("");

		}).fail(function(err){

			console.log("fail");
			console.log(err);
			$(".joinForm").hide();
			$(".alert-danger").hide();
			

			var alertDiv = $("<div>");
			alertDiv.addClass("alert alert-danger");
			alertDiv.text("You have already entered the food for this PotLuck");
				   
			bodyContainer.append(alertDiv);
			$(".alert-danger").show();
			
			potLuckFood.val("");
			potLuckId.val("");


			$(".alert-danger").show().delay(3000).fadeOut();

		});

	}

	
});