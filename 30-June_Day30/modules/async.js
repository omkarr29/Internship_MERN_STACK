//promises
// function login(email, password) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Email and password have not been entered.");
//         }, 4000);
//     });
// }

// login("og786755@gmail.com", "omS@0611")
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// console.log("Login request sent...");


function login(email, pass) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (
                email === "og786755@gmail.com" &&
                pass === "omS@0611"
            ) {
                resolve(" Login Successful");
            } else {
                reject(" Invalid Email or Password");
            }

        }, 3000);
    });
}

login("og786755@gmail.com", "omS@0611")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

console.log("Login request sent...");

// function login(email, pass) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (email === "og786755@gmail.com" && pass === "omS@0611") {
//                 resolve(" Login Successful");
//             } else {
//                 reject("Invalid Email or Password");
//             }
//         }, 3000);
//     });
// }

// // Take input from user
// let email = prompt("Enter your email:");
// let pass = prompt("Enter your password:");

// console.log("Login request sent...");

// login(email, pass)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });