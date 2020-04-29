import React from 'react';
import {Container,Box, makeStyles} from '@material-ui/core';
import CardSimple from './CardSimple'

const useStyles = makeStyles ({
    root: {
        marginTop:-100
    },

});

const Slides = (props) => {
    const  classes  = useStyles();
    return (
        <Container maxWidth="md" className={classes.root}>
            <CardSimple src={'img/modal.png'} height={500} />
        </Container>
    )
}
export default Slides;