import { useNavigate } from "react-router-dom";
// Me trying to undertand how to change this toxport 
export default function Tutorial() {
  const navigate = useNavigate();

  const handleCreatePostClick = () => {
    navigate('/create-post');
  };

  const handleExploreClick = () => {
    navigate('/explore');
  };
  return <>
    <main>
      <p> Go to the explore page to view more posts</p>
    <h1>Let's Get Started</h1>
    <p>Click the plus sign to post a new project</p>
    </main>
  </>;
}
 