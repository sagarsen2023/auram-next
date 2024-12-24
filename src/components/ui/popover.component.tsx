"use client";

import classNameMerger from "@/utils/class-name-merger";
import React, { useState, useRef, useEffect, ReactNode } from "react";

interface PopoverProps {
  children: ReactNode;
  onChange?: () => void;
  content: ReactNode;
  onOk?: () => void;
  okButtonClassName?: string;
  onCancel?: () => void;
  cancelButtonClassName?: string;
  position?: "top" | "bottom" | "left" | "right";
  size?: "sm" | "md" | "lg";
}

const Popover = ({
  children,
  content,
  onOk,
  onCancel,
  onChange,
  position = "bottom",
  size = "md",
  okButtonClassName,
  cancelButtonClassName,
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const positionClass = {
    top: "top-0 left-1/2 transform -translate-x-1/2 -translate-y-full",
    bottom: "bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full",
    left: "left-0 top-1/2 transform -translate-y-1/2 -translate-x-full",
    right: "right-0 top-1/2 transform -translate-y-1/2 translate-x-full",
  };

  const sizeClass = {
    sm: "w-56",
    md: "w-72",
    lg: "w-96",
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOk = () => {
    onOk?.();
    setIsOpen(false);
  };

  const handleCancel = () => {
    onCancel?.();
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
          onChange?.();
        }}
      >
        {children}
      </div>

      {isOpen && (
        <div
          className={`absolute bg-white shadow-lg ${positionClass[position]} ${sizeClass[size]} z-[999]`}
        >
          <div className="p-4">
            <div className="mb-4">{content}</div>

            <div className="flex justify-end space-x-2">
              <button
                className={classNameMerger([
                  "px-4 py-2 rounded-md",
                  cancelButtonClassName,
                ])}
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className={classNameMerger([
                  "px-4 py-2 rounded-md",
                  okButtonClassName,
                ])}
                onClick={handleOk}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;
