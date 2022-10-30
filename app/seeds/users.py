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
    joshua = User(
        first_name='Joshua', last_name='Li', username='Joshua', email='test7@aa.io', password='password')
    martin = User(
        first_name='Martin', last_name='Smith', username='Martin', email='test8@aa,io', password='password')
    jeff = User(
        first_name='Jeff', last_name='Lee', username='Jeff', email='test9@aa,io', password='password')
    lebron = User(
        first_name='Lebron', last_name='James', username='Lebron', email='test10@aa,io', password='password')
    michael = User(
        first_name='Michael', last_name='Jordan', username='Michael', email='test11@aa,io', password='password')
    steph = User(
        first_name='Steph', last_name='Curry', username='Steph', email='test12@aa,io', password='password')
    kobe = User(
        first_name='Kobe', last_name='Bryant', username='Kobe', email='test13@aa,io', password='password')
    kevin = User(
        first_name='Kevin', last_name='Durant', username='Kevin', email='test14@aa,io', password='password')
    james = User(
        first_name='James', last_name='Harden', username='James', email='test15@aa,io', password='password')
    russell = User(
        first_name='Russell', last_name='Westbrook', username='Russell', email='test16@aa,io', password='password')
    anthony = User(
        first_name='Anthony', last_name='Davis', username='Anthony', email='test17@aa,io', password='password')
    demarcus = User(
        first_name='DeMarcus', last_name='Cousins', username='DeMarcus', email='test18@aa,io', password='password')
    demar = User(
        first_name='DeMar', last_name='DeRozan', username='DeMar', email='test19@aa,io', password='password')
    kyrie = User(
        first_name='Kyrie', last_name='Irving', username='Kyrie', email='test20@aa,io', password='password')
    kawhi = User(
        first_name='Kawhi', last_name='Leonard', username='Kawhi', email='test21@aa,io', password='password')
    giannis = User(
        first_name='Giannis', last_name='Antetokounmpo', username='Giannis', email='test22@aa,io', password='password')
    jimmy = User(
        first_name='Jimmy', last_name='Butler', username='Jimmy', email='test23@aa,io', password='password')
    ben = User(
        first_name='Ben', last_name='Simmons', username='Ben', email='test24@aa,io', password='password')
    luka = User(
        first_name='Luka', last_name='Doncic', username='Luka', email='test25@aa,io', password='password')
    jayson = User(
        first_name='Jayson', last_name='Tatum', username='Jayson', email='test26@aa,io', password='password')
    jaylen = User(
        first_name='Jaylen', last_name='Brown', username='Jaylen', email='test27@aa,io', password='password')
    klay = User(
        first_name='Klay', last_name='Thompson', username='Klay', email='test28@aa,io', password='password')
    damian = User(
        first_name='Damian', last_name='Lillard', username='Damian', email='test29@aa,io', password='password')
    carmelo = User(
        first_name='Carmelo', last_name='Anthony', username='Carmelo', email='test30@aa,io', password='password')
    paul = User(
        first_name='Paul', last_name='George', username='Paul', email='test31@aa,io', password='password')
    blake = User(
        first_name='Blake', last_name='Griffin', username='Blake', email='test32@aa,io', password='password')
    andre = User(
        first_name='Andre', last_name='Drummond', username='Andre', email='test33@aa,io', password='password')
    bradley = User(
        first_name='Bradley', last_name='Beal', username='Bradley', email='test34@aa,io', password='password')
    john = User(
        first_name='John', last_name='Wall', username='John', email='test35@aa,io', password='password')
    khris = User(
        first_name='Khris', last_name='Middleton', username='Khris', email='test36@aa,io', password='password')
    derrick = User(
        first_name='Derrick', last_name='Rose', username='Derrick', email='test37@aa,io', password='password')
    danny = User(
        first_name='Danny', last_name='Green', username='Danny', email='test38@aa,io', password='password')
    dirk = User(
        first_name='Dirk', last_name='Nowitzki', username='Dirk', email='test39@aa,io', password='password')
    dwight = User(
        first_name='Dwight', last_name='Howard', username='Dwight', email='test40@aa,io', password='password')
    dwyane = User(
        first_name='Dwyane', last_name='Wade', username='Dwyane', email='test41@aa,io', password='password')
    eric = User(
        first_name='Eric', last_name='Bledsoe', username='Eric', email='test42@aa,io', password='password')
    evan = User(
        first_name='Evan', last_name='Fournier', username='Evan', email='test43@aa,io', password='password')
    gordon = User(
        first_name='Gordon', last_name='Hayward', username='Gordon', email='test44@aa,io', password='password')
    greg = User(
        first_name='Greg', last_name='Monroe', username='Greg', email='test45@aa,io', password='password')
    harrison = User(
        first_name='Harrison', last_name='Barnes', username='Harrison', email='test46@aa,io', password='password')
    isaiah = User(
        first_name='Isaiah', last_name='Thomas', username='Isaiah', email='test47@aa,io', password='password')
    jared = User(
        first_name='Jared', last_name='Sullinger', username='Jared', email='test48@aa,io', password='password')
    javale = User(
        first_name='Javale', last_name='McGee', username='Javale', email='test49@aa,io', password='password')
    jeremy = User(
        first_name='Jeremy', last_name='Lin', username='Jeremy', email='test50@aa,io', password='password')


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobby)
    db.session.add(matt)
    db.session.add(josh)
    db.session.add(jordan)
    db.session.add(joshua)
    db.session.add(martin)
    db.session.add(jeff)
    db.session.add(lebron)
    db.session.add(michael)
    db.session.add(steph)
    db.session.add(kobe)
    db.session.add(kevin)
    db.session.add(james)
    db.session.add(russell)
    db.session.add(anthony)
    db.session.add(demarcus)
    db.session.add(demar)
    db.session.add(kyrie)
    db.session.add(kawhi)
    db.session.add(giannis)
    db.session.add(jimmy)
    db.session.add(ben)
    db.session.add(luka)
    db.session.add(jayson)
    db.session.add(jaylen)
    db.session.add(klay)
    db.session.add(damian)
    db.session.add(carmelo)
    db.session.add(paul)
    db.session.add(blake)
    db.session.add(andre)
    db.session.add(bradley)
    db.session.add(john)
    db.session.add(khris)
    db.session.add(derrick)
    db.session.add(danny)
    db.session.add(dirk)
    db.session.add(dwight)
    db.session.add(dwyane)
    db.session.add(eric)
    db.session.add(evan)
    db.session.add(gordon)
    db.session.add(greg)
    db.session.add(harrison)
    db.session.add(isaiah)
    db.session.add(jared)
    db.session.add(javale)
    db.session.add(jeremy)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
