import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalStatusService } from '../../services/global-status.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template',
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css',
})
export class TemplateComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private globalStatusService: GlobalStatusService) {}

  ngOnInit(): void {
    this.checkLogin();
    window.addEventListener('storage', () => this.checkLogin());
  }

  checkLogin() {
    this.isLoggedIn = localStorage.getItem('esCliente') === 'true';
  }

  logout() {
    localStorage.removeItem('esCliente');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.checkLogin();
    window.location.href = '/home';
  }

  isLoading(): boolean {
    return this.globalStatusService.isLoading();
  }
}
