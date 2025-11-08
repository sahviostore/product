import React from "react";
import { ProductDetail } from "./ProductDetail";
import {useNavigate } from "react-router-dom";

export const Card = (props) =>{

    const navigate = useNavigate();

    const watchDetail = () =>{
        navigate(`/product/${props.id}`)
    }
    return(
        <>
        <div className="card-controller">
            <div className="product-card">
                <div className="image-container">
                    <img src={props.img} loading="lazy" alt="Product-Images"/>
                </div>

                <div className="product-name">
                    <h3 className="name">
                        <b>Name : </b> {props.name}
                    </h3>
                </div>

                <div className="product-price">
                    <p className="price">
                    <b>Price : </b> {props.price}
                    </p>
                </div>

                <div className="btn">
                    <button onClick={watchDetail}>Watch Detail</button>
                </div>
            </div>
        </div>
        </>
    )
}