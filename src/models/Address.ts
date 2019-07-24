import { AllowNull, Column, DataType, Length, Model, Table } from 'sequelize-typescript';

@Table({tableName: 'addresses'})
export class Address extends Model<File>{

  @AllowNull(true)
  @Length({ min: 0, max: 150 })
  @Column({type: DataType.STRING })
  private _addressLine!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 50 })
  @Column({field:'country_name',type: DataType.STRING })
  private _country!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 50 })
  @Column({field:'state_name',type: DataType.STRING })
  private _state!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 50 })
  @Column({field:'city_name',type: DataType.STRING })
  private _city!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 50 })
  @Column({field:'_locality',type: DataType.STRING })
  private _locality!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 50 })
  @Column({field:'zipcode',type: DataType.STRING })
  private _zipCode!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 50 })
  @Column({field:'countrycode',type: DataType.STRING })
  private _countryCode!: string;

  get addressLine(): string {
    return this._addressLine;
  }

  set addressLine(value: string) {
    this._addressLine = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get locality(): string {
    return this._locality;
  }

  set locality(value: string) {
    this._locality = value;
  }

  get zipCode(): string {
    return this._zipCode;
  }

  set zipCode(value: string) {
    this._zipCode = value;
  }

  get countryCode(): string {
    return this._countryCode;
  }

  set countryCode(value: string) {
    this._countryCode = value;
  }
}
