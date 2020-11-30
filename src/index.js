import ReactDom from 'react-dom'
import { Catalog } from './catalog/catalog-page'

const App = () => (

  <Catalog />
)
ReactDom.render(<App />, window.root)
