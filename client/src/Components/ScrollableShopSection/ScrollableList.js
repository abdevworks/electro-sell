import React, { useState, useRef, useEffect} from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'


export default function ScrollableList(props) {
  const [{ x }, set] = useSpring(() => ({ x: 0 }))
  const [componentWidth, setComponentWidth] = useState(window.innerWidth);
  const {productData, displayAsRows=false} = props;
  const scrollableListRef = useRef(null);
  
  
  useEffect ( () => {
    let scrollableListWidth = 0;
    if(scrollableListRef.current){
        scrollableListWidth  = scrollableListRef.current.offsetWidth; 
        setComponentWidth(scrollableListWidth);
    }
    console.log(scrollableListRef.current.classList);
}, [scrollableListRef]);

  function calculateDragBounds(){
    let dragBound = componentWidth * 0.3 * 4 + componentWidth * 0.2;
    //console.log({dragBound});
    return dragBound;
  }

  window.addEventListener("resize", function() {
    if(scrollableListRef.current){
      setComponentWidth(scrollableListRef.current.offsetWidth);
    }
    
  });


  const bind = useDrag(({ down, offset: [ox], tap }) => {
    if (tap) alert('tap!')
    set({ x: ox, immediate: down })
  },
  {
    bounds: { left: -(calculateDragBounds()), right: 0},
    rubberband: true,
    filterTaps: true
  });

  let gridCardNumber = {};

 switch(props.componentCardSize) {
   case 'small':
    gridCardNumber = {
      small: "three",
      medium: "four",
      large: "five"
    }
    break;
   case 'medium':
    gridCardNumber = {
      small: "two",
      medium: "three",
      large: "four"
    }
    break;
   default:
    gridCardNumber = {
      small: "three",
      medium: "four",
      large: "five"
    }
 }

  return (

    <div className="overflow-hidden pb-4">
        <animated.div ref={ scrollableListRef } className={`grid grid-flow-col grid-cols-${gridCardNumber.small} md:grid-cols-${gridCardNumber.medium}  ${displayAsRows  ? `lg:grid-flow-row lg:grid-cols-4 lg:grid-rows-2` : `lg:grid-cols-${gridCardNumber.large}`}`} {...bind()} style={(displayAsRows && window.innerWidth > 1025) ? {} : { x }}>
          {productData.map((product)=>{
            return <div to={`/products/${product.id}`} key={product.id} draggable="false"><props.componentCard product={product} /></div>
          })}
        </animated.div>
    </div>


  );
}