import Button from '../button'
import { useState } from "react";
import CustomLink from '../custom-link'
import InputText from '../inputText'
import styles from './styles.module.css'



const SignUpbox = () => {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [warning, setWarnig] = useState(false)
 
  const handleComparassion = () =>{
    if(password!=confPassword){
    setPassword("")
    setConfPassword("")
    setWarnig(true)
    }
    else{
      setWarnig(false)
    }
  }
  return (

    <div className={styles.box}>
      <div>
        <div className={styles.textLogin}>Criar uma conta</div>
        <div className={styles.greenBox}>
          <form onSubmit={() => { }}>
            <div className={styles.intoBox}>
              <div className={styles.boxItem}>
                <InputText type="text" placeholder="Usuário" id="user" />
              </div>
              <div className={styles.boxItem}>
                <InputText type="email" placeholder="E-mail" id="email" />
              </div>
              <div className={styles.boxItem}>
                <InputText type="password" placeholder="Senha" id="senha" value={password} onChange={e => {setPassword(e.target.value);setWarnig(false)}} />
              </div>
              <div className={styles.boxItem}>
                <InputText
                  type="password"
                  placeholder="Confirmar senha"
                  id="Confsenha"
                  value={confPassword}
                  onChange={e => {setConfPassword(e.target.value)}}
                  onBlur={e =>{handleComparassion()}}
                 
                />
              </div>
              {warning ? 'senhas não coicidem' : ''}
              <div className={styles.boxItem}>
                <Button>Criar Conta</Button>
              </div>
              <div className={styles.boxItemLink}>
                <CustomLink to="/sign-in">Já possuo uma conta</CustomLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpbox
