import '../App/App';
import { Elements } from '../Elements';
import '../Header/Header';
import './Precios.css';

function Precios(){
    return(
        <>
        <div>
            <h2>
                Precios flexibles que escalan contigo
            </h2>
            <p>Nuestra facturacion se ajusta al tamaño de tu empresa. Tiempo de prueba de 7 dias en todos nuestros planes</p>
            <div className='divpadre'>
            {Elements.map((plan)=> (
                
                <>
                        <div>
                            <div>
                            <div className='precios'>
                                <h4 className='nameplan'>{plan.name}</h4>
                                <h2 className='plan'>{plan.precio}</h2>
                                <span className='spanfacturacion'>{plan.facturacion}</span>
                                <ul className='caracteristicas'>
                                    <li>{plan.caracteristica1}</li>
                                    <li>{plan.caracteristica2}</li>
                                    <li>{plan.caracteristica3}</li>
                                    <li>{plan.caracteristica4}</li>
                                </ul>
                                <button className='Solidemo'>Solicitar demo</button>
                            </div>
                            </div>

                        </div>


                    </>
                
            ))}
            </div>
        </div>
        </>
    );
}

export default Precios;
