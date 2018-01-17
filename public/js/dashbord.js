$(document).ready(function() {
	$(.hostPotForm).hide();
	var db = require('../models');
	var userContainer = $(".user-container");
	$(document).on("click", "button.potLuckInfo", showAllPotLucks);
	$(document).on("click", "button.potLuckCreate", creatPotLuck);
	$(document).on("click", "button.inviteGuests", inviteGuests);
});