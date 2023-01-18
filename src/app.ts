const countryDiv:HTMLDivElement = document.querySelector('.display-country') as HTMLDivElement;
const allCountries:HTMLDivElement = document.querySelector('.display-All-countries') as HTMLDivElement;
const countryNameInput:HTMLInputElement = document.querySelector('.countryNameInput') as HTMLInputElement;
const searchName:HTMLButtonElement = document.querySelector('#countryName') as HTMLButtonElement;

searchName.addEventListener('click', function(event){
    event.preventDefault();
    let url: string = "https://restcountries.com/v3.1/name/" + countryNameInput.value;
    countryDiv.innerHTML = "";
    getSearchedCountry(url); 
});

async function getSearchedCountry(x:string) {
    const response = await fetch(x);
    const data = await response.json();
    showCountryInfo(data);
};

function showCountryInfo(pickedCountry:any){
    const countryInfo = document.createElement('div');

    const countryOfficial = document.createElement('p')
    countryOfficial.innerText = pickedCountry[0].name.official;

    const countryCap = document.createElement('p');
    countryCap.innerText = pickedCountry[0].capital

    const countryPop = document.createElement('p');
    countryPop.innerText = pickedCountry[0].population

    countryInfo.append(countryOfficial, countryCap, countryPop);
    countryDiv.append(countryInfo);
};

async function getAll() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    data.forEach((country: any) => {
        const countryCard = document.createElement("inline-block");
        countryCard.className = "countryBoxes";
        countryCard.innerHTML = `${country.name.official}`;
        allCountries.append(countryCard);
    });
};
getAll();