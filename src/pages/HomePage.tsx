import { FooterHome } from '../components/FirstPage/Footer';
import { HeaderHome } from '../components/FirstPage/Header';
import { MainHome } from '../components/FirstPage/Main';

export const HomePage = () => {
  return (
    <div>
      <HeaderHome />
      <MainHome />
      <FooterHome />
    </div>
  );
};
