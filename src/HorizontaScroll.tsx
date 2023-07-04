import { useRef, useEffect } from "react";
import styled from "styled-components";

const HorizontaScroll = () => {
  const ref = useRef<any>(null);

  //   useEffect(() => {
  //     let isDown = false;
  //     let startX: any;
  //     let scrollLeft: any;
  //     const handleMouseDown = (e: any) => {
  //       isDown = true;
  //       startX = e.pageX - ref.current.offsetLeft;
  //       scrollLeft = ref.current.scrollLeft;
  //     };
  //     const handleMouseLeave = () => {
  //       isDown = false;
  //     };
  //     const handleMouseUp = () => {
  //       isDown = false;
  //     };
  //     const handleMouseMove = (e: any) => {
  //       if (!isDown) return;
  //       e.preventDefault();
  //       const x = e.pageX - ref.current.offsetLeft;
  //       const walk = (x - startX) * 3;
  //       ref.current.scrollLeft = scrollLeft - walk;
  //     };

  //     const element = ref.current;

  //     element.addEventListener("mousedown", handleMouseDown);
  //     element.addEventListener("mouseleave", handleMouseLeave);
  //     element.addEventListener("mouseup", handleMouseUp);
  //     element.addEventListener("mousemove", handleMouseMove);

  //     return () => {
  //       element.removeEventListener("mousedown", handleMouseDown);
  //       element.removeEventListener("mouseleave", handleMouseLeave);
  //       element.removeEventListener("mouseup", handleMouseUp);
  //       element.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }, []);

  return (
    <Container ref={ref}>
      {Array.from({ length: 20 }, (x, v) => (
        <BlockContainer>{v}</BlockContainer>
      ))}
    </Container>
  );
};

export default HorizontaScroll;
const Container = styled.div`
  color: #fff;
  background-color: red;
  display: flex;
  gap: 20px;
  scroll-behavior: smooth;
  overflow: auto;
  padding: 0 20px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;
const BlockContainer = styled.div`
  min-height: 200px;
  min-width: 200px;
  background-color: aqua;
`;
