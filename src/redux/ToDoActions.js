// Add to the list
export const addCourse = (payload) => {
    return { type: "ADD", payload };
  };
  
  // update course of the list
  export const editCourse = (payload) => {
    return { type: "EDIT", payload };
  };
  
  // Mark course as started
  export const startCourse = (payload) => {
    return { type: "START",payload};
  };