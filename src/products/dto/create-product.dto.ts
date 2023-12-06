import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsString, IsUUID, Length, MaxLength, Min } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'This field represents product uuid',
    minLength: 36,
    maxLength: 36,
  })
  @IsUUID()
  @Length(36)
  public uuid: string;

  @ApiProperty({
    description: 'This field represents product name',
    maxLength: 20,
  })
  @IsString()
  @MaxLength(20)
  public name: string;

  @ApiProperty({
    description: 'This field represents product description',
    maxLength: 500,
  })
  @IsString()
  @MaxLength(500)
  public description: string;

  @ApiProperty({
    description: 'This field represents product price',
  })
  @IsInt()
  public price: number;
  
  @ApiProperty({
    description: 'This field represents product quantity',
    minimum: 1,
  })
  @Min(1)
  @IsInt()
  public quantity: number;

  @IsDate()
  public created_at: Date;
  
  @IsDate()
  public updated_at: Date;
}
