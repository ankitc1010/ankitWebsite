import { h, Component } from "preact"
import Header from "./Header"
import Dialog from "./Dialog"
import { List, ListTab } from "./List"
import phone from "./img/phone.png"
import gmail from "./img/gmail.png"
import address from "./img/address.png"
import react from "./img/react.png"
import html from "./img/html.png"
import "./styles.scss"
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dialog text="Will love to have a chat" />
        <List>
          <ListTab>
            <ListTab.Image>{phone}</ListTab.Image>
            <ListTab.Title>8105630497</ListTab.Title>
          </ListTab>
          <ListTab>
            <ListTab.Image>{gmail}</ListTab.Image>
            <ListTab.Title>ankit.c1010@gmail.com</ListTab.Title>
          </ListTab>
          <ListTab>
            <ListTab.Image>{address}</ListTab.Image>
            <ListTab.Title>Bangalore, India</ListTab.Title>
          </ListTab>
        </List>
        <Dialog text="I have worked on the following tech" />
        <List>
          <ListTab>
            <ListTab.Image>{react}</ListTab.Image>
            <ListTab.Title>React.js</ListTab.Title>
          </ListTab>
          <ListTab>
            <ListTab.Image>
              https://pbs.twimg.com/profile_images/834588909203918854/FhgHcd_R_400x400.jpg
            </ListTab.Image>
            <ListTab.Title>Preact.js</ListTab.Title>
          </ListTab>
          <ListTab>
            <ListTab.Image>
              https://res.cloudinary.com/hashnode/image/upload/v1457865805/st9hz4f5ufmpxhizmfpk.jpg
            </ListTab.Image>
            <ListTab.Title>Webpack</ListTab.Title>
          </ListTab>
          <ListTab>
            <ListTab.Image>
              https://pbs.twimg.com/profile_images/702185727262482432/n1JRsFeB_400x400.png
            </ListTab.Image>
            <ListTab.Title>Node.js</ListTab.Title>
          </ListTab>
          <ListTab>
            <ListTab.Image>
              https://www.gadgetdaily.xyz/wp-content/uploads/2015/07/JSlogo.png
            </ListTab.Image>
            <ListTab.Title>Javascript</ListTab.Title>
          </ListTab>
          <ListTab>
            <ListTab.Image>
              https://avatars2.githubusercontent.com/u/317889?s=200&v=4
            </ListTab.Image>
            <ListTab.Title>Sass</ListTab.Title>
          </ListTab>
          <ListTab>
            <ListTab.Image>{html}</ListTab.Image>
            <ListTab.Title>HTML5</ListTab.Title>
          </ListTab>
        </List>
      </div>
    )
  }
}

export default Home
