window.onload = setCalendarSize;
window.onresize = setCalendarSize

calendar = document.getElementById("calendar")


function setCalendarSize() {
    console.log(window.screen.width)
    if (window.screen.width < 800) {
        console.log("asdfasdf")
        calendar.style.width = "100%";
    } 

    var width = calendar.clientWidth;
    // console.log(width);
    var height = width / (8/6);
    calendar.style.height = height + "px";
}
