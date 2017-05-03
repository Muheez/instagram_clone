(function(){

	var app = {
		notifList: document.querySelector(".notif-list"),
		notifLink: document.querySelector(".topbar .like-icon")
	}

	document.addEventListener('click', function(e) {
		if(!e.target.classList.contains("notif-list")) {
			app.hideNotifList();
		}
	}, true);

	app.toggleNotifList = function() {
		app.notifList.classList.toggle("notif-list-active");
	}

	app.hideNotifList = function() {
		app.notifList.classList.remove("notif-list-active");
	}

	app.notifLink.addEventListener('click', app.toggleNotifList);

}());