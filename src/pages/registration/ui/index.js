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


export function FormIndicator({ pageName }) {
 
    return <div className="col-3 d-none d-lg-flex justify-content-center align-items-center">
        <nav className="nav flex-column justify-content-center  pp_right_section">
            {['Profile', 'Contact', 'Funds', 'Validation', 'Logo', 'Department', 'Finish'].map((name, index) => {
                return <span key={index} className={`nav-link d-flex mb-4 align-items-center pp_links ${pageName === name ?'pp_link_active': ''}`}>
                    <Checkicon name={pageName === name ?'pp_link_active': ''} /> <span className="d-inline-block ms-2">{name}</span>
                </span>
            })}
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


export function CopyIcon() {
   return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
</svg>

}