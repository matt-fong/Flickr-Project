from app.models import db, Image


def seed_images():
  one = Image(
    title='Title1', description='Description1', imageUrl='https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg', userId=1)
  two = Image(
    title='Title1', description='Description1', imageUrl='https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg', userId=2)
  three = Image(
    title='Title1', description='Description1', imageUrl='https://static.toiimg.com/thumb/msid-53891743,width-748,height-499,resizemode=4,imgsize-152022/Tour-Eiffel.jpg', userId=3)

  db.session.add(one)
  db.session.add(two)
  db.session.add(three)

  db.session.commit()



def undo_images():
  db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
  db.session.commit()
