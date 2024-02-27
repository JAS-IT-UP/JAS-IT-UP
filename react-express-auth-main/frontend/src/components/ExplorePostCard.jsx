import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Hamburger from "hamburger-react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export default function ExplorePostCard() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Card key={post.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={post.post_picture} />
      <Card.ImgOverlay>
        <Card.Img variant="top" src={post.profile_picture} />
      </Card.ImgOverlay>
      <section class="Post-Interactions">
        <Hamburger
          toggled={isOpen[post.id]}
          toggle={() => setOpen({ ...isOpen, [post.id]: !isOpen[post.id] })}
        />
        {savedPosts[post.id] ? (
          <FaBookmark
            onClick={() => {
              setSavedPost((prevState) => ({
                ...prevState,
                [post.postId]: !savedPosts[post.id],
              }));
              handleSaveToggle(post.id);
            }}
          />
        ) : (
          <FaRegBookmark
            onClick={() => {
              setSavedPost((prevState) => ({
                ...prevState,
                [post.postId]: !savedPosts[post.id],
              }));
              handleSaveToggle(post.id);
            }}
          />
        )}
      </section>
      {isOpen && (
        <Card.Body>
          <Card.Text>
            <h3 id="explore-post-heading">Materials</h3>
            {post.material_name}
          </Card.Text>
          <Card.Text>
            <h3 id="explore-post-heading">The Revamp</h3>
            {post.project_description}
          </Card.Text>
        </Card.Body>
      )}
    </Card>
  );
}
