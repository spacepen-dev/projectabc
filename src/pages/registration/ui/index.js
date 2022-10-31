import { Spinner } from "react-bootstrap"
export function Error({ error }) {
    return <p className="text-danger">{error}</p>

}

export function Input({ name, handleChange, value, placeholder, id, type, error }) {
    return <input type={type} name={name} placeholder={placeholder} id={id} value={value} onChange={handleChange} />

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