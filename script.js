function check() {
    let count = 0;
    if(document.getElementById("paris").checked == true) {
        count++
    }

    if(document.getElementById("newdeli").checked == true) {
        count++
    }

    if(document.getElementById("seul").checked == true) {
        count++
    }

    if(document.getElementById("ankara").checked == true) {
        count++
    }

    if(document.getElementById("yohan").checked == true) {
        count++
    }

    if(document.getElementById("damask").checked == true) {
        count++
    }

    alert("Правильных ответов: " + count)
}