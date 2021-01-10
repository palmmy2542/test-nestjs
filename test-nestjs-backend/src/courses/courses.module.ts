import { Module } from '@nestjs/common'
import { CoursesService } from './courses.service'
import { CoursesController } from './courses.controller'
import { TypeOrmModule } from '@nestjs/typeorm';

import Course from './courses.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Course])],
    controllers: [CoursesController],
    providers: [CoursesService]
})

export class CoursesModule {}   