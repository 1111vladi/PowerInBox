
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

const xml2js = require('xml2js');
const fs = require('fs');
const parser = new xml2js.Parser({ attrkey: "ATTR" });

module.exports = {chai, chaiHttp, expect, xml2js, fs, parser}