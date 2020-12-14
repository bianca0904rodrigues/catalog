import { Title, Image, List, Item } from './list-videos.style'

export const ListVideos = (props) => {
  const toImage = item => (
    <Item>
      <a aria-label={item.title} href={item.link}>
      <Image src={item.image} />
      </a>
    </Item>
  )

  return ( 
    <>
      <Title> 
        {props.title}
      </Title>

      <List aria-label={props.title}>{props.items.map(toImage)}</List>
    </>
  )
}