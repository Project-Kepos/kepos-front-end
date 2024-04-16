import { MdAccountCircle } from 'react-icons/md'

import data from '../../../db.json'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { api } from '@libs/axios'
import { MdCheck } from "react-icons/md";


const MyAccount = () => {
  const [userData, setUserData] = useState(null)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await api.get('/users?id=1')
          setUserData(response.data[0])
          setUsername(response.data[0].name)
          setEmail(response.data[0].email)
          setPassword(response.data[0].password)
        }
        catch (e) {
          console.log(e)
        }
      }
      fetchData()
    }, [])

    if (userData == null) {
      return <p>Carregando</p>
    }

    async function handleChangeData(e) {
      e.preventDefault()

      // mandando mudanças
      try {
        await api.put("/users/1", {
          name: username,
          email,
          password
        })
      } catch(e) {
        console.log(e)
      }

    }

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.iconcard}>
          <MdAccountCircle size="4rem" className={styles.accountIcon} />
          <h1 className={styles.accountText}>Minha Conta</h1>
        </div>

        {/* <p className={styles.cardtext}>Nome atual: {userData.name}</p> */}
        <form onSubmit={(e) => handleChangeData(e)}>
          <div>
          <label htmlFor="username">Novo Nome:</label>
          <br />
          <input type="text" id="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
          </div>
        {/* <p className={styles.cardtext}>E-mail atual: {userData.email}</p> */}
        <div>
          <label htmlFor="email">Novo E-mail:</label>
          <br />
          <input type="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        {/* <p className={styles.cardtext}>Senha: {data.users[0].password}</p> */}
        <div>
          <label htmlFor="password">Nova Senha:</label>
          <br />
          <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        



        </div>  
        <div className={styles.button}>
      <button >
         <MdCheck /> 
          </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default MyAccount
