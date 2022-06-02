import './app.scss'
import InfoCard from './components/InfoCard'
import SideBar from './components/SideBar'
import SimCardInfo from './components/SimCardInfo'
import './assets/fonts/lale-zar/Lalezar-Regular.ttf'
import './assets/fonts/vazir/Vazir-Code.ttf'
import HeaderCard from './components/HeaderCard'
import SuggestPackages from './components/SuggestPackages'
import LineChart from './components/charts/LineChart'

function App() {
  return (
    <div className="my-irancell-page">
      <aside>
        <InfoCard />
        <SimCardInfo />
      </aside>

      <main>
        <h1 style={{textAlign:"right",marginRight:"1rem",fontSize:"23px",fontWeight:400}}>صفحه اصلی</h1>
        <HeaderCard />
        <div
          style={{
            backgroundColor: 'white',
            marginBottom: '30px',
            borderRadius: '14px',
            height: 400,
          }}
        >
          <h1 style={{ float: 'right', padding: '0 20px 20px 14px',fontSize:20 }}>
            نمودار میزان مصرف کل
          </h1>
          <LineChart />
        </div>
        <SuggestPackages />
      </main>
      <SideBar />
    </div>
  )
}

export default App
