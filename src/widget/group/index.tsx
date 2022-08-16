import {
  FC,
  HTMLAttributes,
  ReactNode
} from 'react'
import './index.scss'
import { getStyles } from '@utils/tools'

interface IGroupProps extends HTMLAttributes<HTMLDivElement> {
  options: any;
  children: ReactNode
}

const Group: FC<IGroupProps> = ({
  options,
  children
}) => {
  return (
    <div
      style={getStyles(options)}
      className="app-element app-element__group animated">{children}</div>
  )
}
export default Group