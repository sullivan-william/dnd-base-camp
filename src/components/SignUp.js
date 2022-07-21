import { useState } from "react"
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
        <div>
            <h1>Sign Up</h1>
        </div>
    )
}

export default SignUp