it("Basic Auth Handle",()=>{
    cypress.visit("https://authenticationtest.com/HTTPAuth/"),{
        auth : {
            username : 'user',
            password : 'pass'
        }
    }
    
})