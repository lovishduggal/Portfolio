import { useEffect, useState, useRef } from 'react';

function CustomCursor() {
  const mainCursor = useRef(null);
  const secondaryCursor = useRef(null);
  const [visible, setVisible] = useState(false);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.body.style.cursor = 'none';
    let animationFrameId = -1;

    const onMouseMove = (event) => {
      if (!visible) setVisible(true);

      const { clientX, clientY } = event;

      const mainX = clientX;
      const mainY = clientY;

      positionRef.current.mouseX = mainX - mainCursor.current.clientWidth / 2;
      positionRef.current.mouseY = mainY - mainCursor.current.clientHeight / 2;

      mainCursor.current.style.transform = `translate3d(${
        mainX - mainCursor.current.clientWidth / 2
      }px, ${mainY - mainCursor.current.clientHeight / 2}px, 0)`;
    };

    const followMouse = () => {
      animationFrameId = requestAnimationFrame(followMouse);

      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }

      if (secondaryCursor.current) {
        secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    followMouse();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  return (
    <>
      <div
        ref={mainCursor}
        className="main-cursor"
        style={{ opacity: visible ? 1 : 0 }}
      />
      <div
        ref={secondaryCursor}
        className="secondary-cursor"
        style={{ opacity: visible ? 1 : 0 }}
      />
    </>
  );
}

export default CustomCursor;
