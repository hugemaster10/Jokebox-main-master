Template.rating.helpers({
    ratings() {
        console.info(this.ratings, Number(this.ratings))
        if (Number(this.ratings) != NaN)
            return this.ratings
        return null
    }
})

Template.rating.events({
    'click .js-rate'(event) {
        // console.warn(this._id, event.currentTarget.id)
        jokeboxdb.update({ _id: this._id },
            {
                $set: {
                    ratings: parseInt(event.currentTarget.id)
                }
            })
    },
    'mouseover .js-rate'() {
        console.warn("leave me alone")
    }
})