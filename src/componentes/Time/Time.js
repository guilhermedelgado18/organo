import Colaborador from '../Colaborador/Colaborador'
import './Time.css'

const Time = (props) => {
    
    const corPrimariaVar = {borderColor: props.corPrimaria}
    const corSecundariaVar = { backgroundColor: props.corSecundaria }
    
    return (
        (props.colaboradores.length > 0) && <section className="time" style={corSecundariaVar}>
            <h3 style={corPrimariaVar}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
} 

export default Time