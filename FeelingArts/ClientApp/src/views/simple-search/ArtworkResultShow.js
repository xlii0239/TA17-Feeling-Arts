import React from 'react';
import { Button, Container, Row, Col, Input } from "reactstrap";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import ProfileCard1 from "components/a17components/cards/ProfileCard1.js";
import FooterForWeb from "components/a17components/footers/FooterForWeb.js";

function ArtworkResultShow(props) {
    let list = []
    if (typeof props.toData[0] !== 'undefined') {
        list = props.toData;

        return (
            <Container className="shape-container flex align-items-center py-lg-2" >
                <ol
                    style={{ 'margin-top': "20px" }}>
                    {list.map((item, index) => {
                        return (
                            <div style={{ display: 'flex', 'align-items': 'center', 'justify-content': 'space-between', 'marginBottom': '15px'}}>
                                <li key={item.id} style={{ width: '75%', 'textAlign': 'justify'}}>
                                    This artwork' name is {item.artwork}, the following is its decsription: {item.describe}
                                </li>
                                <div>
                                    <a href={"/simplemusiclisten" + "?artwork_no=" + item.imageNo + "&artwork_name=" + item.artwork}
                                        style={{ border: '2px solid', 'text-align': 'center', display: 'block', color: "Info", cursor: 'pointer' }}>Listen Music</a>
                                    <div style={{ height: '20px' }}></div>
                                    <a href={"/3d-model-simple" + "?model_no=" + item.modelNo + "&img_no=" + item.imageNo}
                                        style={{ border: '2px solid', 'text-align': 'center', display: 'block', color: "Info" }}>3D Touch</a>
                                </div>
                            </div>

                        )
                    })}
                </ol>
            </Container>
        )
    }
    else {
        return (<><h4 className="lead text-center font-weight-bold text-warning">
            No result so far, please input your search keywords
                </h4></>)
    }
    //const Item = this.state.artistshow.map((item, id) =>
    //    <p key={id}>{ item.name}</p> 
    //)
    //this.populateData();
    //const data = this.state.artistshow;
}

export default ArtworkResultShow;