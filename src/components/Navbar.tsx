import Logo from '../assets/Rick-And-Morty-Logo.png'

function Navbar(){
    return(
        <div className='navbar'>
            <img src={Logo} alt='Rick & Morty'/>
        </div>
    )
}

export default Navbar