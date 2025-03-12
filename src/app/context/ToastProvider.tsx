"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import SuccessSnackbar from "../common/toastfy/SuccessSnackbar";
import ErrorSnanckbar from "../common/toastfy/ErrorSnanckbar";

// Define the shape of the toast context actions
interface IToastContext {
  show: (message: string, type: string) => void;
  success: (message: string) => void;
  error: (message: string) => void;
}

// Initialize Context with a default object to ensure autocompletion
const ToastContext = createContext<IToastContext>({
  show: () => {},
  success: () => {},
  error: () => {},
});

interface IToast {
  message: string;
  type: string;
  visible: boolean;
}

const initialValues: IToast = {
  message: "",
  type: "",
  visible: false,
};

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<IToast>(initialValues);

  const showToast = (message: string, type: string) => {
    setToast({ message, type, visible: true });
    setTimeout(() => setToast({ message: "", type: "", visible: false }), 3000);
  };

  const toastAction: IToastContext = {
    show: showToast,
    success: (message: string) => showToast(message, "Success"),
    error: (message: string) => showToast(message, "Error"),
  };

  return (
    <ToastContext.Provider value={toastAction}>
      {children}
      <SuccessSnackbar
        type={toast.type}
        visible={toast.visible}
        message={toast.message}
        onClose={() => setToast({ ...toast, visible: false })}
      />
      <ErrorSnanckbar
        type={toast.type}
        visible={toast.visible}
        message={toast.message}
        onClose={() => setToast({ ...toast, visible: false })}
      />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
