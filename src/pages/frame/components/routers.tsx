import { lazy, memo } from 'react'
import ComPrivateRoute from '@src/components/private-route'
import {
  Switch,
  Redirect
} from 'react-router-dom'
import { IRouter } from '@store/actionType'

interface IAppProps {
  routers: IRouter[];
}

const Routers = memo((props: IAppProps) => {
  const { routers } = props

  return (
    <Switch>
      {/*首页*/}
      {
        routers.map(item => (
          <ComPrivateRoute
            key={item.id}
            isPrivate={true}
            title={item.name}
            path={item.path}
            component={lazy(() => import(`@src/pages/${item.component}`))} />
        ))
      }
      {
        routers.length ?
          <Redirect path="*" exact to={routers[0].path} /> : null
      }
    </Switch>
  );
})

export default Routers
