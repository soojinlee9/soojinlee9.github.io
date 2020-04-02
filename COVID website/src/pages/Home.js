import React, { useEffect, useState } from "react";
import axios from "axios";

import Chart from '../components/Chart';

function Home() {
    const [countryData, setCountryData] = useState({});
    const country = 'US';
  
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

    //used to style the color of recovered div background
    const totalCases = countryData.Countries&&countryData.Countries[217].TotalConfirmed; //number value of total confirmed
    const totalRecovered = countryData.Countries&&countryData.Countries[217].TotalRecovered; //number value of total recovered
    const greenFill = (totalRecovered / totalCases * 15).toFixed(2); //rounds to the nearest hundredth

    return (
         <div className="mainContent">
            <div className="covidData">
                <a href="/cases">
                    <div className="cases">
                        <h3>Total Number of Cases in {country}</h3>
                        {/* code below: initially empty so use && to get data after array is loaded */}
                        <h1 className="numCase">{countryData.Countries && countryData.Countries[217] && countryData.Countries[217].TotalConfirmed} </h1> 
                        <h3>Number of Cases Confirmed Today</h3>
                        <h1 className="numTodayCase">{countryData.Countries && countryData.Countries[217] && countryData.Countries[217].NewConfirmed} </h1>
                    </div>
                </a>
                <a href="/deaths">
                    <div className="deaths">
                        <h3>Total Number of Deaths in {country}</h3>
                        <h1 className="numDeaths">{countryData.Countries && countryData.Countries[217] && countryData.Countries[217].TotalDeaths} </h1>
                        <h3>Number of Deaths Today</h3>
                        <h1 className="numTodayDeaths">{countryData.Countries && countryData.Countries[217] && countryData.Countries[217].NewDeaths} </h1>
                    </div>
                </a>
                <div className="recovered" style={{ backgroundColor: `rgba(54, 214, 70,${greenFill})` }}> 
                {/* green background gets brighter as total number recovered gets closer to total number confirmed */}
                    <h3>Total Number of Recovered in {country}</h3>
                    <h1>{countryData.Countries && countryData.Countries[217] && countryData.Countries[217].TotalRecovered} </h1>
                    <h3>Number of Recovered Today</h3>
                    <h1>{countryData.Countries && countryData.Countries[217] && countryData.Countries[217].NewRecovered} </h1>
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
