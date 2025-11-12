import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Lista de rotas onde NÃO queremos scroll to top (subitens do dropdown)
    const noScrollRoutes = [
      '/services/web',
      '/services/mobile',
      '/services/cloud',
      '/products/product-a',
      '/products/product-b',
      '/products/product-c'
    ];

    // Se a rota atual não está na lista de exceções, faz scroll to top
    if (!noScrollRoutes.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
