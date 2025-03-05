

function fire() {
    let result = document.getElementById("input").value%2
    if (result == 0) {
        document.getElementById("output").innerText = "Even"
    } else {
       document.getElementById("output").innerText ="Odd"
    }
}