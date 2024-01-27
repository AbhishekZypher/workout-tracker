import { useState } from "react"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()


        console.log(email, password)
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>

            <label>Email:</label>
            <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>password:</label>
            <input
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button>Signup</button>
        </form>
    )
}

export default Signup