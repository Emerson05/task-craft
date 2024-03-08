import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return (
        <section className= {styles.home_container}>
            <h1>Bem-Vindo ao <span>Task Craft</span></h1>
            <p>Comece a Gerenciar os seus projetos agora mesmo</p>
            <LinkButton to= "/newproject" text = "Criar Projeto" />
            <img src={savings} alt="Cofrinho"></img>
        </section>
    )
}

export default Home