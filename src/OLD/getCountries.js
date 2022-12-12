import React from "react";
class Country {
    constructor(name,code,capital) {
        this.name = name;
        this.code = code;
        this.capital = capital;
    }
}
export default function GetCountries(){
    const countries= []
    countries.push(new Country("USA","52093837","Washington"))
    countries.push(new Country("Ukraina","62099937","Kiev"))
    countries.push(new Country("Poland","34138230","Warshawa"))
    return countries
   //return <h2> from get</h2>
}
