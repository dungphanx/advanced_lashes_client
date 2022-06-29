import React, { useState } from 'react';
import style from './hover-box.module.scss';
import cn from 'classnames';

type Props = {
  children: React.ReactNode,
  isHovering?: boolean
}

export const HoverBoxFront: React.FC<any> = ({ children, isHovering }: Props) => {
  return <>
    <div>
      { isHovering ? null : children }
    </div>
  </>
}

export const HoverBoxBack: React.FC<any> = ({ children, isHovering }: Props) => {
  return <>
    <div>
      { isHovering ? children : null }
    </div>
  </>
}

type HoverBoxProps = {
  front: React.ReactNode,
  back: React.ReactNode
}

export const HoverBox:React.FC<any> = ({ front, back }: HoverBoxProps) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return <>
    <div
      className={cn({ [style.hoverBox]: true })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <HoverBoxFront isHovering={isHovering}>
        {front}
      </HoverBoxFront>
      <HoverBoxBack isHovering={isHovering}>
        {back}
      </HoverBoxBack>
    </div>
  </>
}

export default HoverBox;
