import { Controller, Get } from '@nestjs/common';
import {Course} from './courses.entity';
import {CoursesService} from './courses.service'

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService){}
    @Get()
    async findAll(): Promise<Course[]> {
        return this.coursesService.findAll();
    }
}
