import { Spinner } from "react-bootstrap";

const SmallLoader = () => {
  return (
    <div className='bg-white px-4 py-3 rounded bg-danger'>
      <Spinner
        as='span'
        className='p-2 spinner'
        animation='border'
        size='sm'
        style={{ color: "#23549e" }}
      />
    </div>
  );
};

export default SmallLoader;
