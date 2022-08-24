import { useContext, useState } from "react"
import { CurrentUser } from "../contexts/CurrentUser"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function Login() {

    const navigate = useNavigate()

    const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(`http://localhost:3001/authentication/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if (response.status === 200) {
            setCurrentUser(data.user)
            navigate('/')
        } else {
            window.alert("Could not find a user with the provided username and password")
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username </Form.Label>
                <Form.Control 
                    type="text"
                    required
                    value={credentials.username}
                    onChange={e => setCredentials({ ...credentials, username: e.target.value })}
                    name="username" 
                />
            </Form.Group>
            <br/>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password </Form.Label>
                <Form.Control 
                    type="password"
                    required
                    value={credentials.password}
                    onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                    name="password" 
                />
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
        </Form>
    )
}

export default Login