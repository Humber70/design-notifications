const users = [
  {
    name: "Mark Webber",
    time: "1m ago",
    action: "reacted to your recent post",
    image: "./assets/images/avatar-mark-webber.webp",
    isRead: false,
    role: "My first tournament today!",
  },

  {
    name: "Angela Gray",
    time: "5m ago",
    action: "Followed you",
    image: "./assets/images/avatar-angela-gray.webp",
    isRead: false,
    role: null,
  },

  {
    name: "Jacob Thompson",
    time: "1 day",
    action: "has joined your group",
    image: "./assets/images/avatar-jacob-thompson.webp",
    isRead: false,
    role: "Chess Club",
  },

  {
    name: "Rizky Hasanuddin",
    time: "5 days ago",
    action: "sent you a private message",
    image: "./assets/images/avatar-rizky-hasanuddin.webp",
    isRead: true,
    role: null,
  },

  {
    name: "Kimberly Smith",
    time: "1 weeks ago",
    action: "Comented on your picture",
    image: "./assets/images/avatar-kimberly-smith.webp",
    isRead: true,
    role: null,
    post: "./assets/images/image-chess.webp",
  },

  {
    name: "Nathan Peterson",
    time: "2 weeks ago",
    action: "reacted to your recent post",
    image: "./assets/images/avatar-nathan-peterson.webp",
    isRead: true,
    role: "5 end-game strategies to incrase your win rate",
  },

  {
    name: "Anna Kim",
    time: "2 weeks ago",
    action: "left the group",
    image: "./assets/images/avatar-anna-kim.webp",
    isRead: true,
    role: "Chess Club",
  },
];

const d = document;
const $fragment = d.createDocumentFragment();
const $container_users = d.querySelector(".container-users");
const $count = d.querySelector(".count");
const $btn_mark = d.getElementById("btn");

const message = `<div class="message">Hello Thanks for setting up the Chess Club. I have been a member for a few weeks now and i am already having lots of fun and improving my game</div>`;

const getUser = () => {
  let countNotification = 0;
  users.forEach((data) => {
    let { name, time, action, image, role, isRead } = data;

    //crando elementos del user
    let $user_cont = d.createElement("DIV");
    let $cont_name = d.createElement("DIV");
    let $image = d.createElement("IMG");
    let $info = d.createElement("P");
    let $time = d.createElement("SPAN");

    //isertando clases a los elementos
    $user_cont.classList.add("users");
    $cont_name.classList.add("user_name");
    $image.classList.add("profile");
    $time.classList.add("time");

    //Isertando data a los elements

    $image.src = `${image}`;
    $image.alt = `${image}`;
    $time.textContent = `${time}`;

    role === null
      ? ($info.innerHTML = `<span class="name">${name}</span> <span> ${action}</span>`)
      : ($info.innerHTML = `<span class="name">${name}</span> <span> ${action}</span> <span class="role">${role}</span>`);

    role == "Chess Club"
      ? $info.querySelector(".role").classList.replace("role", "role_chess")
      : role;

    !isRead
      ? ($info.innerHTML += `<span class="span"></span>`)
      : ($user_cont.style.backgroundColor = "white");
    !isRead ? (countNotification += 1) : countNotification;

    action.includes("message") ? ($time.innerHTML += message) : "";

    $cont_name.appendChild($info);
    $cont_name.appendChild($time);

    $user_cont.appendChild($image);
    $user_cont.appendChild($cont_name);

    action.includes("picture")
      ? ($user_cont.innerHTML += `<img class="img-post" src="${data.post}" alt="chess"/>`)
      : "";
    $fragment.appendChild($user_cont);
  });

  $count.textContent = countNotification;
  $container_users.appendChild($fragment);
};

function markAll() {
  document.querySelectorAll(".span").forEach((e) => e.classList.remove("span"));
  $count.textContent = 0;
  $container_users
    .querySelectorAll(".users")
    .forEach((e) => (e.style.backgroundColor = "white"));
}
$btn_mark.addEventListener("click", markAll);

getUser();
