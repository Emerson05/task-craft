import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
function ProjectFrom({btnText}){
    return (
        <form className= {styles.form}>
            
            <Input type = "text" text="Nome do Projeto" name= "name" placeholder="Insira o Nome Do Projeto"/>
            
            <Input type = "number" text="Orçamento do Projeto" name= "budget" placeholder="Insira o Orçamento Total"/>
           
            <Select name= "category_id" text="Selecione a Categoria "/>

            <SubmitButton text ={btnText}/>
            
        </form>
    )
}

export default ProjectFrom