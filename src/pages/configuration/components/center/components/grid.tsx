import {
  FC
} from 'react'

interface IGridPrips {
  screen: any;
}

const Grid: FC<IGridPrips> = ({
  screen
}) => {
  return (
    <>
      {
        screen.gridFlag ?
          <svg xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="100%"
            id="canvas">
            <defs>
              <pattern
                patternUnits="userSpaceOnUse"
                id="p1"
                x="0"
                y="0"
                width={screen.gridSize}
                height={screen.gridSize}
              >
                <rect
                  x="0"
                  y="0"
                  stroke={screen.gridBorderColor}
                  fill="none"
                  width={screen.gridSize + 0.5}
                  height={screen.gridSize + 0.5}
                ></rect>
              </pattern>
            </defs>
            <rect id="wrapper" className='grid' x="0" y="0" fill="url(#p1)" width="100%" height="100%"></rect>
          </svg> : null
      }
    </>
  )
}

export default Grid