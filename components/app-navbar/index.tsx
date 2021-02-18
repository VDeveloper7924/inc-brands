import * as React from 'react';

export interface AppNavbarProps {}

const AppNavbar: React.SFC<AppNavbarProps> = () => {
  const navItems = [
    { id: 'nav-company', title: 'Company', link: '#company' },
    { id: 'nav-out-brands', title: 'Our Brands', link: '#our-brands' },
    { id: 'nav-solutions', title: 'Solutions', link: '#solutions' },
    { id: 'nav-support', title: 'Support', link: '#support' },
    { id: 'nav-newsroom', title: 'Newsroom', link: '#newsroom' },
    { id: 'nav-contact', title: 'Contact', link: '#contact' },
  ];

  return (
    <div className="flex items-center justify-between py-6 mt-1">
      <div className="cursor-pointer">
        <img src="/assets/images/app_logo_1.png" alt="" className="h-10 lg:h-auto" />
      </div>

      <div className="flex items-center lg:hidden">
        <button type="button" className="bg-transparent text-white hover:text-inc_info text-sm font-karla-bold uppercase">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="svg-inline--fa fa-bars fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            height="24"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
      </div>

      <div className="hidden lg:flex items-center">
        <div className="flex">
          {navItems.map((navItem, index) => (
            <div key={`nav-${index}`} className="px-4 xl:px-6">
              <button type="button" className="bg-transparent text-white hover:text-inc_info text-sm font-karla-bold uppercase">
                {navItem.title}
              </button>
            </div>
          ))}
        </div>

        <div className="ml-4">
          <button type="button" className="border border-inc_info rounded hover:bg-inc_info py-4 px-8 text-white font-karla-bold uppercase">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
