import React, { useState, useRef, useEffect} from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'


export default function ScrollableList(props) {
  const [{ x }, set] = useSpring(() => ({ x: 0 }))
  const [componentWidth, setComponentWidth] = useState(window.innerWidth);
  const {productData, displayAsRows=false} = props;
  const scrollableListRef = useRef(null);
  const cardType = props.componentCard.name;


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
    }
}, [scrollableListRef]);

useEffect(() => {

  const breakpoint = {
    sm: 711,
    md: 967
  };

  const breakpointCardSetting = {
    "ProductCard": {
      sm: {
        visibleElements: 3,
        componentPartSize: 0.3
      },
      md: {
        visibleElements: 4,
        componentPartSize: 0.22
      },
      lg: {
        visibleElements: 5,
        componentPartSize: 0.18
      }
    },
    "CategoryCard": {
      sm: {
        visibleElements: 2,
        componentPartSize: 0.4
      },
      md: {
        visibleElements: 3,
        componentPartSize: 0.3
      },
      lg: {
        visibleElements: 4,
        componentPartSize: 0.22
      }
    }
  }
  
  if(componentWidth < breakpoint.sm){
    setNumberOfVisibleElements(breakpointCardSetting[cardType].sm.visibleElements);
    setElementSizeInComparisionToComponent(breakpointCardSetting[cardType].sm.componentPartSize);
  }else if(componentWidth >= breakpoint.sm && componentWidth < breakpoint.md){
    setNumberOfVisibleElements(breakpointCardSetting[cardType].md.visibleElements);
    setElementSizeInComparisionToComponent(breakpointCardSetting[cardType].md.componentPartSize);
  }else if(componentWidth >= breakpoint.md){
    setNumberOfVisibleElements(breakpointCardSetting[cardType].lg.visibleElements);
    setElementSizeInComparisionToComponent(breakpointCardSetting[cardType].lg.componentPartSize);
  }
}, [componentWidth, cardType])

  function calculateDragBounds(){
    const singleElementSize = componentWidth * elementSizeInComparisionToComponent; //in pixels
    const numberOfNotVisibleElements = numberOfElementsOnTheList-numberOfVisibleElements-numberOfPartiallyVisibleElements;
    const hiddenPartElementSize = componentWidth * (elementSizeInComparisionToComponent - (1-numberOfVisibleElements*elementSizeInComparisionToComponent));//size of the hidden part of partially visible element

    let dragBound = singleElementSize * numberOfNotVisibleElements + hiddenPartElementSize; //movement bounds of the list in pixels
    return dragBound;
  }

  window.addEventListener("resize", function() {
    if(scrollableListRef.current){
      setComponentWidth(scrollableListRef.current.offsetWidth);
    }
    
  });


  const bind = useDrag(({ down, offset: [ox], tap }) => {
    //if (tap) alert('tap!')
    //console.log("I was dragged!");
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
          {productData.map(product => {
            return (
              <div key={product.id} draggable="false">
                  <props.componentCard product={product} />
              </div>);
          })}
        </animated.div>
    </div>


  );
}