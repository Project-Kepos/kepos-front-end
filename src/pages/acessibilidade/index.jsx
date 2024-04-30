import { MdArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import Header from '../../components/header'
const Acessibilidade = () => {
    return (
        <><Header landing={true} />

            <div className={styles.container}>
            <Link to="/" className={styles.back}>
                    <MdArrowBack size={48} />
                    <div className={styles.backText}>Voltar</div>
                </Link>
                <h1>Acessibilidade</h1>
                


                <div className={styles.elementocontainer}>
                    <h2>Alto Contraste</h2>
                    <p>Alterna o esquema de cores dos textos e fundo da tela para branco e preto, maximizando o contraste para melhor leitura.
                        Para acessá-lo é simples: basta levar o cursor para o canto superior direito da página e selecionar o botão "Alto contraste".
                        Assim, é possível visualizar quando  função está ativa.</p>
                </div>
                <div className={styles.elementocontainer}>
                    <h2>Aumento de fonte</h2>
                    <p>Altera o tamanho geral das fontes contidas nas páginas. É possível escolher entre as opções aumento e redução de fontes através de dois botões. </p>
                    Os botões poderão ser encontrados no canto superior direito da página.
                </div>
                <div className={styles.elementocontainer}>
                    <h2>VLibras</h2>
                    <p> A suite VLibras é um conjunto de ferramentas gratuitas e de código aberto que traduz conteúdos digitais (texto, áudio e vídeo) em Português para Libras, tornando computadores, celulares e plataformas Web mais acessíveis para as pessoas surdas.
                        O VLibras é o resultado de uma parceria entre o Ministério da Gestão e Inovação em Serviços Públicos (MGISP), por meio da Secretaria de Governo Digital (SGD), o Ministério dos Direitos Humanos e da Cidadania (MDHC), por meio da Secretaria Nacional dos Direitos da Pessoa com Deficiência (SNDPD), e a Universidade Federal da Paraíba (UFPB), através do Laboratório de Aplicações de Vídeo Digital (LAVID). </p>


                </div>

            </div>
        </>
    )
}

export default Acessibilidade
