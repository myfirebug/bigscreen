import {
  FC
} from 'react'

interface IAuxiliaryProps {
  screen: any;
}

const Auxiliary: FC<IAuxiliaryProps> = ({
  screen
}) => {
  const arr = Array.from(new Array(screen.horizontalNumber * screen.verticalNumber).keys())
  return (
    <>
      {
        screen.showAuxiliary ? <div
          style={{
            padding: `${screen.interval}px 0  0 ${screen.interval}px`
          }}
          className='app-auxiliary__list'>
          {
            arr.map(item => (
              <div
                key={item}
                style={{
                  width: `calc(${100 / screen.horizontalNumber}% - ${screen.interval}px)`,
                  height: `calc(${100 / screen.verticalNumber}% - ${screen.interval}px)`,
                  margin: `0 ${screen.interval}px  ${screen.interval}px 0`,
                  borderColor: screen.auxiliaryBorderColor
                }}
                className="app-auxiliary__item"></div>
            ))
          }
        </div> : null
      }
    </>
  )
}

export default Auxiliary