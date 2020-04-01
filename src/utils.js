import { toast } from "react-toastify";

export const getInfoMsg = info => {
  if (info.type === "descart") {
    return toast.info(
      `${info.fromPlayer} descartou ${info.cardUsed.descripiton}`,
      {
        containerId: "A",
        position: "top-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false
      }
    );
  }
  return toast.info(
    `${info.fromPlayer} usou ${info.cardUsed.descripiton} em ${info.toPlayer}`,
    {
      containerId: "A",
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false
    }
  );
};
