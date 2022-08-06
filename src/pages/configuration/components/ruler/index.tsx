import {
  FC
} from 'react'
import './index.scss'

interface IRulerProps { }

const Ruler: FC<IRulerProps> = () => {

  const arr = Array.from(new Array(100).keys())


  return (
    <div
      className="app-screen-disign__ruler">
      <div className='app-screen-disign__ruler--hwrapper'>
        <div
          className="app-screen-disign__ruler--h">
          <span className='ruler-h-50'>
            <b>50</b>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </span>
          {
            arr.map((item: any, index: number) => (
              <span className='ruler-h-50' key={index}>
                <b>{index * 50}</b>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </span>
            ))
          }
        </div>
      </div>
      <div className='app-screen-disign__ruler--vwrapper'>
        <div
          className="app-screen-disign__ruler--v">
          <span className='ruler-h-50'>
            <b>50</b>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </span>
          {
            arr.map((item: any, index: number) => (
              <span className='ruler-h-50' key={index}>
                <b>{index * 50}</b>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Ruler