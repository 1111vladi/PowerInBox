/*All CRUD methods should be implemented here using mocha framework*/
const {chai} = require('../../main/utilities/base');

function get(paramValues){
    chai.request('http://www.omdbapi.com/?apikey=abb550ba')
        .get(paramValues)
        .end((err, res) => {
            console.log(res.body);
        });
}

module.exports = {get}