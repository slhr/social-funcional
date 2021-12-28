import React from "react";
import {Formik, Field, Form} from "formik";
import {login} from "../../redux/auth-reducer";
import {connect, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {Container, FlexContainer} from "../Styled/containers";
import styled from "styled-components";

const FormWrapper = styled.div`
  padding: 25px 25px 10px 25px;
`;

export const StyledButton = styled.button`

  display: inline-block;
  padding: 5px 20px;
  margin: 20px 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid #dd3e2b;

  color: #dd3e2b;
  transition: .2s ease-in-out;

  :before {
    content: "";
    background: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .5));
    height: 50px;
    width: 50px;
    position: absolute;
    top: -8px;
    left: -75px;
    transform: skewX(-45deg);
  }

  :hover {
    background: #dd3e2b;
    color: #fff;
  }

  :hover:before {
    left: 150px;
    transition: .5s ease-in-out;
  }

  :active {
    background-color: #fff;
    color: #dd3e2b;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 25px;
  border: none;
  border-bottom: 1px solid #dd3e2b;
  font-size: 13px;
  color: darkred;
  padding: 0 5px;
  margin: 0 0 20px 0;
  transition: background-color 5000s ease-in-out 0s;

  :focus {
    outline: none;
  }
`;

const StyledLabel = styled.label`
  color: #dd3e2b;
  margin: 10px;
`;

const StyledHeading = styled.h2`
  color: #dd3e2b;
  font-weight: bold;
  margin: 0 0 40px 0;
`;

const StatusField = styled.div`
  text-align: center;
  color: red;
`;

const Login = ({isAuth, login}) => {
    const captchaUrl = useSelector(state => state.auth.captchaUrl);

    const handleOnSubmit = (values, actions) => {
        login(values.email, values.password, values.rememberMe, values.captcha)
            .catch(error => {
                actions.setStatus(error.message)
            })
    }

    if (isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <FlexContainer>
            <Container width="30%">
                <FormWrapper>
                    <StyledHeading>LOGIN</StyledHeading>
                    <Formik initialValues={{email: "", password: "",}}
                            onSubmit={handleOnSubmit}>

                        {
                            ({status}) => {
                                return (
                                    <Form>
                                        <div>
                                            <Field as={StyledInput}
                                                   id="email"
                                                   name="email"
                                                   type="email"
                                                   placeholder="Email"/>
                                        </div>

                                        <div>
                                            <Field as={StyledInput}
                                                   id="password"
                                                   name="password"
                                                   type="password"
                                                   placeholder="Password"/>
                                        </div>

                                        <div>
                                            <Field id="rememberMe"
                                                   name="rememberMe"
                                                   type="checkbox"/>

                                            <StyledLabel htmlFor="password">Remember Me</StyledLabel>
                                        </div>

                                        {
                                            captchaUrl &&
                                            <>
                                                <img src={captchaUrl} alt="captcha"/>
                                                <Field as={StyledInput}
                                                       id="captcha"
                                                       name="captcha"
                                                       type="captcha"
                                                       placeholder="Enter symbols from picture"/>
                                            </>
                                        }

                                        <FlexContainer>
                                            <StyledButton type="submit">SUBMIT</StyledButton>
                                        </FlexContainer>

                                        {
                                            status && <StatusField>{status}</StatusField>
                                        }

                                    </Form>
                                )
                            }

                        }


                    </Formik>
                </FormWrapper>
            </Container>
        </FlexContainer>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);