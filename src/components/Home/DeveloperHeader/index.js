import { h, Component } from "preact"
import "./styles.scss"
class DeveloperHeader extends Component {
  render() {
    return (
      <div class="developer__header">
        <div class="developer__block purple" />
        <div class="developer__block yellow" />
        <div class="developer__say__hi">
          <h2>
            Hey, I'm Ankit. I'm a Fullstack Dev. <span class="maharoon">❤</span>{" "}
            ️
          </h2>
        </div>
      </div>
    )
  }
}

export default DeveloperHeader
