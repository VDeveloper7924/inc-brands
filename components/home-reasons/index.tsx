import * as React from 'react';
import ReactPlayer from 'react-player';

export interface HomeReasonsProps {}

const HomeReasons: React.SFC<HomeReasonsProps> = () => {
  const reasons = [
    {
      title: 'Behavioral Tracking Leads to more',
      description: 'See the whole scope on eachtression derived from our lead gen or ad networks.',
    },
    {
      title: 'Easy To Start, Pause or Stop',
      description: 'Our account managers assist our clientele in helping them achieve timelines and more.',
    },
    {
      title: 'Integrate with All CRMs',
      description: 'Our account managers assist our clientele in helping them achieve timelines and more.',
    },
  ];
  return (
    <div className="bg-inc_light py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-row py-12 h-560">
          <div className="flex-1 h-full">
            <p className="sm:hidden text-inc_blue font-karla-bold uppercase mb-10">Trusted by fortune 500’s</p>

            <div>
              <img src="/assets/images/app_logo_2.png" alt="" className="h-16" />
            </div>

            <div className="flex items-end">
              <h1 className="text-6xl font-myriad-pro text-inc_text_primary">snapshot</h1>
              <p className="hidden sm:block text-blue-400 font-karla-bold uppercase mb-2 ml-12 text-inc_blue">Trusted by fortune 500’s</p>
            </div>

            <div className="mt-5">
              {reasons.map((reason, index) => (
                <div className="flex">
                  <button
                    type="button"
                    className="bg-white hover:bg-inc_blue border shadow flex justify-center items-center rounded-full h-14 w-14 "
                  >
                    <img src="/assets/images/ic_check.png" className="hovered" />
                  </button>

                  <div className="py-4 px-10 flex-1">
                    <h1 className="text-2xl font-myriad-pro-semibold text-inc_text_primary">{reason.title}</h1>
                    <p className="text-inc_text_secondary">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block w-1/2 h-full relative" style={{ maxWidth: 455 }}>
            <img src="/assets/images/base.png" alt="" className="absolute bottom-0 right-0" />
            <img src="/assets/images/bg4.png" alt="" className="absolute top-0 left-0" />
            <img src="/assets/images/bg3.png" alt="" className="absolute" style={{ bottom: 32, right: 32 }} />
          </div>
        </div>

        <div className="w-full py-12">
          <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" width="100%" height="610px" />
        </div>
      </div>
    </div>
  );
};

export default HomeReasons;
