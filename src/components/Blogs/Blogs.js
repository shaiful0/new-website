import React from 'react';
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='blog-container'>
      <h1>Question: What is Context API ?</h1>
      <p>Answer:React context API, In this article you will explore what is Context API and how to use it in your React project.Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider.Consumer as it so happens is a component that consumes and uses the state.</p>
      <h1>Question: What is Simantic Tag</h1>
      <p>Answer: Semantic html or semantic markup is html that introduces meaning to the web page rather than just presentation. For example, a p tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them. exaples of simsctic tags such as header tags h1 to h6 blockquote code em .</p>
    </div>
  );
};

export default Blogs;