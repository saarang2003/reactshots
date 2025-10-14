import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Sandpack } from '@codesandbox/sandpack-react';

const NestedCommentCode = `
import React, { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

const styles = {
  wrapper: {
    minHeight: "100vh",
    padding: "40px",
    backgroundColor: "#f0f2f5",
    fontFamily: "Arial, sans-serif",
  },
  commentBox: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    maxWidth: "700px",
    margin: "0 auto",
  },
  commentInput: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    fontSize: "1rem",
  },
  sendBtn: {
    backgroundColor: "#4a90e2",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  comment: {
    marginTop: "20px",
    borderLeft: "2px solid #eee",
    paddingLeft: "10px",
  },
  replyBtn: {
    background: "none",
    border: "none",
    color: "#4a90e2",
    cursor: "pointer",
    fontSize: "0.9rem",
    marginTop: "5px",
  },
  nested: {
    marginLeft: "20px",
    marginTop: "10px",
  },
  commentText: {
    marginBottom: "6px",
    color: "#333",
  },
};

function Comment({ comment, addReply }) {
  const [replyText, setReplyText] = useState("");
  const [showReplyInput, setShowReplyInput] = useState(false);

  const handleReply = () => {
    if (replyText.trim() !== "") {
      addReply(comment.id, replyText.trim());
      setReplyText("");
      setShowReplyInput(false);
    }
  };

  return (
    <div style={styles.comment}>
      <p style={styles.commentText}>
        <MessageCircle size={16} style={{ marginRight: "6px" }} />
        {comment.text}
      </p>
      <button
        style={styles.replyBtn}
        onClick={() => setShowReplyInput(!showReplyInput)}
      >
        Reply
      </button>
      {showReplyInput && (
        <div style={styles.nested}>
          <input
            type="text"
            placeholder="Write a reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            style={styles.commentInput}
          />
          <button onClick={handleReply} style={styles.sendBtn}>
            <Send size={16} />
            Send
          </button>
        </div>
      )}
      {comment.replies.map((reply) => (
        <div key={reply.id} style={styles.nested}>
          <Comment comment={reply} addReply={addReply} />
        </div>
      ))}
    </div>
  );
}

export default function NestedComments() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const addComment = () => {
    if (commentText.trim() === "") return;
    const newComment = {
      id: Date.now(),
      text: commentText.trim(),
      replies: [],
    };
    setComments([newComment, ...comments]);
    setCommentText("");
  };

  const addReply = (parentId, replyText) => {
    const recursiveAdd = (items) =>
      items.map((item) => {
        if (item.id === parentId) {
          return {
            ...item,
            replies: [
              ...item.replies,
              { id: Date.now(), text: replyText, replies: [] },
            ],
          };
        } else {
          return {
            ...item,
            replies: recursiveAdd(item.replies),
          };
        }
      });
    setComments(recursiveAdd(comments));
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.commentBox}>
        <h2 style={{ marginBottom: "20px", color: "#333" }}>
          Nested Comments
        </h2>
        <input
          type="text"
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          style={styles.commentInput}
        />
        <button onClick={addComment} style={styles.sendBtn}>
          <Send size={16} />
          Post
        </button>

        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            addReply={addReply}
          />
        ))}
      </div>
    </div>
  );
}

`;

function NestedComment() {
  return (
    <div>
        <div
    className="fixed inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #6366f1 100%)",
      minHeight: "100vh",
    }}
  />
    <div className='relative z-10 py-6'>
      <Navbar />
    </div>

     <div className="relative z-10 max-w-[1280px] h-fit mx-auto px-4 md:px-6 lg:px-14 pb-12 mt-8 ">
     <h1 className="text-4xl text-[#f0f0ff] selection:bg-purple-300 selection:text-black font-bold mb-8"> 
Nested Comments Component
</h1>

<h4 className="selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-2xl mb-1 leading-[1.5]">
  📝 Project Overview
</h4>
<p className="text-[#4a4e5e] selection:bg-purple-300 selection:text-black max-w-[60%]">
  In this project, we built a nested comments component using React. The component allows users to leave comments on posts and reply to other comments, showcasing the use of state management and event handling in React.
</p>

<h4 className="selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-xl mb-1 leading-[1.5] mt-4">
  🎯 What You Will Learn
</h4>
<ul className="text-[#4a4e5e] selection:bg-purple-300 selection:text-black list-disc list-inside max-w-[60%]">
  <li>Use <code>useState</code> to manage comments, replies, and input values</li>
  <li>Implement recursive rendering to display nested replies</li>
  <li>Handle dynamic updates to deeply nested state structures</li>
  <li>Add interactive UI elements like reply toggles and submit actions</li>
  <li>Style components with clean, inline CSS for flexibility and clarity</li>
</ul>


      </div>

        <section className='max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 pb-12'>
              <div className='rounded-xl border border-gray-200  bg-white p-6 shadow-sm'>
                <p className='mb-4 relative z-10 text-2xl font-semibold text-[#e3ecf9]'>Code</p>
                <Sandpack
                  template="react"
                  options={{
                    showNavigator: true,
                    showTabs: true,
                    showLineNumbers: true,
                    wrapContent: true,
                    editorHeight: 600,
                    previewHeight: 600,
                  }}
                  files={{
                    "/App.js": NestedCommentCode,
                  }}
                   customSetup={{
              dependencies: {
                "lucide-react": "latest", 
              },
            }}
                />
              </div>
            
            </section>


             <div className=" relative z-10 mt-8" >
      <Footer />
      </div>



    </div>
  )
}

export default NestedComment