from .db import db

class Image(db.Model):
  __tablename__ = 'images'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(100), nullable=False)
  description = db.Column(db.String(1000))
  imageUrl = db.Column(db.String, nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

  comments = db.relationship("Comment", back_populates='image', cascade='all, delete')
  likes = db.relationship("Like", back_populates='image', cascade='all, delete')

  def to_dict(self):
    return {
      "id" : self.id,
      "title" : self.title,
      "description" : self.description,
      "imageUrl" : self.imageUrl,
      "userId" : self.userId,
    }
