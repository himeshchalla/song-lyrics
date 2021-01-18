import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import likeLyricByIdMutation from '../queries/likeLyricById';

class LyricList extends Component {

    onLike(lyricId, lyricLikes) {
        this.props.mutate({
            variables: { id: lyricId },
            optimisticResponse: {
                __typename: 'Mutation',
                likeLyric: {
                    id: lyricId,
                    __typename: 'LyricType',
                    likes: lyricLikes+1
                }
            }
        }).then((result) => {
            console.log('likeLyricByIdMutation result');
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }

    renderLyrics() {
        return this.props.lyrics.map(({id, content, likes}) => {
            return (
                <li id={id} key={id} className="collection-item" >
                    {content}
                    <div className="vote-box" >
                        <i
                            className="material-icons vote-icon "
                            onClick={() => this.onLike(id, likes)}
                            id={id}
                        >
                            thumb_up
                        </i>
                        <span className="vote-likes" >
                            {likes}
                        </span>
                    </div>
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="collection" id={this.props.lyrics.length} key={this.props.lyrics.length} >
                {this.renderLyrics()}
            </ul>
        );
    }
}

export default graphql(likeLyricByIdMutation)(LyricList);