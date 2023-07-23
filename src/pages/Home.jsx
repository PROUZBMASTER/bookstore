/* eslint-disable react/display-name */
import React from 'react';
import Header from "../components/Header/Header";
import { Main } from "../components"

import Card from '../componentsCard/Card';


const Home = React.memo(() => {
    return (
        <>
            <Header />
            <Main />   
            <Card/>
        </>
    );
})

export default Home;
