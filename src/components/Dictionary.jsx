import React from "react";
import emojipedia from "../emojipedia";

function createEntry(props){
    return(
        <div className="term">
       <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emojiIcon}
        </span>
        <span>{props.emojiName}</span>
      </dt>
      <dd>
        {props.emojiDescription}
      </dd>
    </div>
    )
}

function Dictionary(){
    return <dl className="dictionary">
        {emojipedia.map(createEntry)}
  </dl>
}

export default Dictionary;