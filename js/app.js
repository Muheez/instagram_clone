(function(){

	var app = {
		notifList: document.querySelector(".notif-list"),
		notifLink: document.querySelector(".topbar .like-icon"),
		userPost: document.querySelectorAll(".user-post")
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

	app.populateUserPost = function() {
		for(var i = 0, len = app.userPost.length; i < len; i++) {
			app.userPost[i].style.background = "url('img/img" + i + ".jpg')";
			app.userPost[i].style.backgroundSize = "cover";
			app.userPost[i].style.backgroundPosition = 'center';
		}
	}

	app.userPostHoverEvent = function(post) {
		post.addEventListener('mouseover', function() {
			this.classList.add('user-post-hover');
		});

		post.addEventListener('mouseout', function() {
			this.classList.remove('user-post-hover');
		});
	}

	for(var i = 0, len = app.userPost.length; i < len; i++) {
		app.userPostHoverEvent(app.userPost[i]);
	}

	app.populateUserPost();

	app.notifLink.addEventListener('click', app.toggleNotifList);

}());