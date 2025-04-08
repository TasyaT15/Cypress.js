describe('Проверка покупки нового аватара', function () {  
    it('e2e тест на покупку нового аватара', function () { 
         cy.visit('https://pokemonbattle.ru/'); //открыть сайт
         cy.get('#k_email').type('USER_LOGIN'); //найти поле и ввести верный логин
         cy.get('#k_password').type('USER_PASSWORD'); // найти поле и ввести верный пароль
         cy.get('.MuiButton-root').click(); // найти и нажать кнопку "войти"
         cy.wait(2000);
         cy.get('.header_card_trainer').click(); // найти и нажать кнопку перехода на страницу своего тренера
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5)').click(); // найти и нажать кнопку "смена аватара"
         cy.wait(2000);
         cy.get('.available > button').first().click(); // найти и нажать кнопку "купить" у первого  доступного аватара
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4242424242424242'); //найти поле и ввести номер карты
         cy.get(':nth-child(1) > .style_1_base_input').type('1225'); //найти поле и ввести срок действия карты
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // найти поле и ввести CVV код
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Ivan Ivanov'); // найти поле и ввести имя
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); //найти и нажать кнопку "оплатить"
         cy.wait(2000);
         cy.get('.style_1_base_input').type('56456'); //найти поле и ввести код подтверждения покупки
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нйти и нажать кнопку "оплатить"
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); // текст сообщения
         cy.get('.payment_status_top_title').should('be.visible'); // текст сообщения виден пользователю
         
     });
 });
