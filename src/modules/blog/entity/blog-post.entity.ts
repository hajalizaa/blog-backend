import { User } from '@app/modules/users';
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class BlogPost extends Model<BlogPost> {
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  article: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
  tags: string[];

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  viewCount: number;

  @Column({
    type: DataType.DATE(),
    allowNull: false,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE(),
    allowNull: true,
  })
  updatedAt: Date;

  @ForeignKey(() => User)
  @Column({
    allowNull: false,
  })
  authorId: number;

  @BelongsTo(() => User)
  author: User;
}
