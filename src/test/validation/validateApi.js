
const {chaiHttp, chai, expect} = require('../../main/utilities/base');


chai.use(chaiHttp);

describe('/GET Status Code', () => {
    it('it should GET correct status code 200', (done) => {
        chai.request('http://www.omdbapi.com/?apikey=abb550ba')
            .get('')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('/GET Status Code', () => {
    it('it should GET wrong status code - 203', (done) => {
        chai.request('http://www.omdbapi.com/?apikey=abb550ba')
            .get('')
            .end((err, res) => {
                expect(res).to.have.status(203);
                done();
            });
    });
});



