# PasswordGenerator

## Usage
This is a password generator that lets the user pick the parameters of what the password can be. The parameters are length(between 8-128), uppercase letters, lowercase letters, numbers, and special characters. When prompted to the user will type in a number between 8 and 128 to define the length of the password that will be generated. Then there will be multiple confirms if you want uppercase letters, lowercase letters and so on. Once all the parameters are set in the text area a password will be generated.


## Three Main Functions
For this assignment for me it was focused around three main functions that made everything run. A function for the length of the password inputed by the user. A function that confirms what type of characters that they want to use. And finally a function to take all the information from the previous functions and create the password.

## Length
For the first function it was fairly simple. I made a variable equa to the prompt when asked about the length of the password. Then a if else statement was used to make sure that the password was within 8 and 128 characters, if not it would restart the whole function till it got and answer within the parameters.

With this function I now have the idea for how long the array of the new password will be.

## Choices
Before any of the major choices that needed to be made. I made arrays for all of the choices that could be made so that I can reference them later.

For the second function it was 4 confirms to figure out which type of characters they wanted to use. The confirms were attached to variables. The variables were then checked for their boolean value. When all false then it would restart the whole function till at least one of the values were true. After that it would take all of the true variables and then put that variables appropriate array into an empty array.

## New Password
Now that we have the length of the password we want and all the characters that can be put into the password I made a for loop. The loop will keep looping as long as the length of the password and it will choose a random index from the array at the arrays length.

## Credits
Was one of the more struggling assignments thus far and I would not have been able to finish it as fast if it wasn't for:
Denis Molloy
