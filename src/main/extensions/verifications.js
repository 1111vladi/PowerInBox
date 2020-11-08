/*Implement assert methods using chai framework*/
const {chaiHttp, chai, expect} = require('../utilities/base');
chai.use(chaiHttp);


function textToText(actualText, expectedText){
    expect(actualText).to.equals(expectedText);
}

module.exports = {textToText}