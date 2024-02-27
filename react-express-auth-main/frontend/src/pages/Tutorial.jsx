import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Tutorial.css';
export default function Tutorial() {
  const navigate = useNavigate();

  const handleCreatePostClick = () => {
    navigate('/create-post');
  };

  const handleExploreClick = () => {
    navigate('/explore');
  };

  const createPostButton = (
    <button id="create" onClick={() => navigate('/create-post')}>+</button>
  );
  return <>
    <main>
    {createPostButton}
      <p> Go to the explore page to view more posts</p>
    <h1>Let's Get Started</h1>
    <p>Click the plus sign to post a new project</p>
    </main>
  </>;
}
 