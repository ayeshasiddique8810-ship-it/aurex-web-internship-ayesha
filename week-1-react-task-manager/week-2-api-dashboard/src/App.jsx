import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import PostForm from "./components/PostForm";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);
  const [editingPost, setEditingPost] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Could not load posts. Please check your connection and try again.");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    fetchPosts();
    return () => controller.abort();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        String(post.id).includes(search);

      const matchesFilter =
        filter === "all" ||
        (filter === "short" && post.body.length < 100) ||
        (filter === "long" && post.body.length >= 100);

      return matchesSearch && matchesFilter;
    });
  }, [posts, search, filter]);

  async function handleAdd(formData) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userId: 1 }),
      });

      if (!response.ok) throw new Error("Could not add post");

      const newPost = await response.json();

      setPosts((current) => [
        { ...newPost, ...formData, id: Date.now() },
        ...current,
      ]);
      setShowForm(false);
      setNotice("Post added successfully.");
    } catch {
      setNotice("Could not add post. Please try again.");
    }
  }

  async function handleUpdate(formData) {
    try {
      const response = await fetch(`${API_URL}/${editingPost.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...editingPost, ...formData }),
      });

      if (!response.ok) throw new Error("Could not update post");

      const updatedPost = await response.json();
      console.log("Update response:", updatedPost);
console.log("Editing post ID:", editingPost.id);
console.log("Form data:", formData);

      setPosts((current) =>
        current.map((post) =>
          post.id === editingPost.id
            ? { ...post, ...updatedPost, ...formData }
            : post
        )
      );

      setEditingPost(null);
      setNotice("Post updated successfully.");
    } catch {
      setNotice("Could not update post. Please try again.");
    }
  }

  async function handleDelete(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Could not delete post");

      setPosts((current) => current.filter((post) => post.id !== id));
      setSelectedPost(null);
      setNotice("Post deleted from this dashboard.");
    } catch {
      setNotice("Could not delete post. Please try again.");
    }
  }

  return (
    <div className="app-shell" id="top">
      <Header />

      <main className="container">
        <section className="welcome">
          <div>
            <p className="eyebrow">MONTH 2 · WEEK 02</p> 
            <h1>API Dashboard</h1>
            <p className="subtitle">
              Explore, search and manage records from a live API.
            </p>
          </div>

          <div className="total-card">
            <span>Total Records</span>
            <strong>{posts.length}</strong>
          </div>
        </section>

        <section className="toolbar">
          <input
            type="search"
            placeholder="Search by title, content or ID..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search posts"
          />

          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            aria-label="Filter posts"
          >
            <option value="all">All records</option>
            <option value="short">Short posts</option>
            <option value="long">Long posts</option>
          </select>

          <button className="primary-button" onClick={() => setShowForm(true)}>
            + Add Post
          </button>
        </section>

        {notice && (
          <div className="notice" role="status">
            {notice}
            <button onClick={() => setNotice("")} aria-label="Dismiss message">
              ×
            </button>
          </div>
        )}

        {loading && (
          <div className="state-card">
            <div className="spinner" />
            <h2>Loading records...</h2>
            <p>Please wait while we connect to the API.</p>
          </div>
        )}

        {!loading && error && (
          <div className="state-card">
            <h2>Unable to load data</h2>
            <p>{error}</p>
            <button
              className="primary-button"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && filteredPosts.length === 0 && (
          <div className="state-card">
            <h2>No records found</h2>
            <p>Try another search or change the filter.</p>
          </div>
        )}

        {!loading && !error && filteredPosts.length > 0 && (
          <section className="post-grid" id="records">
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onView={() => setSelectedPost(post)}
                onEdit={() => setEditingPost(post)}
                onDelete={() => handleDelete(post.id)}
              />
            ))}
          </section>
        )}

        <footer className="footer" id="about">
          <p>AUREX · FULL-STACK ENGINEERING INTERNSHIP</p>
          <span>Built with React, useState, useEffect and Fetch API</span>
        </footer>
      </main>

      {(showForm || editingPost) && (
        <PostForm
          post={editingPost}
          onSubmit={editingPost ? handleUpdate : handleAdd}
          onClose={() => {
            setShowForm(false);
            setEditingPost(null);
          }}
        />
      )}

      {selectedPost && (
        <div className="modal-backdrop" onClick={() => setSelectedPost(null)}>
          <section
            className="modal details-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="details-title"
          >
            <button
              className="close-button"
              onClick={() => setSelectedPost(null)}
              aria-label="Close details"
            >
              ×
            </button>
            <p className="eyebrow">RECORD #{selectedPost.id}</p>
            <h2 id="details-title">{selectedPost.title}</h2>
            <p>{selectedPost.body}</p>
            <span className="tag">User ID: {selectedPost.userId}</span>
          </section>
        </div>
      )}
    </div>
  );
}
