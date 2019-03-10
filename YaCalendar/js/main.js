document.addEventListener("DOMContentLoaded", () => {

	const div = document.querySelectorAll(".subtitle");
	const hidden = document.querySelectorAll(".show")

	function AddClass(){
		if (unixDates){
			for (let i = 0; i < unixDates.lastIndexOf(true)+1; i++) {
				div[i].classList.add("done");
				hidden[i].classList.add("hidden");
			}
		}
	}

	let dates = []; //массив для дат
	const date = document.querySelectorAll(".date");
	date.forEach((elem) => dates.push("2019." + elem.textContent.split(".").reverse().join(".") ));

	const d  = new Date();//дата для нормальной работы
	const string = `${d.getFullYear()}.0${d.getMonth()+1}.0${d.getDate()}`;

	const today  = Date.parse(string);

	let unixDates = []; //преобразуем и пушим, ошибки не доджим
	dates.forEach((e) => unixDates.push(Date.parse(e) < today));
	
	AddClass();//работаем
	dates = null;// я хз как подчищать за собой
	console.log(unixDates);
	console.log(today);

});
