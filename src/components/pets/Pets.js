import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-simply-carousel";
import data from './data/ImgComponent'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { Link } from 'react-router-dom'



export default function Pets() {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div className="section-two">
            <div className="l-container">

                <div className="section-friends" id="pets">


                    <div className="section-friends-title">
                        <h1>Our friends who <br />
                            are looking for a house</h1>
                    </div>

                    <div className="section-friends-pets">

                        <div className="pet-container">
                            <Carousel
                                containerProps={{
                                    style: {
                                        width: "100%",
                                        justifyContent: "space-between"
                                    }
                                }}
                                activeSlideIndex={activeSlide}
                                onRequestChange={setActiveSlide}
                                forwardBtnProps={{
                                    className: "carousel-btn",
                                    children: ">",
                                    style: {
                                        width: 60,
                                        border: "2px solid #f1d0b8",
                                        borderRadius: 100,
                                        background: "none",
                                        cursor: "pointer",
                                        height: 60,
                                        minWidth: 60,
                                        alignSelf: "center"
                                    },
                                }}
                                backwardBtnProps={{
                                    className: "carousel-btn",
                                    children: "<",
                                    style: {
                                        width: 60,
                                        border: "2px solid #f1d0b8",
                                        borderRadius: 100,
                                        background: "none",
                                        cursor: "pointer",
                                        height: 60,
                                        minWidth: 60,
                                        alignSelf: "center"
                                    }
                                }}
                                itemsToShow={3}
                                speed={400}
                            >
                                {data.map(({ id, url, name, description, race, age, inoculation, diseases, parasites }) => (
                                    <div className="section-friends-images"
                                        style={{
                                            background: "white",
                                            width: 300,
                                            height: 400,
                                            // border: "20px solid white",
                                            textAlign: "center",
                                            lineHeight: "50px",
                                            boxSizing: "border-box",
                                        }}
                                    >
                                        <div className="section-friends-image">
                                            <div style={{ width: 270, height: 270 }} >

                                                <img key={id} src={url} title={name} />
                                            </div>

                                            {name} </div>

                                        {/* <PetModal name={name} age={age} /> */}
                                        <Modal trigger={<Button style={{ marginTop: 140 }} className="btn-friends">Learn More</Button>} closeIcon >
                                            {/* <Modal.Header>{name}</Modal.Header> */}
                                            <Modal.Content image>
                                                <Image verticalAlign="middle" wrapped size='big' src={url} />
                                                <Modal.Description>
                                                    <h2>{name}</h2>
                                                    <p>
                                                        {race}
                                                    </p>
                                                    <p>{description}</p>

                                                    <ul>
                                                        <li><span className="carac">Age:</span>  {age}</li>
                                                        <li><span className="carac"> Inoculation:</span>  {inoculation}</li>
                                                        <li><span className="carac">Diseases:</span>  {diseases}</li>
                                                        <li><span className="carac">parasites:</span>  {parasites}</li>
                                                    </ul>
                                                </Modal.Description>
                                            </Modal.Content>
                                        </Modal>


                                    </div>

                                ))}
                            </Carousel>
                        </div>

                    </div>

                    <Link to={"/pets"}>

                        <a className="btn btn-more">Get to know the rest</a>
                    </Link>
                </div>

            </div>

        </div>
    );
}

