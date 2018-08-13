from werkzeug.security import safe_str_cmp
from models import User

def authenticate(username, password):
    user = User.find_by_username(username, password)
    if user and safe_str_cmp(user.password, password):
        return user

def identity(payload):
    user_id = payload['identity']
    return userid_table.get(user_id, None)