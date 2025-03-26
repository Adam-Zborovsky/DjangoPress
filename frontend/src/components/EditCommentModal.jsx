// src/components/EditCommentModal.js
import React, { useState } from "react";
import { updateArticle } from "../services/articleService";

function EditCommentModal({ comment, token, onClose, onCommentUpdated }) {
	const [content, setContent] = useState(comment.content);
	const [error, setError] = useState(null);

	const handleSave = async () => {
		// For simplicity, we'll assume an updateComment function exists in commentService.
		try {
			// You’d need to implement updateComment in your commentService if not already.
			const updated = await updateArticle(comment.id, { content }, token);
			onCommentUpdated(updated);
			onClose();
		} catch (err) {
			setError("Failed to update comment.");
			console.error(err);
		}
	};

	return (
		<div
			className="modal d-block"
			tabIndex="-1"
			role="dialog"
			style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
		>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Edit Comment</h5>
						<button type="button" className="close btn" onClick={onClose}>
							<span>&times;</span>
						</button>
					</div>
					<div className="modal-body">
						{error && <div className="alert alert-danger">{error}</div>}
						<textarea
							className="form-control"
							value={content}
							onChange={(e) => setContent(e.target.value)}
						></textarea>
					</div>
					<div className="modal-footer">
						<button className="btn btn-secondary" onClick={onClose}>
							Cancel
						</button>
						<button className="btn btn-primary" onClick={handleSave}>
							Save Changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EditCommentModal;
