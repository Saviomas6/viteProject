const RedCounter = (WrappedComponent: any) => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>Red</h1>
      <WrappedComponent />
    </div>
  );
};

export default RedCounter;
