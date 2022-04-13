import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

// Core Components

function ProfileCard1(props) {
    console.log("From profile card", props.toData);
    let name = "User";
    let currentArtist;
    if (typeof props.toData !== 'undefined') {
        name = props.toData.artist;
        currentArtist = props.toData;
    }
    else {
        return (<><p>No result, please check your search keywords</p></>)
    }
    console.log("From profile card", name);   

    try {
        var srcLink = require("assets/NewImg/artists/" + currentArtist.artist + ".jpg");
    }
    catch (e) {
        var srcLink = require("assets/NewImg/artists/" + "image-not-found" + ".jpg");
    }

  return (
    <>
        <Card className="card-profile" data-image="profile-image">
        <CardHeader>
          <div className="card-image">
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <img
                alt="..."
                className="img rounded"
                src={srcLink}
              ></img>
            </a>
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <h4 className="display-4 mb-0">{name}</h4>
                  <p className="lead">{currentArtist.birthYear + " -- " + currentArtist.deathYear}</p>
          <div className="table-responsive">
            <ul className="list-unstyled">
              <li className="py-1">
                <div className="d-flex align-items-center">
                  <div>
                    <Badge className="badge-circle mr-3" color="info">
                      <i className="ni ni-single-02"></i>
                    </Badge>
                  </div>
                  <div>
                    <h6 className="mb-1">{"Nationality: " + currentArtist.nationality}</h6>
                  </div>
                </div>
              </li>
              <li className="py-1">
                <div className="d-flex align-items-center">
                  <div>
                    <Badge className="badge-circle mr-3" color="success">
                      <i className="ni ni-trophy"></i>
                    </Badge>
                  </div>
                  <div>
                    <h6 className="mb-1">{"Famous In: " + currentArtist.genre}</h6>
                  </div>
                </div>
              </li>
              <li className="py-1">
                <div className="d-flex align-items-center">
                  <div>
                    <Badge className="badge-circle mr-3" color="warning">
                                          <i className="ni ni-diamond"></i>
                    </Badge>
                  </div>
                  <div>
                    <h6 className="mb-1">{"Master Piece: " + currentArtist.paintings}</h6>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </CardBody>
          </Card>
    </>
  );
}

export default ProfileCard1;
