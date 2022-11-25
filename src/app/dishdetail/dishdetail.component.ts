import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Dish} from "../shared/dish";
import {DishService} from "../services/dish.service";
import {Location} from "@angular/common";
import {ActivatedRoute, Params} from "@angular/router";
import {switchMap} from "rxjs";
import {FormBuilder, FormGroup, NgForm, Validators, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";
import {Comment} from "../shared/Comment";

@Component({
    selector: 'app-dishdetail',
    templateUrl: './dishdetail.component.html',
    styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    commentForm!: FormGroup
    comment?: Comment
    @ViewChild('cform') commentFormDirective!: NgForm;
    dish!: Dish;
    dishIds!: string[]
    prev!: string
    next!: string
    errMsg!: string

    formErrors: Record<string, string> = {
        'author': '',
        'rating': '',
        'comment': ''
    }

    validationMessages: Record<string, any> = {
        'author': {
            'required': 'Author is required.',
            'minlength': 'Author must be at least 2 char long.',
            'maxlength': 'Author cannot be more than 25 char long.'
        },
        'rating': {
            'required': 'Rating is required.',
            'pattern': 'Rating must contain only numbers.',
        },
        'comment': {
            'required': 'Comment is required.'
        }
    }

    ngOnInit() {
        this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
        this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
            .subscribe(dish => {
                this.dish = dish;
                this.setPrevNext(dish.id);
            }, error => this.errMsg = error);
    }


    // @ts-ignore
    constructor(private dishService: DishService, private route: ActivatedRoute, private location: Location, private fb: FormBuilder, @Inject('BaseURL') public BaseURL) {
        this.createForm()
    }

    createForm() {
        this.commentForm = this.fb.group({
            author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
            rating: [5, [Validators.required, Validators.pattern]],
            comment: ['', Validators.required],
        });

        this.commentForm.valueChanges.subscribe((data) => this.onValueChanged(data))
        this.onValueChanged() // reset form validation messages
    }

    private onValueChanged(data?: any) {
        if(this.commentForm.valid){
            this.comment = data
        }else{
            this.comment = undefined
        }
        if (!this.commentForm) {
            return
        }
        for (const field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = ''
                const control = this.commentForm.get(field)
                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field]
                    for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key]
                        }
                    }
                }
            }
        }
    }

    onSubmit() {
        this.dish.comments.push({...this.comment!, date: new Date().toISOString()})
        this.comment = undefined
        this.commentFormDirective.resetForm({
            author: '',
            rating: 5,
            comment: ''
        })
    }

    setPrevNext(dishId: string) {
        const index = this.dishIds.indexOf(dishId);
        this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
        this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    }

}
