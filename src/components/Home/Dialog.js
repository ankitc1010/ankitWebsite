import { h, Component } from "preact"
import dp from "./img/dp.jpeg"
class Dialog extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="pad-contacts">
              <div class="flex">
                <img src={dp} class="dp" /> <span>{this.props.text}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dialog
