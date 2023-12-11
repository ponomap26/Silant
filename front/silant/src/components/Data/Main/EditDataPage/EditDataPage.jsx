import React, {useState, useEffect} from 'react';
import axios from 'axios';

const EditForm = ({data, onSave}) => {
    const [formData, setFormData] = useState(data || {}); // Provide a default value for data

    useEffect(() => {
        setFormData(data || {}); // Update formData when data changes
    }, [data]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.patch(`http://127.0.0.1:8000/models/${formData.id}/`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Комплектация:
                <input
                    type="text"
                    name="equipment"
                    value={formData.equipment || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                Заводской номер:
                <input
                    type="text"
                    name="numberFactory"
                    value={formData.numberFactory || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                Номер двигателя:
                <input
                    type="text"
                    name="numberEngines"
                    value={formData.numberEngines || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                Номер трансмиссии:
                <input
                    type="text"
                    name="numberTransmissions"
                    value={formData.numberTransmissions || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                Numberbridge:
                <input
                    type="text"
                    name="numberBridge"
                    value={formData.numberBridge || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                Номер управляемого моста:
                <input
                    type="text"
                    name="numberBridgeSteerable"
                    value={formData.numberBridgeSteerable || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                Договор поставки №, дата:
                <input
                    type="text"
                    name="contractSupply"
                    value={formData.contractSupply || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                Дата отгрузки с завода:
                <input
                    type="text"
                    name="dateShipping"
                    value={formData.dateShipping || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                Получатель:
                <input
                    type="text"
                    name="consignee"
                    value={formData.consignee || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                Адрес поставки:
                <input
                    type="text"
                    name="addressDelivery"
                    value={formData.addressDelivery || ''}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Сохранить</button>
        </form>
    );
};

export default EditForm;
