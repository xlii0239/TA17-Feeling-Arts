import React from "react";
import NavbarForHome from "components/a17components/navbars/NavbarForHome.js";



function ListeningPage() {
    React.useEffect(() => {
        document.title = "Listening page"
    });
    return (
        <>
            <NavbarForHome />
            <ul class="breadcrumb bg-transparent font-weight-bold">
                <li class="breadcrumb-item"><a href="homepage" class="text-dark font-weight-bold">Home</a></li>
                <li class="breadcrumb-item text-light"><a href="simplemode" class="text-dark font-weight-bold">Simple Mode</a></li>
                <li class="breadcrumb-item"><a href="SimpleArtMusic" class="text-dark font-weight-bold">Art through Music</a></li>
                <li class="breadcrumb-item active">Listening</li>
            </ul>
            
        </>
    );
}

export default ListeningPage;

