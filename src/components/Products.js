import React from 'react';
import { Grid, makeStyles} from '@material-ui/core';
import CardSimple from './CardSimple'

const useStyles = makeStyles ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
    },
});

const Product = () => {
    const  classes  = useStyles();
    return (
        <div className={classes.root} >
            <h2>Más vendidos</h2>
            <p>Es una marca natural que comparte los beneficios de la naturaleza</p>
            <Grid container spacing={3} >
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/oferta1.jpg'} height={140}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/oferta2.jpg'} height={140} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/oferta3.jpg'}  height={140} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CardSimple src={'img/oferta1.jpg'}  height={140} />
                    </Grid>
                </Grid>
            </Grid>
        </div>

    );

}



export default Product;
