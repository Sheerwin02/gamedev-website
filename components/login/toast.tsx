import React, { useState, useEffect } from "react";
import classNames from "classnames";

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={classNames(
        "fixed bottom-5 right-5 p-4 bg-green-500 text-white rounded-md",
        {
          hidden: !visible,
        }
      )}
    >
      {message}
    </div>
  );
};

export default Toast;
