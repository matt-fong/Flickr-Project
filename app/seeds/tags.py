from app.models import db, Tag

def seed_tags():
  one = Tag(userId=1, imageId=1, name='test')

  db.session.add(one)

  db.session.commit()

def undo_tags():
  db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
  db.session.commit()
