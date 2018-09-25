/**
 * Created by ekirschning on 28.03.2017.
 */


import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {EntityEnum} from '../enums/app-enum';
import {GeoScopeModel} from '../model/geoscope.model';

import {VesselSystemModel} from '../model/vesselsystem.model';
import {TradeModel} from '../model/trade.model';
import {ContractModel} from '../model/contract.model';
import {CountryModel} from '../model/country.model';

@Injectable()
export class GeoScopeService {
  locations: Array<GeoScopeModel> = [];
  countryCodes: Array<CountryModel> = [];


  readonly serverApi = 'http://localhost:8080/nre';
  private resource = '/';

  constructor(private http: HttpClient) {
  }

  public static getHeader(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json');
  }

  private getUrl(objectType: EntityEnum): string {
    return this.serverApi + this.resource + objectType + this.resource;
  }


  filterVesselSystems(query: string): Observable<VesselSystemModel[]> {
    const search_params = new HttpParams().set('vs_code', query.toUpperCase());
    const URI = this.getUrl(EntityEnum.VESSEL_SYSTEMS) + 'filter/';
    return this.http
      .get<Array<VesselSystemModel>>(URI, {params: search_params}).pipe(
      catchError(this._handleError));
  }


  filterLocations(query: string, geoScopeType: string, countryCode: string): Observable<Array<GeoScopeModel>> {
    const search_params: HttpParams = this.prepareGeoScopeSearchParams(query, geoScopeType, countryCode);
    const URI = this.getUrl(EntityEnum.GEOSCOPE) + 'filter/';
    console.log('uri:' + URI);
    console.log('params:' + search_params);
    return this.http
      .get<Array<GeoScopeModel>>(URI, {params: search_params}).pipe(
        catchError(this._handleError));
  }


  filterPreferredPorts(query: string, geoScopeType: string, countryCode: string): Observable<Array<GeoScopeModel>> {
    const search_params: HttpParams = this.prepareGeoScopeSearchParams(query, geoScopeType, countryCode);
    const URI = this.getUrl(EntityEnum.PREFERRED_PORTS) + 'filter/';
    console.log('uri:' + URI);
    console.log('params:' + search_params);
    return this.http
      .get<Array<GeoScopeModel>>(URI, {params: search_params})
      .pipe(
        catchError(this._handleError));
  }

  filterPorts(query: string): Observable<Array<GeoScopeModel>> {
    const search_params = new HttpParams().set('location_code', query.toUpperCase());
    const URI = this.getUrl(EntityEnum.PORTS) + 'filter/';
    console.log('uri:' + URI);
    console.log('params:' + search_params);
    return this.http
      .get<Array<GeoScopeModel>>(URI, {params: search_params})
      .pipe(
        catchError(this._handleError));
  }

  prepareGeoScopeSearchParams(query: string, geoScopeType: string, countryCode: string) {
    const search_params = new HttpParams()
      .set('location_code', query.toUpperCase())
      .set('geo_scope_type', geoScopeType.toUpperCase())
      .set('country_code', countryCode);
    return search_params;
  }



  filterContracts(query: string): Observable<Array<ContractModel>> {
    const search_params: HttpParams = new HttpParams()
      .set('contract_no', query.toUpperCase());
    const URI = this.getUrl(EntityEnum.CONTRACT) + 'filter/';

    return this.http
      .get<Array<ContractModel>>(URI, {params: search_params})
      .pipe(
        catchError(this._handleError));
  }

  filterContractGroups(query: string): Observable<Array<ContractModel>> {
    const search_params: HttpParams = new HttpParams()
      .set('contract_no', query.toUpperCase());
    const URI = this.getUrl(EntityEnum.CONTRACT_GROUP) + 'filter/';

    return this.http
      .get<Array<ContractModel>>(URI, {params: search_params})
      .pipe(
        catchError(this._handleError));
  }


  filterTrades(query: string): Observable<Array<TradeModel>> {
    const search_params: HttpParams = new HttpParams()
      .set('trade_code', query.toUpperCase());
    const URI = this.getUrl(EntityEnum.TRADE) + 'filter/';

    return this.http
      .get<Array<TradeModel>>(URI, {params: search_params})
      .pipe(
        catchError(this._handleError));
  }

  private _handleError(err: HttpErrorResponse | any) {
    console.log('_handleError:' + err);
    const errorMsg = err.message || 'Error: Unable to complete request.';
    return Observable.throw(errorMsg);
  }

  // dummy methods

  filterPortLocations(query: string, geoScopeType: string, countryCode:string):Observable<Array<GeoScopeModel>> {
    if (this.locations.length === 0) {
      this.locations.push(new GeoScopeModel(1, 'DEHAM', '', ''));
      this.locations.push(new GeoScopeModel(2, 'DEBRV', '', ''));
      this.locations.push(new GeoScopeModel(3, 'ARBUE','', ''));
      this.locations.push(new GeoScopeModel(4, 'BEANR', '', ''));
      this.locations.push(new GeoScopeModel(5, 'BRSSZ','', ''));
    }
    const result: GeoScopeModel[] = this.locations.filter((imLocation) => imLocation.locationCode.toLowerCase().startsWith(query.toLowerCase()));
    return Observable.create(result);
  }

  filterImLocations(code: string, geoScopeType: string, countryCode:string):Observable<Array<GeoScopeModel>>  {
    console.log('service: gst:' + geoScopeType);
    this.locations =[];

      this.locations.push(new GeoScopeModel(1, 'DUSSELDORF', 'T', 'D'));
      this.locations.push(new GeoScopeModel(2, 'DUSHEIM','T', 'D'));
      this.locations.push(new GeoScopeModel(3, 'DUSENHAUSEN','T', 'D'));
      this.locations.push(new GeoScopeModel(4, 'DEDUS', '', ''));
      this.locations.push(new GeoScopeModel(5, 'DEDUI', '', ''));

    const result: GeoScopeModel[] = this.locations.filter((imLocation) => imLocation.locationCode.toLowerCase().startsWith(code.toLowerCase()));
return Observable.create(result);
  }


}
