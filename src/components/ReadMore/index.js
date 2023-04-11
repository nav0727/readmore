import {useState} from 'react'
import {
  Image,
  BgContainer,
  Button,
  Container,
  Heading,
} from './styledComponents'

const ReadMore = () => {
  const [isLess, isShowLess] = useState(true)

  const text = isLess
    ? 'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components.'
    : 'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components. For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by-side with existing code so you can adopt them gradually.'

  const btn = isLess ? 'Read More' : 'Read Less'

  const readLess = () => isShowLess(prev => !prev)

  return (
    <Container>
      <BgContainer>
        <Heading>React Hooks</Heading>
        <p>Hooks are a new addition to React</p>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />

        <p>{text}</p>

        <Button type="button" onClick={readLess}>
          {btn}
        </Button>
      </BgContainer>
    </Container>
  )
}

export default ReadMore
