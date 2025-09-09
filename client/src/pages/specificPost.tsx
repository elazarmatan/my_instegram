import { useEffect, useState } from "react";
import { data, useLocation } from "react-router";
import getSpecificPost from "../utils/getSpecificPost";
import Post from "../components/post";

export default function SpecificPost() {
  const post = useLocation();
  return <>
  <Post urlImage={post.state.urlImage} userName={post.state.userName} description={post.state.description} dateAndHour={post.state.dateAndHour}/>
  </>;
}