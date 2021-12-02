import React, {useState} from 'react';
import {submitNewProduct} from "../../api";
import { Formik, Field, Form } from "formik";
import "./NewProduct.css";






const NewProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState();

    const submit = async () => {
        const result = await submitNewProduct(name, price);

        console.log({result});
    };

    //TODO: fix REGEX - its not fit
    const validatePrice = (value) => {
        // const [error, setError] = useState('');
        let error;
        const regex = '^\d{0,8}(\.\d{1,4})?$';

        if (!value) {
            // setError('Price is required!');
            error = 'Price is required!';
        }
        else if (!(value.match(regex))) {
            // setError('Price must be a pattern of: [number].[number]');
            error = 'Price must be a pattern of: [number].[number]';
        }
        console.log("error: " + error);
        return error;

    };


    const Basic = () => (
        <div className="basic">
            <Formik
                initialValues={{
                    productName: '',
                    productPrice: ''
                }}
                onSubmit={async (values) => {
                    console.log("values stringify: " + JSON.stringify(values));
                    console.log("productName: " + values.productName);
                    console.log("productPrice: " + values.productPrice);

                    await submitNewProduct(values.productName, values.productPrice);
                }}
                >
                <Form>
                    <div className="input-field">
                        <label className="label" htmlFor="productName">Product Name</label>
                        <Field
                            className="field"
                            id="productName"
                            name="productName"
                            placeholder="Notebook"
                        />
                    </div>

                    <div className="input-field">
                        <label className="label" htmlFor="productPrice">Product Price</label>
                        <Field
                            className="field"
                            id="productPrice"
                            name="productPrice"
                            placeholder="20.99"
                            validate={validatePrice}
                        />
                    </div>
                    <button type="submit" className="submit-button" >Add Product</button>
                </Form>
            </Formik>
        </div>
    );

    return (
        <div className="main-form">
            <p className="form-title">New Product Page</p>
            <div>
                <Basic />
            </div>
            {/*<button className="submit-button" onClick={submit}>Add Product</button>*/}

        </div>
    );

};


export default NewProduct;
