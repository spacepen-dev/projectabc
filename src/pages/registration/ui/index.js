import { Spinner } from "react-bootstrap";
import Logo from '../../../assets/img/logo.svg';

export function Error({ error }) {
    return <p className="text-danger">{error}</p>

}

export function Input({ name, handleChange, value, styles, placeholder, id, type }) {
    return <input className={styles} type={type} name={name} placeholder={placeholder} id={id} value={value} onChange={handleChange} />

}

export function Label({name, styles}) {
    return <label htmlFor="registeredBusiness" className={styles}>{name}</label>

}
export function Spin() {
    return <Spinner
    as='span'
    className='text-white '
    animation='border'
    size='md'
  />
}

export function ButtonLoader({name,request, styles,type}) {
   return <button type={type} className={styles}>{!request? name : <Spin/> }</button>

}


export function NewBackground({children}) {
    return <div className="body">
         {children}
     </div>
};


export function Image({url, alt,styles}) {
    return <img src={url} alt={alt} className={styles} />

}

export function Check({color}) {
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM10.47 12L7 8.5L8.4 7.09L10.47 9.17L15.6 4L17 5.41L10.47 12ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4Z" fill={ color} />
    </svg>
    
}

export function RegistrationFormHeader({name, desc}) {
    return <div class="heading-cont">
    <div className="logo-cont">
    <Image url={Logo} styles='comp-logo' alt='logo' />
    </div>
    <h2 className="heading-text">
        {name}
    </h2>
    <p className="mt-3 mb-4 heading-subtext">{desc}
    </p>
</div>
}


export function Button({type, onClick, name, styles, disabled, buttonref}){
    return <button className={styles} ref={!buttonref? null: buttonref} disabled={disabled} type={type} onClick={onClick} >{ name}</button>
}




export function Checkicon({ name }) {
    console.log(name)
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${name ? 'text-success': 'text-secondary'}`} style={{height:'20px'}}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
 
};


export function FormIndicator({pageName}) {
    const profile = pageName === 'Profile' ? 'pp_link_active' : '';
    const contact = pageName === 'Contact' ? 'pp_link_active' : '';
    const funds = pageName === 'Funds' ? 'pp_link_active' : '';
    const validation = pageName === 'Validation' ? 'pp_link_active' : '';


    return <div className="col-3 d-none d-sm-flex justify-content-center align-items-center">
    <nav className="nav flex-column">
        <a href="/" className={`nav-link d-flex mb-4 align-items-center pp_links ${profile}`}>
                <Checkicon name={pageName} /> <span className="d-inline-block ms-2">Profile</span>
        </a>
        <a href="contact.html" className={`nav-link d-flex mb-4 align-items-center pp_links ${contact}`}>
        <Checkicon/> <span className="d-inline-block ms-2">Contact</span>
        </a>
        <a href="/" className={`nav-link d-flex mb-4 align-items-center pp_links ${funds}`}>
        <Checkicon/><span className="d-inline-block ms-2">Funds</span>
        </a>
        <a href="/" className={`nav-link d-flex mb-4 align-items-center pp_links ${validation}`}>
        <Checkicon/><span className="d-inline-block ms-2">Account validation</span>
        </a>
    </nav>
</div>
    
};


export function Select({elem, name, onChange}) {
    return <select onChange={onChange} id={name} className="form-control" name={name}>
        <option>Choose from Options</option>
                {elem()}
    </select>
}