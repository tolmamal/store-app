import React, {useState} from 'react';
import {submitNewProduct} from "../../api";
import { useForm, useField, splitFormProps } from "react-form";
import "./NewProduct.css";

//TODO: write input validation functions


const MyForm = () => {
    return (
        <form>
            <div>
                <label>
                    Product Name: <input type="text" />
                </label>

            </div>

            <div>
                <label>
                    Product Price: <input type="text" />
                </label>
            </div>
        </form>
    );
};


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
            <div>
                 <MyForm />
            </div>
            <button onClick={submit}>Add Product</button>
        </div>
    );

};


export default NewProduct;
