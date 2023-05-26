import React from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import Libros from './Libros'

const Admin = () => {
    const navigate = useNavigate()
    const [user, setUser] = React.useState(null)
    React.useEffect(()=>{
        if (auth.currentUser) {
            console.log('Existe un usuario')
            setUser(auth.currentUser)
        } else {
            console.log('No existe un usuario')
            navigate('/login')
        }
    },[navigate])
  return (
    <div>
        <h2>Ruta protegida</h2>
        {
            user && (
                <h3>Usuario: {user.email}</h3>
            )
        }
        <Libros></Libros>
    </div>
  )
}

export default Admin