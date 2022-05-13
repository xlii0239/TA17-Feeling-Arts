import React from "react";
import { Link } from 'react-router-dom'

function ObjectDetect(props) {
    React.useEffect(() => {
        document.title = "Feeing Arts-Object Detect"
    });

    let GOOGLE_API_KEY = "AIzaSyBkRVZ1kstmg-vm8lz5uGlLA48ibeCbkO0"

    let image = ""

    console.log("data from camera page", this.props.location.state.image)
    return (<><p>No result, please check your search keywords</p></>)


    let body = JSON.stringify({
        requests: [
            {
                image: {
                    content: image
                },
                features: [
                    { type: "IMAGE_PROPERTIES", maxResults: "5" },
                ]
            }
        ]
    });

    let response = fetch("https://vision.googleapis.com/v1/images:annotate?key=" + GOOGLE_API_KEY, {
        method: "post",
        body: body,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    }
    );


    //// Imports the Google Cloud client library
    //const vision = require('@google-cloud/vision');

    //// Creates a client
    //const client = new vision.ImageAnnotatorClient(
    //    {
    //        keyFilename:"./APIKey.json"
    //    }
    //);

    //// Performs label detection on the image file
    //const [result] = client.labelDetection('1ow21fztpgd.jpg');

    //const labels = result.labelAnnotations;

    //console.log('Labels:');

    //labels.forEach(label => console.log(label.description));

    return (
        <h1>{response}</h1>
    );
}
export default ObjectDetect;