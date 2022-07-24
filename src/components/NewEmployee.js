import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const NewEmployee = (props) => {
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
                        <Form.Control type="text" placeholder="Иванов" autoFocus/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastname">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="text" placeholder="Иван" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastname">
                        <Form.Label>Отчество</Form.Label>
                        <Form.Control type="text" placeholder="Иванович" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Отдел</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Выбрать...</option>
                            <option value="1">УФССП по юго-заподному округу</option>
                            <option value="2">УФССП по северному округу</option>
                            <option value="3">УФССП по северо-восточному окугу'</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastname">
                        <Form.Label>Звание</Form.Label>
                        <Form.Control type="text" placeholder="Младший сержант" />
                    </Form.Group>
                    <h3>Учетные данные</h3>
                    <Form.Group className="mb-3" controlId="formBasicLastname">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control type="login" placeholder="i.ivanov" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastname">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="*****" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" onClick={props.onHide}>Сохранить</Button>
                <Button variant="outline-dark" onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );

};

export default NewEmployee;