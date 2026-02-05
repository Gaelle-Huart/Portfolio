import clsx from 'clsx'; // clsx helps manage conditional className names in a clean and concise manner.


const Card = ({
  className, // Custom classes for the container card
  style, // Custom styles for the container card
  children, // Content to be included within the card
  onClick
}) => {
  return (
    <div className={clsx('card', className)} style={style} onClick={onClick}>
      {children}
    </div>
  );
};
export default Card;