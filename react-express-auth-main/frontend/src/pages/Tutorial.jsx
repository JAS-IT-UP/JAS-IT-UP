import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Tutorial.css';
export default function Tutorial() {
  const navigate = useNavigate();

  const handleCreatePostClick = () => {
    navigate('/create-post');
  };

  const createPostButton = (
    <button id="create" onClick={() => navigate('/create-post')}>+</button>
  );
  return <>
    <main>
      <div id = "tutorial-background">
    <div id = "circles">
    <div id="dotExplore">Go to the explore page to view more posts</div>
    <div id="dotGetStarted">Let's Get Started</div>
    <div id="dotNewProject">Click the plus sign to post a new project</div>
    </div>
    </div>
    </main>
  </>;
}
 