//new module created to follow best practices concerning module structure
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CatalogComponent } from "./catalog.component";
import { CatalogRepositoryService } from "./catalog-repository.service";
import { SharedModule } from '../shared/shared.module';
import { FilterClassesService } from './filter-classes.service';
import { OrderByPipe } from "./order-by.pipe";

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    CatalogComponent,
    OrderByPipe
  ],
  exports: [],
  providers: [
    CatalogRepositoryService,
    FilterClassesService
  ]
})
export class CatalogModule{};
