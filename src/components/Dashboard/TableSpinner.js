import { Spinner } from "react-bootstrap";

const TableSpinner = () => {
  return (
    <div className='table-loader'>
      <Spinner as='span' className=' spinner' animation='border' size='lg' />
    </div>
  );
};

export default TableSpinner;
