# hm-country-details
To Get Major Country details like timezones,currencys etc.,


# Installing
npm install hm-country-details

# Example usage
var countries=require("hm-country-details")();

# To Get all country details 
console.log(countries.listAll());

# To Get country details by country id
console.log(countries.getCountryById("IN");

# To Get country details by country name
console.log(countries.getCountryByName("INDIA");
