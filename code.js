const arrOfMonthes = Array.from(document.getElementsByClassName("month"));
const inputYear = document.getElementById("year_choose");
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

class Month {
    constructor(monthes) {
        this.monthes = monthes;
        this.year = 2024;
    }

    fillDays() {
        this.monthes.forEach((element, index) => {
            let days = new Date(this.year, index + 1, 0).getDate();

            element.append(document.createElement("div"));
            element.lastChild.textContent = monthList[index];
            
            for (let i = 1; i <= days; i++) {
                element.append(document.createElement("div"));
                element.lastChild.textContent = i;
            }

        });
    }

    deleteDays() {
        this.monthes.forEach((element) => {
            element.innerHTML = '';
        });
    }
}

const month = new Month(arrOfMonthes)
month.fillDays();


inputYear.addEventListener('change', () => {
    month.year = inputYear.value;
    month.deleteDays();
    month.fillDays();
})
