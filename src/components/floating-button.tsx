export const FloatingButton:React.FC<any> = ({ children }) => {
  return <>
    <div className="relative">
      <div className='bottom-3 right-3 absolute'>
        { children }
      </div>
    </div>
  </>
}

export default FloatingButton
