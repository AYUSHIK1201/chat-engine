import React,{useState} from 'react'

const sampleassignment = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [firstname,setFirstName]=useState('');
    const [lastname,setLastName]=useState('');
    return (
        <div>
            <input value={email} onchange={(e)=>setEmail(e.target.value)}/>
            
        </div>
    )
}

export default sampleassignment
