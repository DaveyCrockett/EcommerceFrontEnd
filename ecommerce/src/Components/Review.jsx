import React, { Component } from 'react';
import axios from 'axios';


    

class Reviews extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            reviews: [],
            reviewsProduct: [],
        }
     }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    
    async PostReviewData() {
        const currentReview = {reviews: this.state.reviews};
        await axios.post(`https://localhost:44394/api/reviews`, { currentReview })
        .then(response => this.setState({
            reviews: [...this.state.reviews, response.data]
        })
        .catch((error) => {
            console.log(error);
        }))
        
    }

    reviewsGetData = async () => {
        this.state.reviews.map(review => this.renderGetData(review.ProductId))
      }
    
    renderGetData = async(id) => {
        try {
            let response = await axios.get(`https://localhost:44394/api/reviews/${id}`)
            this.setState({reviewsProduct: [response.data]});
            console.log(this.state.reviewsProduct)
        } catch (err) {
            console.log(err);
        } 
    }

    handleSubmit(event) {
        event.preventDefault()
        this.PostReviewData.bind(this)
        this.props.reviews()

    }
        
    render() { 
        return ( 
            <div>
                <h1>Reviews</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type='text' name='reviews' onChange={this.handleChange.bind(this)} placeholder='Enter Review' />
                    <input type='submit' value='Submit reviews' />
                </form>
                <p>{this.state.reviewsId}</p>
            </div>
         );
    }
}
 
export default Reviews;