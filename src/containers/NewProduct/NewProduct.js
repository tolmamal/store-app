import React, {useState} from 'react';
import {submitNewProduct} from "../../api";


const NewProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState();

    const submit = async () => {
        const result = await submitNewProduct("ProductName 3", "42.42");

        console.log({result})
    };

    return (
        <div>
            <p>New Product Page</p>
            <button onClick={submit}>Add Product</button>
        </div>
    );

};


export default NewProduct;
