export default function PostCard({ post, onView, onEdit, onDelete }) {
  return (
    <article className="post-card">
      <div className="card-top">
        <span className="tag">POST #{post.id}</span>
        <span className="user-label">User {post.userId}</span>
      </div>

      <h2>{post.title}</h2>
      <p className="post-body">{post.body}</p>

      <div className="card-actions">
        <button className="text-button" onClick={onView}>View details</button>
        <button className="text-button" onClick={onEdit}>Edit</button>
        <button className="delete-button" onClick={onDelete}>Delete</button>
      </div>
    </article>
  );
}
