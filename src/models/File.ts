import { AllowNull, Column, DataType, Length, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'file' })
export class File extends Model<File> {

  @AllowNull(false)
  @Column({ type: DataType.TEXT })
  private path!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 200 })
  @Column({ field: 'fileName', type: DataType.STRING })
  private fileName!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 200 })
  @Column({ field: 'fileType', type: DataType.STRING })
  private fileType!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 200 })
  @Column({ field: 'fileSize', type: DataType.INTEGER })
  private fileSize!: number;
}
