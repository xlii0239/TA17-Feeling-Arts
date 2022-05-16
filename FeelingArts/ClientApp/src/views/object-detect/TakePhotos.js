import React from "react";
import Webcam from "react-webcam";
import { Link } from 'react-router-dom'


function TakePhotos() {
    React.useEffect(() => {
        document.title = "Feeing Arts-Take Photo"
    });

    let image = "test image"

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };


    const webcamRef = React.useRef(null);
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            console.log("imagesrc", imageSrc)
            image = imageSrc
        },
        [webcamRef]
    );

    const handleClick = (e, image) => {
        //let imageStr = image.slice(23)
        //let urlStr = encodeURIComponent(imageStr)
        //window.location = "/objectdetect" + "?image=" + urlStr;

        //console.log("modelName from three model page", modelName)
    };
    return (
        <>
            <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            />
            <button onClick={capture}>Capture photo</button>

            <Link to={{ pathname: '/objectdetect', state: { image: "1111111" } }}>Object detect</Link>

            <button onClick={(e) => handleClick(e, image)}>Do object detection</button>
        </>
    );
}

export default TakePhotos;