from app.models import db, Image


def seed_images():
  one = Image(
    title='Icy Mountains', description='Brrrr', imageUrl='https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=1)
  two = Image(
    title='City Life', description='Drone shot of a beautiful city at night', imageUrl='https://free4kwallpapers.com/uploads/originals/2016/12/23/skyscrapers-in-night-city-wallpaper.jpg', userId=2)
  three = Image(
    title='Artic', description='Dont fall', imageUrl='https://images.pexels.com/photos/723180/pexels-photo-723180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  four = Image(
    title='Desert Waves', description='Sunset at the desert', imageUrl='https://www.pixel4k.com/wp-content/uploads/2019/03/desert-4k_1551644840.jpg', userId=3)
  five = Image(
    title='Reflective Water', description='Calm like the water', imageUrl='https://wallpapercave.com/wp/wp4600617.jpg', userId=3)
  six = Image(
    title='Busy City Night', description='Busy night in New York City', imageUrl='https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  seven = Image(
    title='Neon Lights', description='Neon lights in Hong Kong', imageUrl='https://images.hdqwalls.com/wallpapers/hong-kong-city-neon-city-zm.jpg', userId=3)
  eight = Image(
    title='Connected By A Bridge', description='Drone views ', imageUrl='https://w0.peakpx.com/wallpaper/415/392/HD-wallpaper-drone-shot-day-lakes-mountains-road-village.jpg', userId=3)
  nine = Image(
    title='City At Sunset', description='Sun is falling in a major city', imageUrl='https://wallpapercave.com/wp/wp9524749.jpg', userId=3)
  ten = Image(
    title='Calm Waters', description='Cold like the mountains, calm like the water', imageUrl='https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg', userId=3)
  eleven = Image(
    title='Above The Clouds', description='Looking afar', imageUrl='https://wallpaperaccess.com/full/1431610.jpg', userId=3)
  twelve = Image(
    title='Empty Road', description='Empty road above the clouds', imageUrl='https://i.pinimg.com/736x/b3/b2/f0/b3b2f03014404d10d01dc64f7f13f5e7.jpg', userId=3)
  thirteen = Image(
    title='Open Free', description='Tall trees and big mountains', imageUrl='https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80', userId=3)
  fourteen = Image(
    title='Captured', description='Say Cheese', imageUrl='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', userId=3)
  fifteen = Image(
    title='Sunset Mountain', description='Warm but cold', imageUrl='https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80', userId=3)
  sixteen = Image(
    title='House By The Hill', description='Aesthetic and simple', imageUrl='https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  seventeen = Image(
    title='Cow Goes Moo', description='Moooooooooooooo', imageUrl='https://images.pexels.com/photos/205001/pexels-photo-205001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  eighteen = Image(
    title='Deeper Meaning', description='Mysterious lake', imageUrl='https://images.pexels.com/photos/2619004/pexels-photo-2619004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  nineteen = Image(
    title='House On A Prairie', description='Stay green', imageUrl='https://images.pexels.com/photos/900097/pexels-photo-900097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  twenty = Image(
    title='Busy Nightlife', description='Busy night in Japan', imageUrl='https://media.istockphoto.com/photos/kabukicho-shinjuku-at-night-picture-id1330558677?b=1&k=20&m=1330558677&s=170667a&w=0&h=10l4A6mZSQ2-LvaRTwzCjIi7D057rY7HDmwgkOiLoZo=', userId=3)
  twentyone = Image(
    title='Fuji Sunset', description='Japanese temple and mountain', imageUrl='https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80', userId=3)
  twentytwo = Image(
    title='Bridge And Boat', description='Myterious boat', imageUrl='https://images.pexels.com/photos/2611465/pexels-photo-2611465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  twentythree = Image(
    title='Light In the Dark', description='All aboard', imageUrl='https://images.pexels.com/photos/2425720/pexels-photo-2425720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  twentyfour = Image(
    title='Long Night', description='The night has just begun', imageUrl='https://images.pexels.com/photos/2484848/pexels-photo-2484848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  twentyfive = Image(
    title='Relaxing Huts', description='Palm trees and calm waters', imageUrl='https://images2.alphacoders.com/458/458495.jpg', userId=3)
  twentysix = Image(
    title='Skyline Vision', description='Viewing from above', imageUrl='https://r1.ilikewallpaper.net/iphone-wallpapers/download/74230/Bangkok--iphone-wallpaper-ilikewallpaper_com.jpg', userId=3)
  twentyseven = Image(
    title='Island Exploration', description='Almost at shore', imageUrl='https://img.besthqwallpapers.com/Uploads/3-11-2017/26978/ko-samui-tropical-island-phuket-4k-boats.jpg', userId=3)
  twentyeight = Image(
    title='Big Ben', description='Clock work', imageUrl='https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  twentynine = Image(
    title='City From Afar', description='Into the night', imageUrl='https://wallpaper.dog/large/5444717.jpg', userId=3)
  thirty = Image(
    title='Quiet River', description='Lost but found', imageUrl='https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80', userId=3)

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
