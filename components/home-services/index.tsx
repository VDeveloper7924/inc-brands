import * as React from 'react';

export interface HomeServicesProps {}

const HomeServices: React.SFC<HomeServicesProps> = () => {
  const services = [
    {
      imageUrl: '/assets/images/ic_online_marketing.png',
      title: 'Online Marketing',
      description: ' Many aspects of computing and technology and the term is more recognizable than before.',
    },
    {
      imageUrl: '/assets/images/ic_advanced_analytics.png',
      title: 'Advanced Analytics',
      description: ' Many aspects of computing and technology and the term is more recognizable than before.',
    },
  ];

  return (
    <div className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center px-4 md:h-670">
          <img src="/assets/images/img_home_real_estate.png" className="hidden md:block h-full" />

          <div className="flex-1 flex flex-col justify-center px-0 md:pl-10 md:pr-4 lg:pl-28 xl:pr-20 md:border-inc_light md:border-t-16 md:border-r-16 md:border-b-16 h-full">
            <div>
              <p className="text-center md:text-left text-inc_blue font-karla-bold uppercase">The Numbers</p>
              <h1 className="text-4xl md:hidden text-center font-myriad-pro mt-8 text-inc_text_primary">More Leads Higher ROI..</h1>
              <h1 className="hidden md:block text-5xl lg:text-6xl font-myriad-pro mt-8 text-inc_text_primary">More Leads</h1>
              <h1 className="hidden md:block text-5xl lg:text-6xl font-myriad-pro text-inc_text_primary">Higher ROI..</h1>
              <img src="/assets/images/img_home_real_estate.png" className="md:hidden mt-8 mx-auto" />
              <h3 className="text-2xl mt-8 leading-tight tracking-wider text-inc_text_secondary">
                Masters in quantity & quality. We think around the box.
              </h3>
              <p className="mt-4 leading-tight text-inc_text_secondary">
                Our advanced technologies for tracking consumer behavior give you the competitive advantage you need to be able to close
                deals faster, smarter, and not waste your time in calling forced leads other companies register. All our clients are
                specifically requesting to connect on their own will.
              </p>
            </div>

            <div className="flex justify-center md:justify-start mt-12">
              <button className="bg-inc_info rounded text-white font-karla-bold uppercase px-8 py-4">Learn More</button>
              <button className="bg-black rounded text-white font-karla-bold uppercase px-6 py-4 ml-3">Read Our Testimonials</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between py-4 lg:h-400">
          {services.map((service, index) => (
            <div key={`service-${index}`} className="w-full h-full lg:w-1/3 p-4">
              <div className="w-full h-full border-inc_light border-16  px-4 py-6 xl:px-10 xl:py-8">
                <img src={service.imageUrl} style={{ maxHeight: 62 }} className="mx-auto sm:ml-0" />

                <div className="mt-10">
                  <h1 className="text-center sm:text-left text-2xl font-myriad-pro-semibold text-inc_text_primary">{service.title}</h1>
                  <p className="text-center sm:text-left mt-1 leading-tight text-inc_text_secondary">{service.description}</p>
                </div>

                <div className="mt-8">
                  <button type="button" className="flex items-center mx-auto sm:ml-0">
                    <img src="/assets/images/ic_arrow.png" />
                    <span className="sm:text-left ml-2 font-karla-bold uppercase text-inc_text_secondary">Read More</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="w-full h-full lg:w-1/3 p-4">
            <div className="px-10 py-10 bg-inc_info text-white h-full">
              <div>
                <h1 className="font-myriad-pro-semibold text-2xl text-center sm:text-left">Subscribe Now</h1>
                <p className="mt-1 leading-tight text-center sm:text-left">
                  Many aspects of computing and technology and the term is more recognizable than before.
                </p>
              </div>

              <form className="mt-8">
                <div className="border border-white py-4 px-6">
                  <input placeholder="Enter your email...." className="bg-transparent text-black rounded" />
                </div>

                <div>
                  <button type="button" className="bg-inc_blue mt-3 py-5 px-6 uppercase text-sm font-karla-bold w-full rounded">
                    Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
