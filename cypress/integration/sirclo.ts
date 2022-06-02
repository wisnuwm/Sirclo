import {PageFactory} from "./pom"

let pom = new PageFactory()
let URL = 'https://qa-interview.srcli.xyz'

//scenario /get
it('Get', () => {
    pom.navigate(URL)
    pom.assertWelcome()
})

//scenario /login
it('Success login', () => {
    pom.navigate(URL+'/login')
    pom.login('root','root123')
    pom.assertWelcome()
})

//scenario failed /login
it('Failed login', () => {
    pom.navigate(URL+'/login')
    pom.login('x','x')
    pom.assertFailLogin()
})

//scenario after login, go to /login should navigate to /get
it('Go to get after login', () => {
    pom.navigate(URL+'/login')
    pom.login('root','root123')
    pom.assertWelcome()
    pom.navigate(URL+'/login')
    pom.assertWelcome()
})

//scenario after login, go to /logout
it('Logout', () => {
    pom.navigate(URL+'/login')
    pom.login('root','root123')
    pom.assertWelcome()
    cy.request(URL+'/logout')
})

//scenario get data without login
it('Get data without login', () => {
    pom.navigate(URL+'/data')
    pom.assertLoginPage()
})

//scenario get data without login
it('Get data with login', () => {
    pom.navigate(URL+'/login')
    pom.login('root','root123')
    pom.assertWelcome()
    pom.navigate(URL+'/data')
    pom.assertGetData()
})

//scenario using filter timestamp
it('Get data with login', () => {
    pom.navigate(URL+'/login')
    pom.login('root','root123')
    pom.assertWelcome()
    pom.navigate(URL+'/data')
    pom.assertGetData()
    pom.timeStamp('2018-07-10','2018-07-10')
    pom.assertGetData()
})