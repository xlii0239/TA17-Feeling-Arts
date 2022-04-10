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
    if (typeof props.toData[0] !== 'undefined') {
        name = props.toData[0].name;
        currentArtist = props.toData[0];
    }
    else {
        return (<><p>Loading</p></>)
    }
    console.log("From profile card", name);   

  return (
    <>
        <Card className="card-profile" data-image="profile-image"  >
        <CardHeader>
          <div className="card-image">
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <img
                alt="..."
                className="img rounded"
                src={require("assets/NewImg/" + name + ".jpg")}
              ></img>
            </a>
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <h4 className="display-4 mb-0">{name}</h4>
                  <p className="lead">{currentArtist.dateOfBirth + " To " + currentArtist.dateOfDeath}</p>
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
                    <h6 className="mb-1">{"Famous In: " + currentArtist.famousIn}</h6>
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
                    <h6 className="mb-1">{"Master Piece: " + currentArtist.masterpiece}</h6>
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
