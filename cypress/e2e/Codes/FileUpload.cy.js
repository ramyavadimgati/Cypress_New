///<reference types="cypress"/>
import 'cypress-file-upload'
import 'cypress-iframe'
describe("FileUpload Suite",()=>
{
    it("SingleFile upload",()=>
    {
       cy.visit("https://the-internet.herokuapp.com/upload")
       cy.get("#file-upload").attachFile("Test1.txt")
       cy.get("#file-submit").click()
       cy.get(".example>h3").should('have.text','File Uploaded!')
    })
    it("RenameFile Suite",()=>
    {
       cy.visit("https://the-internet.herokuapp.com/upload")
       cy.get("#file-upload").attachFile({filePath:"Test1.txt",fileName:"Newfile.txt"})
       cy.get("#file-submit").click()
       cy.get(".example>h3").should('have.text','File Uploaded!')
    })
    it("DragandDrop",()=>
    {
       cy.visit("https://the-internet.herokuapp.com/upload")
       cy.get("#drag-drop-upload").attachFile("Test1.txt",{subjectType:"drag-n-drop"})
       cy.wait(3000)
       cy.get("#drag-drop-upload").contains("Test1")
    })
    it("Multiplefile upload",()=>
    {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(["Test1.txt","Test2.txt"])
        cy.get("#fileList").should('contain','Test1').and('contain','Test2')
    })
    it.only("shadowDOM",()=>
    {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.wait(3000)
      //  cy.get('#fileUploaddef6').shadow().find('button[smart-id="button"]').attachFile("Test1.txt")

        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile("Test1.txt")
        cy.get(".smart-item-name",{includeShadowDom:true}).should('have.text','Test1.txt')


    })

})