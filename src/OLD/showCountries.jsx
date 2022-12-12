import React from "react";
import GetCountries from "./getCountries";
export default class CountriesList extends React.Component{
 

    render() {

        let countries = GetCountries()
        return (
            <ul>
                {countries.map((c) => <li> {c.name}- {c.code}    </li>)}

            </ul>

        )
    }


}