import React from 'react';
import { Button, Container, Row, Col, Input } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faCube } from '@fortawesome/fontawesome-free-solid'

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
                            <div>
                                <div style={{ display: 'flex', 'align-items': 'center', 'justify-content': 'space-between', 'marginBottom': '15px' }}>
                                    <li key={item.id} style={{ width: '75%', 'textAlign': 'justify' }}>
                                        This artwork' name is {item.artwork}, the following is its decsription: {item.describe}
                                    </li>
                                    <div>
                                        <a href={"/simplemusiclisten" + "?artwork_no=" + item.imageNo + "&artwork_name=" + item.artwork}
                                            style={{ border: '1px solid', 'text-align': 'center', display: 'block', cursor: 'pointer', color: " #fff", "backgroundColor": "#5e72e4", "boxShadow": "0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)", "borderRadius": "5px", padding: "5px 10px" }}><FontAwesomeIcon icon={faMusic} alt="music icon"/>&nbsp;<span style={{ width: "5px" }}></span>Listen Music</a>
                                        <div style={{ height: '10px' }}></div>
                                        <a href={"/3d-model-simple" + "?model_no=" + item.modelNo + "&img_no=" + item.imageNo}
                                            style={{ border: '1px solid', 'text-align': 'center', display: 'block', color: " #fff", "backgroundColor": "#5e72e4", "boxShadow": "0 4px 6px rgb(50 50 93 / 11%), 0 4px 6px rgb(0 0 0 / 8%)", "borderRadius": "5px", padding: "5px 10px" }}><FontAwesomeIcon icon={faCube} alt="3d icon" />&nbsp;<span style={{ width: "5px" }}></span>3D &nbsp; Touch</a>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', 'align-items': 'center', 'justify-content': 'space-between' }}>
                                    <li key={item.id} style={{ width: '75%', 'textAlign': 'justify' }}>
                                        This artwork' name is {item.artwork}, the following is its decsription: {item.describe}
                                    </li>
                                    <div>
                                        <a href={"/simplemusiclisten" + "?artwork_no=" + item.imageNo + "&artwork_name=" + item.artwork}
                                            style={{ border: '1px solid', 'text-align': 'center', display: 'block', color: "#525f7f", cursor: 'pointer', color: " #fff", "backgroundColor": "#5e72e4", "boxShadow": "0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)", "borderRadius": "5px", padding: "5px 10px" }}><FontAwesomeIcon icon={faMusic} alt="music icon"/>&nbsp;<span style={{ width: "5px" }}></span>Listen Music</a>
                                        <div style={{ height: '10px' }}></div>
                                        <a href={"/3d-model-simple" + "?model_no=" + item.modelNo + "&img_no=" + item.imageNo}
                                            style={{ border: '1px solid', 'text-align': 'center', display: 'block', color: " #fff", "backgroundColor": "#5e72e4", "boxShadow": "0 4px 6px rgb(50 50 93 / 11%), 0 4px 6px rgb(0 0 0 / 8%)", "borderRadius": "5px", padding: "5px 10px" }}><FontAwesomeIcon icon={faCube} alt="3d icon" />&nbsp;<span style={{ width: "5px" }}></span>3D&nbsp; Touch</a>
                                    </div>
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