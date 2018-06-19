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

import gmail from './img/level5/gmail.png'
import phone from './img/level5/phone.png'

import twitter from './img/level5/twitter.png'
import linkedin from './img/level5/linkedin.png'

export default ({ padding, row }) => (
  <div style={{ paddingTop: padding ? "100px" : 0 }}>
    <HeadingTitle>Level 5 : You can reach out to me via -</HeadingTitle>
    <ListItemContainer row={row}>
      <ListItemBlock>
        <ListItemLink link='tel:918105630497'>
        <ListItemImage>{phone}</ListItemImage>
        <ListItemText small={true}>+91 8105630497</ListItemText>
        </ListItemLink>
      </ListItemBlock>
      <ListItemBlock>
      <ListItemLink link='mailto:ankit.c1010@gmail.com'>
        <ListItemImage>{gmail}</ListItemImage>
        <ListItemText small={true}>ankit.c1010 @gmail.com</ListItemText>
        </ListItemLink>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemLink link="https://twitter.com/AnkitChauhanjs">
        <ListItemImage>{twitter}</ListItemImage>
        <ListItemText>Twitter</ListItemText>
        </ListItemLink>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemLink link="https://www.linkedin.com/in/ankit-chauhan-359357121">
        <ListItemImage>{linkedin}</ListItemImage>
        <ListItemText>LinkedIn</ListItemText>
        </ListItemLink>
      </ListItemBlock>
    </ListItemContainer>
  </div>
)
