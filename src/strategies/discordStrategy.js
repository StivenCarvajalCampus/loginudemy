const passport = require('passport');
const { Strategy } = require('passport-discord');
const { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } = require('../config');
const getUserCollection = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.discordId);
});

passport.deserializeUser(async (id, done) => {
  try {
    const userCollection = await getUserCollection();
    const user = await userCollection.findOne({ discordId : id });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new Strategy(
    {
      clientID: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
      callbackURL: '/auth/redirect',
      scope: ['identify', 'guilds'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const userCollection = await getUserCollection();
        const existingUser = await userCollection.findOne({ discordId: profile.id });

        if (existingUser) {
          done(null, existingUser);

          
        } else {
          const newUser = {
            discordId: profile.id,
            username: profile.username,
            guilds: profile.guilds,
          };

          await userCollection.insertOne(newUser);
          console.log('New user created:', newUser); 
          done(null, newUser);
        }
      } catch (error) {
        console.error(error);
        return done(error, null);
      }
    }
  )
);

console.log(DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET);
