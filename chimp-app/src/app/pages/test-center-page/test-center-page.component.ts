import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalService } from "../../services/index";
import { TestLocation } from "../../models/index";

@Component({
  selector: 'app-test-center-page',
  templateUrl: './test-center-page.component.html',
  styleUrls: ['./test-center-page.component.scss']
})
export class TestCenterPageComponent implements OnInit {
  public searchTestCenterForm: FormGroup;
  public submitted = false;
  public testLocations: TestLocation[] = [];

  constructor(private formBuilder: FormBuilder, private localService: LocalService) {}

  ngOnInit(): void {
    this.searchTestCenterForm = this.formBuilder.group({
      state: ['', Validators.required],
      zipcode: ['', Validators.required]
    });

  }

  get f() { return this.searchTestCenterForm.controls; }

  async onSearch() {
    if (this.searchTestCenterForm.invalid) {
      return;
    }
    const { value } = this.searchTestCenterForm;
    this.testLocations = [];

  }


  processLocationResponse(state: string, zipcode:number): Promise <TestLocation[]> {
    return new Promise <TestLocation[]> ((resolve, reject) => {
      this.localService
        .getLocationsFromStateAndZip(state, zipcode)
        .subscribe((testLocations) => {
          if (testLocations && testLocations.length > 0) {
          	resolve(testLocations);
          } else {
            reject("no locations found.");
          }
        });
    });
  }
}
