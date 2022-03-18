import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

/* Some info
editFeedback is the function that helps edit the feedback
feedbackEdit is the object which has the feedback details and boolean of edit: true or false

Remember as function name starts what it does i.e., edit
and state starts with what it holds

*/

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "my context review 1", rating: 8 },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
    setFeedbackEdit({ item: {}, edit: false });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        setFeedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
