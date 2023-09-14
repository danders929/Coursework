/*
Psuedocode: 
1 create a constant string and assign it a message.
2 create variable integer 1 that will be calculated by multiplying 5 and 2
3 create variable integer 2 that will be calculated by adding 27 and 13
4 create variable integer 3 that will be calculated by dividing 99 by 3 and then adding 6
5 add popup message that notifies user using the contents of the string created
*/

//Create string to display a message to the user

const usrMsg = "You have received this message because you have been chose to open an important vault. Here is the secret combination:"

//Creates three variables that will be calculated uniquely

let num1 = (5 * 2)
let num2 = (27 + 13)
let num3 = (99 / 3 + 6)

//Creates a popup dialog with message + combination
alert(usrMsg + " " + num1 + ":" + num2 + ":" + num3)