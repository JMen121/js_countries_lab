const getCountryByName = async (countryName) => {
    // fetch data from REST countries API
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const data = await response.json();
    //You are retrieving an array
    const country = data[0];
    console.log(country);
    
 // This line of code is using JavaScript to get a reference to an HTML element 
  //with the id "country-info" and store it in a variable named displayCountry.
    const displayinfo = document.getElementById("country-info");

    const displayCountryName = document.createElement('p')
    displayCountryName.innerText =`Country: ${country.name.common}`
    displayinfo.appendChild(displayCountryName);

    const countryCapital= document.createElement('h1');
    countryCapital.innerText=`capital: ${country.capital[0]}`
    displayinfo.appendChild(countryCapital);

    const languages = document.createElement('h2');
    const arrayLanguage = Object.values(country.languages); //object.values gets the value out country.languages- this is an array
    const languagesString = arrayLanguage.join(", ");
    languages.innerText = `Languages: ${languagesString}`;
    displayinfo.appendChild(languages);

    const countryPopulation = document.createElement('h3');
    countryPopulation.innerText=`Population: ${country.population}`
    displayinfo.appendChild(countryPopulation);


    

// getting one country as opposed to an array of countries
}
getCountryByName ("ghana"); 



// const getDetailsAboutCountry = (()=>{



//I am creating a paragraph
// const capital = document.createElement('p');
// //innertext is basically text content
// capital.innerText= 'Capital:${country.capital[0]}';
//})




//  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then((response)=>{
//        return response.json();
//     })
//     .then((data)=>{
//       console.log(data);
//     })
//     const country = data[0];  //grabs the first country
//     console.log(country);   