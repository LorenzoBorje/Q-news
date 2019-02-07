import React from 'react';
import './stories.css';


export default class Stories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: props.stories
    }
  }
  
  onClick(link) {
    console.log(link);
    const win = window.open(link, '_blank');
    win.focus();

  }

  render() {
    const stories = this.state.stories.map((story, index) => {
  
      return (  
        <a className="story-link" href={story.link} target="_blank">
          <article href={story.link} className="story-headline">
            {story.title}
            <span className="story-headline-arrow"> ↵ </span>
            <div className="story-summary">
              {story.summary}
              <div className="story-source">
                from {story.source}
              </div>
            </div>
          </article>

        </a>
      )
    });
    
    return (
      <div className="story-container">
        {stories}
      </div>
    );
  }

}