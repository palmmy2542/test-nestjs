import {Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import Course from './courses.entity'



@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course)
        private coursesRepository: Repository<Course>
    ) {}

    async findAll(): Promise<Course[]>{
        return this.coursesRepository.find();
        /*return [{
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
        },]*/
    }
}