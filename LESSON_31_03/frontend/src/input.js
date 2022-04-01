function Input ({initValue, onChange, id, fieldName}) {
    const onInputChange = event => {
        onChange(event, id, fieldName);
    }

    return(
        <input value={initValue} onChange={onInputChange}></input>
    );
}

export default Input;