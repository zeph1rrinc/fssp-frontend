import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {login} from '../http/userAPI'
import {ErrorHandler} from "../utils/errorHandler";
import {useDispatch} from "react-redux";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const [error, setError] = useState(null)

    const signIn = async (e) => {
        e.preventDefault()
        try{
            const data = await login(username.toLowerCase(), password)
            dispatch({type: "LOGIN", payload: data})
        } catch (err) {
            setError(ErrorHandler(err))
        }
    }

    return (
        <Container fluid="sm">
            <Form className="form-signin text-center">
                <h1 className="h3 mb-3 font-weight-normal">Авторизация</h1>
                {!!error &&
                    <div className="alert alert-danger text" role="alert">
                        {error}
                    </div>}
                <Form.Group className="mb-3" controlId="formBasicLogin">
                    <Form.Label className="sr-only">Логин</Form.Label>
                    <Form.Control type="text" placeholder="Введите логин..." value={username} onChange={e => setUsername(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="sr-only">Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Введите пароль..." value={password} onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" onClick={signIn}>
                    Войти
                </Button>
            </Form>
        </Container>
    );
};

export default Login;