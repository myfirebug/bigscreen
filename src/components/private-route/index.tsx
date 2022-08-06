import session from "@src/utils/session-storage";
import { memo, useEffect } from "react"
import { Route, Redirect } from "react-router-dom"

interface IPrivateRoute {
  component: any;
  title: string;
  isPrivate: boolean;
  [propName: string]: any;
}
const PrivateRoute = memo((
  {
    // eslint-disable-next-line react/prop-types
    component: Component,
    title,
    isPrivate,
    ...rest
  }: IPrivateRoute
) => {
  // 处理标题
  useEffect(() => {
    document.title = title
  }, [title])
  return (
    <Route
      {...rest}
      render={() => {
        if (isPrivate) {
          return session.getItem('token') ? (
            <Component {...rest} />
          ) : (
            <Redirect
              to={{
                pathname: "/login"
              }}
            />
          );
        } else {
          return <Component {...rest} />;
        }
      }}
    />
  )
})

export default PrivateRoute;