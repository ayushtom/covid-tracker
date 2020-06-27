import React from 'react';

import { Cards, CountryPicker, Charts } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import coronaImage from './images/image.png';
class App extends React.Component {
  state={
    data:{},
    country:''
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});  
  }

  handleCountryChange=async(country)=>{
    const fetchedData=await fetchData(country);
    this.setState({data:fetchedData,country:country});  

  }

  
  render() {

    const {data,country}=this.state;

    return (
      <div className={styles.container}>
        <img src={coronaImage} className={styles.image} alt="covid-19"/>
         <Cards data={data}/>
         <CountryPicker handleCountryChange={this.handleCountryChange} />

         <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;