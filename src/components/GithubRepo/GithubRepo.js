import PropTypes from "prop-types";
import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';

import styles from './styles.module.scss';

export default function GithubRepo({
  name,
  url,
  description,
  stargazers_count: stars,
  forks,
  updated_at,
  languages_url,
  html_url
}) {
  const [languages, setLanguages] = useState([])
  const getLanguages = useCallback(async () => {
    const languages = await fetch(languages_url, { cache: "force-cache"}).then(res => res.json());
    const total = Object.values(languages).reduce((a, b) => a + b, 0);
    const langs = Object.keys(languages).sort((a, b) => languages[b] - languages[a]).slice(0, 3).map(name => {
      return {
        name,
        percentage: ((languages[name] / total) * 100).toFixed(1)
      }
    })
    setLanguages(langs);
  },  [languages_url]);
  useEffect(() => {
    getLanguages();
  }, [getLanguages]);
  return (
    <div className="col-12">
      <div className={classNames("card p-3 mb-5", styles.card)}>
        <div className="card-body">
          <h3 className="card-title"><a href={url}>{name} </a></h3>
          <p className="card-text one-line-ellipsis">
            {description}
          </p>
          <a
            href={`${html_url}/archive/master.zip`}
            className={classNames("btn btn-outline-secondary mr-3 clone-btn", styles.btn)}
          >
            <i className="ion-code-download"></i> Clone Project
          </a>
          <a
            href={html_url}
            target=" _blank"
            className={classNames("btn btn-outline-secondary", styles.btn)}
          >
            <i className="ion-social-github"></i> Repo
          </a>
          <hr />
          <div className="pb-3">
            Languages:{' '}
            {languages.map(lang => <p key={lang.name} className={classNames("badge badge-light card-link", styles.badge)}>{lang.name}: {lang.percentage} %</p>)}
          </div>
          <p className="card-text">
            <span className="text-dark card-link mr-4">
              <i className="ion-ios7-star"></i> Stars
              <span className={classNames("badge badge-dark ml-2", styles.badge)}>{stars}</span>
            </span>
            <span className="text-dark card-link mr-4">
              <i className="ion-network"></i> Forks
              <span className={classNames("badge badge-dark ml-2", styles.badge)}>{forks}</span>
            </span>
  <small className="text-muted">Updated on {dayjs(updated_at).format('D MMM YYYY')}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

GithubRepo.propTypes = {
  description: PropTypes.string,
  forks: PropTypes.number,
  languages_url: PropTypes.string,
  name: PropTypes.string.isRequired,
  stargazers_count: PropTypes.number,
  updated_at: PropTypes.string,
  url: PropTypes.string
}
