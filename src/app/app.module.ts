import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

//had to rename and relocate many if not all of these files to match best practives (such as including component in the file name and grouping files by feature)
import { appRoutes } from './routes'
import { AppComponent }  from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CatalogModule } from './catalog/catalog.module';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    CatalogModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
