import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

export const NavbarItemHome = () => {
  const { pathname } = useLocation();

  return (
    <Link
      to="/home"
      className={classNames('navbar-item', {
        'is-active': pathname === '/',
      })}
    >
      Home
    </Link>
  );
};
