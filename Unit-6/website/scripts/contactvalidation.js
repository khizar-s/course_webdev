function formValidate() {
    // extracts the input name from the form
    var name = document.forms["contact"]["name"].value;
    // extracts the input email from the form
    var mail = document.forms["contact"]["mail"].value;
    // extracts the comment from the form
    var comment = document.forms["contact"]["comment"].value;
    
    // checks for no name entry
    if (name == "") {
        // lets user know their mistake 
        alert("Please enter a name!");
        // shows the user which box to fix their mistake
        document.forms["contact"]["name"].focus();
        return false;
    }

    // checks for no email entry
    if (mail == "") {
        // lets user know their mistake 
        alert("Please enter an email address!");
        // shows the user which box to fix their mistake
        document.forms["contact"]["mail"].focus();
        return false;
    // checks for incorrect email syntax
    } else if (!(emailValidate(mail))) {
        // lets user know their mistake         
        alert("The email you have entered is not valid, please try again.");
        // shows the user which box to fix their mistake
        document.forms["contact"]["mail"].focus();
        return false;
    }

    // checks for no comment entry
    if (comment == "") {
        // lets user know their mistake
        alert("Please enter something to send to us.");
        // shows the user which box to fix their mistake
        document.forms["contact"]["comment"].focus();
        return false;
    }
}

function emailValidate(email) {
    // sets the typical standard for emails (characters followed by @ followed by characters)
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // checks for entered email matching the format
    if(email.match(mailformat)) {
        return true;
    } else {
        return false;
    }
}