import React, { useState, useRef } from 'react'
import { Accordion, Card, Button, Form, Row, Col, Image } from 'react-bootstrap'
import Icon from '../assets/image/avtar.png'
import ReactDOM from 'react-dom';
import TaskList from './TaskList';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index'
function Task(props) {

    const [iteam, setIteam] = useState({
        task: '',
        date: '',
        time: ''
    })

    const [data, setFormData] = useState([])



    const handleFieldChange = (value) => {
        //console.log('value', value);
        setIteam(prevState => ({
            ...prevState,
            [value.field]: value.value,
        }));

    }

    const addIteam = () => {
        setFormData((oldIteam) => {
            return [...oldIteam, iteam]
        })
        props.addTask(data)
        let element = document.getElementById('uniqueCol')
        ReactDOM.findDOMNode(element).classList.remove("show")

        // console.log('hh', reft.current.classList);

        /*  myRef.current.classList[0].remove("show"); */

        setIteam({
            task: '',
            date: '',
            time: ''
        })
    }

    const removeItema = (keyVal) => {
        setFormData((preData) => {
            return preData.filter((data, key) => {
                return key !== keyVal
            })
        })
    }


    const updateInfo = (Updatedata, keyVal) => {
        data.splice(keyVal, 1, Updatedata);
        setFormData(data);
        setIteam({
            task: '',
            data: '',
            time: ''
        })
    }
    return (
        <div>
            <Accordion style={{ width: '50%', marginTop: "15%" }} /* defaultActiveKey="0" */ >
                <Card>
                    <Card.Header>
                        TASK {data.length}
                        <Accordion.Toggle as={Button} style={{ float: 'right' }} variant="link" eventKey="0">
                            <i className="bi bi-plus"></i>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className='test' id="uniqueCol" eventKey="0">
                        <Card.Body style={{ background: '#daeff8' }}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Task Description</Form.Label>
                                    <Form.Control type="text" placeholder="Follow Up"
                                        value={iteam.task}
                                        onChange={event => {
                                            handleFieldChange({
                                                value: event.target.value,
                                                field: 'task'
                                            })
                                        }}
                                    />

                                </Form.Group>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control type="date" placeholder="04/26/2021"
                                            value={iteam.date}
                                            onChange={event => {
                                                handleFieldChange({
                                                    value: event.target.value,
                                                    field: 'date'
                                                })
                                            }}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Time</Form.Label>
                                        <Form.Control type="time" placeholder="Time"
                                            value={iteam.time}
                                            onChange={event => {
                                                handleFieldChange({

                                                    value: event.target.value,
                                                    field: 'time'
                                                })
                                            }}

                                        />
                                    </Form.Group>
                                </Row>
                                <Button onClick={() => addIteam()} variant="primary">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                    {data && (
                        data.map((data, key) => {
                            return <TaskList data={data} keyVal={key} updateInfo={updateInfo} removeItema={removeItema} ></TaskList>
                        })
                    )

                    }
                </Card>
            </Accordion>


        </div>
    )
}

const mapStateToProps = (state) => {
 //   console.log('ddd', state);


}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (data) => dispatch(actions.addTask(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)
