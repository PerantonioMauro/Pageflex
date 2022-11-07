import './Caracteristicas.css';
import '../App/App';


function Caracteristicas(){
    return(
        <div className="Caracteristicas"> 
            <di>
                <img
                className='caractimg'
                alt='mailicon'
                src='/Materiales/mail-icon.svg'/>
                <h3>
                    Capacitacion
                </h3>
                <p>Asistencia y capacitacion de primer nivel</p>
            </di>
            <di>
            <img
                className='caractimg'
                alt='analytics'
                src='/Materiales/analytics-icon.svg'/>
                <h3>
                    Analiticas claras
                </h3>
                <p>Disfruta de un dashboard de analiticas claras y accionables</p>
            </di>
            <di>
            <img
                className='caractimg'
                alt='people'
                src='/Materiales/people-icon.svg'/>
                <h3>
                    Soluciones para equipo
                </h3>
                <p>Facilita el accionar de tu empresa con nuestra suite de herramientas</p>
            </di>
        </div>
    )
}

export default Caracteristicas;