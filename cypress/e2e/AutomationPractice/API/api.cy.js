describe("API CALL", ()=>{

it("get call", ()=>{

    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').its('status').should('equal',200);
})

it("post call", ()=>{
    cy.request({
         method : 'POST',
         url : 'https://jsonplaceholder.typicode.com/posts',
         body : {
                title : "Test post",
                body : " This is post call",
                userId : 2
         }
    }).its('status').should('equal',201);
})

it("PUT call", ()=>{
    cy.request({
        method:'PUT',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        body :{
                title : "Test put updating",
                body : " This is post call",
                userId : 2,
                id:2
        }
    }).its('status').should('equal',200)
})

it("DELETE call", ()=>{
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').its('status').should('equal',200)
})

})