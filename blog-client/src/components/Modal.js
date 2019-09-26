import React from 'react';
import { createPortal } from 'react-dom';
import { usePortal } from '../hooks/usePortal';

const Modal = ({ children }) => {
  const target = usePortal('modal');
  return createPortal(children, target);
};
export default Modal;
