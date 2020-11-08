
const {chaiHttp, chai, expect} = require('../../main/utilities/base');
const {get} = require('../../main/extensions/apiActions')
const {textToText} = require('../../main/extensions/verifications')

chai.use(chaiHttp);


describe('/GET Movie By Name and Year ', () => {
    it('it should GET movie - Josh Taylor\'s Prom Date', (done) => {
        chai.request('http://www.omdbapi.com/?apikey=abb550ba')
            .get('&s=prom&y=2019&page=1')
            .end((err, res) => {
                expect(res.body.Search[0].Title).to.equals('Josh Taylor\'s Prom Date');
                done();
            });
    });
});

describe('/GET Movie By Name, Year and Page', () => {
    it('it should GET movie - Josh Taylor\'s Prom Date', (done) => {
        chai.request('http://www.omdbapi.com/?apikey=abb550ba')
            .get('&s=prom&y=2019&page=1')
            .end((err, res) => {
                expect(res.body.Search[1].Title).to.equals('Take Me to Prom');
                done();
            });
    });
});


