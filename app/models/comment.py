from .db import db

class Comment(db.Model):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, primary_key=True)
  body = db.Column(db.String(255), nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  imageId = db.Column(db.Integer, db.ForeignKey("images.id"), nullable=False)

  image = db.relationship("Image", back_populates='comments')
