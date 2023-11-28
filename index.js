const getCountryByName = async (countryName) => {
    // fetch data from REST countries API
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const data = await response.json();
    // getting one country as opposed to an array of countries
    const country = data[0];
    console.log(country);
    

    const displayCountry = document.getElementById("country-info");
    const displayCountryName = document.createElement('p')
    displayCountryName.innerText =`country: ${country.name.common}`
    displayCountry.appendChild(displayCountryName);


    const countryCapital= document.createElement('h1');
    countryCapital.innerText=`capital: ${country.capital[0]}`
    countryCapital.appendChild(countryCapital);


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