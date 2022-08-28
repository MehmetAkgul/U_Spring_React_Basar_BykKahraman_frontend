import React from "react";


const Input = (props) => {

    const {label,error,name,onChange,type}=props;
    const className= error ? 'is-invalid form-control' : 'form-control';
    return (
        <div className="mb-3">
            <label htmlFor="userName" className="form-label">{ label}</label>
            <input type={type}
                   className={className}
                   name={ name}
                   onChange={ onChange}/>
            <div className="invalid-feedback">
                { error}
            </div>
        </div>
    )
}

export default Input