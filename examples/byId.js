/**
 * Created by dilip on 7/8/16.
 */

const countries=require("../hm-country-details")();

var countryDetails=countries.getCountryById("IN")

console.log(countryDetails)