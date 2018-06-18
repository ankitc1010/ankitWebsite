import { h, Component } from "preact"
import Particles from "particlesjs"

import image from "../../logo.png"
class Header extends Component {
  componentDidMount() {
    Particles.init({
      selector: ".particlesjs",
      connectParticles: true,
      color: ["#b0b0ff"],
      sizeVariations: 7,
      maxParticles: 5
    })
  }
  render() {
    return (
      <div>
        <canvas class="particlesjs" />
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="header">
                <img src={image} class="logo" />
                <div class="margin-div">
                  <h1>
                    Hello, I'm <span>Ankit Chauhan</span>
                  </h1>
                  <h2>I'm a full-stack developer.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
