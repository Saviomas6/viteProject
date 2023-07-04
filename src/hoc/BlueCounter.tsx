import React from "react";

const WithLogging = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    console.log("props", props);

    return (
      <div>
        <h1>Hellos</h1>
        <WrappedComponent {...props} />;
      </div>
    );
  };
};

export default WithLogging;
