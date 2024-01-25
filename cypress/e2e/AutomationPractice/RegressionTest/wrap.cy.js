const getname=()=>{
return "mamatha";
}

cy.wrap({name:getname}).invoke('name').should('eq',"mamatha");