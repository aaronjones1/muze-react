export interface MediaCardProps {
  size?: 'sm' | 'md' | 'lg';
  imageURL: string;
  imageAlt: string;
  onClick?: () => void;
}

const MediaCard = (props: MediaCardProps) => {
  const smClasses = 'w-20 rounded-2xl';
  const mdClasses = 'w-40 rounded-3xl';
  const lgClasses = 'w-60 rounded-4xl';

  let sizeClasses = mdClasses;
  switch (props.size) {
    case 'sm':
      sizeClasses = smClasses;
      break;
    case 'lg':
      sizeClasses = lgClasses;
      break;
    default:
    case 'md':
      sizeClasses = mdClasses;
      break;
  }

  return (
    <button className="shrink-0" onClick={props.onClick}>
      <img
        className={[sizeClasses, 'shadow-lg', 'shadow-zinc-900', 'hover:scale-110', 'transition-transform'].join(
          ' '
        )}
        src={props.imageURL}
        alt={props.imageAlt}
      />
    </button>
  );
};

export default MediaCard;

// const refContainer = useRef();
//   const [dimensions, setDimensions] = 
//     useState({ width: 0, height: 0 });
//   useEffect(() => {
//     if (refContainer.current) {
//       setDimensions({
//         width: refContainer.current.offsetWidth,
//         height: refContainer.current.offsetHeight,
//       });
//     }
//   }, []);
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         height: '100%',
//         backgroundColor: '#fafafa',
//         margin: '20px',
//       }}
//       ref={refContainer}>
//       <pre>
//         Container:
//         <br />
//         width: {dimensions.width}
//         <br />
//         height: {dimensions.height}
//       </pre>
//     </div>
//   );