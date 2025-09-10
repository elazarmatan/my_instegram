import { useRef, useState } from "react";
import createPost from "../utils/createPost";
import "../style/createPost.css";
import { useLocation } from "react-router";

//A post creation page that asks the user for a description,
// lets them choose an image,
// and shows them when finished whether the request was successful.
export default function CreatePost(props: { lastId: number }) {
  const userName = useLocation();
  const [img, setImg] = useState("http://localhost:3000/noImagae.png");
  const description = useRef<HTMLInputElement>(null);
  const [notError, setNotError] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [inpEmpty, setInpEmpty] = useState(true);
  const now = new Date();
  let post;
  return (
    <section id="create">
      {userName.state ? (
        <form>
          <select value={img} onChange={(e) => setImg(e.target.value)}>
            <option value="http://localhost:3000/noImagae.png">no image</option>
            <option value="http://localhost:3000/zahavi.png">zahavi</option>
            <option value="http://localhost:3000/dorPeretz.png">peretz</option>
          </select>
          
          <input
            className="inputCreate"
            placeholder="description"
            ref={description}
          />
          <button
            id="subCreate"
            onClick={async (e) => {
              e.preventDefault();
              if (!description.current?.value) {
                setInpEmpty(false);
                return;
              }
              setSubmit(true);
              post = {
                id: props.lastId + 1,
                urlImage: img,
                description: description.current?.value,
                userName: userName.state.userName,
                dateAndHour: `${now.getDate()}/${
                  now.getMonth() + 1
                }/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`,
              };
              const res = await createPost(post);
              if (!res.ok) {
                setNotError(false);
              } else {
                setNotError(true);
              }
            }}
          >
            submit
          </button>
        </form>
      ) : (
        <p></p>
      )}
      {inpEmpty ? (
        submit ? (
          notError ? (
            <h1 id="succes">✅ succes</h1>
          ) : (
            <h1 id="errorPosts">⚠️ ERROR: in server</h1>
          )
        ) : (
          <p></p>
        )
      ) : (
        <p>This is a required fields</p>
      )}
    </section>
  );
}
