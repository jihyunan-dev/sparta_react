import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Img from "./bh_square.jpg";

const SwipeItem = ({ onSwipe }) => {
  const swipe_div = useRef(null);
  let swipe_status = "ready";
  let target_classname = "";
  let coordinate = {
    start_x: 0,
    start_y: 0,
    end_x: 0,
    end_y: 0,
  };

  useEffect(() => {
    const reset = () => {
      swipe_status = "ready";

      coordinate = {
        start_x: 0,
        start_y: 0,
        end_x: 0,
        end_y: 0,
      };

      swipe_div.current.className = target_classname;

      swipe_div.current.style.left = 0 + "px";
      swipe_div.current.style.top = 0 + "px";
    };

    const touchStart = (e) => {
      swipe_status = "touchstart";
      target_classname = swipe_div.current.className;

      coordinate = {
        ...coordinate,
        start_x: e.touches[0].clientX,
        start_y: e.touches[0].clinetY,
      };
    };

    const touchEnd = (e) => {
      swipe_status = "touched";
      coordinate = {
        ...coordinate,
        end_x: e.changedTouches[0].clientX,
        end_y: e.changedTouches[0].clinetY,
      };

      let diff_x = (coordinate.end_x = coordinate.start_x);
      let direct = "left";

      if (Math.abs(diff_x) > 50) {
        swipe_div.current.className = target_classname + "swipe";
        if (diff_x > 0) {
          direct = "right";
          swipe_div.current.style.left = diff_x + 150 + "px";
          swipe_div.current.style.opacity = 0;
        } else {
          direct = "left";
          swipe_div.current.style.left = diff_x - 150 + "px";
          swipe_div.current.style.opacity = 0;
        }

        window.setTimeout(() => {
          reset();
          onSwipe(direct);
        }, 300);
        return;
      }
      reset();
    };

    const touchMove = (e) => {
      e.preventDefault();
      let current_coordinate = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };

      swipe_div.current.style.left = current_coordinate.x + "px";
      swipe_div.current.style.top = current_coordinate.y + "px";
    };

    const touchCancle = (e) => {
      swipe_status = "cancel";
      reset();
    };

    swipe_div.current.addEventListener("touchstart", touchStart);
    swipe_div.current.addEventListener("touchend", touchEnd);
    swipe_div.current.addEventListener("touchmove", touchMove);
    swipe_div.current.addEventListener("touchcancel", touchCancle);

    return () => {
      if (!swipe_div.current) return;
      swipe_div.current.removeEventListener("touchstart", touchStart);
      swipe_div.current.removeEventListener("touchend", touchEnd);
      swipe_div.current.removeEventListener("touchmove", touchMove);
      swipe_div.current.removeEventListener("touchcancel", touchCancle);
    };
  }, []);

  return (
    <ImgBox ref={swipe_div}>
      <Image src={Img} alt="백현이" />
    </ImgBox>
  );
};

const ImgBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  opacity: 0.9;
  overflow: hidden;
  object-fit: cover;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export default SwipeItem;
