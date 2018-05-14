const
    //import our module here as well for easier use
    spotify = require('spotify-module')
    express = require('express')
    bodyParser = require('body-parser'),
    path = require('path')
    router = express.Router()

console.log("The dir: ", __dirname)

module.exports = () => {
    let authToken  = '';

    router.get('/search', (req, res) => {
        console.log("Im inside /search");
        const {artist = "Taylor"} = req.query

        spotify.search_artist(artist)
            .then(result => {
                res.json(result)
            })            
    })

    //EVERYTHING BELOW IS FROM SPOTIFY AUTH
    //source:https://github.com/spotify/web-api-auth-examples/tree/master/authorization_code

    router.use(bodyParser.json())
    router.use(express.static(path.join(__dirname, '..', '/../dist')))
    //app.use(require('./api/routes')())
    console.log("the dir name: ", path.join(__dirname, '..', '/../dist/'));
    const request = require('request'); // "Request" library
    const querystring = require('querystring');
    const cookieParser = require('cookie-parser');

    const client_id = 'b9da37f0a52f4585814f21c438990f3b'; // Your client id
    const client_secret = '3acf295acf9543869cc0fed70f674e03'; // Your secret
    const redirect_uri = 'http://localhost:8080/callback'; // Your redirect uri

    /**
     * Generates a random string containing numbers and letters
     * @param  {number} length The length of the string
     * @return {string} The generated string
     */
    let generateRandomString = function (length) {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    let stateKey = 'spotify_auth_state';

    router.use(express.static(__dirname + '../../dist'))
        .use(cookieParser());

    router.get('/login', function (req, res) {

        let state = generateRandomString(16);
        res.cookie(stateKey, state);

        // your application requests authorization
        let scope = 'user-read-private user-read-email';
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
        let code = req.query.code || null;
        let state = req.query.state || null;
        let storedState = req.cookies ? req.cookies[stateKey] : null;

        if (state === null || state !== storedState) {
            res.redirect('/#' +
                querystring.stringify({
                    error: 'state_mismatch'
                }));
        } else {
            res.clearCookie(stateKey);
            let authOptions = {
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

                    let access_token = body.access_token,
                        refresh_token = body.refresh_token;
                    authToken = access_token;               //I SET THE AUTH TOKEN let HERE
                    let options = {
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
        let refresh_token = req.query.refresh_token;
        let authOptions = {
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
                let access_token = body.access_token;
                res.send({
                    'access_token': access_token
                });
            }
        });
    });
    return router;
}
