from app.models import db, Image


def seed_images():
  one = Image(
    title='Title1', description='Description1', imageUrl='https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg', userId=1)
  two = Image(
    title='Title1', description='Description1', imageUrl='https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg', userId=2)
  three = Image(
    title='Title1', description='Description1', imageUrl='https://static.toiimg.com/thumb/msid-53891743,width-748,height-499,resizemode=4,imgsize-152022/Tour-Eiffel.jpg', userId=3)
  four = Image(
    title='Title1', description='Description1', imageUrl='https://www.pixel4k.com/wp-content/uploads/2019/03/desert-4k_1551644840.jpg', userId=3)
  five = Image(
    title='Title1', description='Description1', imageUrl='https://wallpapercave.com/wp/wp4600617.jpg', userId=3)
  six = Image(
    title='Title1', description='Description1', imageUrl='https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  seven = Image(
    title='Title1', description='Description1', imageUrl='https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80', userId=3)
  eight = Image(
    title='Title1', description='Description1', imageUrl='https://w0.peakpx.com/wallpaper/415/392/HD-wallpaper-drone-shot-day-lakes-mountains-road-village.jpg', userId=3)
  nine = Image(
    title='Title1', description='Description1', imageUrl='https://wallpapercave.com/wp/wp9524749.jpg', userId=3)
  ten = Image(
    title='Title1', description='Description1', imageUrl='https://free4kwallpapers.com/uploads/originals/2016/12/23/skyscrapers-in-night-city-wallpaper.jpg', userId=3)
  eleven = Image(
    title='Title1', description='Description1', imageUrl='https://wallpaperaccess.com/full/1431610.jpg', userId=3)
  twelve = Image(
    title='Title1', description='Description1', imageUrl='https://i.pinimg.com/736x/b3/b2/f0/b3b2f03014404d10d01dc64f7f13f5e7.jpg', userId=3)
  thirteen = Image(
    title='Title1', description='Description1', imageUrl='https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80', userId=3)
  fourteen = Image(
    title='Title1', description='Description1', imageUrl='https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80', userId=3)
  fifteen = Image(
    title='Title1', description='Description1', imageUrl='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', userId=3)

  db.session.add(one)
  db.session.add(two)
  db.session.add(three)
  db.session.add(four)
  db.session.add(five)
  db.session.add(six)
  db.session.add(seven)
  db.session.add(eight)
  db.session.add(nine)
  db.session.add(ten)
  db.session.add(eleven)
  db.session.add(twelve)
  db.session.add(thirteen)
  db.session.add(fourteen)
  db.session.add(fifteen)

  db.session.commit()



def undo_images():
  db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
  db.session.commit()
