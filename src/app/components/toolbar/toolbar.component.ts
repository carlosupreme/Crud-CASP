import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from 'src/app/auth.service';
import { CommonModule } from "@angular/common"

const MATERIAL_MODULES = [MatToolbarModule, MatIconModule, MatButtonModule, CommonModule];

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MATERIAL_MODULES],
  template: `
    <mat-toolbar color="primary" *ngIf="isLoggedIn()" >
      <a mat-button routerLink="/" >
        <mat-icon>home</mat-icon>
        <span>Home</span>
      </a>

      <a mat-button routerLink="/contacts" >
        <mat-icon>list_alt</mat-icon>
        <span>Contacts</span>
      </a>

      <a mat-button (click)="emitClick()" >
        <mat-icon>add_box</mat-icon>
        <span>New</span>
      </a>

      <span class="spacer"></span>

      <a mat-button (click)="logout()">
      <div style="display: flex; align-items:center;gap:.5rem">
        <img [src]="getProfilePhoto()" alt="" width="32px" height="32px" style="border-radius: 50%;">   
        
        <span>Cerrar sesion</span>
      </div>
      </a>

    </mat-toolbar>
  `,
})
export class ToolbarComponent {

  constructor(private readonly authService: AuthService) { }

  onNewContactEvent = output<void>();

  emitClick(): void {
    this.onNewContactEvent.emit();
  }

  logout(): void {
    this.authService.logout();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  getProfilePhoto() {
    return this.authService.getUser().avatar || "https://i.pravatar.cc/300";
  }

}
