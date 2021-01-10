import { Controller, Get } from '@nestjs/common';


@Controller('courses')
export class CoursesController {
    @Get()
    findAll(): any {
        return [{
            id: '100',
            number: '012012',
            title: 'Computer and Programming'
        },
        {
            id: '101',
            number: '012013',
            title: 'Discrete and Programming'
        },
        {
            id: '102',
            number: '012014',
            title: 'xxxx and Programming'
        },]
    }
}
