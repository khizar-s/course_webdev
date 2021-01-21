## Brief
Implemented a code snippet from https://www.w3resource.com/javascript/form/email-validation.php and https://www.w3schools.com/js/js_validation.asp to validate form submission.

## Rationale
I chose these snippets specifically because they were one of the only pre-written code I had in mind for my website. The rest involved more work with APIs that would not be easily accesible everywhere. Having this script would help our personas correct mistakes they may make during the form submission in the contact page by providing meaningful information on the mistake they're making.

## Learning outcome
Learned how Javascript scripts properly work with HTML data to reach a goal and got an idea on how to approach the more complicated functions for the website. The original code looked like:
```
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
```

## What went well and what didn’t
Everything went well, the code was easy to find and understanding the semantics of the functions was straightforward. I did, however, have to modify my HTML file to include my function as on onClick function as I did not know about how buttons and functions worked previously.

## What I would do differently
I would probably try to embed some element of CSS into the functions to see how that would work out. For example, highlighting the invalid box in a form red.

## Explanation
The function validateForm uses a variable `x` which holds the value of the first name in the form. It checks if it is empty and alerts the user if so and returns false. The function ValidateEmail takes a parameter of `inputText` and uses a variable `mailformat` (which has the regex standard for emails) and compares the 2. In the case they are matching, it alerts the user about it and focuses the form box; if they don't match, the alert changes accordingly while still highlighting the form box.

## Critique
Both functions were quite well written, simple yet meaningful code. The use of regex was thoughtful and saved time parsing each character manually. The box focus feature is a great way of highlighting the point of error. The ValidateEmail code is not indented properly and as a result is not pleasant to look at. Both functions did not have any form of comments explaining what the code does.