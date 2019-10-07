# DataviZ
This project was created for training at google's projects : Angular 5 and Angular Material.

Data are provided by open data lille (https://opendata.lillemetropole.fr/page/home/)


It  was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2.

## IMPORTANT 
You need a google map apikey to compile successfully 

https://developers.google.com/maps/documentation/javascript/get-api-key?hl=Fr

Juste create a constants.ts file at the roots of the project and replace "your_key" by the right value: 
```Java
export class Constants {
  public static get API_KEY(): string { return "your_key" }
}
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


