import { FooterHome } from '../components/FirstPage/Footer';
import { HeaderCareers } from '../components/SecondPage/HeaderCareers';
import { MainCareers } from '../components/SecondPage/MainCareers';

export const CareersPage = () => {
  return (
    <div>
      <HeaderCareers />
      <MainCareers />
      <FooterHome />
    </div>
  );
};
