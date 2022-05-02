import { useNavigate, useParams } from "react-router-dom";
import { useReducer } from "react";
import React from "react";

const ProductDetails = () => {
    const navigate = useNavigate();
    const PRODUCT_ARRAY = [
        {
            id:'p1',
            name: 'Books',
            description: "this is for books"
        },
        {
            id:'p2',
            name: 'paper',
            description: "this is for paper"
        },
        {
            id:'p3',
            name: 'pens',
            description: "this is for pens"
        }
    ]
    const params = useParams();
    const product_data = PRODUCT_ARRAY.find(
        (product) => product.id === params.productID
    );
    if(!product_data){
        return <p>No product found</p>
    }
    //console.log(params)
    const backbutton = () => {
        navigate(-1);
    }
    return (
        <React.Fragment>
            <button onClick={backbutton}>Back</button>
            <h1>Product Details</h1>
            <p>{product_data.name}</p>
            <p>{product_data.description}</p>
            {/* <p>{params.productID}</p> */}
        </React.Fragment>
    )
}

export default ProductDetails;