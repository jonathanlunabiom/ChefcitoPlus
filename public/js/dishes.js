// const fetchData = async () => {
//     const data = "https://api.spoonacular.com/recipes/complexSearch?apiKey=b162409610ec4b79aee5fcaee180b7b0";
//     const res = fetch(data,{
//         method: 'GET',
//     })
//     res.ok ? console.log(res) : console.error(err.message)
// }


// fetchData


// async function fetchData (){
//     try{
//         const data = "https://api.spoonacular.com/recipes/complexSearch?apiKey=b162409610ec4b79aee5fcaee180b7b0";
//         const res = await fetch(data,{
//             method: 'GET',
            
//         })
//         const datajson = res.json();
    
//         console.log(datajson)
//     }catch(err){
//         console.log(err.message)
//     }
// }


fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=b162409610ec4b79aee5fcaee180b7b0") //1
  .then((response) => response.json()) //2
  .then((user) => {
    console.log(user.results[0].image); //3
});

// fetchData();

// const fetchData async () => {
//     const address = fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=b162409610ec4b79aee5fcaee180b7b0")
//     const response = address.json();
//     console.log(response)
// } 

// const address = fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=b162409610ec4b79aee5fcaee180b7b0")
//   .then((response) => response.json())
//   .then((res) => {
//     return res;
// });

// console.log(address);