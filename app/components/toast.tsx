import { toast } from "react-toastify";

const Toast = {
    success: (message: string) => {
        return toast.success(message);
    },
    error: (message: string) => {
        return toast.error(message);
    },
    info: (message: string) => {
        return toast.info(message);
    },
    warning: (message: string) => {
        return toast.warning(message);
    },
    toast: (message: string) => {
        return toast(message);
    }
};

export default Toast;