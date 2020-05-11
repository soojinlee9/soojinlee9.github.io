import React, { useEffect, useState } from "react";
import axios from "axios";

import Chart from '../components/Chart';

function Home() {
    const [countryData, setCountryData] = useState([]);
    const country = 'US';
    const [countries, setCountries] = useState(``);
    const [stateData, setStateData] = useState([]); 

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

    useEffect(() => {
        //request to get data from api and stores in array
        axios.get(`https://corona.lmao.ninja/v2/states`)
            .then(function (response) {
                // handle success
                setStateData(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });        
    }, []);

    let tempStateNameArray = [];

    stateData.map((element, i) =>
        tempStateNameArray.push(element.state) //pushes only state values into array
    )

    return (
         <div className="mainContent">
             <header className="header">
                <h1>COVID-19 Cases In the United States</h1>
            </header>
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
                <div className="recovered"> 
                    <h3>Total Number of Recovered in {country}</h3>
                    <h1 className="numRec">{usData.TotalRecovered} </h1>
                    <h3>Number of Recovered Today</h3>
                    <h1 className="numTodayRec">{usData.NewRecovered} </h1>
                </div>
            </div>
            <div className="wrapper">
                <div className="chart">
                    <Chart />
                    {/* accesses chart.js */}
                </div>
            </div>
        </div>
        
    );
}

  
export default Home;
