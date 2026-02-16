import clsx from 'clsx';
import { forwardRef } from 'react';


const Card = forwardRef(({
  className, 
  style, 
  children, 
  onClick,
  backgroundImg, 
  alt, 
  tabIndex, 
  role, 
}, ref) => {
  const cardStyle = {
    ...style,
    ...(backgroundImg && {
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }),
  };
  const cardFocus = {
    ...(tabIndex !== undefined && { tabIndex }),
    ...(role && { role }),
  }
  const keyHandler = (event) => {
    if (!onClick) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(event);
    }
  }
  return (
    <div ref={ref} className={clsx('card', className)} style={cardStyle} onClick={onClick} alt={alt} role={cardFocus.role} tabIndex={cardFocus.tabIndex} onKeyDown={keyHandler}>
      {children}
    </div> 
  );
});
export default Card;