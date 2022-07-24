import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Link, Navigate} from "react-router-dom"
import {Button, Table} from "react-bootstrap";
import {delete_user, get_all_users} from "../http/userAPI";
import Employee from "../components/Employee";
import Swal from "sweetalert2";
import NewEmployee from "../components/NewEmployee";

const Admin = () => {
    const {user} = useSelector(state => state)
    const [employees, setEmployees] = useState([])
    const [modalShow, setModalShow] = useState(false);

    const deleteHandler = async (id) => {
        const result = await delete_user(id)
        setEmployees(employees.filter(employee => employee.id !== id))
        Swal.fire("Успех", result, 'success')
    }




    useEffect(() => {
        async function fetch_data() {
            setEmployees(await get_all_users())
        }
        fetch_data()
    }, [])

    if (user.id !== 0) {
        return (
            <Navigate to="/" />
        )
    }

    return (
        <div>
            <Link className="nav-link d-inline" style={{fontSize: "2 rem"}} to="/">{"<-"}</Link>&nbsp;&nbsp;&nbsp;
            <h1 className="text-center">Админ-панель</h1>
            <hr />
            <h2>Пользователи</h2>

            <Button variant="outline-dark mb-3" onClick={() => setModalShow(true)}>
                Добавить пользователя
            </Button>

            <NewEmployee
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Отчетство</th>
                        <th>Отдел</th>
                        <th>Звание</th>
                        <th>Логин</th>
                    </tr>
                </thead>
                <tbody>
                {employees.map(employee => <Employee key={employee.id} employee={employee} deleteHandler={deleteHandler}/> )}
                </tbody>
            </Table>
        </div>
    );
};

export default Admin;