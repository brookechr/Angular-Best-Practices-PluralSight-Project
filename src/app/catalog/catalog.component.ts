import { Component, OnInit } from '@angular/core';

import { UserRepositoryService } from "../core/user-repository.service";
import { CatalogRepositoryService } from "../catalog/catalog-repository.service";
import { FilterClassesService } from './filter-classes.service';

@Component({
  styleUrls: ['./catalog.component.css'],
  templateUrl: './catalog.component.html'
  //on push change detection makes it so that you don't have to check every single binding when an event (such a click or hover) occurs; on push change detection should be used carefully
})
export class CatalogComponent implements OnInit { //renamed from Courses for more specificity
  classes:any[];
  visibleClasses:any[];
  orderByString: string;

  //updated which services are used
  constructor(
    private userRepository: UserRepositoryService,
    private catalogRepository: CatalogRepositoryService,
    private filterClassesService: FilterClassesService
  ) {}

  //added implementation of OnInit to class header. This ensures that the correct methods specified in the interface have been implemented with the correct parameters and return type
  ngOnInit() {
    this.catalogRepository.getCatalog()
      .subscribe(classes => { this.classes = classes; this.applyFilter('')});
  }

  mutateFirstProfessor() {
    this.visibleClasses[0].professor = "Brooke";
  }

  updateFirstProfessor() {
    this.visibleClasses = [
      Object.assign(this.visibleClasses[0],
      { professor: "Brooke", ...this.visibleClasses.slice(1) })
    ];
  }

  //I added this method to fix an error that was included in the PluralSight files
  orderByStringFinder(input: string) {
    this.orderByString = input;
  }


  getUserRepository() {
    return this.userRepository;
  }


  enroll(classToEnroll) {
    classToEnroll.processing = true;
    this.userRepository.enroll(classToEnroll.classId)
      .subscribe(
        null,
        (err) => {console.error(err); classToEnroll.processing = false}, //add a toast message or something
        () => {classToEnroll.processing = false; classToEnroll.enrolled=true;},
      );
  }

  drop(classToDrop) {
    classToDrop.processing = true;
    this.userRepository.drop(classToDrop.classId)
      .subscribe(
        null,
        (err) => { console.error(err); classToDrop.processing = false}, //add a toast message or something
        () => {classToDrop.processing = false; classToDrop.enrolled=false;}
      );
  }

  applyFilter(filter) {
    this.visibleClasses = this.filterClassesService.filterClasses(filter, this.classes);
  }
}
