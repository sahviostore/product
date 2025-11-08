import React from "react";
import NavLink from "react-bootstrap/esm/NavLink";

export const FeaturedCollection = () =>{
    return(
        <>
        <div className="FeatureCollection">
            <div className="container">
                <h1 className="main-heading">
                Explore Collections
                </h1>
                <div className="card-container ">
                    <div className="cards boy">
                        <NavLink className="heading" href="#mens-watch">Mens Watch</NavLink>
                        <p style={{marginTop : "1rem"}}>Timeless styles crafted for everyday confidence.</p>
                    </div>
                    <div className="cards girl">
                        <NavLink className="heading" href="#girls-watch">Girls Watch</NavLink>
                        <p style={{marginTop : "1rem"}}>Trendy, lightweight and perfect for daily fashion.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}