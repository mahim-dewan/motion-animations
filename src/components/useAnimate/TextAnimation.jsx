import { stagger, useAnimate } from "motion/react";
import React from "react";

const ans =
  "The MERN stack is a popular JavaScript technology stack used for building full-stack web applications. MERN stands for MongoDB, Express.js, React, and Node.js. MongoDB is used as the database to store application data. Express.js works as the backend framework that handles routing, middleware, and APIs. React is used on the frontend to create interactive user interfaces, while Node.js allows JavaScript to run on the server side.One of the main advantages of the MERN stack is that developers can use JavaScript for both frontend and backend, which makes development faster and easier to maintain. It is widely used for building modern applications such as dashboards, SaaS platforms, booking systems, and social media apps.";

const TextAnimation = () => {
  const [scope, animate] = useAnimate();

  const handleAnimate = () => {
    animate(
      "span",
      { opacity: 1, filter: "blur(0px)" },
      { duration: 1, delay: stagger(0.02) },
    );
  };
  return (
    <div className="min-h-[60vh] text-justify p-4" ref={scope}>
      <button
        onClick={handleAnimate}
        className="bg-black border border-white text-white p-4 rounded-lg mr-4"
      >
        What is MERN Stack?
      </button>
      {ans.split("").map((e) => (
        <span className="text-2xl opacity-0 blur-xs leading-12">{e}</span>
      ))}
    </div>
  );
};

export default TextAnimation;
