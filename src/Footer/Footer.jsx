import './Footer.css';

function Footer(){
    return(
        <div className='footerContenedor'>
            <div className='titlefooter'>
            <img
            className='logoFooter'
            src='/Materiales/logo-verde.PNG'/>
            <h1>Flex</h1>
            </div>
            <div>
                <ul className='list'>
                    <li><a>Producto</a></li>
                    <li><a>Funcionalidades</a></li>
                    <li><a>Precios</a></li>
                    <li><a>Recursos</a></li>
                    <li><a>Carreras</a></li>
                    <li><a>Ayuda</a></li>
                    <li><a>Privacidad</a></li>
                </ul>
            </div>
           
            <div className='end'>
                <p>2022 Flex. Un producto ficticio de Senpai.</p>
            </div>
            
        
        </div>
    )
}

export default Footer;