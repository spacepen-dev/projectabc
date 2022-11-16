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

export function ButtonLoader({ name, request, styles, type, disabled }) {
    console.log(request)
   return <button type={type} disabled={disabled} className={styles}>{!request? name : <Spin/> }</button>

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
    const upload = pageName === 'upload' ? 'pp_link_active' : '';
    const department = pageName === 'Department' ? 'pp_link_active' : '';


    return <div className="col-3 d-none d-lg-flex justify-content-center align-items-center">
        <nav className="nav flex-column justify-content-center  pp_right_section">
        <span className={`nav-link d-flex mb-4 align-items-center pp_links ${profile}`}>
                <Checkicon name={profile} /> <span className="d-inline-block ms-2">Profile</span>
        </span>
        <span className={`nav-link d-flex mb-4 align-items-center pp_links ${contact}`}>
                <Checkicon name={contact} /> <span className="d-inline-block ms-2">Contact</span>
        </span>
        <span className={`nav-link d-flex mb-4 align-items-center pp_links ${funds}`}>
        <Checkicon name={funds}/><span className="d-inline-block ms-2">Funds</span>
        </span>
        <span className={`nav-link d-flex mb-4 align-items-center pp_links ${validation}`}>
        <Checkicon  name={validation}/><span className="d-inline-block ms-2">Account validation</span>
            </span>
            <span className={`nav-link d-flex mb-4 align-items-center pp_links ${upload}`}>
        <Checkicon  name={upload}/><span className="d-inline-block ms-2">Logo Upload</span>
        </span>
            <span className={`nav-link d-flex mb-4 align-items-center pp_links ${department}`}>
        <Checkicon  name={department}/><span className="d-inline-block ms-2">Add department</span>
        </span>
    </nav>
</div>
    
};


export function Select({elem, name, onChange}) {
    return <select onChange={onChange} id={name} className="form-control" name={name}>
        <option>Choose from Options</option>
                {elem()}
    </select>
};


export function FullScreenLoader (){
    return (
      <div
        className=''
        style={{
          position: "fixed",
          top: 0,
          left: "0",
          right: 0,
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
        }}>
        <div
          className='px-4 py-3 bg-white rounded mx-auto'
          >
          <Spinner
            as='span'
            className='p-4 spinner z-10'
            animation='border'
            size='lg'
            style={{ color: "#4836C8", zIndex: "100" }}
          />
        </div>
      </div>
    );
  };
  


export function BusinessOffice() {
      return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
    
}