import { Component, OnInit } from "@angular/core";
import { Course } from "./Course";

@Component({
    selector: 'app-course-list',
    templateUrl: 'course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'ANGULAR COURSE',
                imageUrl: '/assets/images/forms.png',
                price: 1000,
                code: 1,
                duration: 100,
                rating: 1.5,
                releaseData: 'Dec 25 at 2022'
            },
            {
                id: 2,
                name: 'JS COURSE',
                imageUrl: '/assets/images/http.png',
                price: 1500,
                code: 3,
                duration: 180,
                rating: 4.5,
                releaseData: 'Nov 28 at 2022'
            },
            {
                id: 3,
                name: 'GAME COURSE',
                imageUrl: '/assets/images/animations.png',
                price: 2800,
                code: 3,
                duration: 380,
                rating: 4.5,
                releaseData: 'Jan 28 at 2023'
            },
            {
                id: 4,
                name: 'COURSE DESIGN',
                imageUrl: '/assets/images/cli.png',
                price: 3200,
                code: 4,
                duration: 480,
                rating: 3.5,
                releaseData: 'Jul 28 at 2022'
            },
            {
                id: 5,
                name: 'ROUTER COURSE',
                imageUrl: '/assets/images/router.png',
                price: 1800,
                code: 5,
                duration: 480,
                rating: 4.5,
                releaseData: 'Jun 28 at 2022'
            }
        ]
    }
}

