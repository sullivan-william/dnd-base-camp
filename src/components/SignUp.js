import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function SignUp() {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:3001/users/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})

        navigate('/')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username </Form.Label>
                <Form.Control 
                    type="text"
                    required
                    value={user.username}
                    onChange={e => setUser({ ...user, username: e.target.value })}
                    name="username" 
                />
            </Form.Group>
            <br/>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password </Form.Label>
                <Form.Control 
                    type="password"
                    required
                    value={user.password}
                    onChange={e => setUser({ ...user, password: e.target.value })}
                    name="password" 
                />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

export default SignUp