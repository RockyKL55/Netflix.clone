// ----------REST OPERATOR-----------


// let [x,y,...z] = [1,2,3,45,6,7,8,99,5,4,33,55]
// console.log(x);
// console.log(y);
// console.log(z);


// ------------SPREAD OPERATOR-------------


// let x = [1,23,33,44,55]
// let y = [66,77,88,99]
// let z = [...x,...y]
// console.log(z);


// let x= [11,22,33,44,55]
//  x=["abc"]
// let y = x
//  y.push(66)
//  console.log(y);
//  console.log(x);
 
//  x=["abc"]
//  console.log(x);
//  console.log(y);


// let x= [11,22,33,44]
// let y= [12,23,34,45]
 
//  y = [...x]  
// // y=x

// y.push(100)
// x.push(200)

// console.log(x);
// console.log(y);



// let add = (...args) => {
//     console.log(args);
// }
// add (10,20,30,40)




// let mobile = {
//     "name":"samsung",
//     "price": 200000,
//     "color": "black"
// }
// let{name:brand,price:cost,color:clr}=mobile
// console.log(cost);

// let arr = [10,20,30,40]
// let [x,y] = [10,20,30,40]
// console.log(x);
// console.log(y);


// let a = 1;
// let b = 2;
// [a,b] = [b,a]
// console.log(a);
// console.log(b);



//  let colors = ["red","blue","black","white"]
//  let [x, ,y] = colors

//  console.log(x);
//  console.log(y);
 


// let num = [1]

// let [a] = num
// let [b] = [100]
// console.log(a);
// console.log(b);


// let fruits = ["apple","mango","banana","grapes"]
// let [first_fruit,...other_fruits] = fruits

// console.log(first_fruit);
// console.log(other_fruits);


// let nestedArr = [1,[2,3],4]
// let [a,[b,c],d] = nestedArr

// console.log("a =",a);
// console.log("b =",b);
// console.log("c =",c);
// console.log("d =",d);

// let entries = [["name","rocky"] , ["age",25] , ["city","tumkur"]];
// for(let [key,value] of entries){
//     console.log(`${key}:${value}`);
// }



// let student = ["amit","rahul","suhas","rocky"]

// let [x,...y] = student
// console.log(x);
// console.log(`${y}`);


// function getData(){
//     return [1,2,3,4];
// }
// let [first,second] = getData()
// console.log(first);
// console.log(second);


//  let colors = ["red","blue","black","white"]
//  let [a,b,c,d] = colors;
//   [a,d] = [d,a]

//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);


// function printColors([first,second,third]){
//     console.log(first,second,third);
// }
//     let colors = ["Red","blue","green"];
//     printColors(colors)


// let letters = ["a","b","c","d"]
// let [x, ,y] = letters ;

// console.log(x);
// console.log(y);

