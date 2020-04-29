import React from 'react';
import Logo from './Logo';
import {Link, Grid , makeStyles}from '@material-ui/core/';

const useStyles = makeStyles ({
    root: {
        flexGrow: 1,
    },
    menu: {
        alignItems: 'flex-end',
        textAlign:'right',
    },
    item:{
        paddingLeft:10
    }
});
const NavBar = (props) => {
    const  classes  = useStyles();
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Logo systemName={props.systemName}/>
                </Grid>
                <Grid className={classes.menu} item xs={9} display="flex" flexDirection="row-reverse">
                    <Link
                        component="button"
                        variant="body2"
                        underline="none"
                        onClick={() => { console.info("I'm a button.");   }}
                        className={classes.item}
                    >
                        Inicio |
                    </Link>
                    <Link
                        component="button"
                        variant="body2"
                        underline="none"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                        className={classes.item}
                    >
                        skin care |
                    </Link>
                    <Link
                        component="button"
                        variant="body2"
                        underline="none"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                        className={classes.item}
                    >
                        Lip Care |
                    </Link>
                    <Link
                        component="button"
                        variant="body2"
                        underline="none"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                        className={classes.item}
                    >
                        Contacto
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
};
export default NavBar;
