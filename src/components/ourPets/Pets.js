import React from 'react'
import { Button, Image, Modal, Icon } from 'semantic-ui-react'
const Pets = ({ pets, loading }) => {
    if (loading) {
        return <div className="loader">Loading...</div>
    } else {

        return (

            <div className="section-two-pets">
                <div className="l-container">

                    <div className="section-friends" id="pets">


                        <div className="section-friends-title">
                            <h1>Our friends who <br />
                            are looking for a house</h1>
                        </div>

                        <div className="section-friends-pets">
                        <div className="main-pet-container">

                            <div className="pet-container">
                                {pets.map(({ id, name, description, race, age, attributes, primary_photo_cropped, photos, species, gender, breeds }) => (
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

                                            <div className="pets-images-container"  >

                                                {primary_photo_cropped ? <img key={id} src={primary_photo_cropped["small"]} title={name} /> : <div><h3>No photos</h3> <Icon className="paw-icon" size="big" name="paw" /><br /> <h4>{species}</h4></div>
                                                }
                                            </div>
                                            <h4>{name}</h4>
                                            <h5>{gender}</h5> </div>

                                        {/* <PetModal name={name} age={age} /> */}
                                        <Modal trigger={<Button style={{ marginTop: 140 }} className="btn-friends">Learn More</Button>} closeIcon >
                                            {/* <Modal.Header>{name}</Modal.Header> */}
                                            <Modal.Content image>
                                                {photos.length > 0 ? <Image verticalAlign="middle" wrapped size='big' src={photos[0]["medium"]} /> : <div><h2>No photos</h2> <Icon className="paw-icon" size="big" name="paw" /></div>}
                                                <Modal.Description>
                                                    <h2>{name}</h2>
                                                    <p>
                                                        {race}
                                                    </p>
                                                    <p>{description}</p>

                                                    <ul>
                                                        <li><span className="carac">Species:</span>  {species}</li>
                                                        <li><span className="carac">Breed: <br /></span>  <b>primary :</b> {breeds["primary"]}, <br /> <b>secondary :</b> {breeds["secondary"]}</li>
                                                        <li><span className="carac">Age:</span>  {age}</li>
                                                        <li><span className="carac"> Shots:</span>  {attributes["shots_current"] ? <span>Yes</span> : <span>No</span>}</li>
                                                        <li><span className="carac">House trained:</span>  {attributes["house_trained"] ? <span>Yes</span> : <span>No</span>}</li>
                                                        <li><span className="carac">Sprayed neutered:</span>  {attributes["spayed_neutered"] ? <span>Yes</span> : <span>No</span>}</li>
                                                        <li><span className="carac">Special needs:</span>  {attributes["special_needs"] ? <span>Yes</span> : <span>No</span>}</li>
                                                    </ul>
                                                </Modal.Description>
                                            </Modal.Content>
                                        </Modal>


                                    </div>

                                ))}
                            </div>
                        </div>


                        </div>
                    </div>

                </div>

            </div>
            // <div className="section-friends-pets">

            //     <div className="pet-container">
            //         <Grid columns={5} divided>

            //             {pets.map(({ id, url, name, description, race, age, inoculation, diseases, parasites }) => (
            //                 <div className="section-friends-images"
            //                     style={{
            //                         background: "white",
            //                         width: 300,
            //                         height: 400,
            //                         textAlign: "center",
            //                         lineHeight: "50px",
            //                         boxSizing: "border-box",
            //                     }}
            //                 >

            //                     <Grid.Row>
            //                         <Grid.Column>

            //                             <div style={{ width: 270, height: 270 }} >

            //                                 <img key={id} src={url} title={name} />
            //                             </div>

            //                             {name}
            //                             <Modal trigger={<Button style={{ marginTop: 140 }} className="btn-friends">Learn More</Button>} closeIcon >
            //                                 <Modal.Content image>
            //                                     <Image verticalAlign="middle" wrapped size='big' src={url} />
            //                                     <Modal.Description>
            //                                         <h2>{name}</h2>
            //                                         <p>
            //                                             {race}
            //                                         </p>
            //                                         <p>{description}</p>

            //                                         <ul>
            //                                             <li><span className="carac">Age:</span>  {age}</li>
            //                                             <li><span className="carac"> Inoculation:</span>  {inoculation}</li>
            //                                             <li><span className="carac">Diseases:</span>  {diseases}</li>
            //                                             <li><span className="carac">parasites:</span>  {parasites}</li>
            //                                         </ul>
            //                                     </Modal.Description>
            //                                 </Modal.Content>
            //                             </Modal>
            //                         </Grid.Column>
            //                     </Grid.Row>




            //                 </div>

            //             ))}
            //         </Grid>
            //     </div>

            // </div>

        )
    }

}

export default Pets