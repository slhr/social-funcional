import React from "react";
import {Formik, Field, Form} from "formik";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";



const Login = ({isAuth, login}) => {
    const handleOnSubmit = formData => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Navigate to={"/profile"} />
    }

    return (
        <div>
            <h1>Login page</h1>
            <Formik initialValues={{email: "", password: ""}}
                    onSubmit={handleOnSubmit}>
                <Form>
                    <label htmlFor="email">email</label>
                    <div>
                        <Field id="email"
                               name="email"
                               placeholder="email"
                               type="email"/>
                    </div>


                    <label htmlFor="password">password</label>
                    <div>
                        <Field id="password"
                               name="password"
                               placeholder="password"
                               type="password"/>
                    </div>


                    <Field id="rememberMe"
                           name="rememberMe"
                           type="checkbox"/>

                    <label htmlFor="password">remember me</label>


                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);