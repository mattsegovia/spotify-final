const
    //import our module here as well for easier use
    spotify = require(`${__dirname}/../../src/spotify-module`);
    
    express = require('express')
    bodyParser = require('body-parser'),
    path = require('path')

    router = express.Router();

console.log("The dir: ", __dirname)

module.exports = () => {
    let authToken  = '';

    //probably add more inside the .get
    router.get('/search', (req, res) => {
        console.log("Im inside /search");
        const {artist = "Taylor"} = req.query

        spotify.search_artist(artist)
            .then(result => {
                res.json(result)
            })
            
    })

    //For the inital load up 
    router.get('/auth', (req, res) => {
        //console.log("Im going to login! ");
        res.json({ "Test": "Howdy" });

    })



    //EVERYTHING BELOW IS FROM SPOTIFY AUTH

    router.use(bodyParser.json())
    router.use(express.static(path.join(__dirname, '..', '/../dist')))
    //app.use(require('./api/routes')())
    console.log("the dir name: ", path.join(__dirname, '..', '/../dist/'));
    var request = require('request'); // "Request" library
    var querystring = require('querystring');
    var cookieParser = require('cookie-parser');

    var client_id = 'b9da37f0a52f4585814f21c438990f3b'; // Your client id
    var client_secret = '3acf295acf9543869cc0fed70f674e03'; // Your secret
    var redirect_uri = 'http://localhost:8080/callback'; // Your redirect uri

    /**
     * Generates a random string containing numbers and letters
     * @param  {number} length The length of the string
     * @return {string} The generated string
     */
    var generateRandomString = function (length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    var stateKey = 'spotify_auth_state';


    router.use(express.static(__dirname + '../../dist'))
        .use(cookieParser());

    router.get('/login', function (req, res) {

        var state = generateRandomString(16);
        res.cookie(stateKey, state);

        // your application requests authorization
        var scope = 'user-read-private user-read-email';
        res.redirect('https://accounts.spotify.com/authorize?' +
            querystring.stringify({
                response_type: 'code',
                client_id: client_id,
                scope: scope,
                redirect_uri: redirect_uri,
                state: state
            }));

    });

    router.get('/callback', function (req, res) {

        // your application requests refresh and access tokens
        // after checking the state parameter

        var code = req.query.code || null;
        var state = req.query.state || null;
        var storedState = req.cookies ? req.cookies[stateKey] : null;

        if (state === null || state !== storedState) {
            res.redirect('/#' +
                querystring.stringify({
                    error: 'state_mismatch'
                }));
        } else {
            res.clearCookie(stateKey);
            var authOptions = {
                url: 'https://accounts.spotify.com/api/token',
                form: {
                    code: code,
                    redirect_uri: redirect_uri,
                    grant_type: 'authorization_code'
                },
                headers: {
                    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
                },
                json: true
            };

            request.post(authOptions, function (error, response, body) {
                if (!error && response.statusCode === 200) {

                    var access_token = body.access_token,
                        refresh_token = body.refresh_token;
                    authToken = access_token;               //I SET THE AUTH TOKEN VAR HERE
                    var options = {
                        url: 'https://api.spotify.com/v1/me',
                        headers: { 'Authorization': 'Bearer ' + access_token },
                        json: true
                    };

                    // use the access token to access the Spotify Web API
                    request.get(options, function (error, response, body) {
                        console.log(body);
                    });

                    // we can also pass the token to the browser to make requests from there
                    res.redirect('/#' +
                        querystring.stringify({
                            access_token: access_token,
                            refresh_token: refresh_token
                        }));
                } else {
                    res.redirect('/#' +
                        querystring.stringify({
                            error: 'invalid_token'
                        }));
                }
            });
        }

    });

    router.get('/refresh_token', function (req, res) {

        // requesting access token from refresh token
        var refresh_token = req.query.refresh_token;
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
            form: {
                grant_type: 'refresh_token',
                refresh_token: refresh_token
            },
            json: true
        };

        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                var access_token = body.access_token;
                res.send({
                    'access_token': access_token
                });
            }
        });
    });


    return router;

}
