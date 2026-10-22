import { useState } from "react";

export default function PostForm({ post, onSubmit, onClose }) {
  const [title, setTitle] = useState(post?.title || "");
  const [body, setBody] = useState(post?.body || "");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !body.trim()) {
      setError("Please fill in both the title and content.");
      return;
    }

    setError("");
    setSaving(true);

    try {
      await onSubmit({ title: title.trim(), body: body.trim() });
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <form
        className="modal form-modal"
        onSubmit={handleSubmit}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="close-button"
          onClick={onClose}
          aria-label="Close form"
        >
          ×
        </button>

        <p className="eyebrow">{post ? "UPDATE RECORD" : "NEW RECORD"}</p>
        <h2>{post ? "Edit post" : "Add a post"}</h2>

        <label htmlFor="post-title">Title</label>
        <input
          id="post-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter a title"
          maxLength={150}
        />

        <label htmlFor="post-body">Content</label>
        <textarea
          id="post-body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder="Write your content..."
          rows={5}
          maxLength={1000}
        />

        {error && <p className="form-error">{error}</p>}

        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="primary-button" type="submit" disabled={saving}>
            {saving ? "Saving..." : post ? "Save Changes" : "Add Post"}
          </button>
        </div>
      </form>
    </div>
  );
}
