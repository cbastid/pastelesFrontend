import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { TaskComponent } from './task/task.component';
// import { AppRoutingModule} from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
