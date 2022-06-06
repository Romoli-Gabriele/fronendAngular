import { Component, OnInit } from '@angular/core';
import { Employee } from '../types/Employee';
import { ButtonConfirmComponent } from '../button-confirm/button-confirm.component';


@Component({
  selector: 'app-learn-table',
  templateUrl: './learn-table.component.html',
  styleUrls: ['./learn-table.component.css']
})
export class LearnTableComponent implements OnInit {

  dati: Employee[] = [
    {
      "id": 10001,
      "birthDate": "1953-09-01",
      "firstName": "Georgi",
      "lastName": "Facello",
      "gender": "M",
      "hireDate": "1986-06-25",
    },
    {
      "id": 10002,
      "birthDate": "1964-06-01",
      "firstName": "Bezalel",
      "lastName": "Simmel",
      "gender": "F",
      "hireDate": "1985-11-20",
    },
    {
      "id": 10003,
      "birthDate": "1959-12-02",
      "firstName": "Parto",
      "lastName": "Bamford",
      "gender": "M",
      "hireDate": "1986-08-27T22:00:00.000+0000",
    },
    {
      "id": 10004,
      "birthDate": "1954-04-30",
      "firstName": "Chirstian",
      "lastName": "Koblick",
      "gender": "M",
      "hireDate": "1986-11-30",
  
    },
    {
      "id": 10005,
      "birthDate": "1955-01-20",
      "firstName": "Kyoichi",
      "lastName": "Maliniak",
      "gender": "M",
      "hireDate": "1989-09-11T22:00:00.000+0000",
  
    }
    
  ];

  elMod: Employee | null = null;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  elimina = (index: number) => {
    this.dati.splice(index, 1);
  } 

  modifica = (el : Employee) => {
    this.elMod = el;
  }


  aggiungi = () => {
    this.elMod = new Employee();
    this.dati.push(this.elMod);
  }

  closeEdit =() => {
    this.elMod = null;
  }

}
