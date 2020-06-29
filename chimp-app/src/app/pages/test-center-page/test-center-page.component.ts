import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalService } from "../../services/index";
import { TestLocation, Address } from "../../models/index";

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
    try{
    	this.testLocations = await this.processLocationResponse(value.state, value.zipcode);
    }catch(err){
    	this.testLocations = [];
    }
  }

  /**
   * Handles the response for find a location.
   * @param  {string}     state       
   * @param  {number}     zipcode   
   * @return {Promise <TestLocation[]>} 
   */
  processLocationResponse(state: string, zipcode:number): Promise <TestLocation[]> {
    return new Promise <TestLocation[]> ((resolve, reject) => {
      this.localService
        .getLocationsFromState(state)
        .subscribe((testLocations) => {
          if (testLocations && testLocations.length > 0) {
          	const fLocations = testLocations.filter(location => {
          		let add = false;
          		if('physical_address' in location){
          			location.physical_address.forEach(address => {
          				if('postal_code' in address 
          					&& address.postal_code.slice(0, 3) === zipcode.toString().slice(0, 3)){
          					add = true;
          				}
          			});
          		}
          		return add;
          	});
          	if(fLocations.length > 0){
          		resolve(fLocations);
          	}else{
          		reject("no locations found");
          	}
          } else {
            reject("no locations found");
          }
        });
    });
  }
}
