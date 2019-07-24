import { AllowNull, Column, DataType, Length, Model, Table } from 'sequelize-typescript';

@Table({tableName: 'role'})
export class Role extends Model<Role>{

  @AllowNull(true)
  @Length({ min: 0, max: 50 })
  @Column({ field: 'role', type: DataType.STRING })
  private role!: string;
}
