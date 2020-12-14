import { Image, Container, Title, Subtitle } from './banner.style'

export const Banner = (props) => { 
  const toImage = item => (
    <Container as='li'>
      <Image src={item.image} />
      <Title>
        {item.title}
        <Subtitle>{item.subtitle}</Subtitle>
      </Title>
    </Container>
  )

  return (
    <Container>
      {props.items.map(toImage)}
    </Container>
  )
}