"use strict";

document.querySelector("#gernerateOutput").addEventListener("click", generateInput);
// not done
// let firstInput = document.querySelector("#firstInput").value;
// let choice = document.querySelector("#choice").value;
// let output = document.querySelector("#output");
// let stringResult = document.createElement("li");
// let stringResult;
// let generateOutput;

// init();
// function init() {
   
//     generateInput();
// }

function generateInput() {
    let firstInput = document.querySelector("#firstInput").value;
    let choice = document.querySelector("#choice").value;
    let output = document.querySelector("#output");
    let stringResult = document.createElement("li");
    console.log(firstInput);
    console.log(choice);
    console.log(output);  


    // input and choice
    if (choice === "1") {
        
        const firstName = firstInput;
        const firstLetter = firstName.substring(0,1).toUpperCase();
        const rest = firstName.substring(1).toLowerCase();
        console.log(firstLetter+rest);

        // stringResult = firstLetter + rest;
        console.log(stringResult);
        stringResult.textContent = firstLetter + rest;
        output.appendChild(stringResult);

    } else if (choice === "2") {
        const fullName = firstInput;
        const firstSpace = fullName.indexOf(" ");
        // const lastSpace = fullName.lastIndexOf(" ");

        const firstName = fullName.substring(0,firstSpace);
        console.log(firstName);

        // stringResult = firstName;
        console.log(stringResult);
        stringResult.textContent = firstName;
        output.appendChild(stringResult);

    } else if (choice === "3") {
        const fullName = firstInput.split(' ');
        const firstName = fullName[0];
        const firstNameLength = firstName.length;
        console.log(firstNameLength);

        // stringResult = firstNameLength;
        console.log(stringResult);
        stringResult.textContent = firstNameLength;
        output.appendChild(stringResult);

    } else if (choice === "4") {
        // position???
        const fullName = firstInput;
        const firstSpace = fullName.indexOf(" ");
        const lastSpace = fullName.lastIndexOf(" ");

        const firstName = fullName.substring(0,firstSpace);
        const middleName = fullName.substring(firstSpace,lastSpace);
        const lastName = fullName.substring(lastSpace);
        console.log(middleName);

        // stringResult = middleName;
        console.log(stringResult);
        stringResult.textContent = middleName;
        output.appendChild(stringResult);

    } else if (choice === "5") {
        const fileName = firstInput;
        const png = fileName.endsWith(".png")
        const jpg = fileName.endsWith(".jpg")
        // not done
        if (png == true) {
            png = "this is an png";
            
            console.log(stringResult);
            stringResult.textContent = png;
            output.appendChild(stringResult);
        } else if (jpg == true) {
            jpg = "this is an jpg";
            console.log(stringResult);
            stringResult.textContent = jpg;
            output.appendChild(stringResult);
        }

        // stringResult =

    } else if (choice === "6") {
        const password = firstInput;
        const hidden = "*";
        // const passwordLength = password.length;
        // const hide = password.replaceAll("*");
        const hide = hidden.repeat(password.length);
        // not done

        // stringResult =
        console.log(stringResult);
        stringResult.textContent = hide;
        output.appendChild(stringResult);
        

    } else if (choice === "7") {
        const name = firstInput;
        const firstPart = name.substring(0,2).toLowerCase();
        const thirdLetter = name.substring(2,3).toUpperCase();
        // 1- what? slice??
        const rest = name.substring(3).toLowerCase();
        console.log(firstPart+thirdLetter+rest);

        // stringResult = firstPart + thirdLetter + rest;
        console.log(stringResult);
        stringResult.textContent = firstPart + thirdLetter + rest;
        output.appendChild(stringResult);

    } else if (choice === "8") {
        const input = firstInput;
        const hyphen = input.includes("-");
        const space = input.includes(" ");
        
        if (hyphen == true) {

        } else if (space == true) {
            
        }

        // not done

        // stringResult =
    
    }  
 

    // output.appendChild(stringResult);
}


    

