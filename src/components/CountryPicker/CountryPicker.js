import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {countries } from '../../api';
function CountryPicker({handleCountryChange}){
    const[country,setcountry]=useState([]);


    useEffect(()=>{
        const fetchcountry=async()=>{
            setcountry(await countries());
        }
        fetchcountry();
    },[setcountry]);


    return(
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {country.map((eachCountry,i) => <option key={i} value={eachCountry}>{eachCountry}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;