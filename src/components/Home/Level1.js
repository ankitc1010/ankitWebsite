import { h, Component } from "preact"
import HeadingTitle from "./HeadingTitle/"
import {
  ListItemBlock,
  ListItemImage,
  ListItemText,
  ListItemContainer,
  ParticlesPortion
} from "./ListGrid/"

import react from "./img/level1/react.png"
import android from "./img/level1/android.png"
import angular from "./img/level1/angular.svg"
import css from "./img/level1/css.png"
import java from "./img/level1/java.png"
import js from "./img/level1/js.png"
import html from "./img/level1/html.png"
import mongo from "./img/level1/mongo.png"
import node from "./img/level1/node.svg"
import postgres from "./img/level1/postgres.png"
import sass from "./img/level1/sass.png"
import webpack from "./img/level1/webpack.svg"

export default () => (
  <div>
    <HeadingTitle>Level 1 : My Stack</HeadingTitle>
    <ListItemContainer>
      <ListItemBlock>
        <ListItemImage>{react}</ListItemImage>
        <ListItemText>React.js</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{js}</ListItemImage>
        <ListItemText>Javascript</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{html}</ListItemImage>
        <ListItemText>HTML</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{css}</ListItemImage>
        <ListItemText>CSS</ListItemText>
      </ListItemBlock>
      <ParticlesPortion />
      <ListItemBlock>
        <ListItemImage>{android}</ListItemImage>
        <ListItemText>Android</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{sass}</ListItemImage>
        <ListItemText>Sass</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{node}</ListItemImage>
        <ListItemText>Node.JS</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{webpack}</ListItemImage>
        <ListItemText>Webpack</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{postgres}</ListItemImage>
        <ListItemText>PostgreSql</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{mongo}</ListItemImage>
        <ListItemText>MongoDB</ListItemText>
      </ListItemBlock>

      <ListItemBlock>
        <ListItemImage>{java}</ListItemImage>
        <ListItemText>Java</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{angular}</ListItemImage>
        <ListItemText>AngularJS</ListItemText>
      </ListItemBlock>
    </ListItemContainer>
  </div>
)
