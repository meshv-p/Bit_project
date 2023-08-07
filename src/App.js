import {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import FundingAgencies from './pages/funding_agencies/FundingAgencies';
import NoPage from './pages/NoPage';
import ResearchDev from './pages/research_and_development/ResearchDev';
import Approved from './pages/approved_RnD/Approved';
import Sop from './pages/sop/Sop';
import FormsApplication from './pages/forms&applications/FormsApplication';
import SeedMoneyScheme from './pages/seed_money_policy/SeedMoneyScheme';

import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/scrolltop/ScrollToTop';
import Cif from './pages/cif/Cif';
// import DepartmentPage from './pages/DepartmentPage/DepartmentPage';
import PromotionPage from './pages/PromotionPage/PromotionPage';
import HeadTalk from './pages/headTalk/HeadTalk';
// import Innov_Ente from './pages/Innov_Enter/Innov_Ente';
import ResearchNews from './pages/research_news/ResearchNews';
import InnovationEntrepreneurship from './pages/Innov_Enter/InnovationEntrepreneurship';
import IPRCell from './pages/Ipr/IPRCell';
import ContactUs from './pages/contactUs/ContactUs';
import ElectricalCommEngine from './pages/ece/Electrical_Comm_Engine';
import ComputerScienceEngine from './pages/cse/Computer_Science_Engine';
import ElectricalElectronicsEngine from './pages/eee/Electrical_Electronics_Engine';
import CivilEnviornEngine from './pages/civil/Civil_Enviorn_Engine';
import Architectureplanning from './pages/architecture_planning/Architecture_planning';
import SpaceEngineRocketry from './pages/rocketry/Space_Engine_Rocketry';
import MOU from './pages/Mou/Mou';
import RemoteSensing from './pages/remote_sensing/Remote_sensing';
import BioEngineBioTech from './pages/Bio/Bio_Engine_Bio_Tech';
import MechnicalEngineering from './pages/mechnical_engineering/Mechnical_engineering';
import ProductionIndustrialEngineering from './pages/production_Industrial_engineering/Production_Industrial_engineering';
import ChemicalEnginerring from './pages/chemical_engineering/Chemical_Enginerring';
import PhysicsDepartment from './pages/physicsDepartment/PhysicsDepartment';
import PharmaceuticalScienceAndTechnology from './pages/pharmaceutical_Science_and_technology/Pharmaceutical_Science_and_technology';
import ChemistryDepartments from './pages/chemistry_department/Chemistry_departments';
import MathematicsDepartment from './pages/mathematics_department/Mathematics_department';
import UseFullLinks from './pages/usefullLinks/UseFullLinks';

function App() {
  // Global animation------
  useEffect(()=>{
    AOS.init({duration: 1000,offset:300});
  },[]);
// ---------
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/funding_agencies' element={<FundingAgencies />}/>
          <Route path='/research_and_development' element={<ResearchDev />}/>
          <Route path='/approved_r&d' element={<Approved />}/>
          <Route path='/sop' element={<Sop />}/>
          <Route path='/forms&applications' element={<FormsApplication />}/>
          <Route path='/seed_money_policy' element={<SeedMoneyScheme />}/>
          <Route path='/cif' element={<Cif/>}/>
          {/* <Route path='/DepartMentPage' element={<DepartmentPage/>}/> */}
          <Route path='/research_promotion_scheme' element={<PromotionPage/>}/>
          <Route path='/headTalk' element={<HeadTalk/>}/>
          <Route path='/innovation_and_entrepreneurship' element={<InnovationEntrepreneurship/>}/>
          <Route path='/Research_news' element={<ResearchNews/>}/>
          <Route path='/Ipr' element={<IPRCell/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/ece' element={<ElectricalCommEngine/>}/>
          <Route path='/cse' element={<ComputerScienceEngine/>}/>
          <Route path='/eee' element={<ElectricalElectronicsEngine/>}/>
          <Route path='/civil' element={<CivilEnviornEngine/>}/>
          <Route path='/architecture_planning' element={<Architectureplanning/>}/>
          <Route path='/rocketry' element={<SpaceEngineRocketry/>}/>
          <Route path='/remote_sensing' element={<RemoteSensing/>}/>
          <Route path='/Bio' element={<BioEngineBioTech/>}/>
          <Route path='/mechnical_engineering' element={<MechnicalEngineering/>}/>
          <Route path='/production_Industrial_engineering' element={<ProductionIndustrialEngineering/>}/>
          <Route path='/chemical_Enginerring' element={<ChemicalEnginerring/>}/>
          <Route path='/pharmaceutical_Science_and_technology' element={<PharmaceuticalScienceAndTechnology/>}/>
          <Route path='/physicsDepartment' element={<PhysicsDepartment/>}/>
          <Route path='/chemistry_departments' element={<ChemistryDepartments/>}/>
          <Route path='/mathematics_department' element={<MathematicsDepartment/>}/>
          <Route path='/useful_links' element={<UseFullLinks/>}/>
          <Route path='/Mou' element={<MOU/>}/>
          <Route path='*' element={<NoPage />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
