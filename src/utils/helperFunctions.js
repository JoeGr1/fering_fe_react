import parse from "html-react-parser";

export const parseWysiwyg = (htmlContent) => {
  return parse(htmlContent);
};
