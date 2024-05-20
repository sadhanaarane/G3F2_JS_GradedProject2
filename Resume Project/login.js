window.history.forward();
function noBack() {
    window.history.forward();
}

sessionStorage.setItem("credentials", JSON.stringify({ name: ["sadhana", "sandip"], passcode: ["sadhana", "sandip"] }))
var res = sessionStorage.getItem("credentials")
console.log(res)

function validate() {

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    var cred = JSON.parse(res)

    cred.name.map((item, ind) => {
        if (username === item && password === cred.passcode[ind]) {
            location.href = "resume.html"
        }
        else {
            document.getElementById("error").innerHTML = "Invalid Username / Password"
        }
    })
}