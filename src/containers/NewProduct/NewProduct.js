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

    const validateName = (value) => {
      let error = '';
      let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

      if (!value) {
          error = 'Error occurred: product name is required!';
      }
      else {
          if (!(value.match("^[a-zA-Z]([^A-Za-z0-9])*"))) {
              error = 'Error occurred: product name must start with a letter!';
          }
          if (specialChars.test(value)) {
              error = 'Error occurred: no special chars!';
          }
      }
      return error;
    };


    const validatePrice = (value) => {
        let error = '';
        const regex = '^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$';
        if (!value) {
            error = 'Error occurred: price is required!';
        }
        else if (!(value.match(regex))) {
            error = 'Error occurred: price must be a pattern of numbers';
        }
        return error;
    };

    //TODO: add msg to the user - on success
    const Basic = () => (
        <div className="basic">
            <Formik
                initialValues={{
                    productName: '',
                    productPrice: ''
                }}
                onSubmit={async (values) => {
                    await submitNewProduct(values.productName, values.productPrice);
                    console.log("product added successfully");

                }}
                >
                {({ errors, touched, isValidating }) => (
                    <Form>
                        <div className="input-field">
                            <label className="label" htmlFor="productName">Product Name: </label>
                            <Field
                                className="field"
                                id="productName"
                                name="productName"
                                placeholder="Notebook"
                                validate={validateName}
                            />
                            <div className="error">
                                {errors.productName && touched.productName && <div>{errors.productName}</div>}
                            </div>

                        </div>

                        <div className="input-field">
                            <label className="label" htmlFor="productPrice">Product Price: </label>
                            <Field
                                className="field"
                                id="productPrice"
                                name="productPrice"
                                placeholder="20.99"
                                validate={validatePrice}
                            />
                            <div className="error">
                                {errors.productPrice && touched.productPrice && <div>{errors.productPrice}</div>}
                            </div>
                        </div>
                        <button type="submit" className="submit-button" >Add Product</button>
                    </Form>
                )}

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
