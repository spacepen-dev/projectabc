import { Spinner } from "react-bootstrap";

const FullScreenLoader = () => {
  return (
    <div
      className=''
      style={{
        position: "fixed",
        top: 0,
        left: "21%",
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
        className='bg-white px-4 py-3 rounded'
        style={{ marginLeft: "35rem" }}>
        <Spinner
          as='span'
          className='p-4 spinner'
          animation='border'
          size='lg'
          style={{ color: "#23549e", zIndex: "100" }}
        />
      </div>
    </div>
  );
};

export default FullScreenLoader;
