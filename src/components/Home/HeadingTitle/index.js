import { h, Component } from "preact"
import "./styles.scss"
class HeadingTitle extends Component {
  render() {
    return (
      <div class="heading__title_container">
        <div class="heading__title__block ultradarkblue" />
        <div class="heading__title__block darkblue" />
        <div class="heading__title__block blue" />
        <div class="heading__title__block content">
          <h3>Level 1 : The Stack</h3>
        </div>
      </div>
    )
  }
}

export default HeadingTitle
