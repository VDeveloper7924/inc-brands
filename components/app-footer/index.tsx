import * as React from 'react';

export interface AppFooterProps {}

const AppFooter: React.SFC<AppFooterProps> = () => {
  const footerLogos = [
    {
      imageUrl: '/assets/images/logo_residential.png',
      title: '',
    },
    {
      imageUrl: '/assets/images/logo_housegather.png',
      title: '',
    },
    {
      imageUrl: '/assets/images/logo_mls_board.png',
      title: '',
    },
    {
      imageUrl: '/assets/images/logo_home_value_store.png',
      title: '',
    },
    {
      imageUrl: '/assets/images/logo_email_meeting.png',
      title: '',
    },
    {
      imageUrl: '/assets/images/logo_zipsaver.png',
      title: '',
    },
    {
      imageUrl: '/assets/images/logo_realpin.png',
      title: '',
    },
  ];
  return (
    <div className="bg-inc_black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row py-28 pb-16">
          <div className="px-4 w-full md:w-1/3 lg:w-1/2 xl:w-1/3">
            <img src="/assets/images/app_logo_1.png" alt="" style={{ height: 70 }} />
            <p className="text-inc_light_gray mt-6 leading-snug">
              Zip Brands is a rapidly growing dot-com company that started with simplified search concepts and evolved into one of the
              fastest-rising networks of online brands in the US. We deliver common sense web brands that cater to the ever-growing consumer
              demand for online solutions.{' '}
            </p>

            <div className="flex flex-wrap items-center -mx-4 mt-6">
              {footerLogos.map((footerLogo, index) => (
                <div key={`footer-logo-${index}`} className="px-4 py-3">
                  <img src={footerLogo.imageUrl} alt="" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col xl:flex-row w-full md:w-2/3 lg:w-1/2 xl:w-2/3">
            <div className="flex flex-1 xl:justify-center text-white px-4">
              <div>
                <div className="flex items-center" style={{ height: 80 }}>
                  <h1 className="font-myriad-pro-semibold text-2xl">Information</h1>
                </div>

                <div className="flex mt-1">
                  <div className="flex flex-col justify-start">
                    <div className="text-sm hover:text-inc_info cursor-pointer font-karla-bold uppercase my-2">About</div>
                    <div className="text-sm hover:text-inc_info cursor-pointer font-karla-bold uppercase my-2">Our Brands</div>
                    <div className="text-sm hover:text-inc_info cursor-pointer font-karla-bold uppercase my-2">Our Team</div>
                    <div className="text-sm hover:text-inc_info cursor-pointer font-karla-bold uppercase my-2">Careers</div>
                    <div className="text-sm hover:text-inc_info cursor-pointer font-karla-bold uppercase my-2">Teams of Use</div>
                    <div className="text-sm hover:text-inc_info cursor-pointer font-karla-bold uppercase my-2">Privacy Policy</div>
                  </div>

                  <div className="flex flex-col justify-start ml-12">
                    <div className="text-sm hover:text-inc_info cursor-pointer font-karla-bold uppercase my-2">Lead Generation</div>
                    <div className="text-sm hover:text-inc_info cursor-pointer font-karla-bold uppercase my-2">Advertising Network</div>
                    <div className="text-sm hover:text-inc_info cursor-pointer font-karla-bold uppercase my-2">Support & Help</div>
                    <div className="text-sm hover:text-inc_info cursor-pointer font-karla-bold uppercase my-2">Our Offices</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-1 xl:justify-center text-white px-4">
              <div>
                <div className="flex items-center" style={{ height: 80 }}>
                  <h1 className="font-myriad-pro-semibold text-2xl">Get Support</h1>
                </div>

                <div className="flex flex-col mt-1">
                  <div className="flex py-1/2">
                    <span className="text-inc_light_gray">Phone Support:&nbsp;</span>
                    <span>877-489-4859</span>
                  </div>

                  <div className="flex py-1/2">
                    <span className="text-inc_light_gray">Monday - Friday:&nbsp;</span>
                    <span>7:30am - 4:30pm (PST)</span>
                  </div>

                  <div className="flex py-1/2">
                    <span className="text-inc_light_gray">Saturday:&nbsp;</span>
                    <span>10:00am - 12:00pm (PST)</span>
                  </div>

                  <div className="flex py-1/2">
                    <span className="text-inc_light_gray">By Email 24/7:&nbsp;</span>
                    <span>support@zipbrands.com</span>
                  </div>
                </div>

                <div className="mt-5">
                  <span>Award winning support,&nbsp;</span>
                  <span className="text-inc_light_gray">voted number one in customer service.</span>
                </div>

                <div className="mt-4">
                  <h3 className="text-inc_light_gray">Our Offices:</h3>

                  <div className="flex flex-col sm:flex-row mt-3">
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <img src="/assets/images/ic_california_1.png" alt="" />

                        <div className="ml-2 text-xs text-inc_light_gray">
                          <p>+1 805-342-2428</p>
                          <p>Westlake Village, CA</p>
                        </div>
                      </div>

                      <div className="flex items-center mt-3">
                        <img src="/assets/images/ic_california_2.png" alt="" />

                        <div className="ml-2 text-xs text-inc_light_gray">
                          <p>+1 833-333-2333</p>
                          <p>Phoenix, AZ</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col mt-3 sm:mt-0 sm:ml-5">
                      <div className="flex items-center">
                        <img src="/assets/images/ic_texas_1.png" alt="" />

                        <div className="ml-2 text-xs text-inc_light_gray">
                          <p>+1 469-300-1967</p>
                          <p>Dallas, TX</p>
                        </div>
                      </div>

                      <div className="flex items-center mt-3">
                        <img src="/assets/images/ic_texas_2.png" alt="" />

                        <div className="ml-2 text-xs text-inc_light_gray">
                          <p>+1 469-300-1967</p>
                          <p>Austin, TX (COMING SOON)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-inc_light_gray p-4 mx-4">
          <p className="text-center text-inc_light_gray">ZipBrands, LLC Copyright 2021</p>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
