import { h, Component } from "preact"
import HeadingTitle from "./HeadingTitle/"
import {
  ListItemBlock,
  ListItemImage,
  ListItemText,
  ListItemContainer,
  ParticlesPortion
} from "./ListGrid/"

import gmail from './img/level5/gmail.png'
import phone from './img/level5/phone.png'

import twitter from './img/level5/twitter.png'
import linkedin from './img/level5/linkedin.png'

export default ({ padding, row }) => (
  <div style={{ paddingTop: padding ? "100px" : 0 }}>
    <HeadingTitle>Level 5 : Contact Me</HeadingTitle>
    <ListItemContainer row={row}>
      <ListItemBlock>
        <ListItemImage>{phone}</ListItemImage>
        <ListItemText small={true}>+91 8105630497</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{gmail}</ListItemImage>
        <ListItemText small={true}>ankit.c1010 @gmail.com</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{twitter}</ListItemImage>
        <ListItemText>Twitter</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{linkedin}</ListItemImage>
        <ListItemText>LinkedIn</ListItemText>
      </ListItemBlock>
    </ListItemContainer>
  </div>
)
