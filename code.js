const arrOfMonthes = Array.from(document.getElementsByClassName("month"));
const inputYear = document.getElementById("year_choose");
const buttonForm = document.getElementById("button_form")
const monthList = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
]
const daysOfWeek = [
    "Пн",
    "Вт",
    "Ср",
    "Чт",
    "Пт",
    "Сб",
    "Вс",
];
const season = ["winter", "spring", "summer", "autumn"]

class Month {
    constructor(monthes) {
        this.monthes = monthes;
        this.year = 2024;
    }

    fillDays() {
        this.monthes.forEach((element, index) => {
            let days = new Date(this.year, index + 1, 0).getDate();
            let dayOfWeek = new Date(this.year, index).getDay();
            let divCounter = 1;

            if (dayOfWeek == 0) {
                dayOfWeek = 6;
            } else {
                dayOfWeek--;
            }

            element.append(document.createElement("div"));
            element.lastChild.textContent = monthList[index];
            if (index > 1 && index < 5) {
                element.lastChild.classList.add(season[1]);
            } else if (index > 4 && index < 8) {
                element.lastChild.classList.add(season[2]);
            } else if (index > 7 && index < 11) {
                element.lastChild.classList.add(season[3]);
            } else {
                element.lastChild.classList.add(season[0]);
            }

            for (let i = 0; i < 7; i++) {
                element.append(document.createElement("div"));
                element.lastChild.textContent = daysOfWeek[i];
                divCounter++;
            }

            for (let i = 0; i < dayOfWeek; i++) {
                element.append(document.createElement("div"));
                element.lastChild.textContent = "-";
                element.lastChild.classList.add("empty_cels");
                divCounter++;
            }

            for (let i = 1; i <= days; i++) {
                element.append(document.createElement("div"));
                element.lastChild.textContent = i;
                divCounter++;

                if (new Date(this.year, index, i).getDay() == 6 || new Date(this.year, index, i).getDay() == 0) {
                    element.lastChild.classList.add("weekends");
                }
            }

            for (let i = 0; i < 50 - divCounter; i++) {
                element.append(document.createElement("div"));
                element.lastChild.textContent = "-";
                element.lastChild.classList.add("empty_cels");
            }

        });
    }

    deleteDays() {
        this.monthes.forEach((element) => {
            element.innerHTML = '';
        });
    }
}

class FormCalendar {
    constructor() {
        this.name = document.getElementById("name").value;
        this.date = document.getElementById("date").value;
        this.length = document.getElementById("length").value;
    }

    addInfo(element) {
        if(this.name == "" || this.date == "" || this.length == "") {
            alert("Заполните все поля")
        } else {
            element.append(document.createElement("div"));
            element.lastChild.textContent = this.name + " " + this.date + " - " + this.length;
        }  
    }

    refreshCells() {
        
    }

}

const month = new Month(arrOfMonthes)
month.fillDays();


inputYear.addEventListener('change', () => {
    month.year = inputYear.value;
    month.deleteDays();
    month.fillDays();
})

buttonForm.addEventListener("click", () => {
    new FormCalendar().addInfo(document.getElementById("info"))
})