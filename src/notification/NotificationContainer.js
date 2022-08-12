import React, { useContext } from "react";
import NotificationItem from "./NotificationItem";
import { NotificationContext } from "./NotificationProvider";

const NotifictionContainer = () => {
  const [state] = useContext(NotificationContext);

  //   const [data, setData] = useState();

  return (
    <div
      style={{
        position: "absolute",
        bottom: "5px",
        right: "0",
        width: "270px",
        background: "red",
      }}>
      {state.map((data) => {
        return <NotificationItem key={data.id} {...data} />;
      })}
    </div>
  );
};

export const useDispatchNotification = () => {
  const [state, dispatch] = useContext(NotificationContext);

  return (props) => {
    dispatch({
      type: "ADD_NEW_NOTIFICATION",
      payLoad: {
        id: new Date().getMilliseconds(),
        ...props,
      },
    });
  };
};

export default NotifictionContainer;
