import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from "react-router";
import fetchSongsQuery from '../queries/fetchSongs';

class SongCreate extends Component {
    constructor(props) {
        super(props);

        this.state = { title:'' };
    }
    onSubmit(event){
        console.log('Hello from onSubmit() from SongCreate');
        console.log(fetchSongsQuery);
        event.preventDefault();
        this.props.mutate({
            variables: { title: this.state.title },
            refetchQueries: [{ query : fetchSongsQuery }]
        }).then(() => {
            hashHistory.push("/");
        }).catch((error) => {
            console.log(error);
        });
        console.log(this.props);

    }
    render() {
        return(
            <div >
                <Link to="/">Back</Link>
                <h3>Create a new song:</h3>
                <form onSubmit={this.onSubmit.bind(this)} >
                    <label>Song Title:</label>
                    <input
                        onChange={event => this.setState({ title: event.target.value })}
                        value={this.state.title}
                    />
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation AddSong($title: String) {
        addSong(title: $title) {
            id
        }
    }
`;

export default graphql(mutation)(SongCreate);