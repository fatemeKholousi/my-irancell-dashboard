import './app.scss';
import InfoCard from './components/InfoCard';
import SideBar from './components/SideBar';
import SimCardInfo from './components/SimCardInfo';
import "./assets/fonts/lale-zar/Lalezar-Regular.ttf"
import "./assets/fonts/vazir/Vazir-Code.ttf"
import HeaderCard from './components/HeaderCard';
import SuggestPackages from './components/SuggestPackages';

function App() {
  return (
    <div className="my-irancell-page" >

  
   <aside>
    <InfoCard/>
    <SimCardInfo/>
   </aside>
 
   <main>
     <h1>
       صفحه اصلی
     </h1>
<HeaderCard/>
<SuggestPackages/>

   </main>
   <SideBar/>

    </div>
  );
}

export default App;
