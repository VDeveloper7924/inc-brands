import * as React from 'react';

export interface HomeBannerProps {}

const HomeBanner: React.SFC<HomeBannerProps> = () => {
  const bannerLogos = [
    { imageUrl: '/assets/images/logo_caliber.png', title: '' },
    { imageUrl: '/assets/images/logo_coldwell.png', title: '' },
    { imageUrl: '/assets/images/logo_kw.png', title: '' },
    { imageUrl: '/assets/images/logo_progressive.png', title: '' },
    { imageUrl: '/assets/images/logo_remax.png', title: '' },
  ];

  return (
    <div className="relative h-500 md:h-600 lg:h-screen">
      <img src="/assets/images/img_header_bg.png" alt="" className="absolute w-full h-full top-0 left-0 object-cover" />

      <div className="relative flex flex-col h-full">
        <div className="w-full h-full flex flex-col py-10 lg:py-20">
          <div className="flex flex-col flex-1 justify-center">
            <p className="text-lr-border text-white text-center text-sm sm:text-base lg:text-2xl flex items-center mx-auto mb-4 lg:mb-8">
              Industry Leading
            </p>

            <h1 className="lg:block text-white text-center text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-myriad-pro">
              <span className="text-blue-400">Lead</span> Generation
            </h1>
          </div>

          <div className="flex flex-wrap justify-around items-center px-4 lg:px-16">
            {bannerLogos.map((bannerLogo, index) => (
              <div key={`banner-logo-${index}`} className="w-1/3 sm:flex-1 py-4 px-3">
                <img src={bannerLogo.imageUrl} alt={bannerLogo.title} className="mx-auto cursor-pointer opacity-70 hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
