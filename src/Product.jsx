import React, { useState } from "react";
import { PData } from "./PData";
import { Card } from "./Card";

export const Product = () =>{

    const mens = PData.filter(item => item.category === "men");
    const girls = PData.filter(item => item.category === "girls");

    // ADDING INPUT FIELD
    const [search , setSearch] = useState("")

    const filteredGirl = girls.filter(x => x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    const filteredMens = mens.filter(x => x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    const handleKey = (e) =>{
        if(e.key === "Enter"){
            if(filteredGirl.length > 0 || filteredMens.length > 0){
                setSearch("")
            }
        }
    }
    
    return(
        <>
            <div className="OurCatalog">
            <div className="container">

            {/* ADDING INPUT FIELD */}

            <input 
                type="text"
                placeholder="Search watches.."
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKey}
            />
            <h1 className="main-heading">
                Catalog
            </h1>

            <div className="catalog">

            {filteredGirl.length > 0 &&(
                <div className="girls-watches" id="girls-watch">
                <h2 className="subheading">
                    Girls Watch
                </h2>
                <div className="product-conatiner">
                    {
                        filteredGirl.map((Item) =>{
                            return(
                                <Card key={Item.id} id={Item.id} img={Item.img} price={Item.price} name={Item.name} />
                            )
                        })
                    }
                </div>
                </div>
                )}

                {filteredMens.length > 0 &&(
                <div className="mens-watches" id="mens-watch">
                <h2 className="subheading">
                    Mens Watch
                </h2>
                <div className="product-conatiner">
                    {
                        filteredMens.map((Item) =>{
                            return(
                                <Card key={Item.id} id={Item.id} img={Item.img} price={Item.price} name={Item.name} />
                            )
                        })
                    }
                </div>
                </div>
                )}

            </div>
            </div>
        </div>
        </>
    )
}