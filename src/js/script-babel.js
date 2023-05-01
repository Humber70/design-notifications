"use strict";

var users = [{
  name: "Mark Webber",
  time: "1m ago",
  action: "reacted to your recent post",
  image: "assets/images/avatar-mark-webber.webp",
  isRead: false,
  role: "My first tournament today!"
}, {
  name: "Angela Gray",
  time: "5m ago",
  action: "Followed you",
  image: "assets/images/avatar-angela-gray.webp",
  isRead: false,
  role: null
}, {
  name: "Jacob Thompson",
  time: "1 day",
  action: "has joined your group",
  image: "assets/images/avatar-jacob-thompson.webp",
  isRead: false,
  role: "Chess Club"
}, {
  name: "Rizky Hasanuddin",
  time: "5 days ago",
  action: "sent you a private message",
  image: "assets/images/avatar-rizky-hasanuddin.webp",
  isRead: true,
  role: null
}, {
  name: "Kimberly Smith",
  time: "1 weeks ago",
  action: "Comented on your picture",
  image: "assets/images/avatar-kimberly-smith.webp",
  isRead: true,
  role: null,
  post: "assets/images/image-chess.webp"
}, {
  name: "Nathan Peterson",
  time: "2 weeks ago",
  action: "reacted to your recent post",
  image: "assets/images/avatar-nathan-peterson.webp",
  isRead: true,
  role: "5 end-game strategies to incrase your win rate"
}, {
  name: "Anna Kim",
  time: "2 weeks ago",
  action: "left the group",
  image: "assets/images/avatar-anna-kim.webp",
  isRead: true,
  role: "Chess Club"
}];
var d = document;
var $fragment = d.createDocumentFragment();
var $container_users = d.querySelector(".container-users");
var $count = d.querySelector(".count");
var $btn_mark = d.getElementById("btn");
var message = "<div class=\"message\">Hello Thanks for setting up the Chess Club. I have been a member for a few weeks now and i am already having lots of fun and improving my game</div>";
var getUser = function getUser() {
  var countNotification = 0;
  users.forEach(function (data) {
    var name = data.name,
      time = data.time,
      action = data.action,
      image = data.image,
      role = data.role,
      isRead = data.isRead;

    //crando elementos del user
    var $user_cont = d.createElement("DIV");
    var $cont_name = d.createElement("DIV");
    var $image = d.createElement("IMG");
    var $info = d.createElement("P");
    var $time = d.createElement("SPAN");

    //isertando clases a los elementos
    $user_cont.classList.add("users");
    $cont_name.classList.add("user_name");
    $image.classList.add("profile");
    $time.classList.add("time");

    //Isertando data a los elements

    $image.src = "".concat(image);
    $image.alt = "".concat(image);
    $time.textContent = "".concat(time);
    role === null ? $info.innerHTML = "<span class=\"name\">".concat(name, "</span> <span> ").concat(action, "</span>") : $info.innerHTML = "<span class=\"name\">".concat(name, "</span> <span> ").concat(action, "</span> <span class=\"role\">").concat(role, "</span>");
    role == "Chess Club" ? $info.querySelector(".role").classList.replace("role", "role_chess") : role;
    !isRead ? $info.innerHTML += "<span class=\"span\"></span>" : $user_cont.style.backgroundColor = "white";
    !isRead ? countNotification += 1 : countNotification;
    action.includes("message") ? $time.innerHTML += message : "";
    $cont_name.appendChild($info);
    $cont_name.appendChild($time);
    $user_cont.appendChild($image);
    $user_cont.appendChild($cont_name);
    action.includes("picture") ? $user_cont.innerHTML += "<img class=\"img-post\" src=\"".concat(data.post, "\" alt=\"chess\"/>") : "";
    $fragment.appendChild($user_cont);
  });
  $count.textContent = countNotification;
  $container_users.appendChild($fragment);
};
function markAll() {
  document.querySelectorAll(".span").forEach(function (e) {
    return e.classList.remove("span");
  });
  $count.textContent = 0;
  $container_users.querySelectorAll(".users").forEach(function (e) {
    return e.style.backgroundColor = "white";
  });
}
$btn_mark.addEventListener("click", markAll);
getUser();
