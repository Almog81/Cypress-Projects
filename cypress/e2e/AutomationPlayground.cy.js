/// <reference types="cypress" /> 

describe('Automation Playground', () => {
  beforeEach('Start Scenario', ()=> {
    cy.visit('http://www.uitestingplayground.com')
  })
  it('Test01: Dynamic ID', () => {
    cy.contains('Dynamic ID').click()
    cy.get('.btn-primary').should('have.text', 'Button with Dynamic ID')
  })

  it('Test02: Class Attribute', () => {
    cy.contains('Class Attribute').click()
    cy.get('.btn-primary').click()
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Primary button pressed')
    });
  })

  it('Test03: Hidden Layers', () => {
    cy.contains('Hidden Layers').click()
    cy.get('#greenButton').click()
  })
})