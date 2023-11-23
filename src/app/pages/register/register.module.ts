import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
<<<<<<< Updated upstream
    RegisterRoutingModule,
    FormsModule
=======
    FormsModule,
    RegisterRoutingModule
>>>>>>> Stashed changes
  ]
})
export class RegisterModule { }
