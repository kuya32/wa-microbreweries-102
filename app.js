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






var age = prompt('Sorry we gotta ask again. How old are you?')
var greeting;

if (age > 20) {
    greeting = 'Congratulations, your old timer!';
    alert(greeting);
} else {
    greeting = 'Sorry, you\re still a baby!';
    alert(greeting);
}

/*   
function checkLight(lightSideQuestion){
    if(lightSideQuestion === 'yes'){
        alert('I am sorry.  Dark Lords do not take kindly to Jedi!')
    } else {
        alert('GOOD GOOD. I can feel the dark side flowing through you!');
    }
}

function adopt(lightSideQuestion){
    if(lightSideQuestion === 'no'){
        var adopt = prompt('Are you ready to adopt a Sith Lord?');

        if(adopt === 'yes'){
            alert('Great. An adoption specialist will be assigned shortly');
        } else if(adopt === 'no'){
            alert('That is ok.  You may need to build up your tolerance for dark side energies.  Come back when you are ready.');
        } else {
            alert('Are you mental?  a simple "yes" or "no" is not that hard');
        }
    }
}

var lightSideQuestion = lightSide();
checkLight(lightSideQuestion);
adopt(lightSideQuestion); */