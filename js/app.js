(function(){

	var app = {
		notifList: document.querySelector(".notif-list"),
		notifLink: document.querySelector(".topbar .like-icon"),
		userPost: document.querySelectorAll(".user-post"),
		postView: document.querySelector(".view-post"),
		editProfileView: document.querySelector(".edit-profile-view"),
		editProfileButton: document.querySelector(".user-profile .edit-profile"),
		closePostViewButton: document.querySelector(".view-post .close-view"),
		closeEditProfileViewButton: document.querySelector(".edit-profile-view .close-view"),
		likeButton: document.querySelectorAll(".post-actions .like-post")
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

	app.hidePostView = function() {
		app.postView.classList.remove('view-post-active');
	}

	app.showPostView = function() {
		app.postView.classList.add('view-post-active');
	}

	app.showEditProfileView = function() {
		app.editProfileView.classList.add('active');
	}

	app.hideEditProfileView = function() {
		app.editProfileView.classList.remove('active');
	}

	app.userPostEvents = function(post) {
		post.addEventListener('mouseover', function() {
			this.classList.add('user-post-hover');
		});

		post.addEventListener('mouseout', function() {
			this.classList.remove('user-post-hover');
		});

		post.addEventListener('click', function() {
			app.showPostView();
			console.log('works');
		});
	}

	app.likeButtonEvent = function(button) {
		button.addEventListener('click', function() {
			this.classList.toggle('active');
		})
	}

	for(var i = 0, len = app.userPost.length; i < len; i++) {
		app.userPostEvents(app.userPost[i]);
	}

	for(var i = 0, len = app.likeButton.length; i < len; i++) {
		app.likeButtonEvent(app.likeButton[i]);
	}

	app.populateUserPost();

	app.notifLink.addEventListener('click', app.toggleNotifList);

	app.closePostViewButton.addEventListener('click', function(){
		app.hidePostView();
	});

	app.editProfileButton.addEventListener('click', function() {
		app.showEditProfileView();
	});

	app.closeEditProfileViewButton.addEventListener('click', function() {
		app.hideEditProfileView();
	});

	// app.postView.addEventListener('click', function(e) {
	// 	if(!e.target.classList.contains('post-view')) {
	// 		app.hidePostView();
	// 	}
	// }, false);

}());