import { AppFooter, AppNavbar, HomeBanner, HomeNews, HomeReasons, HomeServices } from '../components';

export default function Home() {
  return (
    <div className="page homepage">
      <div className="absolute w-full z-10">
        <div className="lg:container px-4 mx-auto">
          <AppNavbar />
        </div>
      </div>

      <HomeBanner />
      <HomeServices />
      <HomeReasons />
      <HomeNews />
      <AppFooter />
    </div>
  );
}
