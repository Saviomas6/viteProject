const GreenCounter = (WrappedComponent: any) => {
  return (
    <div style={{ backgroundColor: "green" }}>
      <h1>Green</h1>
      <WrappedComponent />
    </div>
  );
};

export default GreenCounter;
