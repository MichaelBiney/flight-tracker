import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from  '../FirebaseConfig';

const Register = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate

const handleRegister = async (e) => {
    e.preventDefault()
    try{
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Registered Succesfully');
        navigate('./home');
    } catch (error){
        console.error('error registering',error)
        alert('error registering' + error.message)
    }
};

return (
    <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
        />
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
        <button type="submit">Register</button>
    </form>
);
};

export default Register;

