export const FloatingButton:React.FC<any> = ({ position, className, children }) => {
  const defaultClass: string = 'bottom-3 right-3';
  const defaultPositionClass = 'relative'

  return <>
    <div className={position ? position : defaultPositionClass}>
      <div className={['absolute', className ? className : defaultClass].join(' ')}>
        { children }
      </div>
    </div>
  </>
}

export default FloatingButton
