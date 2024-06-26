import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateBlogPostDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  readonly article: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  readonly tags: string[];
}
