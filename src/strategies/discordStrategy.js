const { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET} = require("../config");
const passport = require('passport')
const {Strategy} = require('passport-discord')

passport.serializeUser((user, done)=>{
    done(null, user.id)
});
passport.deserializeUser((user, done)=>{
    done(null,user)
});

passport.use(new Strategy({
    clientID: DISCORD_CLIENT_ID,
    clientSecret:DISCORD_CLIENT_SECRET,
    callbackURL:'/auth/redirect',
    scope:['identify', 'guilds'],
    
},
async (accesToken,refreshToken,profile,done)=>{

    try {
        const newUser = new User({
            discordId: profile.id,
            username: profile.username,
            guilds: profile.guilds
        })
        await newUser.save()
        done (null, newUser)
    } catch (error) {
        console.error(error);
        return done(error, null);

        
    }
}))

console.log(
    DISCORD_CLIENT_ID,
    DISCORD_CLIENT_SECRET
)