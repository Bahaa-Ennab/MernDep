import axios from 'axios';
import { useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';

const CreateComp = () => {

    const [name, setName] = useState("")
    const [preferdPosition, setPreferdPosition] = useState("")
    const [errors, setErrors] = useState([]);
    const redirect = useNavigate()
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/new', {
            name,
            preferdPosition
        }).then(res => {
            console.log(res)
            redirect('/')
        })
            .catch(err => {
                console.log(err.response.data.errors);
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })

    }

    return (
        <div>
            <h3>add a player</h3>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>name</label><br />
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p>
                    <label>preferd Position</label><br />
                    <input type="text" onChange={(e) => setPreferdPosition(e.target.value)} value={preferdPosition} />
                </p>
                <button>create</button>
                {errors && <div style={{ color: 'red' }}>{errors}</div>}
            </form>
            <Link to={`/`}>
                <button>cancel</button>
            </Link>
        </div>
    )
}

export default CreateComp