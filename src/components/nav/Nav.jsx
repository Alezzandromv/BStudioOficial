import bsLogo from '../../assets/logoBs.svg';
import './Nav.css'

export function NavBs(){

    return(
        <div className='bs-header w-full flex justify-between items-center font-bold py-10 px-20 z-20'>
            <img src={bsLogo} className='bs-header-logo max-w-[216px] flex-1'></img>  
            <nav className='bs-header-nav px-[200px] flex justify-between items-center flex-1 px-70'>
                <a>Servicios</a>
                <a>Nosotros</a>
                <a>Proyectos</a>
            </nav>
            <div className='bs-header-btn text-[20px] font-bold'>
            <button className='bg-[#5C43FF] py-3 px-5 rounded-[15px] text-[20px]'>Contactanos</button>
            </div>
        </div>
    )


}