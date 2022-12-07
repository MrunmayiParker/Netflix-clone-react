// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import AddCardIcon from '@mui/icons-material/AddCard';
import Navbar from '../../components/navbar/Navbar';
import './Home.scss';
import Features from '../../components/featured/Features';
import List from '../../components/list/List';



const Home = () => {
  
  return (
    <div className="home">
      {/* <AcUnitIcon /> */}
      <Navbar />
      {/* <img width="100%" src="https://www.denofgeek.com/wp-content/uploads/2018/10/supernatural_season_12_poster.jpg?resize=768%2C432"></img> */}
      <Features />
      <List />
      <List />
      <List />
      <List />
    </div>
  )

}

export default Home;