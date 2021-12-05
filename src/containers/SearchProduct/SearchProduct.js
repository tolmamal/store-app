import React, {useState} from 'react';
import { Formik, Field, Form } from "formik";
import {submitSearchAllProducts, submitSearchProduct} from "../../api";
import "./SearchProduct.css";


const ProductItem = ({product}) => {
    return (
        <div>
            <label>ID: {product.id}</label>
            <span> | </span>
            <label>Name: {product.name}</label>
            <span> | </span>
            <label>Price: {product.price}</label>
        </div>
    );
}

const ProductsList = ({data}) => {
    return (
        <div>
            <ul>
                {
                    data.map(product => (
                        <li key={product.id}>
                            <ProductItem product={product}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

const SearchProduct = () => {
    const [name, setName] = useState('');
    const [results, setResults] = useState([]);

    const validateInput = (value) => {
        let error = '';
        let specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (!value) {
            error = 'Error occurred: product name is required!';
        }
        else {
            // if (!(value.match("^[a-zA-Z]([^A-Za-z0-9])*"))) {
            //     error = 'Error occurred: product name must start with a letter!';
            // }
            // if (specialChars.test(value)) {
            //     error = 'Error occurred: no special chars!';
            // }

        }

        return error;
    };

    const submitGetAll = async () => {
        // const result = await submitSearchAllProducts('car');
        const result = await submitSearchAllProducts();
        setResults(result.data);

        console.log({result});
    };

    const submitSearch = async (values) => {
        const result = await submitSearchProduct(values.productName);
        setResults(result.data);
    }

    const Basic = () => (
        <div className="basic">
            <Formik
                initialValues={{
                    productName: ''
                }}
                onSubmit={submitSearch}
            >
                {({ errors, touched, isValidating }) => (
                <Form>
                    <div className="input-field">
                        <label className="label" htmlFor="productName">Search Product: </label>
                        <Field
                            className="field"
                            id="productName"
                            name="productName"
                            validate={validateInput}
                        />
                    </div>
                    <div className="error">
                        {errors.productName && touched.productName && <div>{errors.productName}</div>}
                    </div>
                    <button type="submit" className="submit-button" >Search Product</button>

                </Form>
                )}

            </Formik>
        </div>
    );

    return (
        <div>
            <p className="main-title">Search Product Page</p>
            <Basic />
            {/*<button className="test-button" onClick={submitGetAll}>Search For All Products</button>*/}
            <ProductsList data={results}/>
        </div>

    );

};


export default SearchProduct;
