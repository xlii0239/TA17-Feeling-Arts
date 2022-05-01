import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardImg,
    CardTitle,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";

function Signin() {
    const [userData, setUserData] = useState({ username: "", password: "" });
    const [errorMessage, setErrorMessage] = useState({ value: "" });
    const history = useHistory();
    console.log("auth", localStorage.getItem("isAuthenticated"));

    const handleInputChange = (e) => {
        e.persist();
        setUserData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //if username or password field is empty, return error message
        if (userData.username === "" || userData.password === "") {
            setErrorMessage((prevState) => ({
                value: "Empty username/password field",
            }));
        } else if (userData.username == "admin" && userData.password == "ta17") {
            //Signin Success
            localStorage.setItem("isAuthenticated", "true");
            window.location.pathname = "/homepage";
        } else {
            //If credentials entered is invalid
            setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
        }
    };

    return (
        <Card className="bg-secondary shadow mx-auto">
            <container>
                <CardHeader className="col-md-6 offset-md-3">
                    <CardImg
                        alt="..."
                        src={require("assets/img/ill/bg5-1.svg")}
                    ></CardImg>
                    <CardTitle className="text-center" tag="h4">
                        Please log in
          </CardTitle>
                </CardHeader>
                <CardBody className="col-md-6 offset-md-3">
                        <label class="font-weight-bold">Username</label>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        onChange={(e) => handleInputChange(e)}
                    />

                    <div className="form-group">
                        <label class="font-weight-bold">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                    <button                   
                    type="submit"
                    className="btn btn-secondary"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
                {errorMessage.value && (
                    <p className="text-danger"> {errorMessage.value} </p>
                )}
                </CardBody>
                </container>
        </Card>
    );
}

export default Signin;