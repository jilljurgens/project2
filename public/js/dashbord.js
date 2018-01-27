$(document).ready(function() {

	$(".hostPotForm").hide();
	$(".inviteForm").hide();

	var userContainer = $(".user-container");
	$(document).on("click", "#potLuckCreate", creatPotLuck);
	$(document).on("click", ".createOne", submitPotLuck);
	$(document).on("click", ".inviteGuests", inviteGuests);
	$(document).on("click", ".invite", invite);

	var potLuckDate = $("#date");
	var potLuckTheme = $("#theme");
	var potLuckDestenation = $("#destination");

	var date = new Date();
	console.log(date);
	var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  	var fullDate = day + ' ' + monthNames[monthIndex] + ' ' + year;
  	console.log("-----fullDate----"+fullDate);

	function creatPotLuck(event){
		console.log("inside createPotlock");

		$(".potLuck-container").hide();
		$(".potLuck-FoodContainer").hide();
		$(".joinForm").hide();
		$(".fooInfo").hide();
		$(".inviteForm").hide();


		$(".hostPotForm").show();
		event.preventDefault();
	}
	function submitPotLuck(event){
		event.preventDefault();
		if (!potLuckDate.val().trim()) {
	      return;
	    }
	    console.log("inside create potluck(2)");
	    upsertPotLuck({
	      date: potLuckDate.val().trim(),
	      hostedAt: potLuckDestenation.val().trim(),
	      theme: potLuckTheme.val().trim(),
	      createdAtDateOnly: fullDate
	    });

	}
	var userInfo = $(".userInfo");
	function upsertPotLuck(potLuckData){
		console.log("inside upsert");
		$.post("/potLuck/potLuck", potLuckData)
			.done(function(data){
				console.log("***data***"+data.data);
				$(".hostPotForm").hide();
				
				var alertDiv = $("<div>");
				alertDiv.addClass("alert alert-information");
				alertDiv.text("Your Current PotLuck Id" +" " +data.data.id);		   
				userInfo.append(alertDiv);
				$(".alert-information").show();

			})
			.fail(function(err){
				console.log(err);
			});

	}

	// invites guests
	function inviteGuests(event){
		console.log("inside invitGuests");

		$(".joinForm").hide();
		$(".fooInfo").hide();
		$(".hostPotForm").hide();
		$(".potLuck-FoodContainer").hide();
		$(".potLuck-container").hide();

		$(".inviteForm").show();
		event.preventDefault();
	}

	var guestEmails = $("#emails");
	var idInvite = $("#idInvite");

	function invite(event){
		event.preventDefault();
		if (!guestEmails.val().trim()) {
	      return;
	    }
	    console.log("inside create potluck(2)");
	    upsertInvite({
	      guestEmails: guestEmails.val().trim(),
	      idInvite: idInvite.val().trim()
	    });
	}

	var bodyContainer = $(".body-container");

	function upsertInvite(guestData){
		console.log("inside upsert invite");
		$.post("/potLuck/potLuck/update", guestData)
			.done(function(data){
				$(".inviteForm").hide();
				if(data.data === "invalid potluck for the user"){

					var alertDiv = $("<div>");
					alertDiv.addClass("alert alert-danger");
					alertDiv.text("invalid potluck for the user");
						   
					bodyContainer.append(alertDiv);
					$(".alert-danger").show().delay(3000).fadeOut();

				}
			})
			.fail(function(err){
				console.log(err);
			});
		guestEmails.val("");
		idInvite.val("");
		$(".inviteForm").hide();
	}
}); 