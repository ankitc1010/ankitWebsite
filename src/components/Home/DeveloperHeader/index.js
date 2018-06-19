import { h, Component } from "preact"
import Particles from "particlesjs"
import dp from '../img/dp.jpeg'

import "./styles.scss"
class DeveloperHeader extends Component {
  componentDidMount() {
    Particles.init({
      selector: '.particlesjs',
      color: ['#ffffff'],
      sizeVariations: 3
    });
  }
  render() {
    return (
      <div class="developer__header">
        <div class="developer__block purple" />
        <div class="developer__block yellow" />
        <div class="developer__say__hi">
          <canvas class='particlesjs' />
          
          <h2>
          <img src={dp} /><br />
            Hey, I'm Ankit. I'm a Fullstack Dev. <span class="maharoon">❤</span>{" "}
            ️
          </h2>
        </div>
      </div>
    )
  }
}

export default DeveloperHeader
