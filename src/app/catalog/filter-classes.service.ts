import { Injectable } from "@angular/core";

@Injectable()
export class FilterClassesService {
  constructor() {}

  filterClasses(filter, classes) {
    if (!filter)
      return classes;

    //too many lines of code in one method. it would be more legible if we put this filtering in another method
    if (filter === 'GEN') {
      return this.showOnlyGeneralCourses(classes);
    }

    return classes.filter(c => c.course.courseNumber.startsWith(filter));
  }

  //new method created to increase legibility in applyFilter method
  showOnlyGeneralCourses(classes) {
    return classes.filter(c =>
      !c.course.courseNumber.startsWith('CH') &&
      !c.course.courseNumber.startsWith('PO') &&
      !c.course.courseNumber.startsWith('SP'));
  }
}
