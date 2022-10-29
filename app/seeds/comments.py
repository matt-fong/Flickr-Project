from app.models import db, Comment


def seed_comments():
  one = Comment(
    body='Awesome photo!', userId=2, imageId=1)
  two = Comment(
    body='Nice!', userId=2, imageId=2)
  three = Comment(
    body='Amazing!', userId=3, imageId=3)
  four = Comment(
    body='Beautiful!', userId=3, imageId=4)
  five = Comment(
    body='Great!', userId=2, imageId=5)
  six = Comment(
    body='Nice!', userId=3, imageId=6)
  seven = Comment(
    body='Awesome!', userId=2, imageId=7)
  eight = Comment(
    body='Beautiful!', userId=3, imageId=8)
  nine = Comment(
    body='Great!', userId=2, imageId=9)
  ten = Comment(
    body='Nice!', userId=3, imageId=10)
  eleven = Comment(
    body='Awesome!', userId=2, imageId=11)
  twelve = Comment(
    body='Amazing photo!', userId=3, imageId=12)
  thirteen = Comment(
    body='Great!', userId=2, imageId=13)
  fourteen = Comment(
    body='Nice!', userId=3, imageId=14)
  fifteen = Comment(
    body='Awesome!', userId=2, imageId=15)
  sixteen = Comment(
    body='Beautiful!', userId=3, imageId=16)
  seventeen = Comment(
    body='Great!', userId=2, imageId=17)
  eighteen = Comment(
    body='Nice!', userId=3, imageId=18)
  nineteen = Comment(
    body='Awesome!', userId=2, imageId=19)
  twenty = Comment(
    body='Amazing!', userId=3, imageId=20)
  twentyone = Comment(
    body='Beautiful!', userId=2, imageId=21)
  twentytwo = Comment(
    body='Great!', userId=3, imageId=22)
  twentythree = Comment(
    body='Nice!', userId=2, imageId=23)
  twentyfour = Comment(
    body='Awesome!', userId=3, imageId=24)
  twentyfive = Comment(
    body='Beautiful!', userId=2, imageId=25)
  twentysix = Comment(
    body='Great!', userId=3, imageId=26)
  twentyseven = Comment(
    body='Nice!', userId=2, imageId=27)
  twentyeight = Comment(
    body='Awesome!', userId=3, imageId=28)
  twentynine = Comment(
    body='Beautiful!', userId=2, imageId=29)
  thirty = Comment(
    body='Great!', userId=3, imageId=30)

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



def undo_comments():
  db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
  db.session.commit()
