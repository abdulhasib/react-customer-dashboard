// component/Header.tsx
import React from 'react';

import { useLocation } from 'react-router-dom';
import Button from './Button';

import { undone } from '../asset';
import { navigation } from '../constant';

const Header: React.FC = () => {
  const pathname = useLocation();
  return (
    <div
      className="fixed top-0 left-0 w-wull z-15 bg-n-8/90 backdrop-vlur-sm 
    border-n-6 ls:bg-n-8/90 lg:backdrop-vlue-sm -z-1"
    >
      <div className="flex items-center justify-center flex-row px-5 xl:px-10">
        <a
          className="flex items-center flex-row w-12 py-5 xl:mr-8 z-1"
          href="#hero"
        >
          <img src={undone} />
        </a>

        <nav
          className="fixed top-5 left-0 right-0 bottom-0
        bg-n-8 lg:static lg:flex"
        >
          <div
            className="relative z-2 flex items-center justify-center m-auto
            flex-row"
          >
            {navigation.map((item) => (
              <Button
                key={item.id}
                type="link"
                to={item.url}
                className={`block relative font-code uppercase text-n-1 transition-colors hove:text-color-1 
                ${item.onlyMobile ? 'lg:hidden' : ''}
                px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 
                ${
                  item.url === pathname.hash
                    ? 'z-2 lg:text-n-1'
                    : 'lg:text-n-1/50'
                }
                lg:leading-5 lg:hover:text-n-1 xl:px-12
              `}
              >
                {item.title}
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
