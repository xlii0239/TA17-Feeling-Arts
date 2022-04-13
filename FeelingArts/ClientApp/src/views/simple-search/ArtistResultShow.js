import React from 'react';
import { Button, Container, Row, Col, Input } from "reactstrap";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import ProfileCard1 from "components/a17components/cards/ProfileCard1.js";
import FooterForWeb from "components/a17components/footers/FooterForWeb.js";

function ArtistResultShow(props) {
        let list = []

        if (typeof props.toData[0] !== 'undefined') {
            list = props.toData;

            return (
                <Container className="shape-container flex align-items-center py-lg-2" >
                    <ol>
                        {list.map((item, index) => {
                            return (
                                <li key={item.id}>
                                    The artist's name is { item.artist}, the following is introduction: { item.bio}
                                </li>
                            )
                        })}
                    </ol>
                </Container>
            )
        }
        else {
            return (<><h4 className="lead text-center font-weight-bold text-warning">No result so far, please check your search keywords</h4></>)
        }
        //const Item = this.state.artistshow.map((item, id) =>
        //    <p key={id}>{ item.name}</p> 
        //)
        //this.populateData();
        //const data = this.state.artistshow;
}

export default ArtistResultShow;