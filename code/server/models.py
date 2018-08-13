from db import db


class User(db.Model):
  __tablename__ = "user"
  id = db.Column(db.Integer, primary_key=True)
  firstName = db.Column(db.Text, unique=True)
  lastName = db.Column(db.Text, unique=True)
  username = db.Column(db.String, unique=True)
  password = db.Column(db.String, unique=True)

  def __init__(self):
    print(self)

  def find_by_username(username = '', password = ''):
    user = db.session.query(User).filter(User.username == username).first()
    return user
