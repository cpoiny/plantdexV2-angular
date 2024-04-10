import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  constructor(private http: HttpClient) {}

  private baseUrlApi : string = 'http://localhost:8084/plants';

  /**
   * La méthode getPlants retourne
   * une requête http de type GET (on veut récupérer de données)
   * dont les données seront de type Plant[] (tableau d'objets de type Plant)
   * à partir de l'URL "http://localhost:3000/plants"
   *
   */
  // getPlants(): Observable<Plant[]> {
  //   return this.http.get<Plant[]>('http://localhost:3000/plants');
  // }

  getPlants(): Observable<Plant[]> {
    return this.http.get<{data: Plant[]}>(this.baseUrlApi)
    .pipe(
      map(response => response.data)
    );
  }

// 
  getPlantById(id: number): Observable<Plant> {
    return this.http.get<{data: Plant}>(this.baseUrlApi + "/" + id)
    .pipe(
      map(response => response.data)
    );
  }


  delete(id: number): Observable<Plant> {
    return this.http.delete<{data: Plant}>(this.baseUrlApi + "/" + id)
    .pipe(
      map(response => response.data)
    );
  }
};

