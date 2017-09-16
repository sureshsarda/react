import React, { Component } from 'react';
import axios from 'axios';

class ImageDescription extends Component {
    render() {
        return (
            <div className="imageDesc">
                {this.props.imageDescription}
            </div>
        )
    }
}

class Image extends Component {

    constructor(props) {
        super(props)
        this.create_image_url = this.create_image_url.bind(this)
    }

    create_image_url(image_url) {
        return "http://www.bing.com/" + this.props.imageUrlBase + "_1920x1080.jpg"

    }

    render() {
        return (
            <div className="image">
                <img className="mainImage" src={this.create_image_url(this.props.imageUrlBase)}></img>
            </div>

        )
    }

}

class ImageNavigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
    }
    next() {
        this.setState({
            counter:  (this.state.counter + 1) % this.props.images.length
        })
    }

    previous() {
        var counter = this.state.counter - 1
        if (counter < 0) {
            counter = this.props.images.length - 1
        }
        this.setState({
            counter:  counter
        })
    }

    render() {

        return (
            <div className="navigationRoot">
                <div className="button">
                    <button onClick={this.next}>></button>
                </div>
                <div className="imageContainer">
                    <Image imageUrlBase={this.props.images[this.state.counter]['urlbase']}></Image>
                    <ImageDescription imageDescription={this.props.images[this.state.counter]['copyright']} />
                </div>
                <div className="button">
                    <button onClick={this.previous}>></button>
                </div>
            </div>

        )
    }
}

class ImageNavigationContainer extends Component {
    constructor(props) {
        super(props)

        self = this
        this.state = {
            images: null
        }

        // this.set_image_data = this.set_image_data.bind(this)

        axios({
            url: 'https://cors.io/?http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=7',
            method: 'get',
            responseType: 'json'
        })
        .then(function (r) {
            self.setState({
                images: r.data.images
            });
        })
        .catch(function (r) {
            console.error('Failed to download image data');
            console.error(r)
        })

    }

    render() {
        if (this.state.images == null) {
            return <p>Loading</p>
        }
        return <ImageNavigation images={this.state.images} />
    }


}


export default ImageNavigationContainer