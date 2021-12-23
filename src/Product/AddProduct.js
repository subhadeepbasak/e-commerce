import React from "react";
import { useFormik } from 'formik';
// import './Product.css';
import { connect } from "react-redux";
import { loadPdpDataSuccess } from '../store/actions/ProductAction';
import { useHistory } from 'react-router-dom';
import './AddProduct.css';
import PageHeader from '../Header/PageHeader';

const AddProduct = ({ fetchProductData }) => {
    const history = useHistory();

    const formSubmit = (values) => {
        fetchProductData(values);
        alert("added successfully");
        history.push('/');
    }

    const formikAddProduct = useFormik({
        initialValues: {
            productID: Math.floor(Math.random() * (999 - 100 + 1) + 100),
            productName: '',
            price: '',
            inStock: '',
            desc: '',
        },
        onSubmit: (values) => {
            formSubmit(values);
        },
        validate: (values) => {
            const errors = {};
            if (!values.productName) {
                errors.productName = 'Product Name required!!!';
            } else if (!/^[a-zA-Z._]*$/.test(values.productName)) {
                errors.productName = 'valid name required!!!';
            }
            if (!values.price) {
                errors.price = 'Product price required!!!';
            } else if (/^.{50,}?$/.test(values.price)) {
                errors.price = 'valid price required!!!';
            }
            if (!values.desc) {
                errors.desc = 'Product desc required!!!';
            } else if (/^.{50,}?$/.test(values.desc)) {
                errors.desc = 'valid desc required!!!';
            }
            if (!values.inStock) {
                errors.inStock = 'Product inStock required!!!';
            } else if (/^.{50,}?$/.test(values.inStock)) {
                errors.inStock = 'valid inStock required!!!';
            }
            return errors;
        },
    });
    const onHandleNameChange = (e) => {
        const name = e.target.value;
        if (name === '' || /^[a-zA-Z ]*$/.test(name)) {
            formikAddProduct.setFieldValue('productName', name);
        }

    };
    const onHandleinStockChange = (e) => {
        const name = e.target.value;
        if (name === '' || /^[a-zA-Z ]*$/.test(name)) {
            formikAddProduct.setFieldValue('inStock', name);
        }

    };
    const onHandleDescChange = (e) => {
        const name = e.target.value;
        if (name === '' || /^[a-zA-Z ]*$/.test(name)) {
            formikAddProduct.setFieldValue('desc', name);
        }

    };
    const onHandlePriceChange = (e) => {
        const price = e.target.value;
        if (price === '' || /^[0-9\b]*$/.test(price)) {
            formikAddProduct.setFieldValue('price', price);
        }
    };
    return (
        <>
        <PageHeader header="Add Product"/>
            <div className="form-container">
                <form onSubmit={formikAddProduct.handleSubmit}>
                    <ul className="form-item-ul">
                        <li className="form-li">
                            <div className="form-group">
                                <label className="lbl-title">Product Name*</label>
                                <input
                                    type="text"
                                    maxLength="500"
                                    className={`${formikAddProduct.errors.productName ? 'fc-error' : 'no-error'}`}
                                    name="addAddressProductName"
                                    value={formikAddProduct.values.productName}
                                    onChange={onHandleNameChange}
                                    onBlur={formikAddProduct.handleBlur}
                                    autoComplete="off"
                                    role="presentation"
                                />
                                {formikAddProduct.errors.productName ? (
                                    <span className="error"></span>
                                ) : null}
                            </div>
                        </li>
                        <li className="form-li">
                            <div className="form-group">
                                <label className="lbl-title">Price*</label>
                                <input
                                    type="tel"
                                    maxLength="500"
                                    className={`${formikAddProduct.errors.price ? 'fc-error' : 'no-error'}`}
                                    name="price"
                                    value={formikAddProduct.values.price}
                                    onChange={onHandlePriceChange}
                                    onBlur={formikAddProduct.handleBlur}
                                    autoComplete="off"
                                    role="presentation"
                                />
                                {formikAddProduct.errors.price ? (
                                    <span className="error"></span>
                                ) : null}
                            </div>
                        </li>
                        <li className="form-li">
                            <div className="form-group">
                                <label className="lbl-title">Available in stock*</label>
                                <input
                                    type="text"
                                    maxLength="500"
                                    className={`${formikAddProduct.errors.inStock ? 'fc-error' : 'no-error'}`}
                                    name="inStock"
                                    value={formikAddProduct.values.inStock}
                                    onChange={onHandleinStockChange}
                                    onBlur={formikAddProduct.handleBlur}
                                    autoComplete="off"
                                    role="presentation"
                                />
                                {formikAddProduct.errors.inStock ? (
                                    <span className="error"></span>
                                ) : null}
                            </div>
                        </li>
                        <li className="form-li">
                            <div className="form-group">
                                <label className="lbl-title">Description*</label>
                                <input
                                    type="text"
                                    maxLength="500"
                                    className={`${formikAddProduct.errors.desc ? 'fc-error' : 'no-error'}`}
                                    name="desc"
                                    value={formikAddProduct.values.desc}
                                    onChange={onHandleDescChange}
                                    onBlur={formikAddProduct.handleBlur}
                                    autoComplete="off"
                                    role="presentation"
                                />
                                {formikAddProduct.errors.desc ? (
                                    <span className="error"></span>
                                ) : null}
                            </div>
                        </li>
                    </ul>
                    <button
                        type="submit"
                        id="edit-address-btn"
                        className="btn-between"
                        disabled={formikAddProduct.isSubmitting}
                        onClick={async () => {
                            const curErrors = await formikAddProduct.validateForm();
                            const curErrorsKeys = Object.keys(curErrors);
                            if (curErrorsKeys.length) {
                                const el = document.getElementsByName(curErrorsKeys[0])[0];
                                if (el) {
                                    el.focus();
                                }
                            }
                        }}
                    >Add Product</button>
                </form>
            </div>
        </>
    )
}

export const mapStateToProps = (state) =>{
    return{
        productData : state
    }
}

export const mapDispatchToProps = (dispatch) =>{
    return{
        fetchProductData : (productData) =>{
            dispatch(loadPdpDataSuccess(productData));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);