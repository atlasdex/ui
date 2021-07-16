import { ReactNode } from "react";
import { toast } from "react-toastify";

export const successMessage = (message : ReactNode) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}