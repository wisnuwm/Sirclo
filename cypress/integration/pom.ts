import { JsxEmit } from "typescript"

export class PageFactory{
    //element
    txt_username = '[type="text"]'
    txt_password = '[type="password"]'
    btn_login = '[type="submit"]'
    txt_start = '[name="start"]'
    txt_end = '[name="end"]'
    btn_submit = '[type="submit"]'
    lbl_wrongPass = 'The password or username is wrong'
    lbl_welcome = 'Welcome!'
    lbl_pemasukan = 'body > :nth-child(1)'
    lbl_pengeluaran = 'body > :nth-child(3)'
    tbl_pemasukan = 'body > :nth-child(2)'
    tbl_pengeluaran = 'body > :nth-child(4)'
    //navigate to url
    navigate(url : string){
        cy.visit(url)
    }
    login(username : string, password : string){
        cy.get(this.txt_username).type(username)
        cy.get(this.txt_password).type(password)
        cy.get(this.btn_login).click()
    }
    timeStamp(start : string, end : string){
        cy.get(this.txt_start).type(start)
        cy.get(this.txt_end).type(end)
        cy.get(this.btn_submit).click()
    }
    assertWelcome(){
        cy.contains(this.lbl_welcome).should('be.visible')
    }
    assertFailLogin(){
        cy.contains(this.lbl_wrongPass).should('be.visible')
    }
    assertLoginPage(){
        cy.get(this.txt_username).should('be.visible')
        cy.get(this.txt_password).should('be.visible')
        cy.get(this.btn_login).should('be.visible')
    }
    assertGetData(){
        cy.get(this.lbl_pemasukan).should('be.visible')
        cy.get(this.lbl_pengeluaran).should('be.visible')
        cy.get(this.tbl_pemasukan).should('be.visible')
        cy.get(this.tbl_pengeluaran).should('be.visible')
        cy.get(this.txt_start).should('be.visible')
        cy.get(this.txt_end).should('be.visible')
    }
    
}