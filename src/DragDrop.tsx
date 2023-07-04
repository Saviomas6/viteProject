import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const DragDrop = () => {
  const data = [
    {
      id: 1,
      label: "Recent",
      value: "recent",
    },
    {
      id: 2,
      label: "Review",
      value: "review",
    },
    {
      id: 3,
      label: "Listed",
      value: "listed",
    },
    {
      id: 4,
      label: "Rejected",
      value: "rejected",
    },
  ];
  const [filter, setFilter] = useState(data);

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;
    const items = Array.from(filter);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setFilter(items);
  }
  console.log("filter", filter);

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="filter">
          {({ droppableProps, innerRef, placeholder }) => (
            <MainContainer {...droppableProps} ref={innerRef}>
              {filter?.map((drag, index) => (
                <Draggable
                  key={drag?.value}
                  draggableId={drag?.value}
                  index={index}
                >
                  {({ dragHandleProps, draggableProps, innerRef }) => (
                    <Container
                      ref={innerRef}
                      {...dragHandleProps}
                      {...draggableProps}
                      key={drag?.id}
                    >
                      {drag?.label}
                    </Container>
                  )}
                </Draggable>
              ))}
              {placeholder}
            </MainContainer>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default DragDrop;
const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  border: 1px solid red;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: gray;
  color: #fff;
  margin: 10px 0;
  width: 300px;
  height: 50px;
`;
