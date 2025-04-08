import*as data from"../helpers/default_data.json"
describe('Проверка авторизации', function () {
    beforeEach('Начало теста', function () {
        cy.visit('/'); // открыть сайт
          });
    afterEach('Конец теста', function () {
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие и видимость кнопки крестик
            cy.get('#messageHeader').should('be.visible'); // текст сообщения виден пользователю
           });    

    it('Верный логин и верный пароль', function () {
        cy.get('#mail').type(data.login); // найти поле и ввести верный логин
        cy.get('#pass').type(data.password); // найти поле и ввести верный пароль
        cy.get('#loginButton').click(); // найти кнопку "войти" и нажать
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // после авторизации проверить текст сообщения 
     })
     it('Восстановление пароля', function () {
        cy.get('#forgotEmailButton').click(); // найти и нажать кнопку "Забыли пароль?"
        cy.get('#mailForgot').type(data.login);// Найти поле и ввести емейл
        cy.get('#restoreEmailButton').click(); // найти и нажать кнопку "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');// текст сообщения
    })
    it('Верный логин и неверный пароль', function () {
        cy.get('#mail').type(data.login); // найти поле и ввести верный логин
        cy.get('#pass').type('iLoveqastudio777'); // найти поле и ввести неверный пароль
        cy.get('#loginButton').click(); // найти кнопку "войти" и нажать
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст сообщения
    })
    it('Неверный логин и верный пароль', function () {
        cy.get('#mail').type('german@dolnikov777.ru'); // найти поле и ввести неверный логин
        cy.get('#pass').type(data.password); // найти поле и ввести верный пароль
        cy.get('#loginButton').click(); // найти кнопку "войти" и нажать
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// текст сообщения
    })
    it('Валидация наличия @', function () {
        cy.get('#mail').type('germandolnikov.ru'); // найти поле и ввести логин без @
        cy.get('#pass').type(data.password); // найти поле и ввести верный пароль
        cy.get('#loginButton').click(); // найти кнопку "войти" и нажать
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // текст сообщения
    })
    it('Приведение к строчным буквам в логине', function () {
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // найти поле и ввести верный логин верхним и нижним регистром
        cy.get('#pass').type(data.password); // найти поле и ввести верный пароль
        cy.get('#loginButton').click(); // найти кнопку "войти" и нажать
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // после авторизации проверить текст сообщения 
    })
 })