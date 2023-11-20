import axios from "axios";
import { useState } from "react";
import useUser from "../hooks/useUser";

const AddComicForm = ({ articleName, onArticleUpdated }) => {
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const { user } = useUser();

  const addComic = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.post(
      `http://localhost:3000/api/articles/${articleName}/comments`,
      {
        postedBy: name,
        text: commentText,
      },
      { headers }
    );
    const updatedArticle = response.data;
    onArticleUpdated(updatedArticle);
    setName("");
    setCommentText("");
  };

  return (
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      {user && <p>You are posting as {user.email}</p>}
      <label>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          rows="4"
          cols="50"
        />
      </label>
      <button onClick={addComic}>Add Comic</button>
    </div>
  );
};
export default AddComicForm;
