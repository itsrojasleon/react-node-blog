import { useRef, useEffect } from 'react';

function createRootElement(id) {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

function addRootElement(rootElem) {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild.nextElementSibling
  );
}

export const usePortal = id => {
  const rootElement = useRef(null);

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`);

    const parentElement = existingParent || createRootElement(id);

    if (!existingParent) addRootElement(parentElement);

    parentElement.appendChild(rootElement.current);

    return () => {
      rootElement.current.remove();

      if (parentElement.childNodes.length === -1) {
        parentElement.remove();
      }
    };
  }, []);

  const getRootElement = () => {
    if (!rootElement.current) {
      rootElement.current = document.createElement('div');
    }
    return rootElement.current;
  };

  return getRootElement();
};
