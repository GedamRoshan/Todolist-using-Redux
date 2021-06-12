import React, { useState } from 'react'
import { Button, Container, Form, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { TodoAdd, DeleteTodo } from '../action/index';
import '../css/Todolist.css';


export const Todolist = () => {
    const [data, setdata] = useState('');
    const datalist = useSelector((state) => state.ReducerTodo.list);
    console.log("datalist", datalist)
    //   const datalist = useState( (state)=>state.Reducertodo.list)
    const dispatch = useDispatch();

    return (
        <div >
            <h1 className="h1_tag">Todo List With React_Redux</h1>
            <Container className="body">

                <Form>
                    <Form.Group>
                        <Form.Label>Enter Your Name</Form.Label>
                        <Form.Control type="text" style={{ width: 250 }} placeholder="Enter Name"
                            value={data}
                            onChange={(event) => setdata(event.target.value)}
                        />
                    </Form.Group>
                    <Button type="submit" onClick={(event) => {
                        event.preventDefault();
                        dispatch(TodoAdd(data),
                            setdata(''))
                    }}>ADD</Button>
                </Form>
            </Container>
            <Table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    datalist &&
                    datalist.map((item) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.data}</td>
                                    <Button type="submit" variant="danger"
                                        value={data}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            dispatch(DeleteTodo(item.id))
                                        }}>Delete</Button>
                                </tr>
                            </tbody>
                        )
                    })
                }


            </Table>
        </div>
    )
}
