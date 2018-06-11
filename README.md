# Beep Boop Application

#### An application that allows users to enter in a number, and given the number will return a certain response, 6/8/18

#### By **Devin Mounts**

## Description

This website allows a user to enter in a number, for numbers containing a zero the program will return "Beep", for numbers containing 1 the program returns "Boop" and for numbers divisible by 3 the program returns "I'm sorry Dave, I can't do that".


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program creates an array of numbers from zero to user input**| User Input: "10" | Output: "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" |
| **Program replaces numbers divisible by 3 with "I'm sorry Dave, I'm afraid I can't do that"** | Input: "3" | Output: "I'm sorry Dave, I'm afraid I can't do that" |
| **Program replaces a multiple digit number containing a 0 with "Beep"**| User Input: "20" | Output: "Beep" |
| **Program replaces 1 with "Boop".**| Input: "1" | Output: "Boop" |
| **Program replaces 0 with "Beep"**| User Input: "0" | Output: "Beep" |
| **Program replaces a multiple digit number containing 1 with "Boop".**| Input: "10" | Output: "Boop" |
| **Program replaces a multiple digit number containing 0 with "Beep".**| Input: "10" | Output: "Boop" |
| **Program replaces all numbers divisible by 3, all numbers containing 1 and all numbers containing 0  from the user's array with aforementioned responses.**| User Input: "10" | Output: "["I'm sorry Dave, I'm afraid I can't do that", 1, 2 ,"I'm sorry Dave, I'm afraid I can't do that", 4, 5, "I'm sorry Dave, I'm afraid I can't do that", 7, 8, "I'm sorry Dave, I'm afraid I can't do that, "Boop"]" |



## Setup/Installation Requirements

1. Clone repository https://github.com/devinmounts/beepboop from Git Hub using git clone in the terminal.
2. Open Index.html in a web browser.

## Known Bugs
* Zero is included in numbers divisible by 3.

## Technologies Used
* Javascript
* JQuery
* CSS
* HTML

## Support and contact details

_Email Devin for questions comments or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **_Devin Mounts_**
