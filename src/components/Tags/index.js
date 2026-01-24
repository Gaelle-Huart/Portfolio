import clsx from "clsx";

const Tag = ({
  className,
  style,
  children,
  shadow,
}) => {
  const cardShadow = shadow ? `item shadow--${shadow}` : '';
  return (
    <div className={clsx('tag', className, cardShadow)} style={style}>
      {children}
    </div>
  );
};
export default Tag;