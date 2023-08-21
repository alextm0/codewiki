import { MathJax, MathJaxContext } from "better-react-mathjax";
import React from 'react';

import ResourcesTable from '../../components/ResourcesTable'
import ProblemSetTable from '../../components/ProblemSetTable'

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  }
};

const processLineBreaks = (text) => {
  const lines = text.split('\\n');
  return lines.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < lines.length - 1 && <br />}
    </React.Fragment>
  ));
};
function Subtitle({ text }) {
  return (
    <div className='text-orange-500 mb-3 pt-[16px] mt-10 text-3xl font-poppins font-medium' id="prerequisites-header">
      {processLineBreaks(text)}
    </div>
  );
}

const Paragraph = ({ text }) => (
  <p>
    {text.split('[InlineLink]').map((segment, index) => {
      if (index === 0) {
        return (
          <React.Fragment key={index}>
            {segment}
          </React.Fragment>
        );
      } else {
        const [linkSegment, restSegment] = segment.split('[/InlineLink]');
        const [linkText, linkUrl] = linkSegment.split('|').map(item => item.trim());
        return (
          <React.Fragment key={index}>
            {' '}
            <a href={linkUrl} className="text-blue-500 hover:underline">
              {linkText}
            </a>
            {restSegment}
          </React.Fragment>
        );
      }
    })}
    <br />
    <br />
  </p>
);

const IndexedMathBlock = ({ text }) => (
  <MathJaxContext version={3} config={config}>
    <div className='pl-10 pt-2'>
      <MathJax>
        <div className="math">
          {text.split('[InlineLink]').map((segment, index) => {
            if (index % 2 === 0) {
              return (
                <React.Fragment key={index}>
                  {processLineBreaks(segment)}
                </React.Fragment>
              );
            } else {
              const [linkSegment, ...restSegments] = segment.split('[/InlineLink]');
              const [linkText, linkUrl] = linkSegment.split('|').map(item => item.trim());
              const restContent = restSegments.join('[/InlineLink]');
              return (
                <React.Fragment key={index}>
                  {' '}
                  <a href={linkUrl} className="text-blue-500 hover:underline">
                    {linkText}
                  </a>
                  {processLineBreaks(restContent)}
                </React.Fragment>
              );
            }
          })}
        </div>
      </MathJax>
    </div>
  </MathJaxContext>
);

const LinkSection = ({ text }) => (
  <div className="flex items-center">
    {processLineBreaks(text).map((linkSection, i) => {
      const parts = linkSection.split('::');
      if (parts.length === 2) {
        const title = parts[0].trim();
        const link = parts[1].trim();
        return (
          <React.Fragment key={i}>
            {i > 0 && <span className="mr-2">|</span>}
            <a href={link} className="text-blue-500 hover:underline">
              {title}
            </a>
          </React.Fragment>
        );
      }
      return null;
    })}
  </div>
);

const MathBlock = ({ text }) => (
  <MathJaxContext version={3} config={config}>
    <MathJax>
      <div className="math">
        {text.split('[InlineLink]').map((segment, index) => {
          if (index % 2 === 0) {
            return (
              <React.Fragment key={index}>
                {processLineBreaks(segment)}
              </React.Fragment>
            );
          } else {
            const [linkSegment, ...restSegments] = segment.split('[/InlineLink]');
            const [linkText, linkUrl] = linkSegment.split('|').map(item => item.trim());
            const restContent = restSegments.join('[/InlineLink]');
            return (
              <React.Fragment key={index}>
                {' '}
                <a href={linkUrl} className="text-blue-500 hover:underline">
                  {linkText}
                </a>
                {processLineBreaks(restContent)}
              </React.Fragment>
            );
          }
        })}
      </div>
    </MathJax>
  </MathJaxContext>
);

const parseResourceData = (data) => {
  try {
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    console.error('Error parsing resource data:', error);
    return null;
  }
};

const MarkdownRenderer = ({ content }) => {
  const sections = content.split(/\[(.*?)\]([\s\S]*?)\[\/\1\]/);

  return (
    <MathJaxContext version={3} config={config}>
      <div>
        {sections.map((section, index) => {
          const tagIndex = index * 3 + 1;
          const textIndex = index * 3 + 2;
          if (sections[tagIndex] && sections[textIndex]) {
            const tag = sections[tagIndex];
            const text = sections[textIndex];
            switch (tag) {
              case 'Subtitle':
                return <Subtitle key={index} text={text} />;
              case 'Paragraph':
                return <Paragraph key={index} text={text} />;
              case 'LinkSection':
                return <LinkSection key={index} text={text} />;
              case 'Math':
                return <MathBlock key={index} text={text} />;
              case 'IndexedMath':
                return <IndexedMathBlock key={index} text={text} />;
              default:
                return null;
            }
          }
          return null;
        })}
      </div>
    </MathJaxContext>
  );
};

export default MarkdownRenderer;