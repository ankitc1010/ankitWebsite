import { h, Component } from "preact"
import Particles from "particlesjs"

import DeveloperHeader from "./DeveloperHeader/"
import Level1 from "./Level1"
import Level2 from "./Level2"
import Level3 from "./Level3"
import Level4 from "./Level4"
import Level5 from "./Level5"
import dp from "./img/dp.jpeg"


import "./styles.scss"
class Home extends Component {
  render() {
    return (
      <div>
        <DeveloperHeader />
        <Level1 />
        <Level2 padding={true} row={1} />
        <Level3 row={1} padding={true} />
        <Level5 row={1} padding={true} />
        
        <Level4 row={1} padding={true} />
        <div class="footer">
          <img src={dp} /><br />
          The source code with respect to this website is on <a href='http://github.com/ankitc1010/ankitWebsite' > Github</a>
        </div>
      </div>
    )
  }
}

export default Home
