
describe('Автотест транзакции', function() {

	it('Зайти на сайт', function() {
		cy.visit('URL');
		cy.get(':nth-child(1) > .auth__input').type('email@yandex.ru');
		cy.get('#password').type('password');
		cy.get('.auth__button').click();
		cy.intercept('POST', 'trainers/auth').as('http-request');
		cy.wait('@http-request');
		cy.get('.header__btns > [href="/shop"]').click();
		cy.get(':nth-child(12) > .shop__button').click();
		cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
		cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
		cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
		cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('cardholder name');
		cy.get('.pay-btn').click();
		cy.wait(500);
		cy.get('#cardnumber').type('56456');
		cy.get('.payment__submit-button').click();
		cy.contains('Покупка прошла успешно').should('be.visible');
		cy.get('.payment__adv').should('be.visible');
	})

})