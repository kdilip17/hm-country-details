# hm-country-details
To Get Major Country details like timezones,currencys etc.,


# Installing
npm install hm-country-details

# Example usage
var countries=require("hm-country-details")();

# To Get all country details 
console.log(countries.listAll());

# To Get country details by country id
console.log(countries.getCountryById("IN"));

# Response
{
    "id": "IN",
    "currencyId": "INR",
    "currencys": [
      {
        "id": "INR",
        "name": "INR",
        "isDefault": true
      }
    ],
    "dialCode": "91",
    "isActive": true,
    "name": "India",
    "tzId": "Asia/Kolkata",
    "tzs": [
      {
        "id": "Asia/Kolkata",
        "name": "Asia/Kolkata",
        "isDefault": true
      }
    ]
  }

# To Get country details by country name
console.log(countries.getCountryByName("INDIA");
