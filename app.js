function askUserName () {
    var userName = prompt("What is your name?");
    document.write("<h2>" + "Welcome " + userName + "</h2>");
    return userName();
}

function continueName (username) {
    confirm(userName + "I am going to ask you a series of questions");
}

function getAgeQuestion () {
    var ageQuestion;
    ageQuestion = prompt("Sorry we gotta ask agin. How old are you?")
    return ageQuestion();
}

function checkAge (getAgeQuestion) {
    if(getAgeQuestion >= 21) {
        alert("Congratulations, old timer!")
    } else {
        alert("Sorry, you are still a baby!");
    }
}

function beerCheck (getAgeQuestion) {
    if (getAgeQuestion >= 21) {
        var beerCheck = prompt ("Yes or No? Do you like beer?")

        if (beerCheck === "Yes") {
            alert("Let me show you my wares!");
        } else if (beerCheck === "No") {
            alert ("No worries, I bet we can find you a beer you like. If all else fails we have wine and cider.")
        }else {
            alert("Are you mental? It's a simple "Yes" or "No" is not that hard.");
        }
    }
}

getAgeQuestion();
checkAge(getAgeQuestion);
beerCheck(getAgeQuestion);

