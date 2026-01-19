'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

const login = () => {

    const [error, setError] = useState(null)
    const router= useRouter()
    const handleLoginSubmission = async (e) => {

        e.preventDefault()
        const fd = new FormData(e.currentTarget)
        const email = fd.get('email')
        const password = fd.get('password')

        const response = await signIn('credentials',{email:email,password:password})

        if(!response?.error){
            router.replace("/")
            router.refresh
        }
            
        else{
                setError("Wrong Password")
        }

    }

    return (
        <div>
            <form onSubmit={handleLoginSubmission}>

                <input type="email" name="email" id="" placeholder='Your Email' />

                <input type="password" name="password" id="" placeholder='Your Pssword' />
                <button type='submit'>Submit</button>
                {error && <p style={{color:"red"}}>{error}</p>}
            </form>
        </div>
    )
}

export default login