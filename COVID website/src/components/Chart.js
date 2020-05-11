import React, { useEffect, useState } from "react";
import axios from "axios";
import {Bar} from 'react-chartjs-2';
import { useHistory } from "react-router-dom";


const Chart = () => {
    const [stateData, setStateData] = useState([]); //empty array
    const [chartData, setChartData] = useState({}) //empty object

    let history = useHistory();

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

    //empty arrays to push specific api data in
    let tempLabelArray = [];

    stateData.map((element, i) =>
        tempLabelArray.push(element.state) //pushes only state values into array
    )

    let tempCasesArray = [];

    stateData.map((element, i) =>
        tempCasesArray.push(element.cases)
    )

    let tempTodayCasesArray = [];

    stateData.map((element, i) =>
        tempTodayCasesArray.push(element.todayCases)
    )

    let tempDeathsArray = [];

    stateData.map((element, i) =>
        tempDeathsArray.push(element.deaths)
    )
 
    let tempTodayDeathsArray = [];

    stateData.map((element, i) =>
        tempTodayDeathsArray.push(element.todayDeaths)
    )

    const barGraphCases = () => { //bar graph for number of cases by state
        setChartData({
            labels: tempLabelArray, //x-axis data
            datasets: [
                {
                    label: 'Total Confirmed Cases',
                    data: tempCasesArray, //y-axis data
                    backgroundColor: 'rgba(181, 32, 26, 74)',
                    borderWidth: 2
                },
                {
                    label: `Today's Confirmed Cases`,
                    data: tempTodayCasesArray,
                    backgroundColor: 'rgba(225, 82, 26, 74)',
                    borderWidth: 2
                }
            ]
        });
    }

    const barGraphDeaths = () => { //bar graph for number of deaths by state
        setChartData({
            labels: tempLabelArray,
            datasets: [
                {
                    label: 'Total Deaths',
                    data: tempDeathsArray,
                    backgroundColor: 'rgba(255, 251, 242, 100)',
                    borderWidth: 2
                },
                {
                    label: `Today's Deaths`,
                    data: tempTodayDeathsArray,
                    backgroundColor: 'rgba(191, 198, 191, 75)',
                    borderWidth: 2
                }
            ]
        });
    }

    useEffect(() => {
        if (history.location.pathname === '/deaths') { //if page is the deaths page show deaths bar graph
            return barGraphDeaths()
        }
        return barGraphCases() // else show cases bar graph

    }, [stateData])

    return(
        <div>
            <Bar data={chartData} options={{
                fontSize: 24
            }}/> 
            {/* return bar graph with data from chartData */}
        </div>

    )
}


export default Chart; 