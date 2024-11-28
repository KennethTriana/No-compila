import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button  from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles( (theme) => ({
title: {
    flexGrow: 1,
},
    link: {
    color: 'white',
    textDecoration: 'none',
    margin: theme.spacing(2),
    },
    toolbar: {
    display: "flex",
    justifyContent: "space-between",
    },
}));

export default function Navbar() {
const classes = useStyles();
return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
                SERVICIO NACIONAL DE APRENDIZAJE-SENA
            </Typography>
            <div>
                <link to="/home" className={classes.link}>
                <Button color="inherit">Home</Button> 
                </link> 
                <link to="/cursos" className={classes.link}>
                <Button color="inherit">Cursos</Button> 
                </link> 
                <link to="/usuarios" className={classes.link}>
                <Button color="inherit">Usuarios</Button> 
                </link> 
                <link to="/masinformacion" className={classes.link}>
                <Button color="inherit">Más Información</Button> 
                </link> 
            </div>
            </Toolbar>
        </AppBar>
        );
}