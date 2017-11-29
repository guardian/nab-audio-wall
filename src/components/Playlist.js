// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import styleVars from '../styles'

const { TYPE } = styleVars

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: 0;
  width: 375px;
  background-color: rgba(255, 255, 255, 0.98);
  padding: 35px 35px 120px 45px;
  z-index: 20;
  height: 100%;
  max-height: calc(100vh - 80px);
  overflow: auto;
  font-family: ${TYPE.fontFamily.functional};
  header {
    font-weight: bold;
    font-size: 0.9rem;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    hr {
      width: 60%;
      opacity: 0.2;
    }
  }
  li {
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
  }
  a {
    text-decoration: none;
    color: black;
  }
`

const StoryIcon = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  background-image: url(${process.env.PUBLIC_URL || ''}/images/story_${({ storyID }) => storyID}.png);
  background-size: cover;
  border-radius: 50%;
`

const PlaylistItem = styled.li`
  padding: 2px;
  &:hover {
    background-color: pink;
  }
`

const stories = [
  { name: 'Rozalina', id: '0' },
  { name: 'Carmen', id: '1' },
  { name: 'Elise', id: '2' },
  { name: 'Leah', id: '3' }
]

const chapters = [0, 1, 2, 3]
const storyList = stories.map((story, storyIndex) => (
  <li key={storyIndex}>
    <Link to={story.id}>
      <header>
        <StoryIcon storyID={story.id} />
        {story.name}&#39;s Story
      </header>
      <hr />
    </Link>
    <ul>
      {chapters.map((chapter, chapterIndex) => (
        <PlaylistItem key={`PLAYLISTITEM_${chapterIndex}`}>
          <Link to={`${story.id}`} key={`${story.id}_${chapterIndex}`}>
            Chapter {chapter + 1}
            <br />
          </Link>
        </PlaylistItem>
      ))}
    </ul>
  </li>
))

const Playlist = () => (
  <Wrapper>
    <ul>{storyList}</ul>
  </Wrapper>
)

export default Playlist
