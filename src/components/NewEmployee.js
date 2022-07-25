import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {get_all_units} from "../http/userAPI";

const NewEmployee = (props) => {
    const [userInfo, setUserInfo] = useState({
        lastname: '',
        firstname: '',
        secondname: '',
        unit_id: '',
        post: '',
        login: '',
        password: ''
    })

    const [units, setUnits] = useState([])

    useEffect(() => {
        async function fetch_data() {
            setUnits(await get_all_units())
        }
        fetch_data()
    }, [])


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить пользователя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <h3>Информация о сотруднике</h3>
                    <Form.Group className="mb-3" controlId="formBasicLastname">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Иванов"
                            value={userInfo.lastname}
                            onChange={e => setUserInfo({...userInfo, lastname: e.target.value})}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicFirstname">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Иван"
                            value={userInfo.firstname}
                            onChange={e => setUserInfo({...userInfo, firstname: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSecondname">
                        <Form.Label>Отчество</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Иванович"
                            value={userInfo.secondname}
                            onChange={e => setUserInfo({...userInfo, secondname: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Отдел</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={userInfo.unit_id}
                            onChange={e => setUserInfo({...userInfo, unit_id: e.target.value})}
                        >
                            <option>Выбрать...</option>
                            {units.map(unit => <option key={unit.id} value={unit.id}>{unit.name}</option>)}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPost">
                        <Form.Label>Звание</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Младший сержант"
                            value={userInfo.post}
                            onChange={e => setUserInfo({...userInfo, post: e.target.value})}
                        />
                    </Form.Group>
                    <h3>Учетные данные</h3>
                    <Form.Group className="mb-3" controlId="formBasicLogin">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control
                            type="login"
                            placeholder="i.ivanov"
                            value={userInfo.login}
                            onChange={e => setUserInfo({...userInfo, login: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            type="password"
                            autoComplete="false"
                            placeholder="*****"
                            value={userInfo.password}
                            onChange={e => setUserInfo({...userInfo, password: e.target.value})}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" onClick={() => props.createHandler(userInfo)}>Сохранить</Button>
                <Button variant="outline-dark" onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );

};

export default NewEmployee;