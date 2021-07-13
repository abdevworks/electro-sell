import React, { useState, useRef, useEffect} from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'


export default function ScrollableList(props) {
  const [{ x }, set] = useSpring(() => ({ x: 0 }))
  const [componentWidth, setComponentWidth] = useState(window.innerWidth);
  const {productData, displayAsRows=false} = props;
  const scrollableListRef = useRef(null);

  /* Variables to calculate list movement bounds */
  const numberOfElementsOnTheList = 8;
  const numberOfPartiallyVisibleElements = 1;
  const [numberOfVisibleElements, setNumberOfVisibleElements] = useState(4);
  const [elementSizeInComparisionToComponent, setElementSizeInComparisionToComponent] = useState(0.22); 
  
  
  useEffect ( () => {
    let scrollableListWidth = 0;
    if(scrollableListRef.current){
        scrollableListWidth  = scrollableListRef.current.offsetWidth; 
        setComponentWidth(scrollableListWidth);
        console.log(scrollableListWidth);
    }
    //console.log(scrollableListRef.current.classList);
}, [scrollableListRef]);

useEffect(() => {
  if(componentWidth < 711){
    setNumberOfVisibleElements(3);
    setElementSizeInComparisionToComponent(0.3);
  }else if(componentWidth >= 711 && componentWidth < 967){
    setNumberOfVisibleElements(4);
    setElementSizeInComparisionToComponent(0.22);
  }else if(componentWidth >= 967){
    setNumberOfVisibleElements(5);
    setElementSizeInComparisionToComponent(0.18);
  }
}, [componentWidth])

  function calculateDragBounds(){
    const singleElementSize = componentWidth * elementSizeInComparisionToComponent; //in pixels
    const numberOfNotVisibleElements = numberOfElementsOnTheList-numberOfVisibleElements-numberOfPartiallyVisibleElements;
    const hiddenPartElementSize = componentWidth * (elementSizeInComparisionToComponent - (1-numberOfVisibleElements*elementSizeInComparisionToComponent));//size of the hidden part of partially visible element

    let dragBound = singleElementSize * numberOfNotVisibleElements + hiddenPartElementSize; //movement bounds of the list in pixels
    console.log(componentWidth * elementSizeInComparisionToComponent);
    return dragBound;
  }

  window.addEventListener("resize", function() {
    if(scrollableListRef.current){
      setComponentWidth(scrollableListRef.current.offsetWidth);
      console.log(scrollableListRef.current.offsetWidth);
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