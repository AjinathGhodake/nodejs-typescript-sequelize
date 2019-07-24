import {
  AllowNull, BelongsTo,
  Column,
  CreatedAt,
  DataType,
  HasOne,
  Length,
  Model, Scopes,
  Table,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';
import { File } from './File';
import { Address } from './Address';
import { Role } from './Role';

@Table({ tableName: 'user', timestamps: false })
export class User extends Model<User> {

  @AllowNull(true)
  @Length({ min: 0, max: 32 })
  @Column({ field: 'first_name', type: DataType.STRING })
  private firstName!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 32 })
  @Column({ field: 'last_name', type: DataType.STRING })
  private lastName!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 32 })
  @Unique(true)
  @Column({ field: 'username', type: DataType.STRING })
  private userName!: string;

  @AllowNull(true)
  @Column({ field: 'password', type: DataType.STRING })
  private password!: string;


  @AllowNull(false)
  @Length({ min: 0, max: 255 })
  @Unique(true)
  @Column({ field: 'email', type: DataType.STRING })
  private email!: string;


  @AllowNull(true)
  @Length({ min: 0, max: 255 })
  @Column({ field: 'phone_number', type: DataType.STRING })
  private phoneNumber!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 15 })
  @Column({ field: 'status', type: DataType.STRING })
  private status!: string;


  @AllowNull(true)
  @Length({ min: 0, max: 255 })
  @Unique(true)
  @Column({ field: 'authToken', type: DataType.STRING })
  private authToken!: string;

  @AllowNull(true)
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  private isVerified!: boolean;

  @AllowNull(false)
  @Column({ field: 'is_deleted', type: DataType.BOOLEAN, defaultValue: false })
  private isDeleted!: boolean;

  @AllowNull(true)
  @Column({ field: 'email_verified_on', type: DataType.DATE })
  private emailVerifiedOn!: Date;

  @AllowNull(true)
  @Column({ field: 'avg_rating', type: DataType.DOUBLE })
  private averageRating!: number;

  @AllowNull(false)
  @Column({ field: 'verification_code', type: DataType.STRING })
  private verificationCode!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 50 })
  @Column({ type: DataType.STRING })
  private company!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 50 })
  @Column({ type: DataType.STRING })
  private signInType!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 50 })
  @Column({ type: DataType.STRING })
  private socialId!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 50 })
  @Column({ type: DataType.STRING })
  private website!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 50 })
  @Column({ type: DataType.STRING })
  private paymentMode!: string;

  @AllowNull(true)
  @Length({ min: 0, max: 255 })
  @Column({ type: DataType.DATE, defaultValue: null })
  private lastLogin!: Date;

  private unreadNotificationCount: number; //only for User DTO

  @BelongsTo(() => File, 'profile_pic_file_id')
  private fileProfilePic!: File;

  @BelongsTo(() => Address, 'address_id')
  private address!: Address;

  @BelongsTo(() => Role, 'role_id')
  private role!: Role;

  @BelongsTo(() => File, 'cover_pic_file_id')
  private fileCoverPic!: File;

  @CreatedAt
  @Column private createdOn!: Date;

  @UpdatedAt
  @Column private updatedOn!: Date;

  @Column private createdBy!: string;


}

