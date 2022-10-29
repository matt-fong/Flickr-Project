from app.models import db, Image


def seed_images():
  one = Image(
    title='Title1', description='Description1', imageUrl='https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=1)
  two = Image(
    title='Title2', description='Description1', imageUrl='https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg', userId=2)
  three = Image(
    title='Title3', description='Description1', imageUrl='https://images.pexels.com/photos/723180/pexels-photo-723180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  four = Image(
    title='Title4', description='Description1', imageUrl='https://www.pixel4k.com/wp-content/uploads/2019/03/desert-4k_1551644840.jpg', userId=3)
  five = Image(
    title='Title5', description='Description1', imageUrl='https://wallpapercave.com/wp/wp4600617.jpg', userId=3)
  six = Image(
    title='Title6', description='Description1', imageUrl='https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  seven = Image(
    title='Title7', description='Description1', imageUrl='https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80', userId=3)
  eight = Image(
    title='Title8', description='Description1', imageUrl='https://w0.peakpx.com/wallpaper/415/392/HD-wallpaper-drone-shot-day-lakes-mountains-road-village.jpg', userId=3)
  nine = Image(
    title='Title9', description='Description1', imageUrl='https://wallpapercave.com/wp/wp9524749.jpg', userId=3)
  ten = Image(
    title='Title10', description='Description1', imageUrl='https://free4kwallpapers.com/uploads/originals/2016/12/23/skyscrapers-in-night-city-wallpaper.jpg', userId=3)
  eleven = Image(
    title='Title11', description='Description1', imageUrl='https://wallpaperaccess.com/full/1431610.jpg', userId=3)
  twelve = Image(
    title='Title12', description='Description1', imageUrl='https://i.pinimg.com/736x/b3/b2/f0/b3b2f03014404d10d01dc64f7f13f5e7.jpg', userId=3)
  thirteen = Image(
    title='Title13', description='Description1', imageUrl='https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80', userId=3)
  fourteen = Image(
    title='Title14', description='Description1', imageUrl='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', userId=3)
  fifteen = Image(
    title='Title15', description='Description1', imageUrl='https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80', userId=3)
  sixteen = Image(
    title='Title16', description='Description1', imageUrl='https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  seventeen = Image(
    title='Title17', description='Description1', imageUrl='https://images.pexels.com/photos/205001/pexels-photo-205001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  eighteen = Image(
    title='Title18', description='Description1', imageUrl='https://images.pexels.com/photos/2619004/pexels-photo-2619004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  nineteen = Image(
    title='Title19', description='Description1', imageUrl='https://images.pexels.com/photos/900097/pexels-photo-900097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  twenty = Image(
    title='Title20', description='Description1', imageUrl='https://media.istockphoto.com/photos/kabukicho-shinjuku-at-night-picture-id1330558677?b=1&k=20&m=1330558677&s=170667a&w=0&h=10l4A6mZSQ2-LvaRTwzCjIi7D057rY7HDmwgkOiLoZo=', userId=3)
  twentyone = Image(
    title='Title21', description='Description1', imageUrl='https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80', userId=3)
  twentytwo = Image(
    title='Title22', description='Description1', imageUrl='https://images.pexels.com/photos/2611465/pexels-photo-2611465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  twentythree = Image(
    title='Title23', description='Description1', imageUrl='https://images.pexels.com/photos/2425720/pexels-photo-2425720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  twentyfour = Image(
    title='Title24', description='Description1', imageUrl='https://images.pexels.com/photos/2484848/pexels-photo-2484848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  twentyfive = Image(
    title='Title25', description='Description1', imageUrl='https://images2.alphacoders.com/458/458495.jpg', userId=3)
  twentysix = Image(
    title='Title26', description='Description1', imageUrl='https://r1.ilikewallpaper.net/iphone-wallpapers/download/74230/Bangkok--iphone-wallpaper-ilikewallpaper_com.jpg', userId=3)
  twentyseven = Image(
    title='Title27', description='Description1', imageUrl='https://img.besthqwallpapers.com/Uploads/3-11-2017/26978/ko-samui-tropical-island-phuket-4k-boats.jpg', userId=3)
  twentyeight = Image(
    title='Title28', description='Description1', imageUrl='https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  twentynine = Image(
    title='Title29', description='Description1', imageUrl='https://wallpaper.dog/large/5444717.jpg', userId=3)
  thirty = Image(
    title='Title30', description='Description1', imageUrl='https://wallpaperaccess.com/full/691908.jpg', userId=3)

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
  db.session.add(sixteen)
  db.session.add(seventeen)
  db.session.add(eighteen)
  db.session.add(nineteen)
  db.session.add(twenty)
  db.session.add(twentyone)
  db.session.add(twentytwo)
  db.session.add(twentythree)
  db.session.add(twentyfour)
  db.session.add(twentyfive)
  db.session.add(twentysix)
  db.session.add(twentyseven)
  db.session.add(twentyeight)
  db.session.add(twentynine)
  db.session.add(thirty)

  db.session.commit()



def undo_images():
  db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
  db.session.commit()
