/// <reference types="cypress" />

const baseUrl = 'https://qa.leecage.io';
function login(){
  cy.visit("https://admin-qa.leemo.io/Account/Login?ProductName=Leecage")
  //fixture
cy.wait(2000)
cy.get('#email').type('sahilsharmatpss@gmail.com')   
cy.get('#password').type('Sainath@786')
cy.wait(2000)
cy.get('.btn-primary').click()
   
 }
 function sideBarClick (){ 
  //cy.origin(baseUrl, {} ,() => {
              cy.get(".menu-toggle").click ();
              cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(3) li:nth-child(1) > a:nth-child(1)").click()
                
               // .last().should('', 'img src="/images/menu-toggle.png"').click()
          //  });
 }
 function sideBarMilestone ( ){
 // cy.origin(baseUrl, {} ,() => {
              cy.get(".menu-toggle").click ();
              cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(3) li:nth-child(3) > a:nth-child(1)").click()
                
               // .last().should('', 'img src="/images/menu-toggle.png"').click()
           // });
 }
 function sideBarResource ( ) {
 // cy.origin(baseUrl, {} ,() => {
              cy.get(".menu-toggle").click ();
              cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(3) li:nth-child(4) > a:nth-child(1)").click()
                
               // .last().should('', 'img src="/images/menu-toggle.png"').click()
         //   });
}
 function sideBarLoggedVsBilling ( ){
  //cy.origin(baseUrl, {} ,() => {
              cy.get(".menu-toggle").click ();
              cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(3) li:nth-child(5) > a:nth-child(1)").click()
                
               // .last().should('', 'img src="/images/menu-toggle.png"').click()
           // });
 }

 function sideBarDailybilling ( ){
  //cy.origin(baseUrl, {} ,() => {
               cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(3) li:nth-child(6) > a:nth-child(1)").click()

               // .last().should('', 'img src="/images/menu-toggle.png"').click()
             //});
                                    
}
function sideBarEmailTriggers ( ){
  //cy.origin(baseUrl, {} ,() => {
              cy.get(".menu-toggle").click ();
              cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(3) li:nth-child(7) > a:nth-child(1)").click()

               // .last().should('', 'img src="/images/menu-toggle.png"').click() 
            // });
             
}
function sideBarNoMilestone ( ){
  //cy.origin(baseUrl, {} ,() => {
              cy.get(".menu-toggle").click ();    
              cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(3) li:nth-child(8) > a:nth-child(1)").click()

               // .last().should('', 'img src="/images/menu-toggle.png"').click()
            // });
             
}

function sideBarCustomSettings ( ){
  //cy.origin(baseUrl, {} ,() => {
              cy.get(".menu-toggle").click ();
              cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(3) li:nth-child(9) > a:nth-child(1)").click()

               // .last().should('', 'img src="/images/menu-toggle.png"').click()
            // });
             
}
function sideBarResourcePlanning ( ){
  //cy.origin(baseUrl, {} ,() => {
              cy.get(".menu-toggle").
              click ();
              cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(3) li:nth-child(10) > a:nth-child(1)").click()

               // .last().should('', 'img src="/images/menu-toggle.png"').click()
            // });
             
}
function sideBarTeamPlanning ( ){
  cy.origin(baseUrl, {} ,() => {
              cy.get(".menu-toggle").click ();
              cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(3) li:nth-child(11) > a:nth-child(1)").click()
  
               // .last().should('', 'img src="/images/menu-toggle.png"').click()
             });
            }
function sideBarAdminDashboard ( ){
  cy.origin(baseUrl, {} ,() => {
              cy.get(".menu-toggle").click ();
              cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(6) li:nth-child(1) > a:nth-child(1)").click()
            
               // .last().should('', 'img src="/images/menu-toggle.png"').click()
              });

                        }

function sideBarRevenueAnalysis ( ){
  cy.origin(baseUrl, {} ,() => {
               cy.get(".menu-toggle").click ();
               cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(6) li:nth-child(2) > a:nth-child(1)").click()
                        
                 // .last().should('', 'img src="/images/menu-toggle.png"').click()
                });
                          }
function sideBarProjectProgress ( ){
   cy.origin(baseUrl, {} ,() => {
               cy.get(".menu-toggle").click ();
               //cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(3) > li:nth-child(2)").click()
               cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(3) > li:nth-child(9)").click()  
               // .last().should('', 'img src="/images/menu-toggle.png"').click()
               });
                         }
function sideBarBilledandlogged ( ){
   cy.origin(baseUrl, {} ,() => {
              cy.get(".menu-toggle").click ();
                                                  
              cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(6) li:nth-child(3) > a:nth-child(1)").click()  
                // .last().should('', 'img src="/images/menu-toggle.png"').click()
                });}
function sideBarUpworkprofile ( ){
   cy.origin(baseUrl, {} ,() => {
               cy.get(".menu-toggle").click ();
                                                              
               cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(9) li:nth-child(1) > a:nth-child(1)").click()  
                  // .last().should('', 'img src="/images/menu-toggle.png"').click()
                   });}
function sideBarTeams ( ){
   cy.origin(baseUrl, {} ,() => {
               cy.get(".menu-toggle").click ();
                                                                          
               cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(9) li:nth-child(2) > a:nth-child(1)").click()  
                  // .last().should('', 'img src="/images/menu-toggle.png"').click()
                    });}
function sideBarDepartment ( ){
   cy.origin(baseUrl, {} ,() => {
              cy.get(".menu-toggle").click ();
                                                                                      
              cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(9) li:nth-child(3) > a:nth-child(1)").click()  
                  // .last().should('', 'img src="/images/menu-toggle.png"').click()
                    });}
function sideBarResources ( ){
   cy.origin(baseUrl, {} ,() => {
              cy.get(".menu-toggle").click ();
                                                                                                  
              cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(9) li:nth-child(4) > a:nth-child(1)").click()  
                  // .last().should('', 'img src="/images/menu-toggle.png"').click()
                    });}     
function sideBarTeamResources ( ){
   cy.origin(baseUrl, {} ,() => {
              cy.get(".menu-toggle").click ();
                                                                                                              
              cy.get("header.hero-header.d-flex.align-items-center.justify-content-between:nth-child(1) div.primary-nav.d-flex div.sidenav.active ul:nth-child(9) li:nth-child(5) > a:nth-child(1)").click()  
                  // .last().should('', 'img src="/images/menu-toggle.png"').click()
                    });}                                              
 describe('Login to the first page of Leecage ', function () {

  it('Login ', function () {
    login() 
  })

  it('Login  after  Dashboard', function () {
    
    login() 
    cy.wait(2000)
    sideBarClick()
  })

  it('dashboard  to  Milestone', function () {
    login() 
    cy.wait(2000)
    sideBarMilestone()
 })
  it('dashboard  to Resource ', function () {
    login() 
   cy.wait(2000)      
    sideBarResource()
  })
  it('dashboard  to LoggedVsBilling ', function () {
    login() 
    cy.wait(2000)
    sideBarLoggedVsBilling()
  })
  it('dashboard to Daily Billing' , function () {
   login() 
   cy.wait(2000)
   sideBarDailybilling()
             })    
  it('dashboard to EmailTriggers' , function () {
    login() 
    cy.wait(2000)
    sideBarEmailTriggers()
         })
  it('dashboard to No Milestone' , function () {
      login() 
      cy.wait(2000)
      sideBarNoMilestone()
      })
  it('dashboard to Custom Settings' , function () {
    login() 
    cy.wait(2000)
    sideBarCustomSettings()
    })
  })
  it('dashboard to Resource Planning' , function () {
    login() 
    cy.wait(2000)
    sideBarResourcePlanning()
    })
  it('dashboard to Team Planning' , function () {
      login() 
      cy.wait(2000)
      sideBarTeamPlanning()
      })
  it('dashboard to Admin Dashboard' , function () {
        login()  
        cy.wait(2000)
        sideBarAdminDashboard()
        })
  it('dashboard to Revenue Analysis' , function () {
          login() 
          cy.wait(2000)
          sideBarRevenueAnalysis()
          })
   it('dasboard to Project progress' , function () {
     login() 
      cy.wait(2000)
       sideBarProjectProgress()
          })
   it('dasboard to Billed and logged ' , function () {
            login() 
             cy.wait(2000)
              sideBarBilledandlogged()
                 })
   it('dasboard to Upwork Profile ' , function () {
            login() 
            cy.wait(2000)
            sideBarUpworkprofile()
                })
   it('dasboard to Teams ' , function () {
              login() 
              cy.wait(2000)
              sideBarTeams()
              })     
  it('dasboard to Department ' , function () {
          login() 
          cy.wait(2000)
                sideBarDepartment()
                })                   
  it('dasboard to Resources ' , function () {
                  login() 
                  cy.wait(2000)
                  sideBarResources()
                  })    
  it('dasboard to Team Resources ' , function () {
                    login() 
                    cy.wait(2000)
                    sideBarTeamResources()
                    })      