import React, { useEffect, useState } from "react";
import axios from "axios";

import Chart from '../components/Chart';

function Home() {
    const [countryData, setCountryData] = useState([]);
    const country = 'US';
    const [countries, setCountries] = useState(``);

    useEffect(() => {
        // make request to get api data and store in countryData
        axios.get(`https://api.covid19api.com/summary`)
            .then(function (response) {
                // handle success
                setCountryData(response.data);
            })
             .catch(function (error) {
                // handle error
                console.log(error);
            });        
    }, [country]); //once country is loaded

    useEffect(() => {
        if(countryData.Countries) { //once countryData is loaded
            setCountries(countryData.Countries); //creates array of all country data

        }
    }, [countryData]);


function isUS(data) {  //function to find US data
    return data.CountryCode === 'US';
  }
const usData = countries&&countries.find(isUS); //making sure countries is loaded

    //used to style the color of recovered div background
    const totalCases = usData.TotalConfirmed; //number value of total confirmed
    const totalRecovered = usData.TotalRecovered; //number value of total recovered
    const greenFill = (totalRecovered / totalCases * 15).toFixed(2); //rounds to the nearest hundredth

    return (
         <div className="mainContent">
            <div className="covidData">
                <a href="/cases">
                    <div className="cases">
                        <h3>Total Number of Cases in {country}</h3>
                        <h1 className="numCase">{usData.TotalConfirmed} </h1> 
                        <h3>Number of Cases Confirmed Today</h3>
                        <h1 className="numTodayCase">{usData.NewConfirmed} </h1>
                    </div>
                </a>
                <a href="/deaths">
                    <div className="deaths">
                        <h3>Total Number of Deaths in {country}</h3>
                        <h1 className="numDeaths">{usData.TotalDeaths} </h1>
                        <h3>Number of Deaths Today</h3>
                        <h1 className="numTodayDeaths">{usData.NewDeaths} </h1>
                    </div>
                </a>
                <div className="recovered" style={{ backgroundColor: `rgba(54, 214, 70,${greenFill})` }}> 
                {/* green background gets brighter as total number recovered gets closer to total number confirmed */}
                    <h3>Total Number of Recovered in {country}</h3>
                    <h1>{usData.TotalRecovered} </h1>
                    <h3>Number of Recovered Today</h3>
                    <h1>{usData.NewRecovered} </h1>
                </div>
            </div>
            <div className="chart">
                <Chart />
                {/* accesses chart.js */}
            </div>
        </div>
        
    );
}

  
export default Home;
