'use strict';


let money,	time ;

function start (){
	money = prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц?", '');
	}
}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};
 
function chooseExpenses () {
	for (let i = 0; i < 2; i++){
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');	

		if (typeof a === 'string' && typeof a!= null && typeof b === 'string' && typeof b != null && a != '' && b != '' && a.length < 50) {
			appData.expenses[a] = b;
			console.log ('done');
		}
		else if (b == null || a == null ){
			alert ("Досвидание");
			location.reload(true);

		}

		else {
			i = 0;
			continue;
		}
	}
}
chooseExpenses ()

// Расчет дневного бюджета
function detectDayBudget() {
	appData.moneyPerDay =( appData.budget / 30).toFixed();
alert ("Ежедневный бюджет: " + appData.moneyPerDay);

}
detectDayBudget()


function detectLevel() {                                                // Расчет уровня достатка
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Ошибочка...!");
    }
}
detectLevel();

function checkSavings (){
	if (appData.savings == true) {
		let save = +prompt ("Какова сумма за месяц?"),
			percent = +prompt ("Под какой процент?");
		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);		
	}
}
checkSavings();

   // Функция для определения необязательных расходов

function chooseOptExpenses() {                          
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();
