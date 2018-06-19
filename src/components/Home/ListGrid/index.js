import { h, Component } from "preact";
import { Motion, spring } from "preact-motion"
import "./styles.scss"

const ListItemLink = ({children, link}) => <a href={link}>{children}</a>
const ListItemImage = ({ children }) => <img src={children} />
const ListItemText = ({ children, small }) => <span style={{fontSize: small ? '15px' : 'inherit', lineHeight: small ? '17px' : 'inherit', textAlign: 'center'}}>{children}</span>
class ParticlesPortion extends Component {
  render() {
    return (
      <div class="list__grid__block">
        <canvas class={`particlesjs particlesjs-${this.props.id}`} />
      </div>
    )
  }
}
class ListItemBlock extends Component {
  state = {
    click: false
  }
  onClick = () => {
    let { click } = this.state
    this.setState({
      click: !click
    })
  }
  render() {
    const { children } = this.props
    let { click } = this.state
    return (
      <div class="list__grid__block">
        <Motion
          defaultStyle={{ x: 0 }}
          style={{
            x: spring(click ? -360 : 0, {
              stiffness: 50,
              damping: 5,
              precision: 0.00001
            })
          }}
        >
          {({ x }) => (
            <div
              style={{
                transform: ` perspective(1200px) rotateY(${x}deg)`,
                width: "100%",
                transformOrigin: "50%",
                height: "100%",
                backfaceVisibility: "hidden"
              }}
              onMouseOver={this.onClick}
              onClick={this.onClick}
            >
              <div class="list__grid__stack below" />
              <div class="list__grid__stack medium" />
              <div class="list__grid__stack list__content">{children}</div>
            </div>
          )}
        </Motion>
      </div>
    )
  }
}
const ListItemContainer = (props) => {
    console.log("row",props.row)
return(
  <div class="list__grid__container" style={{gridTemplateRows: props.row ? `repeat(2, minmax(50px, 1fr))`: `repeat(6, minmax(50px, 1fr))`}}>{props.children}</div>
)

}
export {
  ListItemImage,
  ListItemContainer,
  ParticlesPortion,
  ListItemText,
  ListItemLink,
  ListItemBlock
}
