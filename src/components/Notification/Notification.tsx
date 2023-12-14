interface INotification {
  message: string;
}

const Notification = ({ message }: INotification) => {
  return <div className="flex justify-start items-center w-full box-border mt-4 p-2 rounded-lg bg-lavender">{message} </div>;
};

export default Notification;
