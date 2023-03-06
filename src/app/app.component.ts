import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth/';

interface Category {
  id?: string;
  category: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userEmail!: string;
  userVerified = false;


  isLoggedIn$!: Observable<boolean>;

  categoryArray: Category[] = [];
  title = 'e-commerceapp';
  opened = false;

  constructor(
    private categoryService: CategoriesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Initialize category array
    this.categoryService.loadData().subscribe((val: any[]) => {
      this.categoryArray = val.map(c => ({ id: c.id, category: c.data.category }));
    });

    // Set initial values for user email and login state
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;
    this.userEmail = user ? user.email : null;
    this.isLoggedIn$ = this.authService.isLoggedIn();

    // Subscribe to changes in authentication state
    this.authService.fireauth.authState.subscribe(user => {
      if (user) {
        this.userEmail = user.email;
        this.isLoggedIn$ = this.authService.isLoggedIn();
        this.userVerified = user.emailVerified;
      } else {
        this.userEmail = null;
        this.isLoggedIn$ = this.authService.isLoggedIn();
        this.userVerified = false;
      }
    });
  }





  onLogout(): void {
    this.authService.logOut();
  }
}

