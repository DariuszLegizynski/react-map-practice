import React from "react";

function Entry(props){
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

export default Entry;