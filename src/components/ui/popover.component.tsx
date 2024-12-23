import React, { useState, useRef, useEffect } from "react";

interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
}

const Popover = ({ trigger, content, onOk, onCancel }: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

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
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-64 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="p-4">
            <div className="mb-4">{content}</div>

            <div className="flex justify-end space-x-2">
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={handleOk}>OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;
