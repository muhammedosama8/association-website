import Activities from "../Activities"
import Contact from "../Contact"
import Header from "../Header"
import Management from "../Management"
import Markets from "../Markets"
import News from "../News"
import Talabat from "../Talabat"

const Home = () =>{
    return<>
      <Header />
      <Activities />
      <Markets />
      <Management />
      <News />
      <Talabat />
      <Contact />
    </>
}
export default Home