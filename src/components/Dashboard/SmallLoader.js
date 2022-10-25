import { Spinner } from "react-bootstrap";

const SmallLoader = () => {
  return (
    <div className='bg-none px-4 py-3 rounded '>
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
