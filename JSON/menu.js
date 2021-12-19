function hideAllMenu(list) {
            document.querySelector('#burger').style.display = "none"
            document.querySelector('#pizza').style.display = "none"
            document.querySelector('#cakes').style.display = "none"
            document.querySelector('#icecream').style.display = "none"
            document.querySelector('#drink').style.display = "none"
            document.querySelector('#nav-burger').classList.remove("active")
            document.querySelector('#nav-pizza').classList.remove("active")
            document.querySelector('#nav-cakes').classList.remove("active")
            document.querySelector('#nav-icecream').classList.remove("active")
            document.querySelector('#nav-drink').classList.remove("active")
            //#Hiện menu được chọn
            list.style.display = "block"
}
//# KHỞI TẠO
hideAllMenu(document.getElementById('burger'))
document.querySelector('#nav-burger').classList.add("active")
//
document.getElementById('nav-burger').addEventListener('click', () => {
            hideAllMenu(document.getElementById('burger'))
            document.querySelector('#nav-burger').classList.add("active")
});
document.getElementById('nav-pizza').addEventListener('click', () => {
            hideAllMenu(document.getElementById('pizza'))
            document.querySelector('#nav-pizza').classList.add("active")
});

document.getElementById('nav-cakes').addEventListener('click', () => {
            hideAllMenu(document.getElementById('cakes'))
            document.querySelector('#nav-cakes').classList.add("active")
});
document.getElementById('nav-icecream').addEventListener('click', () => {
            hideAllMenu(document.getElementById('icecream'))
            document.querySelector('#nav-icecream').classList.add("active")
});
document.getElementById('nav-drink').addEventListener('click', () => {
            hideAllMenu(document.getElementById('drink'))
            document.querySelector('#nav-drink').classList.add("active")
});