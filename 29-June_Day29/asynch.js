 // //Default parameters

// function showDetails(name="rahul"){
//     console.log(name);
    
// }
// showDetails();

// //Rest Operator

// function collect(...a){
//     console.log(a);
        
// }
// collect(10,20,30,40,50)

// //spraed operator

// let arr=[11,22,33,44,55];
// console.log(...arr);

//destructuring 
// let arr=[11,22,33,44,55,66];
// let[a,b,c,d,e,f]=arr;

// console.log(a);


// let obj={
//     key1:"val1",
//     key2:"val2",
//     key3:"val3"
// };

// console.log(obj.key3);
// let {key1,key2,key3}=obj;
// console.log(key3);

let arr1=[10,[20,30],[50,60],[70,80]]
console.log(arr1);

let [x,[a,b],[c,d],[e,f]]=arr1;
console.log(f);

let obj={
    key1:"val1",
    key2:{
            key3:"val3",
            key4:"val4"
    }
}

let {key1,key2,key3,key4}=obj;

console.log(key2.key4);






