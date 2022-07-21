import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

export interface User {
  foto: string;
  nome: string;
  sobrenome: string;
  idade: number;
  cidade: string;
  estado: string;
  pais: string;
  email: string;
  telefone: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userData: User[] = [];

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.user.getUser()
      .pipe(
        tap(({ results }: any) => { 
          this.userData = this.parsedData(results);
        })
      ).subscribe()
  }

  parsedData(data: User[]): User[] {
    return data.map(({ name, picture, dob, location, email, nat, phone }: any) => ({
      foto: picture.large,
      nome: name.first,
      sobrenome: name.last,
      idade: dob.age,
      cidade: location.city,
      estado: location.state,
      pais: nat,
      email: email,
      telefone: phone
    }));
  }

  seeMore() {
    this.user.getUser().subscribe(({ results }: any) => {
      this.userData = this.parsedData(results);
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

}
