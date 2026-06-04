import React from 'react';

export const ProjectCard = ({ title, description, imgSrc, imgAlt, link, children }) => {
  return (
    <article className="project-card">
      <h3>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer noopener">{title}</a>
        ) : (
          title
        )}
      </h3>
      <p>{description}</p>
      {imgSrc && (
        <img src={imgSrc} alt={imgAlt || title} loading="lazy" decoding="async" />
      )}
      {children}
    </article>
  );
};

export default ProjectCard;
