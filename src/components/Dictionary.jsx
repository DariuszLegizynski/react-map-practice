import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(emojiStruct){
    return(
    <Entry
        key = {emojiStruct.id}
        emojiIcon = {emojiStruct.icon}
        emojiName = {emojiStruct.name}
        emojiDescription = {emojiStruct.meaning}
     />
    )
}

function Dictionary(){
    return <dl className="dictionary">
        {emojipedia.map(createEntry)}
  </dl>
}

export default Dictionary;