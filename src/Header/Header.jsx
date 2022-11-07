import '../App/App';
import './Header.css';

function Header() {
    return(
        <div className='Title'>
            <div>
        <span className='span'>Nuevo</span>
        <h2>La plataforma para las empresas del futuro</h2>
        <p>Productos pensados para los negocios del proximo siglo</p>
        <div className='Btns'>
        <button className='demo'>Solicitar demo</button>
        <button>Registrarse</button>
        </div>
        </div>
        <div className='imgMateriales'>
            <img className='circulo' src='/Materiales/circle3-yellow.SVG'/>
            <img className='imgprincipal' src='/Materiales/header.JPG'/>
            <img className='puntos' src='/Materiales/dots3-blue.SVG'/>
        </div>
        </div>
        
    )
}

export default Header;