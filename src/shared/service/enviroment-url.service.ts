import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Owner } from 'src/app/_Interfaces/owner.model';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentUrlService {
  urlAddress: string = environment.urlAddress;
owners: Owner
  constructor() { }
}