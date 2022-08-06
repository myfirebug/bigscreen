import {
  FC,
  HTMLAttributes,
  ReactNode
} from 'react'
import './index.scss'

interface IGroupProps extends HTMLAttributes<HTMLDivElement> {
  options?: any;
  children: ReactNode
}

const Group: FC<IGroupProps> = ({
  options = {},
  className,
  children,
  ...rest
}) => {
  return (
    <div className={`app-element app-element__group ${className || ''}`} {...rest}>{children}</div>
  )
}
export default Group