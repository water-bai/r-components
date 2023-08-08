import * as React from "react";
import { getClassNameWithPrefix } from '../utils/className';
import './index.scss';

const { memo, useEffect, useRef, useState } = React;

interface IHorseLampProps {
  speed?: number;
  from?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const HorseLamp = (props: IHorseLampProps) => {
  const { speed = 0.5, from = 0, children, className = '', style } = props;
  const trackRef = useRef<HTMLDivElement>(null);
  const originFrom = from;
  let to = 0;

  const [trackWidth, setTrackWidth] = useState(0);

  const trackMove = (startPosition: number, endPosition: number) => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translate3d(${startPosition}px, 0, 0)`;

    requestAnimationFrame(() => {
      if (Math.floor(startPosition) >= Math.floor(endPosition)) {
        trackMove(startPosition - speed, endPosition);
      } else {
        trackMove(originFrom, endPosition);
      }
    });
  };

  useEffect(() => {
    const trackItems = Array.from(trackRef.current!.children) as HTMLDivElement[];

    let totalWidth = 0;
    trackItems.forEach((item) => {
      totalWidth += item.offsetWidth;
    });
    setTrackWidth(totalWidth);

    to = -trackItems[0]?.offsetWidth;

    trackMove(0, to);
  }, []);

  return (
    <div className={`${getClassNameWithPrefix('horse-lamp')} ${className}`} style={style}>
      <div ref={trackRef} className={getClassNameWithPrefix('horse-lamp-track')} style={{ width: `${trackWidth}px` }}>
        <div className={getClassNameWithPrefix('horse-lamp-body')}>{children}</div>
        <div className={getClassNameWithPrefix('horse-lamp-body')}>{children}</div>
      </div>
    </div>
  );
};

export default memo(HorseLamp);
