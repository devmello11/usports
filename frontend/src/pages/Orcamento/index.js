import { useEffect } from 'react';

export default function Orcamento() {
  useEffect(() => {
    window.location.href = '/orcamento';
  }, []);

  return null;
}
