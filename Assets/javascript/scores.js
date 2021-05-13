function printHighScores() {
    var highScores = JSON.parse(localStorage.getItem("highScores"))
    
    highScores.sort(function (a, b) {
        return b.score - a.score
    })

    highScores.forEach(score => {
        var li=document.createElement("li")
        li.textContent=score.initials + "'s " + " Score: " + timeLeft.score
        var ol=document.getElementById("score-list")
        ol.appendChild(li)
    });
}

function clearHighScores () {
    window.localStorage.removeItem("highScores")
    window.location.reload()
}
document.getElementById("clear").onclick=clearHighScores

printHighScores()