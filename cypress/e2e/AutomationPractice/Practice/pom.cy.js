
import {pom} from '../Pages/pom';

const pompage = new pom();

describe('pom',()=>{
    it('pom',()=>{
        pompage.openUrl();
        pompage.validatelogo();
    })
})