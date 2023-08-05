///<reference types="cypress"/>

describe("Handling Tables",()=>
{
    beforeEach('Login opencart',()=>
        {
            cy.visit("https://demo.opencart.com/admin/")
            cy.get("#input-username").type("demo")
            cy.get("#input-password").type("demo")
            cy.get("[type='submit']").click()
            cy.get(".btn-close").click()
            cy.url().should('include','dashboard')
            cy.get("#menu>li:nth-child(6)").click()
            cy.get("#menu>li:nth-child(6)>ul>li:nth-child(1)>a").click()
        })

    it("check no of rows and columns",()=>
    {
       cy.get("table[class='table table-bordered table-hover']>tbody>tr").should("have.length","10")
       cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.length","7")
    })
    it("check value in specific row and column",()=>
    {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").should("have.text","xvrt@test.com")
    })
    it("Print rows and col values in first page",()=>
    {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($rows,index,$row_list)=>
        {
            cy.wrap($rows).within(()=>
            {
                cy.log("Row number:"+index)
                cy.get("td").each(($colns,index,$col_list)=>
                {
                    let val=$colns.text()
                    cy.log("Value:"+val)
                })
            }
            )
        })
    })
    it.only("Pagination",()=>
    {
        cy.get("#form-customer > div.row > div.col-sm-6.text-end").then((txt)=>
        {
           let pages=txt.text()
           let p=pages.substring(pages.indexOf("(")+1,pages.indexOf("P")-1)
           cy.log("Pages:"+p)
           let count = 3
          let pg=4
           for(let i=1;i<=count;i++)
           {
               
                if(count>1 && i!=2)
                {
                    cy.log("Page:"+i)
                    
                    cy.get("ul[class='pagination'] > li:nth-child("+pg+")").click()
                    pg++
                }
                if(i==1)
                {
                    cy.get("ul[class='pagination'] > li:nth-child(2)").click()
                }
                cy.wait(3000)
                cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row,index,$rows)=>
                {
                    cy.wrap($row).within(()=>
                    {
                        cy.log("Row no:"+index)
                    cy.get("td:nth-child(2)").each(($name_col,index,names)=>
                    {
                        let name=$name_col.text()
                        cy.log("Names:"+name)
                    })
                })
                })
                
        
                
           }
        })
    })
})