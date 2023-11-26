import React, { useEffect } from "react";

import "./StoryIntro.scss";
import { parseWysiwyg } from "../../../utils/helperFunctions";

const StoryIntro = ({ acf }) => {
  console.log(acf);

  useEffect(() => {
    if (acf) {
      console.log(acf.story_intro_text);
    }
  }, [acf]);

  return (
    <section className="story-intro">
      <div className="story-intro__container container">
        {acf && (
          <div class="story-intro__title">
            <span class="story-intro__title-1">
              {acf.story_intro_title.one}
            </span>
            <span class="story-intro__title-2">
              {parseWysiwyg(acf.story_intro_title.two)}
            </span>
            <span class="story-intro__title-3">
              {acf.story_intro_title.three}
            </span>
          </div>
        )}
        {acf && (
          <div class="story-intro__text">
            {parseWysiwyg(acf.story_intro_text)}
          </div>
        )}
      </div>
    </section>
  );
};

export default StoryIntro;
