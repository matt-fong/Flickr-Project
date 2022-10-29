from app.models import db, Comment


def seed_comments():
  one = Comment(
    body='Awesome photo.', userId=1, imageId=1)
  two = Comment(
    body='Nice!', userId=2, imageId=2)
  three = Comment(
    body='Amazing!', userId=3, imageId=3)

  db.session.add(one)
  db.session.add(two)
  db.session.add(three)

  db.session.commit()



def undo_comments():
  db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
  db.session.commit()
