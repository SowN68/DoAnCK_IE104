function hideAllMenu(list) {
  document.querySelector("#burger").style.display = "none";
  document.querySelector("#pizza").style.display = "none";
  document.querySelector("#cakes").style.display = "none";
  document.querySelector("#icecream").style.display = "none";
  document.querySelector("#drink").style.display = "none";
  document.querySelector("#nav-burger").classList.remove("active");
  document.querySelector("#nav-pizza").classList.remove("active");
  document.querySelector("#nav-cakes").classList.remove("active");
  document.querySelector("#nav-icecream").classList.remove("active");
  document.querySelector("#nav-drink").classList.remove("active");
  //#Hiện menu được chọn
  list.style.display = "block";
}
//# KHỞI TẠO
hideAllMenu(document.getElementById("burger"));
document.querySelector("#nav-burger").classList.add("active");
//
document.getElementById("nav-burger").addEventListener("click", () => {
  hideAllMenu(document.getElementById("burger"));
  document.querySelector("#nav-burger").classList.add("active");
});
document.getElementById("nav-pizza").addEventListener("click", () => {
  hideAllMenu(document.getElementById("pizza"));
  document.querySelector("#nav-pizza").classList.add("active");
});

document.getElementById("nav-cakes").addEventListener("click", () => {
  hideAllMenu(document.getElementById("cakes"));
  document.querySelector("#nav-cakes").classList.add("active");
});
document.getElementById("nav-icecream").addEventListener("click", () => {
  hideAllMenu(document.getElementById("icecream"));
  document.querySelector("#nav-icecream").classList.add("active");
});
document.getElementById("nav-drink").addEventListener("click", () => {
  hideAllMenu(document.getElementById("drink"));
  document.querySelector("#nav-drink").classList.add("active");
});

//COUNTDOWN TIMER
var countDownDate = new Date("Dec 30, 2021 23:59:59").getTime();

var time = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;
  var day = document.getElementById("day");
  var hour = document.getElementById("hour");
  var min = document.getElementById("min");
  var sec = document.getElementById("sec");
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = String(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  var minutes = String(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  var seconds = String(Math.floor((distance % (1000 * 60)) / 1000)
  ).padStart(2, "0");
  day.innerText = days + "d";
  hour.innerText = `${hours}`;
  min.innerText = `${minutes}`;
  sec.innerText = `${seconds}`;
  //document.getElementById("countdown-timer").innerHTML = days + "d " + hours + " : "
  +minutes + " : " + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "EXPIRED";
  }
}, 1000);
