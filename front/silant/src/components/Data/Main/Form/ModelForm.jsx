import React from 'react';
import {Form, Button, Table} from 'react-bootstrap';
import './ModelForm.css';
import 'bootstrap/dist/css/bootstrap.css';

const ModelForm = ({selectedModel, handleInputChange, handleSave, handleCancelEdit}) => {
    return (
        <div className="container" style={{marginTop: '350px'}}>
            <div className="form-container">
                <Form>
                    <Table striped="columns">
                        <tbody>
                        <tr>
                            <td>Заводской номер</td>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="numberFactory"
                                    value={selectedModel.numberFactory}
                                   onChange={(e) => handleInputChange(e.target.value, selectedModel.id, e)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Номер двигателя</td>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="numberFactory"
                                    value={selectedModel.numberEngines}
                                   onChange={(e) => handleInputChange(e.target.value, selectedModel.id, e)}
                                />
                            </td>
                        </tr>
                        {/* Добавьте остальные поля формы с правильными значениями selectedModel */}
                        </tbody>
                    </Table>
                    <Button variant="success" onClick={handleSave}>
                        Save
                    </Button>
                    <Button variant="danger" onClick={handleCancelEdit}>
                        Cancel
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default ModelForm;