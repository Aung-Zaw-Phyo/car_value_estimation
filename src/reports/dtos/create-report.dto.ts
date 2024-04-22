import { IsLatitude, IsLongitude, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateReportDto {
    @IsString()
    make: string;

    @IsString()
    model: string;

    @IsNumber()
    @Min(1930)
    @Max(2025)
    year: number;

    @IsNumber()
    @Min(0)
    @IsLongitude()
    lat: number;

    @IsNumber()
    @Min(0)
    @IsLatitude()
    lng: number;

    @IsNumber()
    @Min(0)
    @Max(1000000)
    mileage: number;

    @IsNumber()
    @Min(0)
    @Max(1000000)
    price: number;
}