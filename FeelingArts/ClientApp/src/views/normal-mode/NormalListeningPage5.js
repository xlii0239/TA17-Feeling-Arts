import React from "react";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";
import { Container, Row, Col,Button } from "reactstrap";



function NormalListeningPage5() {
    React.useEffect(() => {
        document.title = "Listening page"
    });
    return (
        <>
            <NavbarForHome />
            <ul class="breadcrumb bg-transparent font-weight-bold ">
                <li class="breadcrumb-item"><a href="homepage" class="text-dark font-weight-bold">Home</a></li>
                <li class="breadcrumb-item text-light"><a href="normalmode" class="text-dark font-weight-bold">Picture Mode</a></li>
                <li class="breadcrumb-item"><a href="NormalArtMusic" class="text-dark font-weight-bold">Art through Music</a></li>
                <li class="breadcrumb-item active">Listening</li>
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
                <row className="floating-box bg-secondary col-md-8 offset-md-2">
                    <div className="box text-left">
                        <div className="icon icon-shape bg-warning icon-xl rounded-circle text-white">
                            <i className="fa fa-music"></i>
                        </div>
                    </div>
                    <h2 className="lead text-dark p-5">
                        Enjoy the artworks with this song created by Chris Haugen.
                    <Button
                            className="btn-icon col-md-2 offset-md-6"
                            color="warning"
                            href="https://youtu.be/-zh55UqH98M"
                        >
                            <span className="btn-inner--icon">
                                <i className="ni ni-button-play"></i>
                            </span>
                            <span className="btn-inner--text">Play</span>
                        </Button>
                    </h2>
                    <h2 className="lead text-dark p-5">
                        Enjoy the artworks with this song created by Chris Haugen.
                    <Button
                            className="btn-icon col-md-2 offset-md-6"
                            color="warning"
                            href="https://youtu.be/zy3DOXSCkVE"
                        >
                            <span className="btn-inner--icon">
                                <i className="ni ni-button-play"></i>
                            </span>
                            <span className="btn-inner--text">Play</span>
                        </Button>
                    </h2>
                </row>
            </div>
            
        </>
    );
}

export default NormalListeningPage5;
