// TextField.js
import React, { useState } from "react";

export function TextField({
    fields,
    onButtonClick,
    editable
}) {
        const [fieldValues, setFieldValues] = useState(
        fields.reduce((acc, field) => {
        acc[field.name] = field.value;
        return acc;
        }, {})
        );

        const handleFieldChange = (fieldName) => (event) => {
        setFieldValues((prevValues) => ({
        ...prevValues,
        [fieldName]: event.target.value
        }));
        };

        return (    
            <div className="testo">
                {fields.map((field) => (
                    <div key={field.name}>
                        <span className="informazoni">{field.label}: </span>
                        {editable ? (
                        <input className="input"
                        type="text"
                        value={fieldValues[field.name]}
                        onChange={handleFieldChange(field.name)}
                        />
                        ) : (
                        <span>{fieldValues[field.name]}</span>
                        )}
                    </div>
                ))}
            </div>
        );
    }
