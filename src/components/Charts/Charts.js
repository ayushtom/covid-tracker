import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Charts.module.css';
function Charts({data:{confirmed,recovered,deaths},country}){

    const[dailyData,setdailyData]=useState([]);

    useEffect(()=>{
        const fetchAPI=async()=>{
            setdailyData(await fetchDailyData());
        }
        fetchAPI();
    },[]);

    const LineChart=(
        dailyData.length ?
        (
        <Line 
        data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label:"Infected",
                borderColor:"#3333ff",
                fill:true,
                
            },{
                data:dailyData.map(({deaths})=>deaths),
                label:"Deaths",
                borderColor:"#3333ff",
                backgroundColor:'rgba(255,0,0)',
                fill:true,
            }],
        }}
        />
        )
        :null
    );


    const barChart=(
        confirmed?
        (
            <Bar
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:['rgba(0, 0, 255)','rgba(0, 255, 0)','rgba(255, 0, 0)'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Current State in ${country}` }
            }}
             />

        ):null
    )
    return(
        <div className={styles.container}>
            {country? barChart:LineChart}
        </div>

    )
}

export default Charts;