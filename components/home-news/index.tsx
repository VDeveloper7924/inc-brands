import * as React from 'react';

export interface HomeNewsProps {}

const HomeNews: React.SFC<HomeNewsProps> = () => {
  return (
    <div className="py-28">
      <div className="container mx-auto">
        <div className="px-4 flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl font-myriad-pro text-center">
            <span className="font-myriad-pro-semibold">incBrands</span> News
          </h1>
          <p className="text-center py-6" style={{ maxWidth: 700 }}>
            Get the latest updates on all of our brands! From new projects to new releases, special events and more. Subscribe to see even
            more updates!
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full max-w-sm md:max-w-full md:w-1/3 mx-auto">
            <div className="m-4 relative">
              <img src="/assets/images/img_blog_1.png" alt="" className="w-full" />

              <div
                className="absolute w-full h-full top-0 left-0"
                style={{
                  background:
                    'linear-gradient(0deg, rgba(0,34,73,0.7973564425770308) 0%, rgba(0,34,73,0.2959558823529411) 70%, rgba(0,34,73,0) 100%)',
                }}
              ></div>

              <div className="absolute w-full h-full top-0 left-0 py-10 px-12 flex flex-col justify-end">
                <h3 className="font-karla-bold uppercase text-white">Brand releases</h3>
                <h1 className="text-2xl font-myriad-pro-semibold text-white leading-tight">Residential.com test run ready for take off.</h1>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm md:max-w-full md:w-1/3 mx-auto">
            <div className="m-4 relative">
              <img src="/assets/images/img_blog_2.png" alt="" className="w-full" />

              <div
                className="absolute w-full h-full top-0 left-0"
                style={{
                  background:
                    'linear-gradient(0deg, rgba(0,34,73,0.7973564425770308) 0%, rgba(0,34,73,0.2959558823529411) 70%, rgba(0,34,73,0) 100%)',
                }}
              ></div>

              <div className="absolute w-full h-full top-0 left-0 py-10 px-12 flex flex-col justify-end">
                <h3 className="font-karla-bold uppercase text-white">Marketing Tips</h3>
                <h1 className="text-2xl font-myriad-pro-semibold text-white leading-tight">
                  Lead Generation is changing and it’s much better..
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm md:max-w-full md:w-1/3 mx-auto">
            <div className="m-4 relative">
              <img src="/assets/images/img_blog_3.png" alt="" className="w-full" />

              <div
                className="absolute w-full h-full top-0 left-0"
                style={{
                  background:
                    'linear-gradient(0deg, rgba(0,34,73,0.7973564425770308) 0%, rgba(0,34,73,0.2959558823529411) 70%, rgba(0,34,73,0) 100%)',
                }}
              ></div>

              <div className="absolute w-full h-full top-0 left-0 py-10 px-12 flex flex-col justify-end">
                <h3 className="font-karla-bold uppercase text-white">Holidays & More</h3>
                <h1 className="text-2xl font-myriad-pro-semibold text-white leading-tight">Celebrate the holidays with more leads. </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
