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
            <div className="centerRow">
                <div className="testo">
                    {fields.map((field) => (
                        <div key={field.name} className="row">
                            <div>
                                <span className="informazoni">{field.label}: </span>
                            </div>
                            <div>
                                {editable ? (
                                <input className="input" id="inputTextField"
                                type="text"
                                value={fieldValues[field.name]}
                                onChange={handleFieldChange(field.name)}
                                />
                                ) : (
                                <span>{fieldValues[field.name]}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
