import {useState} from "react";

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleNum1Change = (e) => {
        setNum1(e.target.value);
    }
    const handleNum2Change = (e) => {
        setNum2(e.target.value);
    }
    const handleAdd = () => {
        const sum = parseInt(num1) + parseInt(num2);
        setResult(sum);
    }
    const handleSub = () => {
        const difference = parseInt(num1) - parseInt(num2);
        setResult(difference);
    }
    const handleMulti = () => {
        const product = parseInt(num1) * parseInt(num2);
        setResult(product);
    }
    const handleDiv = () => {
        const quotient = parseInt(num1) / parseInt(num2);
        setResult(quotient);
    }

    return (
        <div>
            <img src="https://product.hstatic.net/1000330808/product/880btg_hong_f0ffc5bcdd3e4b7691dd3f7e39d702cf.png" alt="" width="400px" height="400px"/>
            <h1>Calculator</h1>
            <input type="number" value={num1} onChange={handleNum1Change}/>
            <input type="number" value={num2} onChange={handleNum2Change}/>
            <p>Result: {result}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
            <button onClick={handleMulti}>*</button>
            <button onClick={handleDiv}>/</button>
        </div>
    )
}

export default Calculator;