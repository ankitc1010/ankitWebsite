import { h, Component } from "preact"
import image from "../../logo.png"
const Header = () => (
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
)

export default Header
