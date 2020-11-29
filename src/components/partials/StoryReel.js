import React from "react";
import "../styles/StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        title="Juan Dela Cruz"
        profileSrc="https://i.pravatar.cc/150?img=66"
        image="https://i.picsum.photos/id/55/200/300.jpg?hmac=VjTl-6Y6NNyUWof_G17-KlocVl0QuUoxpir1beSTl8A"
      />
      <Story
        profileSrc="https://i.pravatar.cc/150?img=18"
        title="John Doe"
        image="https://i.picsum.photos/id/304/200/300.jpg?hmac=YXd3iLkNQM9NGjwZ31Tiycz66IymYZreYRfvXIrq6l8"
      />
      <Story
        title="Jane Doe"
        profileSrc="https://i.pravatar.cc/150?img=5"
        image="https://i.picsum.photos/id/651/200/300.jpg?hmac=0w4DoCrs0gvMucmilCFXoqZAB9P3n94dVJ70mY8A4yQ"
      />
      <Story
        title="Sandra Park"
        profileSrc="https://i.pravatar.cc/150?img=31"
        image="https://i.picsum.photos/id/620/200/300.jpg?hmac=ZLg-jrbFo8ASzAzQlxN4yMTNJJBpZtcpDXfwBxAvcT4"
      />
      <Story
        title="Hailey Gomez"
        profileSrc="https://i.pravatar.cc/150?img=40"
        image="https://i.picsum.photos/id/728/200/300.jpg?hmac=J-q7xv6gzVRQmKunEBaFotw4F0dJ1Q6OnjN85VoBk8o"
      />
    </div>
  );
}

export default StoryReel;
