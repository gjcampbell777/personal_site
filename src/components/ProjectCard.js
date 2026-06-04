import React from 'react';

export const ProjectCard = ({ title, description, imgSrc, imgName, imgAlt, link, children }) => {
  const publicUrl = process.env.PUBLIC_URL || '.';
  const webpSources = imgName
    ? `${publicUrl}/images/${imgName}-320.webp 320w, ${publicUrl}/images/${imgName}-640.webp 640w, ${publicUrl}/images/${imgName}-1024.webp 1024w`
    : null;

  const srcFallback = imgName ? `${publicUrl}/images/${imgName}-640.webp` : imgSrc;

  return (
    <article className="project-card">
      <h3>{link ? <a href={link} target="_blank" rel="noreferrer noopener">{title}</a> : title}</h3>
      <p>{description}</p>
      {srcFallback && (
        <img
          src={srcFallback}
          srcSet={webpSources || undefined}
          sizes="(max-width: 600px) 100vw, 640px"
          alt={imgAlt || title}
          loading="lazy"
          decoding="async"
        />
      )}
      {children}
    </article>
  );
};

export default ProjectCard;
