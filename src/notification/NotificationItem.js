import React, { useState, useContext, useEffect } from "react";
import { NotificationContext } from "./NotificationProvider";
import { Alert } from "react-bootstrap";

const NotificationItem = (props) => {
  const [remove, setRemove] = useState(false);
  // const [background,setBackground] = useState()

  const [state, dispatch] = useContext(NotificationContext);

  const RemoveNotification = () => {
    setRemove(true);

    setTimeout(() => {
      dispatch({
        type: "REMOVE_EXPIRED_NOTIFICATION",
        id: props.id,
      });
    }, 400);
  };

  const RemoveNoifictaionTimeout = () => {
    const id = setTimeout(() => {
      RemoveNotification();
    }, 2500);

    return () => {
      clearTimeout(id);
    };
  };

  useEffect(() => {
    RemoveNoifictaionTimeout();
  }, []);

  const changeNotificationBackgroundColor =
    props.alert === "Success" ? "green" : "red";
  return (
    // <Alert
    //   onClick={(e) => e.stopPropagation()}
    //   variant='danger'
    //   className='alert text-center shadow text-bold'>
    //   {/* <strong>{`${errMessage}. Check your internet connection and try again!`}</strong> */}
    //   <div className='alert-icon'>
    //     <i className='zmdi zmdi-close-circle'></i>
    //   </div>
    // </Alert>
    <div
      className={`notification-main-file ${
        remove ? "remove" : ""
      } ${changeNotificationBackgroundColor}`}>
      <div
        className='notification-body'
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "100%",
        }}>
        <p
          style={{
            marginRight: "10px",
          }}>
          {props.message}
        </p>
        <button onClick={RemoveNotification}>X</button>
      </div>
    </div>
  );
};

export default NotificationItem;
