import React from "react";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import { Container, Row, Col, Button } from "reactstrap";
import MusicInfo from "components/a17components/Music/MusicInfo.js";



function SimpleListeningPage1() {
    React.useEffect(() => {
        document.title = "Listening page"
    });
    return (
        <>
            <NavbarForHome />
            <ul class="breadcrumb bg-transparent font-weight-bold ">
                <li class="breadcrumb-item"><a href="homepage" class="text-dark font-weight-bold">Home</a></li>
                <li class="breadcrumb-item text-light"><a href="simplemode" class="text-dark font-weight-bold">Simple Mode</a></li>
                <li class="breadcrumb-item"><a href="SimpleArtMusic" class="text-dark font-weight-bold">Art through Music</a></li>
                <li class="breadcrumb-item active">Listen</li>
            </ul>
            <div className="page-header">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage:
                            "url(" + require("assets/NewImg/Music-Drawing-Ideas.jpg") + ")",
                    }}
                >
                </div>
                <row className="mx-auto">
                    <h3 className="title font-weight-bold">
                        Agony In The Garden
                </h3>
                    <h5 className="font-italic">By Albrecht Durer</h5>
                    <MusicInfo videoId='am18duPzcgo' />             
                    <MusicInfo videoId='k58gA9ZUhFU' />
                    </row>
            </div>
            
        </>
    );
}

export default SimpleListeningPage1;

