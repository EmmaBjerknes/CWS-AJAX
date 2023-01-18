const countryDiv:HTMLDivElement = document.querySelector('.display-country') as HTMLDivElement;

const countryName:HTMLInputElement = document.querySelector('.countryNameInput') as HTMLInputElement;

const searchName:HTMLButtonElement = document.querySelector('#countryName') as HTMLButtonElement;

let url: string = "https://restcountries.com/v3.1/";

//let countryArray:object[] = [];


searchName.addEventListener('click', function(event){
    event.preventDefault();
    let valueOfInput = countryName.value;
    url += "name/" + valueOfInput; 
    console.log(url)
    foo(url); 
});

async function foo(x:string) {
    const response = await fetch(x);
    const data = await response.json();
    //countryArray = await data;
    myCountry(data);
}

function myCountry(pickedCountry:any){
    console.log(typeof pickedCountry);
    console.log(pickedCountry[0].name.common);
}


//const urlAll: string = "https://restcountries.com/v3.1/all";