import { Banner } from '../banner/banner.component'
import { ListVideos } from '../list-videos/list-videos.component'

const banner = [
  {
    image:'https://i.redd.it/kg7dlnm296t01.jpg',
    title: 'Avengers',
    subtitle: 'watch now',
    link: '/avengers',
  },
]
const series = [
  {
    image:'https://deadline.com/wp-content/uploads/2020/09/The-Mandalorian-Season-Two-Key-Art.jpg',
    title:'The Mandalorian',
    link: '/the-mandalorian', 
  },

  {
    image:'https://fanart.tv/fanart/tv/378214/tvposter/cosmos-possible-worlds-2020-5e6b2b5bc22ca.jpg',
    title:'Cosmos',
    link: '/cosmos',   
  },

  {
    image:'https://fanart.tv/fanart/tv/378214/tvposter/cosmos-possible-worlds-2020-5e6b2b5bc22ca.jpg',
    title:'Cosmos',
    link: '/cosmos',   
  },
]

const movies = [
  {
    image:'https://deadline.com/wp-content/uploads/2020/09/The-Mandalorian-Season-Two-Key-Art.jpg',
    title:'The Mandalorian',
    link: '/the-mandalorian', 
  },

  {
    image:'https://fanart.tv/fanart/tv/378214/tvposter/cosmos-possible-worlds-2020-5e6b2b5bc22ca.jpg',
    title:'Cosmos',
    link: '/cosmos',   
  },

  {
    image:'https://fanart.tv/fanart/tv/378214/tvposter/cosmos-possible-worlds-2020-5e6b2b5bc22ca.jpg',
    title:'Cosmos',
    link: '/cosmos',   
  },
]
export const Catalog = () => (
  <>
  <Banner items={banner} /> 
  <ListVideos title='Series' items={series}/>
  <ListVideos title='Movies' items={movies}/>
  </>
)
  