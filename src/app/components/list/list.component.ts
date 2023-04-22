import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  tasks = [
    {
      name: "Zrób zakupy",
      image: "https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?w=2000",
      description: "Lodówka zaczyna świecić pustkami... idź na zakupy!",
      details: {
        dueDate: "Jutro",
        difficulty: "Niska"
      }
    },
    {
      name: "Posprzątaj mieszkanie",
      image: "https://img.freepik.com/free-vector/pack-surface-cleaning-products_23-2148534089.jpg?w=360",
      description: "Musisz posprzątać mieszkanie, bo jest straszny bałagan!",
      details: {
        dueDate: "Poniedziałek",
        difficulty: "Średnia"
      }
    },
    {
      name: "Zrób projekt",
      image: "https://cdn.galleries.smcloud.net/t/galleries/gf-4tPK-iBho-qR5V_projekt-budowlany-664x442-nocrop.png",
      description: "Skończ robić projekt zamówiony przez klienta!",
      details: {
        dueDate: "Wtorek",
        difficulty: "Wysoka"
      }
    },
    {
      name: "Umyj samochód",
      image: "data:image/jpeg;base64,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",
      description: "Dawno nie myłeś samochodu, trzeba to zrobić przed wycieczką.",
      details: {
        dueDate: "Środa",
        difficulty: "Niska"
      }
    },
    {
      name: "Odbierz pocztę",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiuRRw3XgFoF50LCbbomJI1V0_gv729Eiz-Q&usqp=CAU",
      description: "Listonosz nie zastał Cię w domu, idź na pocztę!",
      details: {
        dueDate: "Poniedziałek",
        difficulty: "Niska"
      }
    },
    {
      name: "Napraw rower",
      image: "https://images.sftcdn.net/images/t_app-icon-m/p/c155a51c-96d0-11e6-b343-00163ec9f5fa/1190733773/fix-it-center-icon.jpeg",
      description: "Na ostatniej przejażdzce popsułeś rower. Napraw go!",
      details: {
        dueDate: "Jutro",
        difficulty: "Wysoka"
      }
    }
  ];

  @Output() selectedTask = new EventEmitter<object>();

  selectTask = (task: object) => {
    console.log("task selected")
    this.selectedTask.emit(task);
  }
}
