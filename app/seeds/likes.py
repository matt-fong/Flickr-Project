from app.models import db, Like

def seed_likes():
  one = Like(userId=1, imageId=1)

  db.session.add(one)

  db.session.commit()

def undo_likes():
  db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
  db.session.commit()
