// spinner ki class generate ki phir index.css me jakr jo bhi spinner theek lgata hai uski css copy ki and paste ki.
// -> crate a spinner component -> create calssName = "spinner" -> add the spinner css in index.css -> use the component with useState.
import React from "react";

const Spinner = () => {
  return (
    <div>
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
