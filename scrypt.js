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
			break;
			}

		else {
			i = 0;
			continue;
		}
	}
}
chooseExpenses ()


// let i = 0;
// while (i<2){
// 	i++;

// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');	
// 		if (typeof a === 'string' && typeof a!= null && typeof b === 'string' && typeof b != null && a != '' && b != '' && a.length < 50) {
// 			appData.expenses[a] = b;
// 			console.log ('done');
// 		}
// 		else if (b == null || a == null ){
// 			alert ("Досвидание");
// 			//break block;
// 		 }

// 		else {
// 			i = 0;
// 			continue;
// 		}
// }


appData.moneyPerDay =( appData.budget / 30).toFixed();
alert ("Ежедневный бюджет: " + appData.moneyPerDay);

function checkSavings (){
	if (appData.savings == true) {
		let save = +prompt ("Какова сумма за месяц?"),
			percent = +prompt ("Под какой процент?");
		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);		
	}
}
checkSavings();