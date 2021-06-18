import React, { Component } from 'react';
import axios from 'axios';

class Reviews extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            reviews: [],
        }
     }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    
    async PostReviewData() {
        const currentReview = {reviews: this.state.reviews};
        await axios.post(`https://localhost:44394/api/review`, { currentReview })
        .then(response => this.setState({
            reviews: [...this.state.reviews, response.data]
        })
        .catch((error) => {
            console.log(error);
        }))
        
    }

    renderGetData = async() => {
        try {
            let response = await axios.get(`https://localhost:44394/api/review/${this.props.productId}`)
            this.setState({reviews: response.data});
        } catch (err) {
            console.log(err);
        } 
    }

    handleSubmit(event) {
        event.preventDefault()
        this.PostReviewData.bind(this)
    }

    componentDidMount(){
        this.renderGetData()
    }

    render() { 
        const reviewData = this.state.reviews
        const mapData = reviewData.map((review, i) => (<td key={i}>{review.Comment}</td>));
        return ( 
            <div>
                <h1>Reviews</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type='text' name='reviews' onChange={this.handleChange.bind(this)} placeholder='Enter Review' />
                    <input type='submit' value='Submit reviews' />
                </form>
                <table>
                    <tbody>
                <tr>
                    {mapData}
                </tr>
                </tbody>
                </table>
            </div>
         );
    }
}
 
export default Reviews;