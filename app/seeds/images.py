from app.models import db, Image


def seed_images():
  one = Image(
    title='Icy Mountains', description='Brrrr', imageUrl='https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=50)
  two = Image(
    title='City Life', description='Drone shot of a beautiful city at night', imageUrl='https://free4kwallpapers.com/uploads/originals/2016/12/23/skyscrapers-in-night-city-wallpaper.jpg', userId=2)
  three = Image(
    title='Artic', description='Dont fall', imageUrl='https://images.pexels.com/photos/723180/pexels-photo-723180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=3)
  four = Image(
    title='Desert Waves', description='Sunset at the desert', imageUrl='https://www.pixel4k.com/wp-content/uploads/2019/03/desert-4k_1551644840.jpg', userId=4)
  five = Image(
    title='Reflective Water', description='Calm like the water', imageUrl='https://wallpapercave.com/wp/wp4600617.jpg', userId=5)
  six = Image(
    title='Busy City Night', description='Busy night in New York City', imageUrl='https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=6)
  seven = Image(
    title='Neon Lights', description='Neon lights in Hong Kong', imageUrl='https://images.hdqwalls.com/wallpapers/hong-kong-city-neon-city-zm.jpg', userId=7)
  eight = Image(
    title='Connected By A Bridge', description='Drone views ', imageUrl='https://w0.peakpx.com/wallpaper/415/392/HD-wallpaper-drone-shot-day-lakes-mountains-road-village.jpg', userId=8)
  nine = Image(
    title='City At Sunset', description='Sun is falling in a major city', imageUrl='https://wallpapercave.com/wp/wp9524749.jpg', userId=9)
  ten = Image(
    title='Calm Waters', description='Cold like the mountains, calm like the water', imageUrl='https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg', userId=10)
  eleven = Image(
    title='Above The Clouds', description='Looking afar', imageUrl='https://wallpaperaccess.com/full/1431610.jpg', userId=11)
  twelve = Image(
    title='Empty Road', description='Empty road above the clouds', imageUrl='https://i.pinimg.com/736x/b3/b2/f0/b3b2f03014404d10d01dc64f7f13f5e7.jpg', userId=12)
  thirteen = Image(
    title='Open Free', description='Tall trees and big mountains', imageUrl='https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80', userId=13)
  fourteen = Image(
    title='Captured', description='Say Cheese', imageUrl='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', userId=14)
  fifteen = Image(
    title='Sunset Mountain', description='Warm but cold', imageUrl='https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80', userId=15)
  sixteen = Image(
    title='House By The Hill', description='Aesthetic and simple', imageUrl='https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=16)
  seventeen = Image(
    title='Cow Goes Moo', description='Moooooooooooooo', imageUrl='https://images.pexels.com/photos/205001/pexels-photo-205001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=17)
  eighteen = Image(
    title='Deeper Meaning', description='Mysterious lake', imageUrl='https://images.pexels.com/photos/2619004/pexels-photo-2619004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=18)
  nineteen = Image(
    title='House On A Prairie', description='Stay green', imageUrl='https://images.pexels.com/photos/900097/pexels-photo-900097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=19)
  twenty = Image(
    title='Busy Nightlife', description='Busy night in Japan', imageUrl='https://media.istockphoto.com/photos/kabukicho-shinjuku-at-night-picture-id1330558677?b=1&k=20&m=1330558677&s=170667a&w=0&h=10l4A6mZSQ2-LvaRTwzCjIi7D057rY7HDmwgkOiLoZo=', userId=20)
  twentyone = Image(
    title='Fuji Sunset', description='Japanese temple and mountain', imageUrl='https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80', userId=21)
  twentytwo = Image(
    title='Sunset In London', description='Beautiful sunset in London, England', imageUrl='https://images.pexels.com/photos/2611465/pexels-photo-2611465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=22)
  twentythree = Image(
    title='Light In the Dark', description='All aboard', imageUrl='https://images.pexels.com/photos/2425720/pexels-photo-2425720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=23)
  twentyfour = Image(
    title='Long Night', description='The night has just begun', imageUrl='https://images.pexels.com/photos/2484848/pexels-photo-2484848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=24)
  twentyfive = Image(
    title='Relaxing Huts', description='Palm trees and calm waters', imageUrl='https://images2.alphacoders.com/458/458495.jpg', userId=25)
  twentysix = Image(
    title='Skyline Vision', description='Viewing from above', imageUrl='https://r1.ilikewallpaper.net/iphone-wallpapers/download/74230/Bangkok--iphone-wallpaper-ilikewallpaper_com.jpg', userId=26)
  twentyseven = Image(
    title='Island Exploration', description='Almost at shore', imageUrl='https://besthqwallpapers.com/Uploads/3-11-2017/26978/thumb2-ko-samui-tropical-island-phuket-4k-boats.jpg', userId=27)
  twentyeight = Image(
    title='Big Ben', description='Clock work', imageUrl='https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=28)
  twentynine = Image(
    title='City From Afar', description='Into the night', imageUrl='https://wallpaper.dog/large/5444717.jpg', userId=29)
  thirty = Image(
    title='Quiet River', description='Lost but found', imageUrl='https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80', userId=30)
  thirtyone = Image(
    title='Cloudy Car', description='Car driving by', imageUrl='https://www.pixelstalk.net/wp-content/uploads/images6/4K-Travel-Wallpaper-for-Desktop.jpg', userId=31)
  thirtytwo = Image(
    title='Neon City Lights', description='Lights in the night', imageUrl='https://wallpaperaccess.com/full/3200184.jpg', userId=32)
  thirtythree = Image(
    title='African Heat', description='Very dry in the African desert', imageUrl='https://wallpaperaccess.com/full/342608.jpg', userId=33)
  thirtyfour = Image(
    title='Lantern Alley', description='Lanterns light up the alley', imageUrl='https://wallpaper.dog/large/20383272.jpg', userId=34)
  thirtyfive = Image(
    title='Northern Lights', description='The Northern Lights shows up', imageUrl='https://images.squarespace-cdn.com/content/v1/5180da74e4b01eeb7aecdc64/1649869848482-F8W91AJV9FC2O9XXHY7H/Lofoten-Aurora-Skagsanden-04-20-2.jpg?format=1000w', userId=35)
  thirtysix = Image(
    title='Village In The Mountain', description='Secret village up in the mountains', imageUrl='https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpdHplcmxhbmR8ZW58MHx8MHx8&w=1000&q=80', userId=36)
  thirtyseven = Image(
    title='Long Night', description='City lights are shining', imageUrl='https://free4kwallpapers.com/uploads/originals/2020/07/19/night-city-k-wallpaper.jpg', userId=37)
  thirtyeight = Image(
    title='Boats', description='Boats waiting', imageUrl='https://www.pixelstalk.net/wp-content/uploads/images6/4K-Travel-Wallpaper-Desktop.jpg', userId=38)
  thirtynine = Image(
    title='Volcano', description='Volcano in the distance', imageUrl='https://www.pixelstalk.net/wp-content/uploads/images6/4K-Travel-HD-Wallpaper-Free-download.jpg', userId=39)
  forty = Image(
    title='New York City', description='Cars driving in a New York City highway', imageUrl='https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80', userId=42)
  fortyone = Image(
    title='Peaceful River', description='A beautiful river', imageUrl='https://www.pixelstalk.net/wp-content/uploads/images6/4K-Travel-Wallpaper-High-Resolution.jpg', userId=41)
  fortytwo = Image(
    title='Lonely Tree', description='One tree with a seat', imageUrl='https://www.pixelstalk.net/wp-content/uploads/images6/4K-Travel-Wallpaper-for-PC.jpg', userId=40)
  fortythree = Image(
    title='Purple City', description='Beautiful colors in the city', imageUrl='https://images.pexels.com/photos/3680912/pexels-photo-3680912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=43)
  fortyfour = Image(
    title='Steady Water', description='Not a wave in the water', imageUrl='https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=44)
  fortyfive = Image(
    title='Solo Mission', description='Hiking alone in the mountains', imageUrl='https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&cs=tinysrgb&w=1600', userId=45)
  fortysix = Image(
    title='Mystic Island', description='An amazing island to explore', imageUrl='https://images.pexels.com/photos/2468773/pexels-photo-2468773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=46)
  fortyseven = Image(
    title='Bridge Sunset', description='Sun is coming down', imageUrl='https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=47)
  fortyeight = Image(
    title='Rocky Road', description='Empty road in the middle of rocks', imageUrl='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dWx0cmElMjBoZHxlbnwwfHwwfHw%3D&w=1000&q=80', userId=48)
  fortynine = Image(
    title='Life Is Good', description='Chilling on a boat', imageUrl='https://www.pixelstalk.net/wp-content/uploads/images6/4K-Travel-Wallpaper-for-Windows.jpg', userId=49)
  fifty = Image(
    title='Autumn Leaves', description='Autumn is near', imageUrl='https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', userId=50)

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
  db.session.add(thirtyone)
  db.session.add(thirtytwo)
  db.session.add(thirtythree)
  db.session.add(thirtyfour)
  db.session.add(thirtyfive)
  db.session.add(thirtysix)
  db.session.add(thirtyseven)
  db.session.add(thirtyeight)
  db.session.add(thirtynine)
  db.session.add(forty)
  db.session.add(fortyone)
  db.session.add(fortytwo)
  db.session.add(fortythree)
  db.session.add(fortyfour)
  db.session.add(fortyfive)
  db.session.add(fortysix)
  db.session.add(fortyseven)
  db.session.add(fortyeight)
  db.session.add(fortynine)
  db.session.add(fifty)

  db.session.commit()



def undo_images():
  db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
  db.session.commit()
