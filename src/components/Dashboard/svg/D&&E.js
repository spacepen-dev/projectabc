import React from 'react';
import ViewEmployeeModal from "../ViewEmployeeModal";

export const Delete = ({ Delete }) => {
  
  return (
    <>
       <div className="bi bi-trash3" style={{ cursor: "pointer",display:'flex',alignItems:'center',justifyContent:'space-around',width:'100%' }} onClick={Delete}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="currentColor"  viewBox="0 0 16 16">
      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
     </svg>
      <p className='p de'>Delete Employee</p>
    </div>
    </>
  )
}
export const Edit = ({initialValue}) => {
  const [modal,setModal]=React.useState(false)
  const openModal = () => {
    setModal(true)
  }
  return (
    <>
    <div className='bi bi-pencil-square' style={{ cursor: "pointer",display:'flex',alignItems:'center',justifyContent:'space-around',width:'100%'  }} onClick={openModal}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    </svg>
      <p className='p ed'>Edit Employee</p>
      </div>
      {!modal ? (
        ""
      ) : (
        <ViewEmployeeModal
          modal={() => setModal(false)}
          initialValue={initialValue}
        />
      )}
    </>
  )
}
export const displaySVG = ({onClick}) => {
    return (
      <div
        className='h-100 w-100 d-flex align-items-center justify-content-center'
        id='circle-svg-container'
        onClick={onClick}
        style={{ cursor: "pointer" }}>
        <svg
          id='circle-svg'
          width='15'
          height='15'
          viewBox='0 0 23 5'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <circle cx='2.5' cy='2.5' r='2.5' fill='#659CF0' />
          <circle cx='11.5' cy='2.5' r='2.5' fill='#659CF0' />
          <circle cx='20.5' cy='2.5' r='2.5' fill='#659CF0' />
        </svg>
      </div>
    );
  };
