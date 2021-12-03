import React, {useState} from 'react';
import { Formik, Field, Form } from "formik";
import "./SearchProduct.css";


const SearchProduct = () => {
    const [name, setName] = useState('');

    const validateName = (value) => {
        let error;
        if (!value) {
            error = 'Product name is required!';
        }
        console.log("error: " + error);
        return error;
    };


    const Basic = () => (
        <div className="basic">
            <Formik
                initialValues={{
                    productName: ''
                }}
                onSubmit={}
            >
                <Form>
                    <div>
                        <label className="label" htmlFor="productName">Search Product: </label>
                        <Field
                            className="field"
                            id="productName"
                            name="productName"
                        />
                    </div>

                </Form>

            </Formik>


        </div>
    );

    return (
        <div>
            <p className="main-title">Search Product Page</p>
        </div>
    );

};


export default SearchProduct;
