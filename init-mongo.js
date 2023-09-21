// this is important for mongodb
db = db.getSiblingDB('admin');
db.auth('admindb', 'admin123db');

db = db.getSiblingDB('personalRecord');
db.createUser({
  user: 'personalRecordUserNameWhichIssecret',
  pwd: 'personalRecordUserPassWhichIssecret',
  roles: [{
    role: 'readWrite',
    db: 'personalRecord',
  }],
});
