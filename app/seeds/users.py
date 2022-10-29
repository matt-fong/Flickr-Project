from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo', last_name='User', username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        first_name='Marnie', last_name='Jones', username='Marnie', email='marnie@aa.io', password='password')
    bobby = User(
        first_name='Bobby', last_name='Shmurda', username='Bobby', email='bobby@aa.io', password='password')
    matt = User(
        first_name='Matt', last_name='Damon', username='Matt', email='matt@aa.io', password='password')
    josh = User(
        first_name='Josh', last_name='Hart', username='Josh', email='josh@aa.io', password='password')
    jordan = User(
        first_name='Jordan', last_name='Hart', username='Jordan', email='jordan@aa.io', password='password')


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobby)
    db.session.add(matt)
    db.session.add(josh)
    db.session.add(jordan)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
