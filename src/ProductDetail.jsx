import React from "react"
import { useParams } from "react-router-dom"
import { PData } from "./PData"
import { FAQ } from "./Sections";

export const ProductDetail = (props) =>{
    const { id } = useParams();
    const product = PData.find(item => item.id == id);

    if(!product){
        return <h2 style={{padding:"2rem"}}>Product Not Found</h2>
    }

    return(
        <div style={{padding:"2rem"}} className="product-detail-head">
        <div className="container">
        <h1 className="main-heading">Product Detail</h1>

        <div className="product-detail-handler">
            <div className="product-image">
                <img src={product.img01} loading="lazy" alt="Produc-Images"/>
            </div>

            <div className="product-detail-text-handle">
            <p className="product-detail-name"><span> Product Name :</span>  {product.name}</p>
            <p className="product-detail"><span>Product Description : </span> {product.details}</p>
            <p className="product-detail-price"><span>Price: </span> {product.price}</p>
            <div className="specification">
                <span>Specifications : </span>
                <ul>
                    {product.specs && product.specs.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="product-delivery">
                <span>Delivery :</span>
                <ul>
                    <li>Delivery all over Pakistan</li>
                    <li>Standard Delivery Time: 5 to 6 Working Days</li>
                    <li>Cash on Delivery (COD) Available ✅</li>
                </ul>
            </div>

            <div className="product-packaging">
                <span>Packaging</span>
                <p>Comes with Standard Watch Box</p>
            </div>

            <div className="product-note">
                <span>Note :</span>
                <p>Colors may slightly vary due to lighting & screen resolution.</p>
                <p></p>
            </div>

            <div className="cta">
                <p>To place your order – DM us on Instagram <b> @sahvioStore</b></p>
            </div>

            <div>
                <FAQ />
            </div>
            </div>

        </div>

        </div>
        </div>
    )
}
