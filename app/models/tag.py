from .db import db

class Tag(db.Model):
  __tablename__ = 'tags'

  id = db.Column(db.Integer, primary_key=True)
  userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  imageId = db.Column(db.Integer, db.ForeignKey("images.id"), nullable=False)
  name = db.Column(db.String(100), nullable=False)

  image = db.relationship("Image", back_populates='tags')

  def to_dict(self):
    return {
      "id" : self.id,
      "userId" : self.userId,
      "imageId" : self.imageId,
      "name" : self.name,
    }
