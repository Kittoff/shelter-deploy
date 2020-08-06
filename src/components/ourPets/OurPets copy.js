import React, { useState, useEffect, createContext } from 'react';
import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom'
import NavMenu from '../header/Nav2'
import data from './data.js/dataOurPets'
import { Button, Header, Image, Modal, Grid } from 'semantic-ui-react'
import axios from 'axios'
import Pets from './Pets'
// import 'semantic-ui-css/semantic.min.css'
import Pagination from './Pagination'

const AuthContext = createContext();
const petFinderKey = "R2k1ZsfXtZF1EYBpeNZYX6y0xOF6exapAc7N8ElXtXBAxnLVAa";
const petFinderSecret = "jLNbVaPnAWu3X2hoFfGFVmDN0XNsYEcyr0RJAXFT";

function OurPets({ Component, pageProps }) {
    const [accessToken, setAccessToken] = useState(null);
    // const [pets, setPets] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pets, setPets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [petsPerPage] = useState(8);
    const [isTokenReady, setIsTokenReady] = useState(false);

    useEffect(() => {
        const fetchAccessToken = async () => {
            const params = new URLSearchParams;
            params.append("grant_type", "client_credentials");
            params.append("client_id", petFinderKey);
            params.append("client_secret", petFinderSecret);
            const petfinderRes = await fetch(
                "https://api.petfinder.com/v2/oauth2/token",
                {
                    method: "POST",
                    body: params
                }
            );
            const token = await petfinderRes.json()
            setAccessToken(token["access_token"])
            setIsTokenReady(true);
            console.log(token["access_token"]);
        };



        const fetchPets = async () => {
            setLoading(true);
            const petResults = await fetch(
                "https://api.petfinder.com/v2/animals?limit=100",
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            const json = await petResults.json();
            console.log('json : ', json.animals)
            setPets(json.animals);
            console.log("pets : ", pets)
            console.log("accessToken : ", accessToken)
            setLoading(false)
        };


        console.log("access : ", accessToken)
        fetchAccessToken();
        // fetchPets();


    }, []);

    // const fetchPets = async () => {
    //     setLoading(true);
    //     const petResults = await fetch(
    //         "https://api.petfinder.com/v2/animals?limit=100",
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${accessToken}`,
    //             },
    //         }
    //     );
    //     const json = await petResults.json();
    //     console.log('json : ', json.animals)
    //     setPets(json.animals);
    //     console.log("pets : ", pets)
    //     console.log("accessToken : ", accessToken)
    //     setLoading(false)
    // };

    // Get current pet
    const indexOfLastPet = currentPage * petsPerPage;
    const indexOfFirstPet = indexOfLastPet - petsPerPage;
    const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet);

    // Change page
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (

        <header className="header-nav2">
            <Button onClick={fetchPets}>CLICK</Button>
            <div className="l-container">
                <NavMenu />
                <div className="cb"></div>
                <div className="header-baselisne">
                </div>
            </div>
            <div className="section-two-pets">
                <div className="l-container">

                    <div className="section-friends" id="pets">


                        {/* <div className="section-friends-title">
                        <h1>Our friends who <br />
                        are looking for a house</h1>
                    </div> */}
                        <div className="test-pets">

                        </div>

                        <div className="section-friends-pets">

                            <Pets pets={currentPets} loading={loading} />


                        </div>
                        <Pagination petsPerPage={petsPerPage} totalPets={pets.length} paginate={paginate} currentPage={currentPage} />

                    </div>
                </div>
            </div>

        </header>




    );
}

export default OurPets