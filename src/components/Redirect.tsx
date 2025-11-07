import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

interface RedirectProps {
  to: string;
  permanent?: boolean;
}

const Redirect: React.FC<RedirectProps> = ({ to, permanent = true }) => {
  useEffect(() => {
    // Immediate redirect using window.location for better SEO
    if (permanent) {
      window.location.replace(to);
    } else {
      window.location.href = to;
    }
  }, [to, permanent]);

  // Fallback React Router redirect
  return <Navigate to={to} replace={permanent} />;
};

export default Redirect;