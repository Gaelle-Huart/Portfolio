import clsx from 'clsx'; // clsx helps manage conditional className names in a clean and concise manner.


const Card = ({
  className, // Custom classes for the container card
  style, // Custom styles for the container card
  children, // Content to be included within the card
  onClick,
  backgroundImg, // URL of the background image for the card
  alt, // Alternative text for the background image, used for accessibility
}) => {
  const cardStyle = {
    ...style,
    ...(backgroundImg && {
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }),
  };
  return (
    <div className={clsx('card', className)} style={cardStyle} onClick={onClick} alt={alt}>
      {children}
    </div> 
  );
};
export default Card;