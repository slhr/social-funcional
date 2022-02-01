import {yupResolver} from "@hookform/resolvers/yup";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import {login} from "../../redux/auth-reducer";
import {Container, FlexContainer} from "../Styled/containers";


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
  color: darkred;
  padding: 0 5px;
  margin: 10px 0 10px 0;
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
  margin: 0 0 30px 0;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;


const schema = yup.object().shape({
    email: yup.string().required("Email is required field"),
    password: yup.string().required("Password is required field"),
});


const Login = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const dispatch = useDispatch();

    const {register, handleSubmit, setError, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    });

    const onSubmit = (values) => {
        dispatch(login(values.email, values.password, values.rememberMe, values.captcha))
            .catch(e => {
                setError("serverError", {message: e.message});
            });
    };

    const captchaUrl = useSelector(state => state.auth.captchaUrl);

    // gh-pages login info
    const [email, setEmail] = useState("slhr@bk.ru");
    const [password, setPassword] = useState("slhrslhr");

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };
    // ------------------------------------

    if (isAuth) {
        return <Navigate to={"/profile"}/>;
    }

    return (
        <FlexContainer>
            <Container width="30%">
                <FormWrapper>
                    <StyledHeading>LOGIN</StyledHeading>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <StyledInput {...register("email")} placeholder="Email" value={email} onChange={onEmailChange}/>
                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                        <StyledInput {...register("password")} type="password" placeholder="Password" value={password}
                                     onChange={onPasswordChange}/>
                        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

                        <input {...register("rememberMe")} type="checkbox"/>
                        <StyledLabel htmlFor="rememberMe">Remember Me</StyledLabel>

                        {
                            captchaUrl &&
                            <>
                                <img src={captchaUrl} alt="captcha"/>
                                <StyledInput {...register("captcha")} placeholder="Enter symbols from picture"/>
                                {errors.captcha && <ErrorMessage>{errors.captcha.message}</ErrorMessage>}
                            </>
                        }

                        <FlexContainer>
                            <StyledButton type="submit">SUBMIT</StyledButton>
                        </FlexContainer>
                        {errors.serverError && <ErrorMessage>{errors.serverError.message}</ErrorMessage>}
                    </form>

                </FormWrapper>
            </Container>
        </FlexContainer>
    );
};


export default Login;