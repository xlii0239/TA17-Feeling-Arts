/// <reference path="../search.js" />
/// <reference path="../search.js" />
/// <reference path="../../views/homepage/homepage.js" />
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col} from "reactstrap";
import { Link } from "react-router-dom";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";




function NormalArtMusic() {
    React.useEffect(() => {
        document.title = "Art through Music"
    });
    return (
        <>
            <NavbarForHome />
            <ul class="breadcrumb bg-transparent font-weight-bold">
                <li class="breadcrumb-item"><a href="homepage" class="text-dark font-weight-bold">Home</a></li>
                <li class="breadcrumb-item"><a href="normalmode" class="text-dark font-weight-bold">Normal Mode</a></li>
                <li class="breadcrumb-item active">Art through Music</li>
            </ul>
        </>
    );
}


export default NormalArtMusic;
