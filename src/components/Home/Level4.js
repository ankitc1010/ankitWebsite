import { h, Component } from "preact"
import HeadingTitle from "./HeadingTitle/"
import {
  ListItemBlock,
  ListItemImage,
  ListItemText,
  ListItemContainer,
  ParticlesPortion,
  ListItemLink
} from "./ListGrid/"

import markdown from "./img/level4/markdown-guide.png"
import sitelogo from "./img/level4/sitelogo.png"
import preactbp from "./img/level4/preactbp.png"
import reactbp from "./img/level4/reactbp.png"


export default ({ padding, row }) => (
  <div style={{ paddingTop: padding ? "100px" : 0 }}>
    <HeadingTitle>Level 4 : Some Open Source Projects, I have been working on.</HeadingTitle>
    <ListItemContainer row={row}>
      <ListItemBlock>
        <ListItemLink link='https://github.com/ankitc1010/decent-preact-boilerplate'>
          <ListItemImage>{preactbp}</ListItemImage>
          <ListItemText small={true}>Preact BoilerPlate</ListItemText>
        </ListItemLink>
      </ListItemBlock>
      <ListItemBlock>
      <ListItemLink link='https://github.com/ankitc1010/decent-react-boilerplate'>
        <ListItemImage>{reactbp}</ListItemImage>
        <ListItemText small={true}>React BoilerPlate</ListItemText>
        </ListItemLink>
      </ListItemBlock>
      <ListItemBlock >
      <ListItemLink link='https://github.com/ankitc1010/markdown-guide'>
        <ListItemImage>{markdown}</ListItemImage>
        <ListItemText small={true}>Markdown Guide</ListItemText>
        </ListItemLink>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemLink link='https://github.com/ankitc1010/ankitWebsite'>
         <ListItemImage>{sitelogo}</ListItemImage>
         <ListItemText small={true}>This Website</ListItemText>
        </ListItemLink>
      </ListItemBlock>
    </ListItemContainer>
  </div>
)
