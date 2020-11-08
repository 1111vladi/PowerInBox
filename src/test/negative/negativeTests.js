
const {chaiHttp, chai, expect} = require('../../main/utilities/base');



chai.use(chaiHttp);


describe('/GET Movies By Name Using Numbers ', () => {
    it('it should GET Movies', (done) => {
        chai.request('http://www.omdbapi.com/?apikey=abb550ba')
            .get('&s=1516')
            .end((err, res) => {
                expect(res.body.Search[0].Title).to.equals('Josh Taylor\'s Prom Date');
                done();
            });
    });
});

describe('/GET Movies By Name Using White Space ', () => {
    it('it should GET Movies', (done) => {
        chai.request('http://www.omdbapi.com/?apikey=abb550ba')
            .get('&s=   ')
            .end((err, res) => {
                expect(res.body.Search[0].Title).to.equals('Josh Taylor\'s Prom Date');
                done();
            });
    });
});