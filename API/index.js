const Frisbee = require('frisbee');
const Config = require('./config.json');

console.log(Config.PostContent);

module.exports = async function (context, req) {
    let content = undefined;
    let response = undefined;

    if ( req.method === 'POST' ){
        content = Config.PostContent;
    }else{
        content = Config.GetContent;
    }
    
    const api = new Frisbee({
        baseURI: Config.baseURI,
        headers: {
            'Authorization': Config.Authorization,
            'Content-Type': content
        }
    });
    
    if ( req.method === 'POST' ){
        response = await api.post('/service/users?', { body: req.body })
    }else{
        const query = "name_id=" + req.query.email

        response = await api.get(('/service/users?' + query))
    }

    context.res = {
        status: response.status,
        body: ( "HTTP: " +  response.status + ' - ' + response.statusText + '\n' + response.body)
    };
};

