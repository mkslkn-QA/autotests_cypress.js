
describe('Авторизация qa studio', function () {
    
    it('Валидный логин и пароль', function () {
        cy.visit('URL');
        cy.get('#loginButton').should('be.disabled'); // Проверяем, что кнопка не активна
        cy.get('#mail').type('email@mail.ru'); // Находим инпут почты и вводим правильное значение
        cy.get('#pass').type('password'); //Находим инпут почты и вводим правильное значение
        cy.get('#loginButton').click(); //Клик по кнопке Войти
        cy.contains('Авторизация прошла успешно').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
        
    it('Логика восстановления пароля', function () {
        cy.visit('URL');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('email@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Неправильный логин и пароль', function () {
        cy.visit('URL');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#mail').type('email@bmail.ru'); 
        cy.get('#pass').type('password'); 
        cy.get('#loginButton').click(); 
        cy.contains('Такого логина или пароля нет').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Неправильный логин и верный пароль', function () {
        cy.visit('URL');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#mail').type('email@bmail.ru'); 
        cy.get('#pass').type('password'); 
        cy.get('#loginButton').click(); 
        cy.contains('Такого логина или пароля нет').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Негативный тест валидации', function () {
        cy.visit('URL');
        cy.get('#loginButton').should('be.disabled'); 
        cy.get('#mail').type('notvalidemail.ru'); 
        cy.get('#pass').type('password'); 
        cy.get('#loginButton').click(); 
        cy.contains('Нужно исправить проблему валидации').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('URL');
        cy.get('#loginButton').should('be.disabled'); // Проверяем, что кнопка не активна
        cy.get('#mail').type('EmaIl@mail.ru'); // Находим инпут почты и вводим правильное значение
        cy.get('#pass').type('password'); //Находим инпут почты и вводим правильное значение
        cy.get('#loginButton').click(); //Клик по кнопке Войти
        cy.contains('Авторизация прошла успешно').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })


})