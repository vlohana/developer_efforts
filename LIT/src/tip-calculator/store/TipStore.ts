import { action, computed, makeObservable, observable, reaction } from "mobx"


class TipStore {

    @observable
    private _billAmount: number = 0;

    @observable
    private _rating: number = 0;

    @observable
    private _ratingByFirstPerson: number = 0;

    @observable
    private _ratingBySecondPerson: number = 0;

    @action
    setBillAmount(billAmount: number) {
        this._billAmount = billAmount;
    }

    @action
    updateRatingForService(choice: number) {
        this._rating = choice;
    }

    @action
    updateRatingByFirstPerson(choice: number) {
        this._ratingByFirstPerson = choice;
    }

    @action
    updateRatingBySecondPerson(choice: number) {
        this._ratingBySecondPerson = choice;
    }

    @computed
    get actualBillAmount() {
        return this._billAmount;
    }

    @computed
    get currentRating() {
        console.log(`changed rating: ${this._rating}`)
        return this._rating;
    }

    @computed
    get currentFirstRating() {
        console.log(`changed rating: ${this._ratingByFirstPerson}`)
        return this._ratingByFirstPerson;
    }

    @computed
    get currentSecondRating() {
        console.log(`changed rating: ${this._ratingBySecondPerson}`)
        return this._ratingBySecondPerson;
    }


    @computed
    get finalBillAmount(){
       return  this.actualBillAmount + (this.actualBillAmount) * ((this.currentFirstRating + this.currentSecondRating) / 2) / 100
    }

    // disposerRating1 = reaction(() => this._rating, () => {
    //     console.log(`rating changed: ${this._rating}`)
    // })

    constructor() {
        makeObservable(this);
    }


}
export const tipStore = new TipStore();
