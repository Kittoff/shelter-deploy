import React, { useState, useEffect } from 'react';
import NavMenu from '../header/Nav2'
import Pets from './Pets'
import Pagination from './Pagination'


function OurPets() {
    const [accessToken, setAccessToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pets, setPets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [petsPerPage] = useState(8);

    useEffect(() => {
        const fetchAccessToken = async () => {
            const params = new URLSearchParams;
            params.append("grant_type", "client_credentials");
            params.append("client_id", process.env.REACT_APP_PETFINDER_API_KEY);
            params.append("client_secret", process.env.REACT_APP_PETFINDER_SECRET_KEY);
            await fetch(
                "https://api.petfinder.com/v2/oauth2/token",
                {
                    method: "POST",
                    body: params
                }
            ).then(res => res.json()).then(res => {
                sessionStorage.setItem('MyUniqueUserToken', JSON.stringify(res.access_token))
                setAccessToken(JSON.parse(sessionStorage.getItem('MyUniqueUserToken')))

            }).then(function () {
                let url = "https://api.petfinder.com/v2/animals?limit=100";
                let token = JSON.parse(sessionStorage.getItem('MyUniqueUserToken'));

                // console.log("token : ", token)

                let h = new Headers();
                h.append('Authorization', `Bearer ${token}`);

                let req = new Request(url, {
                    method: 'GET',
                    mode: 'cors',
                    headers: h
                });
                fetch(req)
                    .then(resp => resp.json())
                    .then(data => {
                        // console.log("data : ,", data.animals[0])
                        setPets(data.animals)
                        setLoading(false)
                    })
                    .catch(err => {
                        console.log(err.message)
                    })
            }
            )
        };
        fetchAccessToken();
    }, []);

    // Get current pet
    const indexOfLastPet = currentPage * petsPerPage;
    const indexOfFirstPet = indexOfLastPet - petsPerPage;
    const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet);

    // Change page
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div>



            <header className="header-nav2">
                {/* {console.log("accesstoken : ", accessToken)} */}
                <div className="l-container">
                    <NavMenu />
                    <div className="cb"></div>
                    <div className="header-baselisne">
                    </div>
                </div>
                <div className="section-two-pets">
                    <div className="l-container">

                        <div className="section-friends" id="pets">

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



        </div>
    );
}

export default OurPets