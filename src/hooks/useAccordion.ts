import { useCallback, useState } from "react";

export const useAccordion = (defaultOpenId: number | null = null) => {
  const [openId, setOpenId] = useState<number | null>(defaultOpenId);

  const toggle = useCallback((id: number) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  }, []);

  const isOpen = useCallback(
    (id: number) => {
      return openId === id;
    },
    [openId],
  );

  return {
    openId,
    toggle,
    isOpen,
  };
};