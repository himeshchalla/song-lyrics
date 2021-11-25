let error = false
function getEnvVariable(envVar, defaultValue, env_type) {
  var command = run("sh", "-c", `printenv --null ${ envVar } >/tmp/${ envVar }.txt`);
  // note: 'printenv --null' prevents adding line break to value
  print(_getEnv(envVar));
  if (command != 0) return defaultValue;
  return cat(`/tmp/${ envVar }.txt`)
}

// create application user and collection
var dbUser = getEnvVariable('APP_USER', 'songLyricsUser');
var dbPwd = getEnvVariable('APP_PWD', 'songLyricsUser');
var dbName = getEnvVariable('MONGO_INITDB_DATABASE', 'songLyricsService');
var dbCollectionName = getEnvVariable('DB_COLLECTION_NAME', 'collection_sample1');
db = db.getSiblingDB(dbName);
db.createUser({
  'user': dbUser,
  'pwd': dbPwd,
  'roles': [
    {
      'role': 'dbOwner',
      'db': dbName
    }
  ]
});
db.createCollection(dbCollectionName);
print("Database:"+dbName+" and user:"+dbUser+" created successfully.");

// create test application user and collection
var dbTestUser = getEnvVariable('APP_TEST_USER', 'songLyricsTestUser', 'songLyricsTestUser');
var dbTestPwd = getEnvVariable('APP_TEST_PWD', 'songLyricsTestUser', 'songLyricsTestUser');
var dbTestName = getEnvVariable('MONGO_INITDB_DATABASE_TEST', 'songLyricsServiceTest', 'songLyricsServiceTest');
db = db.getSiblingDB(dbTestName);
db.createUser({
  'user': dbTestUser,
  'pwd': dbTestPwd,
  'roles': [
    {
      'role': 'dbOwner',
      'db': dbTestName
    }
  ]
});
db.createCollection(dbCollectionName);
print("Test database:"+dbTestName+" and user:"+dbTestUser+" created successfully.");
print(error)
if (error == false) {
  print('Databases initialization successfully!!!');
  quit(0)
} else {
  print('Error, exiting')
  quit(1)
}