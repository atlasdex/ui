// import Div from "components/DivComponent"
import loadable from '@loadable/component'
const Div = loadable(() => import('components/DivComponent'))

const PageNotFound: React.FC = () => {
    return (
       <Div>
           Page Not Found
       </Div>
    )
}
export default PageNotFound