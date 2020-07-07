import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import Countup from 'react-countup';
import cx from 'classnames';
function Cards({data: {confirmed,recovered,deaths,lastUpdate}}){

    const types=[confirmed,recovered,deaths];
    const names=["Infected","Recovered","Deaths"]

    if(!confirmed)
    {
        return 'Loading..'
    }
    return(
        
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
            {types.map((type,i) => 

                <Grid item component={Card}  xs={12} md={3} className={cx(styles.cards,styles.type)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {names[i]}
                        </Typography>
                        <Typography variant="h5">                       <Countup 
                            start={0}
                            end={type.value}
                            duration={2.5}
                            separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of active cases of covid
                        </Typography>

                    </CardContent>

                </Grid>
            )}
                
     
            </Grid>
        </div>

    )
    
}

export default Cards;