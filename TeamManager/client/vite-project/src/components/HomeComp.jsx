import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { data, Link, redirect, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Homecomp = () => {
    const [players, setPlayers] = useState([])
    const [errors, setErrors] = useState([]);
    const { id } = useParams()
    const redirect = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/')
            .then(res => { setPlayers(res.data), console.log(res) })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
        , [])


    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/delete/` + id)
            .then(res => {
                setPlayers(players.filter(player => player._id != id))
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>list</h1>
            <Link to={`/create`}>add Player</Link>

            <table border="1">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>preferd spot</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>{player.preferdPosition}</td>
                            <td>
                                <button
                                    onClick={() => handleDelete(player._id)}
                                    style={{ backgroundColor: 'red', color: 'white' }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Optional: Show errors below if needed */}
            {errors && <div style={{ color: 'red' }}>{errors}</div>}
        </div>

    )
}

export default Homecomp