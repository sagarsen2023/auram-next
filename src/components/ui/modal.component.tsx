import React, { ReactNode, useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
}

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  size = "md",
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const sizeConfigs = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  if (!isRendered) return null;

  return (
    <div
      className={`
        px-4 sm:p-0
        fixed inset-0 z-[999999] flex items-center justify-center
        bg-black/50
        transition-opacity duration-300
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
      onClick={onClose}
    >
      <div
        className={`
          ${sizeConfigs[size]}
          bg-white
          rounded-lg
          shadow-xl
          transition-all
          duration-300
          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }
          relative
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close component */}
        <button
          className="absolute top-0 right-0 text-2xl text-gray-500 p-4"
          onClick={onClose}
        >
          <FaXmark />
        </button>
        {/* Modal Content with Improved Flex Layout */}
        <div className="flex flex-col w-full">{children}</div>
      </div>
    </div>
  );
};

export default ModalComponent;
