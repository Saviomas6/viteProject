import { lazy, Suspense } from "react";
import Header from "./Header";
const ReactLazy = lazy(() => import("./ReactLazy"));
const Form = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<h1 style={{ padding: "0 10px" }}>Loading...</h1>}>
        <ReactLazy />
      </Suspense>
    </div>
  );
};

export default Form;
