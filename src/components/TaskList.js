import React, { useState, useEffect } from 'react';
import { Accordion, Card, Button, Form, Row, Col, Image } from 'react-bootstrap'
import Icon from '../assets/image/avtar.png'
import ReactDOM from 'react-dom';
export default function TaskList(props) {
    const [iteamList, setIteamList] = useState({
        task: '',
        data: '',
        time: '',
    })

    useEffect(() => {
        setIteamList(props.data)
    }, [])
    const handleFieldChange = (value) => {
        setIteamList(prevState => ({
            ...prevState,
            [value.field]: value.value,
        }));
    }
    const updateInfo = () => {
        props.updateInfo(iteamList, props.keyVal);
        let element = document.getElementById('uniqueCol' + props.keyVal)
        ReactDOM.findDOMNode(element).classList.remove("show")
    }
    const cancelButton = ()=>{
        let element = document.getElementById('uniqueCol' + props.keyVal)
        ReactDOM.findDOMNode(element).classList.remove("show")
    }
    const removeData = ()=>{
        let element = document.getElementById('uniqueCol' + props.keyVal)
        ReactDOM.findDOMNode(element).classList.remove("show")
        props.removeItema(props.keyVal)
    }

    return (
        <Accordion style={{ marginTop: "" }} /* defaultActiveKey="0" */ >
            <Card>
                <Card.Header style={{ display: 'flex', alignItems: 'center', background: '#fff' }}>
                    <div style={{ flex: '1', display: 'flex', fontSize: '12px', gap: '9px' }}>
                        <Image style={{ width: '35px' }} src={Icon} rounded thumbnail />
                        <div><b>{props.data.task}</b>
                            <div style={{ color: '#FF69B4' }}>{iteamList.date}</div>
                        </div>
                    </div>
                    <Accordion.Toggle as={Button} variant="link" eventKey={props.keyVal + 1}>
                        <div><i className="bi bi-pencil-square"></i></div>
                    </Accordion.Toggle>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <div><i className="bi bi-bell"></i></div>
                        <div><i className="bi bi-check2"></i></div>
                    </div>
                </Card.Header>
                <Accordion.Collapse id={"uniqueCol" + props.keyVal} eventKey={props.keyVal + 1}>
                    <Card.Body style={{ background: '#daeff8' }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Task Description</Form.Label>
                                <Form.Control value={iteamList.task} type="text" placeholder="Follow Up"
                                    onChange={event => {
                                        handleFieldChange({
                                            key: props.keyVal,
                                            value: event.target.value,
                                            field: 'task'
                                        })
                                    }}
                                />

                            </Form.Group>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control value={iteamList.date} type="date"
                                        onChange={event => {
                                            handleFieldChange({
                                                key: props.keyVal,
                                                value: event.target.value,
                                                field: 'date'
                                            })
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Time</Form.Label>
                                    <Form.Control value={iteamList.time} type="time" placeholder="Time"
                                        onChange={event => {
                                            handleFieldChange({
                                                key: props.keyVal,
                                                value: event.target.value,
                                                field: 'time'
                                            })
                                        }}
                                    />
                                </Form.Group>
                            </Row>
                            <div style={{ display: 'flex', gap: '15px',alignItems:'center' }}>
                                <div style={{ flex: '1' }}>
                                    <i onClick={()=>removeData()} class="bi bi-trash"></i>
                                </div>

                                <Button onClick={() => cancelButton()} >
                                    cancle
                                </Button>

                                <Button style={{background:'#3CB371'}} onClick={() => updateInfo()} variant="primary">
                                    Save
                                </Button>

                            </div>

                        </Form>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
