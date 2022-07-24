import React from 'react';
import {Button} from "react-bootstrap";

const Employee = ({employee, deleteHandler}) => {

    return (
            <tr>
                <td><Button onClick={() => deleteHandler(employee.id)} variant="outline-light">X</Button></td>
                <td>{employee.lastname}</td>
                <td>{employee.firstname}</td>
                <td>{employee.secondname}</td>
                <td>{employee.unit}</td>
                <td>{employee.post}</td>
                <td>{employee.login}</td>
            </tr>
    );
};

export default Employee;